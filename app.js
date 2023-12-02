const express = require('express')
const app = express()
const port = 4500

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ auth: 'success', message: 'Please provide the resources to get data.' })
})

app.get('/get-inventory', function (req, res) {
    res.status(200).json({
        "1234778881": 9999.00,
        "3456666666": 9999.00,
        "1234778882": 9999.00,
        "1234778883": 9999.00,
        "1234778884": 9999.00,
        "1234778885": 9999.00,
        "1234778886": 9999.00,
        "1234778887": 9999.00,
        "1234778888": 9999.00
    })
});

app.get('/get-sales-prices', function (req, res) {
    res.status(200).json({
        "1234778881": 0.00,
        "3456666666": 0.00,
        "1234778882": 0.00,
        "1234778883": 0.00,
        "1234778884": 0.00,
        "1234778885": 0.00,
        "1234778886": 0.00,
        "1234778887": 0.00,
        "1234778888": 0.00
    })
});

app.get('/get-tax-rates', function (req, res) {
    res.status(200).json({
        "1234778881": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "3456666666": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778882": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778883": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778884": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778885": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778886": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778887": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "1234778888": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" },
        "ChargeSKU": { "taxAmount": 2.8229012971048855, "taxRate": 0.08, "taxName": "GST" }
    })
});

app.get('/calculate-shipping-rates', function (req, res) {
    res.status(200).json([{ "status": "calculated", "rate": { "name": "Delivery Method 1", "serviceName": "Test Carrier 1", "serviceCode": "SNC9600", "shipmentCost": 11.99, "otherCost": 5.99 } }, { "status": "calculated", "rate": { "name": "Delivery Method 2", "serviceName": "Test Carrier 2", "serviceCode": "SNC9600", "shipmentCost": 15.99, "otherCost": 6.99 } }])
});

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))