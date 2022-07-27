import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import Loading from '../components/Loading'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const ArticleScreen = (props: any) => {
  const { article } = props.route.params
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  )
}

export default ArticleScreen
