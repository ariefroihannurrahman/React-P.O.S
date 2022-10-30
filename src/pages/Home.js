import React from 'react';
import { Link } from 'react-router-dom';

export const Home = function(){
  return(
    <div>
      <div className='header'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-4 offset-4 login-group'>
            <p className='label'>Masukkan Kode Kasir</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control input-area" placeholder="Masukkan Token" aria-label="" aria-describedby="basic-addon1"/>
            </div>
            <a type='submit' className='login-button login-label text-center text-dark' href="/kasir">Submit</a>
          </div>
        </div>
      </div>
    </div>
  );
}