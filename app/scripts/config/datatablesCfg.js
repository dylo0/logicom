define(['app'], function ( AppManager) {
	var tableHeight = $(window).height() - 330;

	dataTablesCfg = {
		scrollY:        100,
        scrollCollapse: true,
        pageLength: 100,
        lengthChange: false,
		language: {
		    "sProcessing":   "Przetwarzanie...",
		    "sLengthMenu":   "Pokaż _MENU_ pozycji",
		    "sZeroRecords":  "Nie znaleziono pasujących pozycji",
		    "sInfoThousands":  " ",
		    "sInfo":         "Pozycje od _START_ do _END_",
		    // "sInfo":         "Pozycje od _START_ do _END_ z _TOTAL_ łącznie",
		    "sInfoEmpty":    "Pozycji 0 z 0 dostępnych",
		    "sInfoFiltered": "(filtrowanie spośród _MAX_ dostępnych pozycji)",
		    "sInfoPostFix":  "",
		    // "sSearch":       "Szukaj:",
		    "search": 		 "",
		    "searchPlaceholder": " Szukaj",
		    "sUrl":          "",
		    "oPaginate": {
		        "sFirst":    "Pierwsza",
		        "sPrevious": "Poprzednia",
		        "sNext":     "Następna",
		        "sLast":     "Ostatnia"
		    },
		    "sEmptyTable":     "Brak danych",
		    "sLoadingRecords": "Wczytywanie...",
		    "oAria": {
		        "sSortAscending":  ": aktywuj, by posortować kolumnę rosnąco",
		        "sSortDescending": ": aktywuj, by posortować kolumnę malejąco"
		    }
		}
	};

	AppManager.reqres.setHandler("config:dataTables", function(){
	    return dataTablesCfg;
	});

	return;
});
