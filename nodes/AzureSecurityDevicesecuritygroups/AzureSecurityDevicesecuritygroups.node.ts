import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecurityDevicesecuritygroups implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Security Devicesecuritygroups',
                name: 'N8nDevAzureSecurityDevicesecuritygroups',
                icon: { light: 'file:./azure-security-devicesecuritygroups.png', dark: 'file:./azure-security-devicesecuritygroups.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Security Center API specification for Microsoft.Security resource provider.',
                defaults: { name: 'Azure Security Devicesecuritygroups' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSecurityDevicesecuritygroupsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
