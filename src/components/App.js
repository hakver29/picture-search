import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: []};

    onSearchSubmit = async (term) => {
        console.log(term);

        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 4N76eo11acDBf75poKnWwcBTNCbBQ2Z3HSFj9l7YD5w'
            }
        });

        this.setState({images: response.data.results})
    }

    render(){
        return (
            <div className={"ui container"}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;
