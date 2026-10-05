---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.ceremonial-bladed-arm-manufacturing
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 仪礼剑及配套剑鞘制造环境核算

## 1. 范围与适用性

本候选作者方法核算新制、配置明确的仪礼剑及一个配套剑鞘的环境前景，从声明的成品部件供货入口到完整成品验收包装。采集采购、实际归属场内公用消耗、逐项表征废物和实测释放。不提供武器设计、生产参数、性能优化、操作或组装指导。过程图仅归组环境记录。代表边界要求实际已完成部件供货记录，不声称所有制造商都外购这些部件。此前生产，包括场内此前部件生产，须分别链接一次。

现有刀剪PCR针对切割产品，餐具PCR针对食品处理；均未建立包含配套剑鞘的完整仪礼产品方法。独立方法需要核对部件供货入口、完整交付配置及剑鞘纳入实测净M，并排除服务和功能性能声明。UNSD44750比此范围宽；本稿不创建接受分类映射。

排除单卖剑刃剑鞘、其他44750武器、食品切割工具、翻新维修服务、仪礼使用、发运后运输和使用后处置。不由仪礼用途推断锋利度、硬度、强度、寿命或无害性。实际场内过程或材料超出声明成品部件前景时，扩大覆盖声明前须增加具体交换及记录。独立科学审查仍待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.ceremonial-bladed-arm-manufacturing |
| classification_refs | CPC3.0:44750; narrower |
| covered_products | 成品部件制造前景的新制声明仪礼剑及一个配套剑鞘 |
| excluded_products | 单卖部件、其他武器、切割餐具及维修服务 |
| representative_product | 同一配置验收完整仪礼套件，实际供货组成 |
| production_route | 成品部件入口经实际场内作业与可选清洗至验收包装的环境记录；此前制造链接 |
| market_state | 验收新制完整交付配置；运输包装与净M分开 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明仪礼剑及一个配套剑鞘制造环境前景 |
| How much | 1 kg |
| How well | 正实测完整净M、同供方规格配置及签认供货完整性验收；不规定功能试验阈值 |
| How long or cycle | 一个声明制造期间；无使用周期或寿命 |
| reference_flow_link | finished_ceremonial_set |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 剑、弯刀、刺刀、长矛及类似武器及其零件和剑鞘及其护套等 `958b5c7e-4167-4f23-ae05-580f7c9af04c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 声明仪礼供货用途；配置规格修订；一个配套剑鞘；实际供货部件组成及表面残留范围；完整净M及独立部件重量；运输包装排除M；工厂期间验收数；此前链接生产边界及实际可选作业 |

数据包须声明全部必需限定信息；缺失限定使其参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `exchange_mass` | 质量清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明协议以每同配置验收设备实际kg采q_item；normalize_mass采用reference_mass。 |
| `exchange_energy` | 电力行 | 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 读实际kWh，按3.6 MJ/kWh换算；采每验收设备q_item MJ并应用normalize_mass。保留公开属性能量维度，不替换质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品剑刃、单个物理完整剑柄组件及单个配套成品剑鞘位于实际供货入口 |
| starting_condition_role | manufacturing_input |
| product_classification_scope | CPC44750 narrower ceremonial complete-product context |
| recursive_input_rule | 此前部件制造链接一次；不在此前景同时计成品部件及其上游组成材料 |
| upstream_dataset_requirement | 完整生命周期覆盖声明前须有实际匹配供方生产、公用及处理链接 |
| disclosure | 成品部件至验收成品前景，不是完整摇篮到大门；来源不提供实测工厂清单 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all_processes | 纳入声明场内入口内全部实际归属活动，含搬运公用拒收返工消耗包装。记录环境数量，不给机械制造指导。同厂此前制造为单独链接上游阶段，不是省略负担。 |  |
| `boundary_conditional` | cleaning | 清洗以实际记录为条件。水与IPA交换分开，均非必需。扩大覆盖前，其他实际试剂公用废物须自身具体卡片。 |  |
| `boundary_output` | finished_ceremonial_set | 净M仅含声明剑及一个配套剑鞘；排除运输包装展示支架备件另供附件。声明额外保留涂层残留，避免与供方已含双计。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `site_account` | 供货部件接收与场内作业环境核算 | required | 实际声明前景记录 | manufacturing | 验收完整设备；按M归一化 |
| `cleaning` | 可选清洗环境核算 | conditional | 仅实际执行时 | manufacturing | 验收完整设备；按M归一化 |
| `acceptance` | 配置净质量验收与包装环境核算 | required | 实际声明前景记录 | manufacturing | 验收完整设备；按M归一化 |

### 过程：供货部件接收与场内作业环境核算 (`site_account`)

#### 输入

##### 产品流

###### 供货成品钢制仪礼剑刃 (`supplied_blade`)

一种实际供方规定的成品钢制部件，位于其完成供货入口。采净领用kg、供方材质证书和已含表面及残留状态；此前部件生产链接一次，不给设计或制作指导。

- 选定流： 供货成品钢制仪礼剑刃
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 供货成品仪礼剑柄组件 (`supplied_hilt`)

一个物理完整的供货组件，声明单一供方规格和实际材料组成。采净供货kg及已含涂层残留，不将无关材料清单当一个交换。此前组件生产须有自身链接清单；分件供货时以逐项具体交换替换此卡。

- 选定流： 供货成品仪礼剑柄组件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 供货成品配套仪礼剑鞘 (`supplied_scabbard`)

一个实际成品剑鞘，对应声明交付配置，记录实际供方组成和净kg。不假定通用钢、皮或木结构；这是单一物理成品部件，其材料在上游清单声明。

- 选定流： 供货成品配套仪礼剑鞘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 供货部件接收与场内作业环境核算用户侧电力 (`site_account_electricity`)

实际CN <1kV用户侧电网平均电力；读取校准kWh，含归属搬运通风待机返工，按3.6 MJ/kWh转换，采每同配置验收设备q_item MJ。过程图归组环境记录，不是制造顺序。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃供货钢制仪礼剑刃 (`reject_blade`)

仅实际废弃对应供货规格部件，含实测净kg、材质污染及声明接收方。区分供方退回、维修再用和法律废物；无必需拒收率或处理抵扣。分选时以每实际材料组分替换，不与完整部件双计。

- 选定流： 废弃供货钢制仪礼剑刃
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 废弃供货仪礼剑柄组件 (`reject_hilt`)

仅实际废弃对应供货规格部件，含实测净kg、材质污染及声明接收方。区分供方退回、维修再用和法律废物；无必需拒收率或处理抵扣。分选时以每实际材料组分替换，不与完整部件双计。

- 选定流： 废弃供货仪礼剑柄组件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 废弃供货仪礼剑鞘 (`reject_scabbard`)

仅实际废弃对应供货规格部件，含实测净kg、材质污染及声明接收方。区分供方退回、维修再用和法律废物；无必需拒收率或处理抵扣。分选时以每实际材料组分替换，不与完整部件双计。

- 选定流： 废弃供货仪礼剑鞘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

### 过程：可选清洗环境核算 (`cleaning`)

#### 输入

##### 产品流

###### 供货工业清洗水 (`industrial_water`)

仅实际水清洗时纳入：按校准质量测量或实际表计体积及文件化实测密度采供水kg。排除购入配方已含水。技术圈水不同于直接资源取水。

- 选定流： 工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 供货液态异丙醇，CAS67-63-0 (`ipa_liquid`)

仅实际IPA清洗时纳入，记录供方SDS、液态及实际纯度。采净领用kg及回收退回，不推定必需溶剂使用，不将空气基本流身份用作购溶剂。

- 选定流： 供货液态异丙醇，CAS67-63-0
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 可选清洗环境核算用户侧电力 (`cleaning_electricity`)

实际CN <1kV用户侧电网平均电力；读取校准kWh，含归属搬运通风待机返工，按3.6 MJ/kWh转换，采每同配置验收设备q_item MJ。过程图归组环境记录，不是制造顺序。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集废液态异丙醇清洗溶剂 (`spent_ipa`)

可选收集溶剂废物，记录实际IPA、水及污染组成和转移至声明处理接收方净kg。可再用回收单独核对；化学基本释放不是此废物混合物。

- 选定流： 收集废液态异丙醇清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集仪礼成品水清洗废液 (`wash_effluent`)

仅实际收集液体，含采样组成、净kg及厂外处理接收方。不假定直接向水排放；场内处理须自身交换及实测物种子介质释放。

- 选定流： 收集仪礼成品水清洗废液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 向未指定空气即时释放异丙醇 (`ipa_air`)

仅物种特异实际室外IPA释放，CAS67-63-0，空气未指定、即时。采匹配采样浓度流量时间或含回收残留余留不确定性的文件化闭合溶剂平衡。不将无解释损失、工作场所暴露或收集溶剂假为室外释放。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

### 过程：配置净质量验收与包装环境核算 (`acceptance`)

#### 输入

##### 产品流

###### 供货瓦楞纸箱 (`packing_box`)

仅实际单一瓦楞箱规格，记净kg和供方纤维组成。运输包装排除成品净M。有组成限定的上游纸箱身份要求匹配实际供方纤维比例。

- 选定流： 供货瓦楞纸箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 供货聚乙烯包装薄膜 (`packing_film`)

仅实际PE膜，CAS9002-88-4，单一供方规格和净kg。确认PE组成、生产供货状态及化石原料范围；不暗用于PET、多层复合或生物基膜。链接上游生产前记录实际供方来源及材料状态。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 配置净质量验收与包装环境核算用户侧电力 (`acceptance_electricity`)

实际CN <1kV用户侧电网平均电力；读取校准kWh，含归属搬运通风待机返工，按3.6 MJ/kWh转换，采每同配置验收设备q_item MJ。过程图归组环境记录，不是制造顺序。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收仪礼剑及一个配套剑鞘 (`finished_ceremonial_set`)

一套完整验收声明仪礼剑及其单个配套剑鞘。公开44750成品身份以显式配置收窄，不改其质量参考属性。采实际部件及完整净kg；不声称功能性能或寿命。

- 选定流： 剑、弯刀、刺刀、长矛及类似武器及其零件和剑鞘及其护套等 `958b5c7e-4167-4f23-ae05-580f7c9af04c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 kg
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 废弃纸板包装 (`waste_box`)

