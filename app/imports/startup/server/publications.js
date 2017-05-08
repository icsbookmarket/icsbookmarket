import { Interests } from '/imports/api/interest/InterestCollection';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Books } from '/imports/api/book/BookCollection';
import { BookForSale } from '/imports/api/bookforsale/BookForSaleCollection';

Interests.publish();
Profiles.publish();
Books.publish();
BookForSale.publish();
// BookForSales.publish();

