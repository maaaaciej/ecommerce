import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../categories/categories.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/collection/collection.actions";

import { WithSpinner } from "../../components/loading-spinner/spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryWithSpinnner = WithSpinner(Category);

class Shoppage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route path={`${match.path}/:categoryId`}  render={(props) => (
            <CategoryWithSpinnner isLoading={loading} {...props} />
          )} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shoppage);
