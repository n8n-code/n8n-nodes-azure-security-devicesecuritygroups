import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityDevicesecuritygroupsApi implements ICredentialType {
        name = 'N8nDevAzureSecurityDevicesecuritygroupsApi';

        displayName = 'Azure Security Devicesecuritygroups API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityDevicesecuritygroups/azure-security-devicesecuritygroups.png', dark: 'file:../nodes/AzureSecurityDevicesecuritygroups/azure-security-devicesecuritygroups.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Devicesecuritygroups API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
