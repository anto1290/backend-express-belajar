const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
}
);
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'biodata.html'));
}
);


module.exports = router;