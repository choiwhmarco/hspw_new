import "./filter.css";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { Link } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { DATA } from "./data_signature";

function App() {
  const [gridApi, setGridApi] = useState();
  const rowData = DATA;


  const columns = [
    {
      headerName: "InterPro_ID",
      field: "InterPro_ID",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      maxWidth:320
    },
    { headerName: "Type", field: "Type",wrapText: true,maxWidth:145 },
    { headerName: "Name", field: "Name",wrapText: true,autoHeight: true,cellStyle:{'word-break': 'break-word'} },
    { headerName: "# of Members", field: "Number_of_Members",wrapText: true,maxWidth:205 },

];

  const defColumnDefs = { flex: 1, filter: true };

  const onGridReady = (params) => {
    setGridApi(params);
    expandFilters(params, "InterPro_ID");
  };

  const expandFilters = (params, ...filters) => {
    const applyFilters = filters?.length > 0 ? filters : null;
    params.api.getToolPanelInstance("filters").expandFilters(applyFilters);
  };

  const applyQuickFilter = (e) => {
    const searchText = e.target.value;
    gridApi.api.setQuickFilter(searchText);
  };
  return (
    <div className="AppBox1">
      <div className="ag-theme-material ag-cell-wrap-text" style={{ height: 600 }}>
        <AgGridReact
          className="ag-cell-wrap-text"
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady}
          pagination= {true}
          paginationPageSize= {50}
          sideBar={{
            position: 'left',
            toolPanels: [
              {
                id: "columns",
                labelDefault: "Columns",
                labelKey: "columns",
                iconKey: "columns",
                toolPanel: "agColumnsToolPanel",
                toolPanelParams: {
                  suppressPivotMode: true,
                  suppressRowGroups: true,
                  suppressValues: true,
                  suppressColumnFilter: false,
                  suppressColumnSelectAll: false,
                },
              },
              {
                id: "filters",
                labelDefault: "Filters",
                labelKey: "filters",
                iconKey: "filter",
                toolPanel: "agFiltersToolPanel",
                toolPanelParams: {
                  suppressFilterSearch: false,
                },
              },
              {
                id: "QuickSearch",
                labelDefault: "Quick Search",
                labelKey: "QuickSearch",
                iconKey: "menu",
                toolPanel: () => (
                  <div>
                    <h4>Global Search</h4>
                    <input
                      placeholder="Search..."
                      type="search"
                      style={{
                        width: 190,
                        height: 35,
                        outline: "none",
                        border: "none",
                        borderBottom: `1px #181616 solid`,
                        padding: `0 5px`,
                      }}
                      onChange={applyQuickFilter}
                    />
                  </div>
                ),
              },
            ],
            defaultToolPanel: 'filters'
            // position: "right",
          }}
        />
      </div>
    </div>
  );
}

export default App;