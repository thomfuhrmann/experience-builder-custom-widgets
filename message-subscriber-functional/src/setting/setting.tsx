import { React, Immutable, IMFieldSchema, UseDataSource, DataSource, DataSourceTypes } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { FieldSelector } from 'jimu-ui/advanced/data-source-selector';
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';

interface Config {}

export default function Setting(props: AllWidgetSettingProps<Config>) {
  const supportedTypes = Immutable([DataSourceTypes.FeatureLayer]);

  const onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    props.onSettingChange({
      id: props.id,
      useDataSourcesEnabled,
    });
  };

  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources,
    });
  };

  const onFieldSelected = (allSelectedFields: IMFieldSchema[], ds: DataSource) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: [{ ...props.useDataSources[0], fields: allSelectedFields.map((field) => field.jimuName) }],
    });
  };

  return (
    <div className="use-feature-layer-setting p-2">
      <DataSourceSelector
        types={supportedTypes}
        useDataSources={props.useDataSources}
        useDataSourcesEnabled={props.useDataSourcesEnabled}
        onToggleUseDataEnabled={onToggleUseDataEnabled}
        onChange={onDataSourceChange}
        widgetId={props.id}
      />
      {props.useDataSources && props.useDataSources.length > 0 && (
        <div className="mt-2">
          Please choose a Field to display:
          <FieldSelector
            useDataSources={props.useDataSources}
            onChange={onFieldSelected}
            selectedFields={props.useDataSources[0].fields || Immutable([])}
          />
        </div>
      )}
    </div>
  );
}
