import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Category from "../categories/categories.component";
import {createStructuredSelector} from "reselect"

import {selectIsCollectionFetching} from "../../redux/collection/collection.selectors"
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/collection/collection.actions";

import { WithSpinner } from "../../components/loading-spinner/spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryWithSpinnner = WithSpinner(Category);

class Shoppage extends React.Component {


  componentDidMount() {
   const  {fetchCollectionsStartAsync} = this.props
   fetchCollectionsStartAsync()
  }

  render() {
    const { match, isFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route path={`${match.path}/:categoryId`}  render={(props) => (
            <CategoryWithSpinnner isLoading={isFetching} {...props} />
          )} />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
