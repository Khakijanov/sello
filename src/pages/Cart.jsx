import { useMyContext } from '../hooks/useMyContext';
// components
import TableItem from '../components/TableItem';
// 

function Cart() {
  const { products,  addCart } = useMyContext();
  console.log(products);

  return (
    <div className="Mycontainer mt-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Price</th>
              <th>Change Amount</th>
              <th>All delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products && products.map((prod) => {
              return <TableItem key={prod.id} prod={prod}/>
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}

export default Cart;
