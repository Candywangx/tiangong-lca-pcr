---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-electricity-on-own-account
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 电力自营配电服务

## 1. 范围与适用性

本 PCR 规定交流配电网络以自营方式，从具名网络入口的计量交接点，经实际使用的配电变压、线路、保护与控制，到客户计量交付点的配电服务。覆盖架空和地下网络、必要运行监测与现有电能表维护。每个数据集固定电压组合、拓扑、责任资产、受服务客户类别和验收条件；不得只凭相同电量认定不同网络服务等价。

本边界不含发电电能商品本身、入口之前的输电服务、终端电力使用、新表安装或独立出售的抄表服务。网络连接的储能和能量转换设施、以及独立交付的调频等辅助服务也排除，故对 CPC 3.0 69112 的覆盖为 narrower。必要的开关、保护与运行调控属于本配电活动，不因辅助服务排除而遗漏。不得通过扩大边界声称覆盖整个分类。分类原文是范围证据，不提供线损率或默认因子。[来源：`un-cpc-69112`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-electricity-on-own-account |
| classification_refs | CPC 3.0 69112; narrower |
| covered_products | 交流网络自营配电服务，按具名客户交付电量表征；必要运行控制与现有表维护 |
| excluded_products | 发电商品；上游输电；终端用电；新表安装；独立抄表；储能/转换；独立辅助服务 |
| representative_product | 在声明入口与客户交接点、电压和质量条件下，验收配送 1 kWh 的交流配电服务 |
| production_route | 计量入口 → 配电变压/输送/运行控制 → 客户计量验收；同时开展必要维护 |
| market_state | 有电量、质量和责任记录的已交付配电服务；电费不是清单数量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过已声明交流配电网络交付电力的服务 |
| How much | 客户交接点验收 1 kWh 有功电能；年度客户验收总量为 Q |
| How well | 按实际供电合同记录入口/出口电压、频率、可靠性与验收质量；不得虚构通用限值 |
| How long or cycle | 一个完整连续 12 月运行期间，包含停运、故障与维护负担；不以未供电需求增加产出 |
| reference_flow_link | `accepted_distribution` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收交流电配电服务 |
| 参考流属性 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` |
| 参考单位 | kWh |
| 必需限定信息 | 网络/资产/入口与客户点 ID; 自营责任; 交流及电压/频率; 架空/地下拓扑与线路长度; 变压器/开关介质与容量; 客户类别; 12 月起止和时区; 质量与停电记录; Q 与损耗台账; 进口/出口/反送电; 外包覆盖; 基础设施份额; 供电区域/供应方/上游边界; 被排除储能与辅助服务的接口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_energy` | accepted_distribution | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 使用 cp_energy：Q 是具名客户点的验收有功电量，不是入口电量、视在电量、容量、收费或抄表次数。Q 必须为正。采用官方电力服务记录已有的净热值属性和能量单位组作为电能通过量服务计量约定；它不表示燃烧热。服务产品 UUID 仍未绑定，不能借用不同电压边界的变压服务身份。 |
| `energy_conversion` | aux_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留已核实电力流的正式属性；kWh × 3.6 = MJ。此为电能表达约定，不是电力具有燃烧热值的主张。只转换分子，分母保持同一参考流。 |
| `material_conversion` | sf6_makeup; oil_makeup; waste_oil; sf6_for_destruction; recovered_sf6_product; sf6_air; oil_soil | 质量 | kg | 液体体积换质量须有该批次适用温度下密度；气体容器须去皮并按实测组成转换到物种质量。纯物种量不得二次乘浓度。不能将缺失或负的对账结果置零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 现有具名交流网络在计量入口接收电力；资本输入为经验收投运资产，现有库存并非无负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 声明 CPC 69112 的交流配电子集；narrower，保留原排除路线 |
| recursive_input_rule | 其他网络接口及背景输入产品/服务按声明门记一次；不递归供应方/接收方 |
| upstream_dataset_requirement | 服务损耗/辅助电的门匹配发电、具体材料/设备/服务供应以及外部载体处理分别作为背景连接 |
| disclosure | 前景门；排除项；Q/平衡；实际资产与服务份额；供应方资源覆盖；废物库存/交接；未绑定身份及背景缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_service` | 前景包括具名交流入口与客户验收门之间的运行，以及运营方责任内现场检修。输电、验收商品 Q 的发电、终端使用、新表安装、独立抄表、储能/转换和独立辅助服务仍排除；必要保护/控制及现有表维护仍纳入。 | un-cpc-69112; epa-electricity-delivery |
| `boundary_foreground` | 清单记录跨越上述前景门的交换及实际释放。采购的具体设备、材料和服务作为已定义产品输入，每卡只有一个主要属性/单位。不得展开供应方制造、开采、交付行程、道路/工具/车辆或接收方处理内部。资本仅保留为具名已投运网络资产，以实测质量和一次有依据的寿命份额计量；背景负荷由与投运门匹配的上游清单提供。此前景选择不表示零背景负荷，也不声称是来源文件强制的 EPD 边界。 |  |
| `boundary_loss_commodity` | 对本服务可归属技术损耗 L_s、已物理确认但未验收交付 F 及辅助电 A_s，连接一次上游发电。验收商品 Q 的发电由组合商品系统另外连接一次。其他网络出口 X 保留自身商品及输送负荷，不得除以客户 Q。已含本段损耗/资产的供电数据集不得与本服务叠加。 |  |
| `boundary_atomic` | 原子表示一个已定义可计量对象，只采用一个主要流属性和一个优选单位；不要求将完整设备或一项已表征废物载体分解成化学物质。独立输入即使都用 kg 也须分开；不同介质、方向、气体配方及独立供应服务须另设卡。实际不发生须有证据，未知不等于不发生。 |  |
| `boundary_gas` | 使用实际拥有/运行设备及气瓶库存边界，包含在经验收设备内部进入/离开的实测气体。整体初装 SF6/油属于已投运资产输入，不得再次作为采购材料。包括检修在内的所有前景释放事件仍按物种计量。供应方验收前投运/充装及接收方销毁在该门之外。边界未解决或缺失充装/组成不能形成完整平衡。法规阈值不得充当截断限。 | epa-sf6-balance |
| `boundary_waste` | 废物止于实际有记录的外部交接。记录一项已表征载体、来源、期初/产生/发运/期末库存、接收门及下游连接要求；留存库存不得当作已观察到的未来交接。不得配对虚构接收输入或场外药剂/排放。完整生命周期模型以后可连接一次匹配的处理数据集；此前景数据集不得冒充完整处理足迹。运营方门内实际发生的处理须先明确加入其实际交换，才可声称完整。 |  |
| `boundary_interfaces` | 对同址储能、转换和独立辅助服务，按计量及资产/工单门分开；内部循环不得增加 Q。缺失分离不能完成。背景产品/服务覆盖必须注明所含资源/阶段及排除项，使运营方实际提供的资源计一次，已包含的供应方资源不再重复。 | un-cpc-69112 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operation | 配电运行与交付 | required | 实际运行网络；适用各卡条件 | foreground_production | 每个声明的参考流 |
| assets | 具体投运网络资产及实际退役交接 | required | 实际对应配置及保留资本责任 | foreground_production | 每个声明的参考流 |
| maintenance | 具体外购网络现场服务 | conditional | 实际合同服务匹配其卡；自营作业另筛查 | foreground_production | 每个声明的参考流 |

### 过程：配电运行与交付 (`operation`)

#### 输入

##### 产品流

###### 配电网络入口电力 (`loss_electricity`)

用于可归属技术损耗 L_s 以及有实际交付证据但未验收电量 F 的入口电力。记录入口电压、供应方、地区和交付门；验收商品电量 Q 单独核算。不得替换为最终客户电压的供电清单。

- 选定流：配电网络入口电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：(L_s + F) / Q kWh，按参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`aux_electricity`)

保护、通信、控制、冷却及责任内办公所用、可归属的使用点采购辅助交流电。记录电压、供应方、地区和净外购门；排除具体采购服务已包含的用电和技术损耗。历史官方身份未限定电压与供应方。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 A_s / Q MJ，按参考流
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### 六氟化硫 (`sf6_makeup`)

仅在运行设备实际单独采购纯 SF6 时记录：计量净耗用量并注明纯度和设备。投运设备的整体初装气体已包含在设备输入中；内部回收气体属于库存转移。采购绝缘混合气体须另建按整股混合物质量计量的卡，不得作为纯物种采购。

- 选定流：六氟化硫
- 流属性/单位：质量 / kg
- 数量规则：可归属运行净耗用量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：`epa-sf6-balance`

###### 矿物型变压器绝缘油 (`oil_makeup`)

仅记录运行实际单独采购耗用的矿物绝缘油。注明牌号和批次，排除已包含在投运变压器中的整体初装油及内部循环油；其他液体配方须另设卡。

- 选定流：矿物型变压器绝缘油
- 流属性/单位：质量 / kg
- 数量规则：可归属运行油净耗用量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 产品流

###### 经验收交流配电服务 (`accepted_distribution`)

在具名客户验收点交付的参考服务，发电商品另计。内部转移、出口、反向注入、未验收交付及未满足需求不得增加验收 Q。

- 选定流：经验收交流配电服务
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：1 kWh
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### 回收六氟化硫绝缘气体 (`recovered_sf6_product`)

仅记录在前景交接门被外部接收方实际验收用于再用、已表征的 SF6 气体批次。称量去除气瓶皮重的整股气体，按组成、规格和验收定义身份。内部保留回收气体属于库存，拒收批次属于废物；不得自动抵扣。

- 选定流：回收六氟化硫绝缘气体
- 流属性/单位：质量 / kg
- 数量规则：可归属经验收回收气体整股质量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：`epa-sf6-balance`

##### 废物流

###### 废矿物型变压器绝缘油 (`waste_oil`)

在有记录的外部交接门交付的实际运行废油载体，注明组成、污染状况和接收方。排除仍包含在退役变压器内的油及释放入土壤的油。留存废物属于期末库存，不得虚构发运。接收方处理内部过程在前景之外。

- 选定流：废矿物型变压器绝缘油
- 流属性/单位：质量 / kg
- 数量规则：可归属实际外部交接质量 / Q kg；另追踪产生量和库存
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 送交销毁的废六氟化硫绝缘气体 (`sf6_for_destruction`)

实际作为废物交付外部接收方、已表征的整股气体载体质量，记录组成、污染状况和去皮净重。纯 SF6 物种含量属于独立平衡字段，不得再计一份废物输出。不得假定下游销毁排放或未来接收。

- 选定流：送交销毁的废六氟化硫绝缘气体
- 流属性/单位：质量 / kg
- 数量规则：可归属实际外部废气交接质量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：`epa-sf6-balance`

##### 基本流

###### 排入空气的六氟化硫 (`sf6_air`)

在运行网络和检修门内实际排入空气的纯 SF6 物种质量。对账经校准的物种库存与事件平衡；排除供应方验收前充装、完整气体经验收交接及接收方处理排放。未知差额不得当作零或默认排放。

- 选定流：排入空气的六氟化硫
- 流属性/单位：质量 / kg
- 数量规则：可归属前景 SF6 入空气物种质量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：`epa-sf6-balance`

###### 排入土壤的矿物绝缘油 (`oil_soil`)

仅记录事故回收后实际进入土壤的矿物绝缘油。受污染土壤属于废物载体，不得重复计入其所含已释放油量。实际进入其他介质时另建卡。

- 选定流：排入土壤的矿物绝缘油
- 流属性/单位：质量 / kg
- 数量规则：可归属实测未回收且进入土壤的油量 / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_spill`
- 来源：

### 过程：具体网络资产 (`assets`)

#### 输入

##### 产品流

###### 矿物油浸铜绕组交流配电变压器 (`distribution_transformer`)

仅在实际投运资产符合此具体身份时适用（型号、额定容量、输入/输出电压、铜绕组与矿物油初装）。其他配置须另设具体卡。 按第8节 `inv_asset_gate` 执行。

- 选定流：矿物油浸铜绕组交流配电变压器
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 原始经验收资产净质量_j) / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### SF6 绝缘交流配电开关设备 (`distribution_switchgear`)

