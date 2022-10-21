from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship

URL = "mysql+mysqlconnector://aluno:aluno123@localhost/orm"

Base = declarative_base()


class Conta(Base):
    __tablename__ = "Conta"
    id_conta = Column(Integer, primary_key=True)
    nome = Column(String(150), nullable=False)
    login = Column(String(100), nullable=False)
    senha = Column(String(20), nullable=False)

    inventarios = relationship("Inventario", backref = "conta")

    def __str__(self):
        return "Conta (ID = {}, Nome = \"{}\")".format(
            self.id_conta, self.nome)

class Inventario(Base):
    __tablename__ = "Inventario"
    id_inventario = Column(Integer, primary_key=True)
    jogo = Column(String(20), nullable=False)

    id_conta = Column(Integer, ForeignKey("Conta.id_conta"))

    def __str__(self):
        return "Inventario (ID = {}, Jogo = \"{}\")".format(
            self.id_inventario, self.jogo)


def main():
    engine = create_engine(url=URL)

    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    Session = sessionmaker(engine, expire_on_commit=False)

    with Session.begin() as session:

        conta = Conta(nome = "Douglas Candido Domiciano")
        conta.telefones.append(
            Inventario(jogo = "Genshin", id_conta = conta.id_conta))

        session.add(conta)

    with Session.begin() as session:

        print("============================================")

        conta = session.query(Conta).get(1)

        print(conta)

        for inventario in conta.inventarios:
            print("   * " + str(inventario))

    with Session.begin() as session:

        print("\n============================================")

        telefone = session.query(Inventario).get(1)

        print(inventario)
        print(inventario.conta)

    print("Database List")
    print("===================================")

    with engine.connect() as connection:
        result_set = connection.execute("SHOW DATABASES")
        for row in result_set:
            print(row[0])

    print("\nTables List in the ORM database")
    print("===================================")

    with engine.connect() as connection:

        connection.execute("USE ORM;")
        result_set = connection.execute("SHOW TABLES")
        for row in result_set:
            print(row[0])

    print("\nLista de Contas dentro de ORM")
    print("==============================")

    with engine.connect() as connection:

        result_set = connection.execute("DESC conta;")
        for row in result_set:
            print(row)
        result_set = connection.execute("SELECT * FROM conta;")
        for row in result_set:
            print(row)
            print(row[1])

    print("\nLista de inventario dentro de ORM")
    print("==============================")

    with engine.connect() as connection:

        result_set = connection.execute("DESC inventario;")
        for row in result_set:
            print(row)
        result_set = connection.execute("SELECT * FROM inventario;")
        for row in result_set:
            print(row)
            print(row[1])

if __name__ == "__main__":
    main()
