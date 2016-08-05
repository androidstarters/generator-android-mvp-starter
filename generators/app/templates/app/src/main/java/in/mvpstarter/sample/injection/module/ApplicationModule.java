package <%= appPackage %>.injection.module;

import android.app.Application;
import android.content.Context;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import <%= appPackage %>.data.remote.MvpStarterService;
import <%= appPackage %>.data.remote.MvpStarterServiceFactory;
import <%= appPackage %>.injection.ApplicationContext;

@Module
public class ApplicationModule {
    protected final Application mApplication;

    public ApplicationModule(Application application) {
        mApplication = application;
    }

    @Provides
    Application provideApplication() {
        return mApplication;
    }

    @Provides
    @ApplicationContext
    Context provideContext() {
        return mApplication;
    }

    @Provides
    @Singleton
    MvpStarterService provideMvpBoilerplateService() {
        return MvpStarterServiceFactory.makeSecretsService();
    }
}