仅在实际投运资产符合此具体身份时适用（型号、电压/电流额定值、外壳与内含气体组成/充装量）。其他配置须另设具体卡。 按第8节 `inv_asset_gate` 执行。

- 选定流：SF6 绝缘交流配电开关设备
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 原始经验收资产净质量_j) / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 交联聚乙烯绝缘铝芯交流配电电缆 (`distribution_cable`)

仅在实际投运资产符合此具体身份时适用（型号、额定电压、导体截面、护套、长度与净质量）。其他配置须另设具体卡。 按第8节 `inv_asset_gate` 执行。

- 选定流：交联聚乙烯绝缘铝芯交流配电电缆
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 原始经验收资产净质量_j) / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 预应力混凝土配电电杆 (`distribution_pole`)

仅在实际投运资产符合此具体身份时适用（型号、尺寸、配筋、设计荷载与净质量）。其他配置须另设具体卡。 按第8节 `inv_asset_gate` 执行。

- 选定流：预应力混凝土配电电杆
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 原始经验收资产净质量_j) / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 静止式交流电能表 (`distribution_meter`)

仅在实际投运资产符合此具体身份时适用（型号、准确度等级、接线类型与净质量）。其他配置须另设具体卡。 按第8节 `inv_asset_gate` 执行。

- 选定流：静止式交流电能表
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 原始经验收资产净质量_j) / Q kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 废物流

