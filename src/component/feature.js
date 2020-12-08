import Solutions from './solutions';
const Feature = () => {

    const shape6="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBFOTJCIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoMTMyIDgxLjYyNyAxNjYuMTY0KSIgZD0iTTIgMzIzbDEwLjU5OCAxM0wyMyAzMjN6IiBzdHJva2U9InVybCgjYSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjY1OSIvPjwvc3ZnPg==";
    const shape8="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiI+PHRleHQgZGF0YS1uYW1lPSIrIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQzNyAxLjQzNCAtMS40MzcgMS40MzQgLS44MzIgMjMuMDY2KSIgZm9udC1zaXplPSIyNSIgZmlsbD0iIzI3ZWFjOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IlJvYm90byI+PHRzcGFuIHg9IjAiPis8L3RzcGFuPjwvdGV4dD48L3N2Zz4=";
    const shape1="data:image/png;base64,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";

    return ( 
        <section className="offer">
        <div className="container">
      <div className="feature">
         <h6>What we offer</h6><br/>
      <h2>Our Featured Solutions</h2>
      <div class="movingbar"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
       <div className="row">
       
      <div className="col-md-3">
      <Solutions 
      title="Robotic" 
      description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua." 
      src="data:image/png;base64,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"
      />
      </div>
      <div className="col-md-3">
      <Solutions 
      title="Cognitive Automation" 
      description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua." 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB8lBMVEUAAAD////U3ujU3ujU3ugpLDXU3ujU3ujU3uiEi5QpLDVnbXYpLDVTWGEpLDVMUFopLDVHS1TU3ujU3ujU3ugpLDVCR1DU3ujU3ugWzccXzccYzccazcgdzsgezsggzskhzskit7YizskjzskkzskmzsopLDUrz8ssz8suz8svz8swz8wxz8w50M060M080M490c4+Qks+0c4/0c5A0c5E0c9F0c9H0dBI0dBJ0tBL0tBP0tFS0tFUWm1U09JV09JX09JYXnBYXnFZ09NaYHJa09NcYnRcYnVdY3VdY3Zd09Ne09Ne09Rh1NRi1NRk1NVmbH5m1NVp1NVqcYJtc4Vw1ddz1dd11th21th31th41tiB19qD19qE19qHjp6Hj56JkKCJ19uL19uM2NuN2NyQmKeSmqiS2NyT2N2U2N2V2N2Wnq2Xn62Xn66Y2d6b2d6dpbOd2d+e2d+fw8yh2d+i2t+lrbulrrun2uCp2uCt2+Gw2+Ky2+Kz2+K02+K12+O32+O42+O43OO53OO7xNC7xdG73OS8xdG83OTA3OTA3OXBy9bB3OXCzNfEzdnE3eXF3eXH3ebI3ebK3ebL1eDL3ebM1uDM1uHM3efN3efO3efP3ufQ2uTR2+bR3ufS3ObS3OfS3ujT3efT3ejT3ujU3ug8/CnyAAAAGXRSTlMAAAwODyAgMDI8QFhwgpCesLq+wsPQ1vb+6I772wAAArBJREFUSMfV1+lbEkEcB/CxZJQbSrApTNKYis5JO3XtsKzoxi4ju087LE2jqLTLrOhQysrKzJr/sxXYe2eXdd/U94WP6H6eZ/fLzPADlNkIKANSHBh7AAjhAAA+jAFwYewCAGMfAAEcAsCDsUN2+b+AyyGETkK8EIZJEEI/IRC6CXFDSIgfwiAJQ+glxMlfNluFK6uohcytkOPKamop1RUyXEUtZo6Ey61aOm+WiKFlTKEWT40Z5zMbfz+7nTPJ7uu/FdjhcDgLfzjDlZDbhWudPOMxxpjkX//YxvWb3PbHy1x7AROeyfEYx02Z9fSS26XAHo/HK2BqjtsKv3h5Ji/MEla3rcB9cbThtTkOhUJhDc7VNnWvaRr9ysRhnqkKEy+6jwZoF0Jo3QgDFwsLBAJBDX4fOfhoc2OmL36CgYM8Yz7z+Rq0fIDSRGImhdHcswlqjn0+n5/5VjGxn2eswoTsTxgXZoiTJthwhSWtFTaeZeIvWuxyudwSPleD1mZ1cXoZWjkoYjfP1M88NP/Yw8bmjJhWEX+LNfc0rDYs7BYaoZ1IFhE/QY/5/75QYcVtDy1ovbZi6zCffQ3TP1tEPF6/98GmVerbVhZ2oQ5t/JB/2vWqRdJTh5ZmTNqeKG5DDaZ30CtN24xFosUZNFriCuusjyR/iTg73fxVlM70qrDuxkijjq5YSsCfFgrlL1JtDN3leTJG6eEWAQ+ji8X3vbeU/dyNTt1dclTCGcba1j2G/hzgz6+cAS4eQ4y2s0/zbe9k4GJhukevkOO1HalUqiWSYxy9hvs5t2VxNBqNX7F4AJb2cWPrg05e2E8z/Jzbo788J3dwN9++M8yb09wRBZbGikuljBX3FGOFNNBM3jjUZpL2fvYoZWsOmwm2NT7aGlztjcy2hnV7XxP+v69GNvIX6WaUlnBp36EAAAAASUVORK5CYII="
      />
      </div>
      <div className="col-md-3">
      <Solutions 
      title="Cognitive Engagement" 
      description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua." 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAHd0lEQVRo3uWba0wUVxTHadomfuqHmtqHrdWk7ReTxtg21qbGtEmTtiYNprZW8YGK+EQQARFBsb5QQBSIUEQFRRTkLYpFEFCQ58Lu8pQFREXUpm1q07Rp0vb2nMvccRfmztxZdpdVNvknMDv3nvOb+zr33FkPQojHeJJDP219D6aBloDiQRdB3aDfQP+AiCT8vx9UDkoC+YDe8XhSPuDsTFAUqNcKyh7dA8WBPnBHyOdAXqDGUULyZAAtRDvuADtf6qrEBeoCfT5WoFNApSKOmnvuk+tNXaTgxxpyNr+cZOSUksy8MpJXUk0qG9qJyTKoF7wQNMmVsAulyYbrVFPHbZKeXULCdsUTrxVBZMFiP64WLd9MQiJiybGMQlJn7hGFfuj01gYDz4D2qTlS09JNDh5JpxDDwRYu9Scr14aR1RsiyKp128l3ywJG3PPtkk1kV1QyqahrE4H+FxTgLNhnQWd4xrFbHj2RawOKf6PzGbml5FpjJ+3a1mVae+EBNXeT7AsVZN+h42TJymAb8OiEU8TQeUcEPM4ZLcuFRacDtkbJznr7hpJjpwtFnZVl7L5Hx7fvxh1yXb5+O0jZDZNI+ShHAu/mGbpSYyTLV4fKDsYknAbQ26OajU2WeyTpZB4MgQC5p+CEJ1B2iyNgF/AM4JNnExJ2x/zLNQ5dhkqrW4jP+nB5/AvUj2P6k9HAvgL6RanyG8Zu2nXRmRVrwsjV2lanrL03jBayfvP3cktfqTaKzN4T7QXOU15XB0ngtgPUCWzh8lqzUwOOWpOF+GwYaunVGyPokqdR5pQ9sHN4FeKExMZs7qXrmg5/ZTYR7zbbZaaxd5B8Zmohge2dQtBlNSZ5GTtwJE2kzFy9wNVKFdW39pLF3luo4f1xJ4ScndZcT2YbDTbX6gB4kqGWzDebhFv6h/QCavcbLz/6ADTur9ID+x6vosPJmdToMp8Q0tje71JgHEpr/SOp/R17j4qU+VQUOEV5nRyA2XhoVk5MzeYa8oduipBMCPYyyPraVOn6q4Y6m+tFFvW1G2Nx1soY1WkAnxONqH5VqiCrsEKKgvxp1+YZWtfWTmFmGptoy4ro7eYGWqZAAxgjOrbuJ53M1QL+G/SiFvBsXgW7o1OooW2RR1QNMWAt5+0tczA+nfqBK4VA3Yu0gMN4hTHgR0OpGUUjvrvaM0BiunqovjAb7QYO6eiS6+Hdm1dyXY63m7vuatWdpgV8hrfdY0vR5SrDiO+Tb/ZRh63FgLcDhPU4VRqzDNhaPIiGtj7ZF4FAxKIFbOSFecxIU0e/rhYOhkkM/5/R0sQds3paGLV0VQj15VzhVZFwc4Ia8IBSwQtl9dLsuEn3eGTAGd393Hv0jvu1m4aWp/SsEpH7p6sB/65UKOdilbRJCHIL4I2Be7jziYI+VgNWLFRcXi+vf+4AvMZv51ALZwu18DzdwBjKsTHc0HZrxPc4+aDTqI9gjCoBT2l+HGS8BgGHEvCi1la5HjUIFgBlFVWIABfoBm7uuiMDX6po1DVL7++0cAOOEstd3bM0JvqYL4LZEJQXD/gvXiGWesEgfsSmAmJjBERhK9m7Did09cr18O49X1xJ/cDdE6aFBG3gvv4lJeAHvEL7Yo9TQ8HhMWMaaeEuDf0I2h6td299XgmYe1ySc/GaPHFhJkLL+Tc5wYaSho9ptUQfy27ivtyOhMLXw4Hz1QP3rdQYbhN590V03LQZp7hTeh0mLOtrs6SJbaq0dRw+pnnCdZeFlTqS9tZ6YJMC0kq0J6aepwYXewcKG3TUfhi3p5jER/t7oo+NJm10xhrYS/0IpV8O6zDJ7krg+JQseXtaWd8+2lzZPAb8ltbNuNizZQEPxbTux4QAdnPra4be+3SsH+y0CDmISyF2Y7QZl5TpiOQgnj+/wKB/VrsZj0hCdx6WU6cllU1OzVriMQ2bOzBl23JzwFF1xzDgYq2bcYuGKVOWqnUWdFVjh5yMx9kZj1cdWP9DBhwi/uRD5ZYW6d56VHSljizz2SrXf6nC8Q+VAb+rp7uxlmYTWZ25d1RO4NlUTOJpuhVlGdKSSoMzepDF+rRwULQgdm82ptmShes0nhjocQDTvslpefIRDsovaC+51tTpFFjQLM1UrdpEhrP30lWPz3ixhUIiDpGUUwV0jA/PY+NxKqZoTpwtJuG7E+TTQtaF8bxZR6ysps2gGVaajI2q9PqR7spxncacNRt7Sm8B4NZO6fSf9Q48clULXe2Qp2hCPtH+M95BGnvvjU2VD8J48vbdRiKjkkhmfplIFtKpwM+DshxhFLsvJgJx5sV0UWFpLc1+NrbfcsXrTp56X3dYAbrlonexxhZ4GDgesgVJgcmjpxqYcwb1/hPyADw9HP1x8wfgeGCVBxAKugz646kG5rxx+yGobVwAW4HPHVfAEnTWeAN+A/TnuAGWoMPHG/AEF0ZvX7rLbyU8XQQ83Z1+IFLsZNi+EXvfMQaeJGUfnAW8wB1/BjQRlAH6z8Gwoe7+I6/J0slHMCgSFCslIdJAOaALoErpwM8s/aLtp2Fx+yPpVy9zRGz+D/IvHJD4qEUiAAAAAElFTkSuQmCC"
      />
      </div>
      <div className="col-md-3">
      <Solutions 
      title="Security and Serveillance" 
      description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua." 
      src="data:image/png;base64,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"
      />
      </div>
      </div>
      <br/>
      <br/>
      </div>
      <div className="shape1"><img src={shape1} alt="shape" /></div>
        <div className="shape6 rotateme"><img src={shape6} alt="shape" /></div>
       
      </section>
      
     );
}
 
export default Feature;