import {getXcedeLedgers} from './api/xcedeLedgerApi';

// Populate table of Reckon APS Xcede Ledgers via API call.
getXcedeLedgers().then(result => {
  let ledgersBody = "";

  result.forEach(ledger => {
    ledgersBody+=
      `<tr>
        <td><a href="#" data-id="${ledger.id}"></a></td>
        <td>${ledger.id}</td>
        <td>${ledger.name}</td>
        <td>${ledger.date}</td>
        <td>${ledger.contact}</td>
      </tr>`
  });

  global.document.getElementById('xcedeledgers').innerHTML = ledgersBody;
});