###### 废弃矿物油浸铜绕组交流配电变压器 (`retired_distribution_transformer`)

已另计的拆出油/气及分离部件须从本载体排除。 按第8节 `inv_retired_carrier` 执行。

- 选定流：废弃矿物油浸铜绕组交流配电变压器
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 实际退役载体交接质量_j) / Q kg；保留原始资产台账
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 废弃SF6 绝缘交流配电开关设备 (`retired_distribution_switchgear`)

已另计的拆出油/气及分离部件须从本载体排除。 按第8节 `inv_retired_carrier` 执行。

- 选定流：废弃SF6 绝缘交流配电开关设备
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 实际退役载体交接质量_j) / Q kg；保留原始资产台账
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 废弃交联聚乙烯绝缘铝芯交流配电电缆 (`retired_distribution_cable`)

已另计的拆出油/气及分离部件须从本载体排除。 按第8节 `inv_retired_carrier` 执行。

- 选定流：废弃交联聚乙烯绝缘铝芯交流配电电缆
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 实际退役载体交接质量_j) / Q kg；保留原始资产台账
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 废弃预应力混凝土配电电杆 (`retired_distribution_pole`)

已另计的拆出油/气及分离部件须从本载体排除。 按第8节 `inv_retired_carrier` 执行。

- 选定流：废弃预应力混凝土配电电杆
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 实际退役载体交接质量_j) / Q kg；保留原始资产台账
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 废弃静止式交流电能表 (`retired_distribution_meter`)

