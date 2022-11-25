import {
  AbstractMessageAction,
  MessageType,
  Message,
  getAppStore,
  appActions,
  DataRecordsSelectionChangeMessage,
  MessageDescription,
} from 'jimu-core';

export default class QueryAction extends AbstractMessageAction {
  filterMessageDescription(messageDescription: MessageDescription): boolean {
    return [MessageType.DataRecordsSelectionChange].indexOf(messageDescription.messageType) > -1;
  }

  filterMessage(_: Message): boolean {
    return true;
  }

  // set uri of action setting component
  getSettingComponentUri(_: MessageType): string {
    return 'actions/query-action-setting';
  }

  // actionConfig is set in action settings widget
  onExecute(message: Message, actionConfig?: any): Promise<boolean> | boolean {
    let query = '1=1';
    switch (message.type) {
      case MessageType.DataRecordsSelectionChange:
        if ((message as DataRecordsSelectionChangeMessage).records.length > 0) {
          query =
            `${actionConfig.fieldName} = ` +
            `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`;
        }
        break;
    }

    // save queryString to store
    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', query));
    return true;
  }
}
