async function fetchCNPJ(req, res) {
    const { cnpj } = req.body;
    const cnpjLimpo = cnpj.replace(/\D/g, '');

    try{
        const response = await fetch(`https://api.opencnpj.org/${cnpjLimpo}`);

        if(!response.ok){
            return res.status(response.status).send('CNPJ não localizado');
        }

        const data = await response.json();
        return res.json(data);
    } catch {
        return res.status(502).send('Falha temporária em nossos serviços, por favor tente novamente dentro de 1 hora.');
    }
}

module.exports = {
    fetchCNPJ
};