已另计的拆出油/气及分离部件须从本载体排除。 按第8节 `inv_retired_carrier` 执行。

- 选定流：废弃静止式交流电能表
- 流属性/单位：质量 / kg
- 数量规则：sum_j(a_j × 实际退役载体交接质量_j) / Q kg；保留原始资产台账
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

### 过程：具体外购现场服务 (`maintenance`)

#### 输入

##### 产品流

###### 现场静止式交流电能表校准服务 (`meter_calibration`)

仅对实际责任内作业的外购服务适用：现有表、具名准确度检测规程与签署校准验收。不得展开供应方内部或重复计其已包含供应。 按第8节 `inv_technician_service` 执行。

- 选定流：现场静止式交流电能表校准服务
- 流属性/单位：时间 / h
- 数量规则：sum_w(可归属经验收技术人员工时_w) / Q h
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`
- 来源：

###### 现场 SF6 开关设备检漏回收服务 (`sf6_servicing`)

仅对实际责任内作业的外购服务适用：具名 SF6 设备、检漏/回收方法与签署作业验收。不得展开供应方内部或重复计其已包含供应。 按第8节 `inv_technician_service` 执行。

- 选定流：现场 SF6 开关设备检漏回收服务
- 流属性/单位：时间 / h
- 数量规则：sum_w(可归属经验收技术人员工时_w) / Q h
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`
- 来源：

###### 配电线路机械植被清理服务 (`vegetation_clearance`)

仅对实际责任内作业的外购服务适用：具名线路走廊、机械清理方法与经验收清理范围。不得展开供应方内部或重复计其已包含供应。 按第8节 `inv_technician_service` 执行。

