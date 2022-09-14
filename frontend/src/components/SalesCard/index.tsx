
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../notificationButton'
import './styles.css'
function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form"
                        dateFormat="dd/MM/yyyy"
                    />                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="yes-data">ID</th>
                            <th className="no-data">Data</th>
                            <th>Vendedor</th>
                            <th className="yes-data">Visitas</th>
                            <th className="yes-data">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="yes-data">#341</td>
                            <td className="no-data">12/09/2022</td>
                            <td>Anakin</td>
                            <td className="yes-data">15</td>
                            <td className="yes-data">11</td>
                            <td>R$ 00000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="yes-data">#341</td>
                            <td className="no-data">12/09/2022</td>
                            <td>Anakin</td>
                            <td className="yes-data">15</td>
                            <td className="yes-data">11</td>
                            <td>R$ 00000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="yes-data">#341</td>
                            <td className="no-data">12/09/2022</td>
                            <td>Anakin</td>
                            <td className="yes-data">15</td>
                            <td className="yes-data">11</td>
                            <td>R$ 00000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard