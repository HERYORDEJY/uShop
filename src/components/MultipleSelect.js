import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { wearColor } from '../api/wearsList';
import { _lightGreen } from '../styles/color';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import _Text from './Text';

export default class _MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
      selected: [],
    };
  }
  componentDidMount() {
    // this.fetchData();
    this.setState({ ...this.state, dataSource: wearColor });
  }

  fetchData = () => {
    this.setState({ loading: true });

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson = responseJson.map((item) => {
          item.isSelect = false;
          item.selectedClass = styles.list;

          return item;
        });

        this.setState({
          ...this.state,
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  FlatListItemSeparator = () => <View style={styles.line} />;

  selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = this.state.dataSource.findIndex(
      (item) => data.item.id === item.id,
    );

    this.state.dataSource[index] = data.item;

    this.setState({
      ...this.state,
      dataSource: this.state.dataSource,
      selected: this.state.dataSource.filter((d) => d.isSelect === true),
    });

    // for (let i in this.state.d) {
    console.log(this.state.selected);
    // }
  };

  goToStore = () => console.log('the selected is, ...\n', this.state.selected);
  // this.props.navigation.navigate('Expenses', {
  //   selected: this.state.selected,
  // });

  renderItem = (data) => (
    <TouchableOpacity
      style={[styles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}
      // style={{
      // 	// marginRight: index === 0 ? 5 : 0,
      // 	marginRight: 10,
      // 	borderWidth: 1,
      // 	borderColor: '#ccc',
      // 	marginBottom: 10,
      // 	backgroundColor: 'transparent',
      // 	paddingVertical: 10,
      // 	paddingHorizontal: 10,
      // 	flexDirection: 'row',
      // 	alignItems: 'center',
      // }}
    >
      {/*<Icon*/}
      {/*	style={{*/}
      {/*		color: state.selectedBrand === item.name ? _lightGreen : '#fff',*/}
      {/*		// fontSize: responsiveFontSize(3.4),*/}
      {/*		alignSelf: 'center',*/}
      {/*	}}*/}
      {/*	name={state.selectedBrand === item.name ? 'check-square' : 'square-o'} //check-square, check, square-o*/}
      {/*	type={'FontAwesome'}*/}
      {/*/>*/}
      <_Text
        text={data.item.name}
        textStyled={{
          fontSize: responsiveFontSize(3),
          fontWeight: '500',
          letterSpacing: 1,
          color: '#fff',
          marginHorizontal: 20,
        }}
      />
    </TouchableOpacity>
  );

  render() {
    const itemNumber = this.state.dataSource.filter((item) => item.isSelect)
      .length;
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'enText.productsAvailable'}</Text>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          extraData={this.state}
        />

        <View style={styles.numberBox}>
          <Text style={styles.number}>{itemNumber}</Text>
        </View>

        <TouchableOpacity style={styles.icon}>
          <View>
            <Icon
              raised
              name="shopping-cart"
              type="font-awesome"
              color="#e3e3e3"
              size={30}
              onPress={() => this.goToStore()}
              containerStyle={{ backgroundColor: '#FA7B5F' }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192338',
    paddingVertical: 50,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: { fontSize: 14, color: '#000' },
  selected: { backgroundColor: '#FA7B5F' },
});