- 选定流：配电线路机械植被清理服务
- 流属性/单位：时间 / h
- 数量规则：sum_w(可归属经验收技术人员工时_w) / Q h
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_network` | 先用计量/工单归属损耗、辅助电、客户及网络间服务。共享可变损耗按经校准的服务特定负荷/网络模型分配；固定待机/资产按本服务占用设计峰值容量时间分配。保留原始 kW、h、受益方标识及当期和为一的份额。分母相同不代表不同电压/门服务等价。 |  |
| `allocate_assets` | 每项原始资产 j 保留受益方—期间服务群 k，统一使用占用设计容量时间驱动量 u（设计 kW 乘占用 h）。初始 a_jk = u_k / 有依据的全受益方全寿命 U。寿命/利用修订时冻结历史已验收记账：F_prev_all 为全部受益方和期间已记账份额之和；后续各时段 a_jk = (1 - F_prev_all) × u_current / U_remaining_all，其中有证据且为正的剩余容量时间包含本时段及所有剩余受益方。必须满足 0 <= F_prev_all <= 1 和 0 <= u_current <= U_remaining_all；全部受益方暂记累计份额不得超过一。每次记账后更新余额，修订寿命不得重启原始质量分配。实际最终退役时，对全部原服务群计算 w_jk = u_actual_k / sum_all_lifetime_actual_u 及 delta_jk = w_jk - F_booked_jk。保留原记录，以版本化更正修正每个原服务群及其自身经验收 Q_k；delta 可正可负，但不是负物理交换或替代抵扣。最终份额之和为一，一致应用于原资产、其一次性资本现场来源事件和实际退役载体；每项来源数量保留各自既往记账份额（新观察数量为零）。不得把余额归给处置期 Q。分母未知/非正或既往份额无依据时必须解决，不得均分或用当前 Q 兜底。不得再乘服务份额。长寿命替换设备采用新原始键，当期耗材不是资本；无依据未来去向不是实测退役。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 |  |
| `allocate_services` | 具体采购作业优先按有直接证据的服务工时归属。共享工单份额为本网络经验收技术人员工时 / 该工单总经验收技术人员工时；记录每个受益方并归属一次。服务背景已包含的供应方资源不得再作为前景材料/能源输入。自营作业资源为直接前景交换，工资或内部劳动工时不是外购环境流。 |  |
| `allocate_recovery` | 不得自动给予回收抵扣。经验收回收产品、废物、留存库存、退回及拒收须区分。原始废物批次跨储存/发运期间持续保留，不得将历史退役质量或负荷整项转嫁到当前 Q。明确记录背景交接义务，但不展开接收方。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_energy | operation | 验收交付、入口损耗和辅助电 | meter_and_settlement | 表标识/门；电压；有功 kWh；I,D,X,A_int,A_ext；反向注入；Q；实际拒收 F 证据；负荷模型 L；服务分区；时段/时区；修正；校准；停电；不确定性 | 同步采集入口、网络间、辅助及客户表时段数据，每月对账验收和运行。取得正 Q 及经校准技术损耗模型或充分计量。将差额 R 与实际损耗及物理 F 分开。汇总可归属总量后按 calc_normalize 一次归一化。 | kWh | 原始时段；每月对账 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 声明网络及全部接口 | 每参考流 | 校准、接线/倍率、结算、时间戳及模型验证 |
| cp_material | operation | 运行补充绝缘油 | stock_and_weighing | 批次/牌号；资产；初装/补充区分；期初/期末库存；外部收货/退回；领用；内部回收；毛重/皮重；密度与温度 唯一来源事件ID；运行/资本标记；原资产键；a_j或当期受益份额；原服务批次/Q； | 在库存/检修门逐笔称量；体积仅按适用批次密度和温度换算。净耗用 = 期初 + 收货 - 期末 - 外部退回/发出，并按有记录且单独核算的库存去向调整；对账领用、废物和释放，抵消内部转移。汇总实际可归属补充量后除以 Q 一次。 来源事件按calc_site_attribution归属一次，另保留未分配原始物理QA。 | kg | 逐笔移动；每月对账 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 设备与油库 | 每参考流 | 校准衡器、批次单、收货与工单 |
| cp_gas | operation | SF6 供应、回收、废物和释放 | species_mass_balance | 事件标识/日期；设备/气瓶；状态；纯度/物种比例；毛重/皮重/整股净质量；期初/期末容器与设备物种库存；经验收设备内随带物种收发；补充；内部回收；外部产品/废物验收交接；库存责任；释放路径/不确定性 唯一来源事件ID；运行/资本标记；原资产键；a_j或当期受益份额；原服务批次/Q； | 每次检修和年初年末称量气瓶，并计量/核实设备充装量与组成；按实际前景验收/交接门分类每个事件。分别对账 calc_gas、外部整股流卡及纯物种平衡。纳入门内承包作业释放，排除供应方验收前及接收方交接后事件。缺失充装、身份或负值/未解释平衡是明确缺口。 来源事件按calc_site_attribution归属一次，另保留未分配原始物理QA。 | kg | 每事件及年初年末 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 设备、气瓶及运营方责任内检修门 | 每参考流 | 校准称量、组成检测、充装记录及接收方签署收据 |
| cp_spill | operation | 油入土壤 | incident_mass_balance | 事件/日期；设备；组成；泄出/回收油；介质；污染土载体质量与含油量；不确定性 唯一来源事件ID；运行/资本标记；原资产键；a_j或当期受益份额；原服务批次/Q； | 逐事故在实际地点调查，对账泄出油、回收库存/废物及未回收接收介质。油物种/载体各按其角色计一次，不得将整份土壤及其含油作为重复释放。汇总实际未回收土壤油量后除以 Q；未知去向保持未解决。 来源事件按calc_site_attribution归属一次，另保留未分配原始物理QA。 | kg | 逐事故；年度对账 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 网络事故地点 | 每参考流 | 事故报告、采样、回收联单及质量平衡 |
| cp_waste | operation | 运行废油外部交接 | handover_stock_records | 原始批次；载体身份/组成/状态；产生/期初/发运/期末 kg；接收方与门；收据日期/数量；留存库存；拆出初装介质重复；来源责任 唯一来源事件ID；运行/资本标记；原资产键；a_j或当期受益份额；原服务批次/Q； | 逐批在产生及实际交接时称量和表征，每月保留库存/来源台账。解决发运与接收称量差异，不得虚构未来收据。按适用服务份额汇总原始批次实际交接一次；披露储存量及匹配背景处理要求。 来源事件按calc_site_attribution归属一次，另保留未分配原始物理QA。 | kg | 逐批及每月结存 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 运营方仓储至外部交接门 | 每参考流 | 校准称量、载体分析、接收收据及库存台账 |
| cp_assets | assets | 具体投运资产与实际退役载体 | asset_mass_and_service_ledger | 原始资产标识；型号/规格；验收日期/地点/门；供应阶段覆盖；整体初装油/气；净 kg；称量或件数×核实型号质量；每服务/全部受益方/全部期间占用容量时间 kW,h；有依据寿命/利用及修订；既往份额；实际退役 kg/状态/收据；分离介质质量；不确定性；修订日期/版本；F_prev_all；u_current；U_remaining_all；实际全寿命 u_actual_k；各来源 F_booked_jk；w_jk；带符号 delta_jk；原服务群 Q_k 及更正链接；；cp_capital_amendment逐来源B/版本及原N字段 | 期初、每次变更、每次寿命修订和最终退役时，核实资产型号并按校准称量或件数乘核实型号质量确定验收质量。采集全部受益方和时段的设计 kW 与占用 h，保留不可改写的既往记账和剩余寿命证据，按 allocate_assets 冻结历史并分配余额。实际最终退役时，对账全部实际全寿命驱动量、w_jk、带符号更正及各原服务群 Q_k，分别对应原资产、资本现场事件和实际载体；存档版本化更正，不改变原始物理记录。驱动量或 Q 分母未知/非正时阻止输出。计量实际交接 kg 及拆出初装介质，不得虚构分离或要求供应方/接收方内部数据。 终态和来源/分母修订须完成cp_capital_amendment对账。 | kg | 期初；每次变更/寿命修订/交接；年度结账；最终退役 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 具名网络资产验收与退役门 | 每参考流 | 资产规格、校准/图纸质量、验收、寿命依据、分配及接收台账 |
| cp_capital_amendment | assets | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_work | maintenance | 具体采购服务 | accepted_technician_hours | 工单/供应方；一项具体服务标识；资产/地点；范围/验收标准；技术人员标识；起止/休息；经验收现场 h；受益方/时间归属；供应方能源/材料/行程/工具及运营方供气/油覆盖矩阵；验收证据 唯一来源事件ID；运行/资本标记；原资产键；a_j或当期受益份额；原服务批次/Q； | 逐人员采集现场工时表和签署作业验收，扣除休息后汇总个人经验收现场工时。共享作业按经验收工时分配一次。核实背景服务确切门/覆盖，单列运营方供应与实际输出，并去除已含供应方资源重复。自有人员工时仅为活动记录，另筛查自营实际材料/释放。 来源事件按calc_site_attribution归属一次，另保留未分配原始物理QA。 | h | 逐工单；每月对账 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 指定网络作业地点及合同门 | 每参考流 | 签署工时表、检测/作业规程、验收及资源覆盖矩阵 |
| cp_screen | operation | 实际前景适用与新增身份 | applicability_and_completeness | 场址/资产/工单；发生/未发生/未知；实际交换/规格；供应门；原始属性/单位；独立卡/协议/公式；不确定性与采集责任人 | 期初、每次变更及年末筛查实际运行、自营维护、其他资产配置、直接能源/化学品、废物与释放。仅保留有适用证据的条件核心卡；每项实际未覆盖前景对象须在完整数据集之前补充单一属性/单位及可执行采集/计算。不得要求供应方或接收方内部数据，也不得预列假想污染物。身份或数量未知是缺口，绝非零。 | 实际交换单位 | 期初；每次变更；年末 | 同一完整连续 12 月；保留关联原始资产/批次记录 | 仅运行前景门 | 每参考流 | 规格、工单、采购、观察及未发生证据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | accepted_distribution | Q = 同一完整 12 个月具名客户点验收正向有功 kWh 之和，包含有证据的授权未计费交付。Q>0。反向流、拒收电量和未满足需求分开，参考输出 = 1 kWh。 | cp_energy | Q；1 kWh |  |
| `calc_energy` | loss_electricity; aux_electricity | I = D + X + A_int + L + R；I 包含实际网络反向注入。D 为客户物理交付，X 为其他网络出口，A_int 为入口表内取用辅助电；另购辅助 A_ext 在 I 之外。A=A_int+A_ext。L 依经校准模型或充分计量确定，不得由差额改名。按 allocate_network 将 L,A,D 分到本服务及 X，得到 L_s,A_s,D_s。F=D_s-Q 仅在有实际交付/验收证据时成立。表误差和未知 R 不得作为 L、F 或零。入口损耗负荷=(L_s+F)/Q kWh；辅助负荷=3.6 A_s/Q MJ；kWh×3.6=MJ。 | cp_energy; I;D;X;A_int;A_ext;L;R;Q | L_s；A_s；F；服务电力输入 | ea-distribution-losses |
| `calc_normalize` | 所有清单行 | 逐卡按其单一优选单位计算可归属前景期间原始总量，再仅除以同一服务群经验收 Q 一次。原服务群资产/现场事件更正按 allocate_assets 使用其原 Q_k，不得以当前 Q 替代。失败或零产出的个别任务须保留并归属有证据的原服务群及其正经验收 Q，不得增加 Q 或删除消耗。若责任服务群无正经验收 Q，保留原始总量和未解决缺口，不得输出单位参考结果，也不得转移给无关成功服务群。先核实因子分母和门，再用场址活动量乘因子；已归一化值不得再次相除。内部输入/中间量、损耗、资产 kg 和技术人员 h 不得固定为最终输出 1。参考数量为无量纲 1，单位 kWh。 | cp_energy;可归属总量 | 每 1 kWh 经验收服务的数量 |  |
| `calc_gas` | sf6_makeup; sf6_for_destruction; recovered_sf6_product; sf6_air | 纯 SF6 物种采用 E = S_open + B_open + P - S_close - B_close - T；S 为容器库存，B 为实测设备充装，P 为实际前景门全部外部物种输入（含经验收设备随带充装），T 为全部实际外部物种输出（含设备随带气体、回收产品和废物）。抵消内部回收/转移。整股实测流仅按实测组成转换物种质量一次，纯质量不得再乘物种比例。对账门内唯一释放事件及不确定性；负值/未解释差额解决前 E 仅是 QA 平衡，不是自动排放因子。sf6_air = 可归属门内实际释放物种总量/Q。产品/废气卡使用实测整股载体质量，sf6_makeup 排除验收资产整体初装。供应方验收前及接收方交接后释放不在该平衡内。 | cp_gas; 物种库存; 物种收货; 物种发出与事件证据 | QA 物种平衡；实际 kg SF6/Q 与外部整股 kg/Q | epa-sf6-balance |
| `calc_assets` | assets 过程的所有清单行 | 每项原始资产 j 和服务群 k 仅使用 allocate_assets 的 a_jk（卡片数量中的 a_j）一次：X_ik = sum_j(a_jk × M_ij)，M_ij 为匹配确切卡的原始经验收完整设备净 kg。件数按经核实型号特定净 kg/件转换；图纸/密度换算须有适用状态、密度和不确定性，不得假定设备质量。实际退役载体质量在交接时计量，不得由未来去向或 BOM 推定。最终退役时，各实际载体和资产使用 w_jk；来源数量 M_ij 的更正量为 (w_jk - F_booked_jk) × M_ij，F_booked_jk 取自该来源数量台账。因此从未记账的新实测载体采用 F_booked_jk=0。保留原始物理质量和原记账；版本化更正修正原服务群结果，并仅除以该群 Q_k 一次，不得使用处置年 Q。负更正仅冲回过度分配，不是负物理质量或避免负荷抵扣。不得递归供应方资本或再次乘服务份额。全寿命驱动量和原服务群 Q_k 须有依据且为正；分母未解决时不得输出单位参考结果。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | cp_assets;原始资产质量;寿命容量时间;既往分配;实际退役 | 可归属具体资产及实际退役载体 kg/Q |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| `calc_work` | maintenance 过程的所有清单行 | H_w=sum_技术人员(经验收现场结束-开始-休息工时)，不得对已汇总人员工时再乘人数。直接作业采用已归属 H_w；共享作业仅用 H_w×本网络经验收工时/工单总经验收工时 一次。确切具体服务输入=sum 可归属 H_w/Q h。连接背景服务前核实供应方覆盖矩阵及运营方单独提供资源。数量验收确认实际已完成范围内工时，不要求维护结果成功。实际消耗且有证据的失败、拒收和返工工时均纳入，即使作业结果未验收；争议/抵扣另记，不得抹去实际服务。失败交付不得增加 Q。 归一化前逐来源任务总量应用calc_site_attribution，保留原始已实施工时及其原资产/服务批次。 | cp_work;经验收技术人员工时及归属 | 具体服务 h/Q |  |
| `calc_waste` | waste_oil; sf6_for_destruction; 所有退役资产载体 | 逐原始载体批次：期初库存 + 实际产生 - 实际外部交接 - 有记录转换/内部再用 = 期末库存，实测损失另计。交接载体在外部门计一次，保留原始责任和适用资产份额；未发运库存仍是库存，不得假定接收。已拆出油/气/部件不得仍保留在完整设备质量中。背景处理连接与实际载体/门匹配一次，不列接收方内部流卡。 | cp_waste; cp_gas; cp_assets | 库存对账及实际外部 kg/Q |  |
| calc_site_attribution | 边界门内实际发生的源事件 | 实际门内气体、材料、泄漏、服务和废物来源事件须记录唯一标识、原资产、原服务群及运行/资本分类。经常作业仅使用实测当期受益份额一次。可识别原资产退役或一次性验收后资本现场任务遵循 allocate_assets 的同一原资产分配台账及最终 w_jk；保留每项事件数量及其各自已记账份额，以 delta_jk 乘该事件数量对原服务群结果/Q_k 作版本化更正。不得整项归给事件年 Q、额外乘寿命/父份额或把负更正视为负物理流。实际资源、合同作业及释放在 calc_normalize 前应用份额；calc_assets 已加权资产行及其他已归属数量在此权重为 1。失败/零产出任务须先归属原服务群再归一化；Q_k 无依据或非正时阻止输出，不得删除消耗。投运验收前供应方制造/安装/初装仍为背景。未分配年度气体物理平衡仅作 QA，不得再次叠加事件加权释放。实际载体交接保留原来源群，未发生事件仍未观察。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | cp_gas; cp_material; cp_spill; cp_work; cp_assets; cp_waste; Q | 一次归属实际现场事件总量/Q |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。对全部原受益者—期间队列使用既有设计占用kW乘占用小时驱动。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_coverage | 所有清单行 | 每个协议和原始记录由具名运营方采集责任人负责。记录对象、位置、时间戳、原始单位、校准方法、频次和覆盖。每张条件卡凭规格/作业证据判定发生/不发生/未知；实际新增须在完整前补充确切独立卡、协议和公式。不得预列供应方材料目录或假想默认排放。 | cp_screen；原始证据 |
| quality_identity | 所有清单行 | 未绑定流身份须逐行保持明确，直至直接官方记录及不可变证据哈希匹配对象、状态、类型/方向/角色、属性/单位及接收介质。仅保留历史使用点交流电绑定，不声称新鲜服务端核实。搜索命中或近似名称不得绑定服务或资本设备。 | 官方直读记录证据；manifest unresolved_flow_identities |
| quality_missing | 所有清单行 | 缺失数量、未知身份、无依据质量/寿命/密度及未解释平衡不得当作零。报告缺口、采集责任人、解决方法和不确定性，关键缺口关闭前不得声称完整。估计须明确场址依据、区间及敏感性，绝非未标注默认值或合规限值。 | 全部协议；缺口清单 |
| quality_background_gates | 所有产品流和废物流清单行 | 核实每个匹配背景输入/处理的边界、资源覆盖、参考属性/单位及数据集分母。资本资产门涵盖验收前制造/交付/安装/初装，不得再单列这些内部过程。具体作业服务仅含合同声明资源。披露未连接背景负荷及仅前景的可比性限制。 | 门和覆盖矩阵；供应方/接收方规格 |
| inv_asset_gate | distribution_transformer; distribution_switchgear; distribution_cable; distribution_pole; distribution_meter | 产品门为具名网络位置上经验收的已投运资产；供应方在该门之前的制造、交付、安装和整体初装属于背景，不展开。完整设备净质量含整体部件/初装介质，排除包装及单独供应的替换件。使用原始资产净质量和一次服务期间资产份额，不得仅用本年采购质量。 | 所列各清单行既有的采集协议和证据。 |
| inv_retired_carrier | retired_distribution_transformer; retired_distribution_switchgear; retired_distribution_cable; retired_distribution_pole; retired_distribution_meter | 仅记录对应退役实物在前景外部交接门实际作为废物交付的情形，注明真实状态、保留介质和污染。计量净载体质量，不得由原始 BOM 推定分离或质量。保留原始资产责任与退役分配，不得整项转嫁到本年或虚构未来接收输入。 | 所列各清单行既有的采集协议和证据。 |
| inv_technician_service | meter_calibration; sf6_servicing; vegetation_clearance | 1 h 为一名技术人员经验收的现场工时，排除休息；班组按人员工时求和，不得将总人员工时再乘人数。合同注明供应方行程、便携工具、能源、耗材的包含范围和确切上游门。运营方另行提供的 SF6/油仍单列输入；回收气体、废物交接和运营方排放仍为实际前景输出。自有员工时间不属于外购服务，应按 cp_screen 记录自营作业实际交换。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求全部限定信息、正 Q 及唯一 1 kWh 服务输出。核验客户验收、不得替换商品 UUID，并分开拒收、反向、内部、出口及未满足电量。不同电压、质量或门不可互换。 | un-cpc-69112 |
| `validate_balance` | 检查 I,D,X,A_int,A_ext,L,R,Q、服务归属及实际 F 证据。不得重复计辅助电、将差额改名损耗或将未分配出口除以 Q。关键差额未解决及排除接口未分离不能完成。 | ea-distribution-losses |
| `validate_foreground` | 检查逐卡单一具体对象/属性/单位、实际发生、可执行协议且无旧供应方/处理链。核实完整设备/整体初装、供应服务/资源、废物/含物质及内部/外部去重。复核资产实测 kg、全用户全期间寿命分母及一次退役校正；缺失背景清单须披露，不得当作零。 |  |
| validate_capital_amendment | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| `validate_gas` | 对账纯物种库存、门内实际 SF6 事件总量、整股产品/废物质量及原始设备随带物种收发。不得以铭牌代替充装、默认泄漏、重复组成比例、虚构未来接收或将接收方销毁排放列入前景平衡。 | epa-sf6-balance |
| `validate_projection` | 全部边界/分配/卡/协议/计算/质量义务须由支持的源表投影至 structured 和机器 guidance，并有有效行/协议引用。比较实际语义及双语条件/公式，不能只看 schema/指纹。atomic/localized 标记和检查通过不代表方法、发布翻译或整个 CPC 范围获批。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | distribution_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明前景交流配电服务，按门匹配背景输入/处理清单及单独的验收商品发电组合一次 |
| excluded_use | 无背景连接的完整交付电力商品足迹；储能/独立辅助服务；跨不同门/电压比较；发布批准 |
| required_metadata | 全部限定信息；Q/平衡；前景门；保留资产质量/寿命份额；服务覆盖；实际废物交接/库存；身份与来源证据 |
| required_quality_disclosure | 未绑定 UUID、未连接背景数据集、差额 R、计量/模型/质量/寿命不确定性、排除接口与分配敏感性 |
| update_trigger | 拓扑/电压/客户/责任变化，资产或服务配置变化，气体/损耗修正，门或背景覆盖变化 |

## 11. 数据源


| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-69112 | official_guidance | UNSD CPC Version 3.0, subclass 69112 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69112 | 自营配电及表维护；发电/输电/表安装/独立抄表排除；储能与辅助服务属于更广分类而本 PCR 排除 |
| epa-electricity-delivery | official_guidance | US EPA, Electricity Delivery and its Environmental Impacts, updated 2026-07-14. https://www.epa.gov/energy/electricity-delivery-and-its-environmental-impacts | 配电/变压器/线路维护与 SF6 筛查；不用其示例电压设全球限值 |
| ea-distribution-losses | official_guidance | New Zealand Electricity Authority, Distribution losses, web snapshot 2026-10-27, Types of losses. https://www.ea.govt.nz/industry/distribution/distribution-losses/ | 技术、非技术、对账损耗和未计量电的区分；无默认损耗率 |
| epa-sf6-balance | official_guidance | US EPA, Subpart DD Information Sheet, How Must GHG Emissions Be Calculated?, web snapshot 2026-10-27. https://www.epa.gov/ghgreporting/subpart-dd-information-sheet | 容器库存、取得、转出与设备存量变化的组分质量平衡依据；本 PCR 的实测库存式是守恒重写，不声称通过美国法定报告合规检查 |