仅场内实际分选纸板包装废物，测净kg及污染接收方；来料包装处置及包装损耗计一次。随成品交付包装不同时作为工厂废物。

- 选定流： 包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 废弃聚乙烯包装薄膜 (`waste_film`)

仅实际独立收集PE膜废物，记组成污染净kg接收方；不以原生PE产品流识别。

- 选定流： 废弃聚乙烯包装薄膜
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | all_processes | 按每验收配置独立工单公用库存记录避免分配。共享实际消耗按文件化因果表计、观察时间负载或搬运记录归属；仅可比实际负载支持时用验收数。记总量、驱动、分母、归属比例及敏感性；作为一个参考套件交付的剑与鞘不默认质量或经济分配。 |  |
| `allocation_waste` | specific waste | 拒收返工消耗仍归属验收生产；未知数量不是零。废物转移不自动给避免生产抵扣。实际有共产品时，应用前在独立指定模型记录无替代抵扣分配及接收方。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_ceremonial_set | 校准秤及验收记录 | 配置；验收净质量 M；独立供货部件kg；零皮净；秤量程分辨校准；验收数 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每配置及验收设备 | 实际声明期间 | 声明场址及供货部件入口 | 每台验收净质量 | 原秤部件完整性记录 |
| `cp_stock` | all_processes | specific supplied input | 原领退及供方记录 | 单一物理规格；组成供货状态；实测净kg；领退库存改变；验收数 | 逐项测实际供货投入kg，保留供货残留计一次；核对退回库存改变。水体积换算须实际密度证据，不假设1 kg/L。 | kg | 每转移及实际期间 | 实际声明期间 | 声明场址及供货部件入口 | 实际归属投入kg / 同一配置的验收设备数量 | 秤供方SDS库存记录 |
| `cp_energy` | all_processes | electricity | 实际校准作业表计 | 过程工单；供方电压；kWh始末；搬运待机通风返工；因果共享负载记录；验收数 | 读实际表覆盖，按3.6 MJ/kWh转换MJ，按因果记录归属共享消耗一次。 | MJ | 实际期间及共享负载改变 | 实际声明期间 | 声明场址及供货部件入口 | 实际归属MJ / 同一配置的验收设备数量 | 表校准及分配观察 |
| `cp_waste` | all_processes | specific characterized waste | 接收清单及原重量 | 单一物理废物；实际组成污染；净kg；再用退回；接收方状态；验收数 | 受控皮重后逐项称不同收集废物，记组成接收方；液体废液与基本水释放分开。 | kg | 每实际转移 | 实际声明期间 | 声明场址及供货部件入口 | 实际转移废物kg / 同一配置的验收设备数量 | 原重量组成接收凭据 |
| `cp_emission` | cleaning | ipa_air | 匹配采样或闭合溶剂平衡 | CAS67-63-0；空气子介质；浓度流量时间；领用回收余留残留；检出不确定性；验收数 | 用匹配物种采样或完整文件化溶剂平衡测实际室外余IPA；无解释残差不假设排放。 | kg | 实际清洗期间 | 实际声明期间 | 声明场址及供货部件入口 | 实际释放kg / 同一配置的验收设备数量 | 采样校准完整平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `configuration_mass` | cp_mass; finished_ceremonial_set | 此完整设备指剑及一个配套剑鞘。以适合实际量程分辨的秤独立称各供货部件及验收完整套件，保留校准零皮净原件。核对纳入部件kg加实际保留增加至正M kg；包装展示夹具排除。不用目录重量、假设单件重或功能几何替代。声明供方已含涂层残留并避免双计。 | cp_mass; cp_stock; signed supply acceptance |
| `actual_period` | all protocols | 以同一配置声明期间实际验收数量采q_item。拒收返工消耗留分子；配对M为该群体物理实测。记库存改变及非生产公用归属，不混材料显著不同配置。 | actual job/count/meter records |
| `balance_coverage` | all exchanges | 逐物理供货部件核对至验收保留kg、退回、库存改变和具体废物；溶剂领用回收余留残留释放按不确定性核对。额外实际胶、润滑剂、擦拭布、电镀涂覆投入、热、压缩空气或其他物理废物释放须逐项指定交换及证据。不把缺失阶段当零，不由目录推定必需工序。此边界不提供制造配方。 | actual plant activity register and balances |
| `source_limits` | external evidence | UNSD印刷PDF239仅提供广义44750标题。Windlass未注明日期About Us支持礼服产品及独立翻新背景，不是工厂测量。WKC出版者保留历史目录PDF3仅历史仪礼剑鞘供货示例；不转用当今工序质量认证数量寿命。成品部件边界为作者建模选择，须实际供方记录。上游PE膜使用须实际材料及供货路线匹配。 | unsd-cpc3; windlass-scope; wkc-historical |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验精确参考输出名称UUID、实际声明仪礼配置及一个配套剑鞘、物理实测正完整M和独立部件核对。 |  |
| `validation_scope` | all_processes | 核验成品部件供货入口及此前链接生产；覆盖公用实际可选清洗废物记录，不给机械指导。上游或额外实际场内交换仍缺时不声称完整摇篮到大门。 |  |
| `validation_identity` | all flow rows | 核验公开类型实际参考属性单位组官方双语名称；采用电力身份具有CN供货地理及<1kV用户侧电网平均路线，须实际采购匹配。不同地理供方路线须自身匹配身份。区分购液IPA与基本IPA、供工业水与资源水废水、收集废液与直排。不匹配具体行留空登记原因。 |  |
| `validation_claims` | dataset claims | 机械一致性通过不建立工厂实测数据、武器性能、完整生命周期覆盖、发表或科学批准。披露未解身份计量链接不确定性；区分未知不适用低于检出值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置仪礼剑鞘制造环境前景；本标题不意味发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配成品部件前景或按实际M缩放的链接仪礼产品制造模型 |
| excluded_use | 武器设计性能操作指导其他武器普通刀餐具维修改使用寿命声明 |
| required_metadata | 配置规格修订仪礼供货用途配套剑鞘实际部件组成净重保留增加完整M包装范围工厂期间数量供方入口链接上游接收方身份因果分配 |
| required_quality_disclosure | 全部身份计量链接场内覆盖缺口来源历史限制平衡不确定性分配敏感性；独立科学审查待完成 |
| update_trigger | 供货配置组成状态入口工厂公用供方废物接收方实际加工或计量基准改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed/PDF239,44750. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅广义类别；较窄方法为作者制定，不是接受映射 |
| windlass-scope | handbook | Windlass Steelcrafts, About Windlass, undated official page, dress-product and Sword Refurbishment paragraphs. https://windlass.com/about-windlass/ | 仅产品服务背景；无实测清单或通用采购路线 |
| wkc-historical | handbook | WKC, publisher-retained catalogue wkc_katalog_2004.pdf (no internal publication date established), PDF3 About us. https://www.wkc-shop.de/media/files_public/3df4dd5f4237f7b969e987534218a0cb/wkc_katalog_2004.pdf | 历史仪礼剑鞘供货示例，无当前数量或程序规则 |
