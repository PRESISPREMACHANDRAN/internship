const { numToEnglish } = require("../helpers/utility");

const inventoryAgingTemplate = (inventoryAging) => {
    let title = "INVENTORY AGEING SUMMARY AS ON " + new Date().toLocaleString("en-UK");
    let totalStock = 0;
    return `
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
         .invoice-box {
         margin: auto;
         padding: 30px;
         font-size: 16px;
         line-height: 24px;
         font-family: 'Helvetica Neue', 'Helvetica';
         color: #555;
         }
         .margin-top {
         margin-top: 50px;
         }
         .justify-center {
         text-align: center;
         }
         .text-right{
            text-align: right;
         }
         .invoice-box table {
         width: 100%;
         line-height: inherit;
         text-align: left;
         }
         .invoice-box table td {
         padding: 5px;
         vertical-align: top;
         }
         .invoice-box table tr.top table td {
         padding-bottom: 5px;
         }
         .invoice-box table tr.top table td.title {
         font-size: 25px;
         line-height: 25px;
         color: #333;
         }
         .invoice-box table tr.information table td {
         padding-bottom: 10px;
         }
         .invoice-box table tr.heading td {
         background: #eee;
         border-bottom: 1px solid #ddd;
         font-weight: bold;
         }
         .invoice-box table tr.details td {
         padding-bottom: 10px;
         }
         .invoice-box table tr.item td {
         border-bottom: 1px solid #eee;
         }
         .invoice-box table tr.item.last td {
         border-bottom: none;
         }
         .invoice-box table tr.total td:nth-child(2) {
         border-top: 2px solid #eee;
         font-weight: bold;
         }
         @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
            }
            .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
            }
         }
      </style>
   </head>
   <body>
      <div class="invoice-box">
         <table cellpadding="0" cellspacing="0">
            <tr class="top">
               <td colspan="10">
                  <table>
                    <tr>
                       <td colspan="2" class="title justify-center">ABC Company</td>
                    </tr>
                    <tr>
                       <td colspan="2" class="justify-center">Address</td>
                    </tr>
                    <tr>
                       <td colspan="2" class="justify-center"><h4>${title}</h4></td>
                    </tr>
                  </table>
               </td>
            </tr>
            <tr class="heading">
               <td>Item ID</td>
               <td>Item Name</td>
               <td class="text-right">Stock on hand</td>
               <td class="text-right">0-5</td>
               <td class="text-right">6-15</td>
               <td class="text-right">16-30</td>
               <td class="text-right">31-60</td>
               <td class="text-right">61-90</td>
               <td class="text-right">&gt;90 or N.D</td>
            </tr>
            ${inventoryAging.map((item) => {
                totalStock += item.stock
                return (`
                    <tr>
                        <td>${item.itemID}</td>
                        <td>${item.itemName}</td>
                        <td class="text-right">${item.stock}</td>
                        <td class="text-right">${item.age_5}</td>
                        <td class="text-right">${item.age_15}</td>
                        <td class="text-right">${item.age_30}</td>
                        <td class="text-right">${item.age_60}</td>
                        <td class="text-right">${item.age_90}</td>
                        <td class="text-right">${item.ageGt90}</td>
                    </tr>` 
                )
            }).join("\n")
            }
         </table>
         <br />
         <hr />
         <div class="justify-center">
           <h3>Total Stock On Hand: ${totalStock}</h3>
           <i>${numToEnglish(totalStock)}</i>
        </div>
      </div>
   </body>
</html>
`;
};

module.exports = inventoryAgingTemplate;