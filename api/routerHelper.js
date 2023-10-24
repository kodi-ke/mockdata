export default function RouterHelper(server,router){
    server.post('/landlord/login',async (req, res) => {
         const landlordData = await router.db.get('authLogin'); // [{}][0]
         console.log(landlordData,'actual');
         console.log(landlordData[0],'indexed')
        res.status(201).json({
          data:landlordData,
          test:landlordData[0]
        });
      });
      server.post('/tenant/login', (req, res) => {
 
        res.status(201).json(router.db.get('tenant')[0]);
      });
      server.post('/caretaker/login', (req, res) => {
 
        res.status(201).json(router.db.get('caretaker')[0]);
      });
      server.post('/agent/login', (req, res) => {
 
        res.status(201).json(router.db.get('agent')[0]);
      });
}