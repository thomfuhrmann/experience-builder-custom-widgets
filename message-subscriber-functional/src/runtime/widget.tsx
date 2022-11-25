import {
  React,
  utils,
  DataSource,
  DataSourceComponent,
  AllWidgetProps,
  DataSourceStatus,
  IMDataSourceInfo,
} from 'jimu-core';
import Query from 'esri/rest/support/Query';

const { useState, useEffect } = React;

export default function Widget(props: AllWidgetProps<unknown>) {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    setQuery(
      new Query({
        where: props.stateProps ? props.stateProps.queryString : '1=1',
        outFields: ['*'],
      }).toJSON()
    );
  }, [utils.getValue(props, 'stateProps.queryString')]);

  const isDataSourceConfigured = () => {
    if (
      props.useDataSources &&
      props.useDataSources.length === 1 &&
      props.useDataSources[0].fields &&
      props.useDataSources[0].fields.length === 1
    ) {
      return true;
    }
    return false;
  };

  if (!isDataSourceConfigured()) {
    return <h3>Please configure a data source.</h3>;
  }

  return (
    <div className="widget-subscribe" style={{ overflow: 'auto', maxHeight: '700px' }}>
      <DataSourceComponent
        useDataSource={props.useDataSources[0]}
        query={query}
        widgetId={props.id}
        localId="query-result"
      >
        {(dataSource: DataSource, info: IMDataSourceInfo) => {
          const isLoaded = info.status === DataSourceStatus.Loaded;
          const fieldName = (props.useDataSources[0].fields && props.useDataSources[0].fields[0]) || 'objectid';

          const list = isLoaded
            ? dataSource.getRecords().map((record) => {
                return <div key={record.getId()}>{record.getData()[fieldName]}</div>;
              })
            : null;

          return props.stateProps ? (
            <div>
              <div>Query string: {props.stateProps.queryString}</div>
              <div>Status: {info.status}</div>
              <div>Field name: {fieldName}</div>
              <div>Query result:</div>
              {list}
            </div>
          ) : (
            <div>This widget will listen to a FEATURE_SELECTION_CHANGE message and run a query.</div>
          );
        }}
      </DataSourceComponent>
    </div>
  );
}
