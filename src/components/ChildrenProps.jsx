
function Card({children, title, color='blue'}) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-500',
    green: 'border-green-500 bg-green-500',
    purple: 'border-purple-500 bg-purple-500',
    red: 'border-red-500 bg-red-500',
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-b-lg shadow-md`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function Container({children, layout = 'vertical'}) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}

function ChildrenProps() {
  return (
  <section className="p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800">Children prop</h2>
    <p className="text-gray-600">Cet prop permet de passer du contenu entre les balise d'un composant, comme un conteneur de mise en page ou un style</p>
    <div className="space-y-6">
      <div>
        <h3>Créer un composant Card avec la prop children</h3>
        <Container layout="grid">
          <Card title="Profil Utilisateur">
            <p className="mb-2">
              <strong>Nom : </strong>
               DOH John
            </p>
            <p className="mb-2">
              <strong>Email : </strong>
              boh.john@gmail.com
            </p>
            <p className="mb-2">
              <strong>Rôle : </strong>
              Développeur Web
            </p>
            <button className="px-6 py-2 bg-green-500 text-gray-900 rounded-2xl hover:bg-black hover:text-white transition-all">Valider</button>
          </Card>

          <Card title="Profil Utilisateur" color="green">
            <p className="mb-2">
              <strong>Nom : </strong>
              DUPOND Alain
            </p>
            <p className="mb-2">
              <strong>Email : </strong>
              dupond.alain@gmail.com
            </p>
            <p className="mb-2">
              <strong>Rôle : </strong>
              Docteur généraliste
            </p>
            <button className="px-6 py-2 bg-blue-500 text-gray-900 rounded-2xl hover:bg-black hover:text-white">Valider</button>
          </Card>
        </Container>
      </div>
    </div>
    
    </section>
  );
}

export default ChildrenProps;
