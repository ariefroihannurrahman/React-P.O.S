import logo from './img/f2.svg';

export const Kasir = function() {
    return (
        <div>
            <div className="header">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src={logo} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 form-kasir">
                        <form>
                            <div className="row">
                                <div className="col-3">
                                    <p className="d-inline">Kode Barang</p>
                                </div>
                                <div className="col-1">
                                    <p>:</p>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-input-area"/>
                                </div>
                                <div className="col-1">
                                    <button type="submit" className="form-button">Cari</button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <p className="d-inline">Nama Barang</p>
                                </div>
                                <div className="col-1">
                                    <p>:</p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-input-area"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <p className="d-inline">Harga (Rp.)</p>
                                </div>
                                <div className="col-1">
                                    <p>:</p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-input-area"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <p className="d-inline">Kuantitas</p>
                                </div>
                                <div className="col-1">
                                    <p>:</p>
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-input-area"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <p className="d-inline">Subtotal (Rp.)</p>
                                </div>
                                <div className="col-1">
                                    <p>:</p>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-input-area"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 offset-4 mt-4">
                                    <button className="form-button">Tambah</button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="col-5 offset-1 form-kasir">
                        <div className="row">
                            <div className="col">
                                <p>Total (Rp.)</p>
                                <input type="text" className="form-input-area total"/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <p>Bayar (Rp.)</p>
                                <input type="text" className="form-input-area bayar"/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <p>Kembalian (Rp.)</p>
                                <input type="text" className="form-input-area kembalian"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Kode Barang</th>
                                    <th scope="col">Nama Barang</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Kuantitas</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>BCD123</td>
                                    <td>Bakpao</td>
                                    <td>Rp.3000</td>
                                    <td>4</td>
                                    <td>Rp.12000</td>
                                    <td>
                                        <button type="submit" className="form-button">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type="submit" className="mt-5 mb-3 web-button float-right">Cari</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <a type="submit" href="/" className="web-button float-left text-center">Logout</a>
                        <button type="submit" className="mb-5 web-button float-right">Selesai</button>
                    </div>
                </div>
            </div>
        </div>
    );
}