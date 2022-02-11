          const currentState = rowData[columns.findIndex(objCol => 'state' === objCol.name)];
          const isDeleted = (
            EnumRstatus.RSTATUS_DELETED.stringVal.toLowerCase() === currentState.toLowerCase()
          );

          return (
            <TableActionMenu
              {...(
                !isDeleted && {
                  onDeleteItemWithId: { onDeleteItemWithId },
                }
              )}
              onEditItemWithId={onEditItemWithId}
              strItemId={id}
            >
