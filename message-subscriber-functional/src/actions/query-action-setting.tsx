/** @jsx jsx */
import {
  React,
  jsx,
  ActionSettingProps,
  ImmutableObject,
  IMFieldSchema,
  getAppStore,
  Immutable,
  UseDataSource,
  IMUseDataSource,
  DataSource,
} from 'jimu-core';
import { FieldSelector } from 'jimu-ui/advanced/data-source-selector';
import { SettingSection } from 'jimu-ui/advanced/setting-components';

const { useEffect } = React;

interface Config {
  useDataSource: UseDataSource;
}

export type IMConfig = ImmutableObject<Config>;

function QueryActionSetting(props: ActionSettingProps<IMConfig>) {
  // const defaultProps = {
  //   config: Immutable({
  //     useDataSource: null,
  //   }),
  // };

  //  return initial config
  const getInitConfig = () => {
    // messageWidgetID is the id of the widget emitting the message
    const messageWidgetId = props.messageWidgetId;
    const config = getAppStore().getState().appStateInBuilder.appConfig;
    const messageWidgetJson = config.widgets[messageWidgetId];

    let useDataSource: IMUseDataSource = null;
    if (!props.config.useDataSource) {
      if (
        messageWidgetJson &&
        messageWidgetJson.useDataSources &&
        messageWidgetJson.useDataSources[0] &&
        messageWidgetJson.useDataSources.length === 1
      ) {
        useDataSource = Immutable({
          dataSourceId: messageWidgetJson.useDataSources[0].dataSourceId,
          mainDataSourceId: messageWidgetJson.useDataSources[0].mainDataSourceId,
          dataViewId: messageWidgetJson.useDataSources[0].dataViewId,
          rootDataSourceId: messageWidgetJson.useDataSources[0].rootDataSourceId,
        });
      }
    } else {
      useDataSource = props.config.useDataSource;
    }

    return useDataSource;
  };

  // initialize action config
  useEffect(() => {
    props.onSettingChange({ actionId: props.actionId, config: props.config.set('useDataSource', getInitConfig()) });
  }, []);

  const getDataSourceSelectorSourceData = (widgetId: string) => {
    const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig;
    const widgetJson = appConfig?.widgets?.[widgetId];
    const dsSelectorSource = widgetJson && widgetJson.useDataSources;
    return dsSelectorSource;
  };

  // select the fields to query in subscriber widget.
  const onFieldSelected = (allSelectedFields: IMFieldSchema[], _: DataSource) => {
    const field = allSelectedFields[0];
    if (!field) {
      return;
    }
    if (props.config.useDataSource) {
      // save message action configuration to config
      props.onSettingChange({
        actionId: props.actionId,
        config: props.config.set('fieldName', field['name']).set('useDataSource', {
          dataSourceId: props.config.useDataSource.dataSourceId,
          mainDataSourceId: props.config.useDataSource.mainDataSourceId,
          dataViewId: props.config.useDataSource.dataViewId,
          rootDataSourceId: props.config.useDataSource.rootDataSourceId,
          fields: allSelectedFields.map((field) => field.jimuName),
        }),
      });
    }
  };

  const useDataSources = getDataSourceSelectorSourceData(props.widgetId);

  return (
    <div>
      <SettingSection title="Select field">
        {useDataSources && useDataSources.length > 0 && (
          <div className="mt-2">
            Please choose a field to query from:
            <FieldSelector
              useDataSources={useDataSources}
              onChange={onFieldSelected}
              selectedFields={
                props.config.useDataSource && props.config.useDataSource.fields
                  ? props.config.useDataSource.fields
                  : Immutable([])
              }
            />
          </div>
        )}
      </SettingSection>
    </div>
  );
}

export default QueryActionSetting;
