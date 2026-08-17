---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whey
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 乳清

## 1. 范围与适用性

本 PCR 支持为在声明工厂门作为液态乳制品销售或转移的乳清构建前景数据包。范围包括酶凝乳酪或酪蛋白制造后分离的甜乳清，以及酸凝后分离的酸乳清。声明产品可以是未处理、澄清、巴氏杀菌、冷却或浓缩状态，但应保持为可泵送的液态乳清产品。每个数据集均应披露来源乳品过程、动物种类或种类混合、甜/酸乳清状态、总固形物或干物质含量、酸度或 pH、处理路线、温度状态以及散装或包装市场状态。

前景边界从分离乳清进入乳清收集线，或从外购液态乳清进入报告设施时开始；到合格液态乳清在声明工厂门准备发运时结束。为声明液态乳清产品实施的收集、转移、澄清、乳脂/细渣去除、冷却、储存、巴氏杀菌、膜浓缩、蒸发、就地清洗、包装和场内废水处理均应按实际纳入。乳清分离之前的原奶生产、乳酪或酪蛋白制造，外购物料和公用工程生产，场外运输，下游转化，分销、使用和生命末期应在研究范围需要时链接相应数据集。

乳清粉、酸乳清粉、以干品销售的乳清蛋白浓缩物或分离物、乳糖、乳清渗透物粉、乳清干酪、配制乳清饮料，以及乳成分已不符合声明液态乳清身份的产品均不在范围内。由于 CPC 范围为液态乳清产品，干燥不属于本 PCR；粉末或配料制造应使用适用的下游产品 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whey |
| classification_refs | CPC 3.0 `22130` Whey |
| covered_products | 作为液态乳制品销售或转移的甜乳清和酸乳清；状态已声明的未处理、澄清、巴氏杀菌、冷却或浓缩液态乳清 |
| excluded_products | 乳清粉和酸乳清粉；干燥乳清配料；以干品销售的乳清蛋白浓缩物或分离物；乳糖；乳清渗透物粉；乳清干酪；配制乳清饮料；乳酪、酪蛋白、奶、奶油和非乳类似物 |
| representative_product | 声明工厂门的可销售液态乳清 |
| production_route | 乳酪或酪蛋白凝固及凝块分离后回收，并进行路线特定的调理、储存和发运 |
| market_state | 散装或包装的可泵送液体；甜或酸乳清；已声明固形物、组成、温度、处理和浓缩状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 用于食品、饲料、发酵、配料制造或其他声明下游用途的合格液态乳清 |
| How much | 声明工厂门 1 kg 湿产品 |
| How well | 符合声明的甜/酸乳清身份、来源过程规格、固形物和组成基准、pH 或酸度、微生物或商业规格及处理状态 |
| How long or cycle | 一个生产批次或报告期产出，归一化至 1 kg 发运产品 |
| reference_flow_link | `storage_and_dispatch` 的参考产品输出 `whey_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Whey `7ee9083e-5a51-476e-b96f-1501752e169a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 甜或酸乳清；来源乳品和动物种类；原始、澄清、巴氏杀菌、冷却或浓缩状态；总固形物或干物质；可获得时的蛋白质、脂肪、乳糖、灰分或矿物质基准；pH 或可滴定酸度；温度；散装或包装形式；制造地理；工厂门；上游共享乳品操作的分配处理 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_wet_mass` | 参考乳清产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流应表达为发运时湿产品质量；不得用干物质质量替代 1 kg 参考数量。 |
| `composition_basis` | 乳清原料、中间品、产品、损失和共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 及声明质量分数 | 记录湿质量和总固形物或干物质的取样基准；披露蛋白质、脂肪、乳糖、灰分和酸度数值采用湿基还是干基。 |
| `concentration_conversion` | 浓缩液态乳清 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过实测湿质量和固形物质量平衡换算进料与浓缩物数量；分别保留浓缩倍数和蒸发或去除水量。 |
| `utility_conversion` | 电力、燃料、蒸汽、制冷和水 | 适用的能量、质量或体积属性 | kWh、MJ、kg 或 m3 | 保留实测公用工程单位并记录换算因子；仅在批次或报告期总量与合格产品质量对账后进行归一化。 |

## 5. 系统边界

数据集应表示声明的液态乳清路线，不得无说明地引入上游乳酪负荷、下游粉末制造或处置抵扣。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入回收线的分离湿乳清，或设施接收的外购液态乳清 |
| starting_condition_role | 液态乳清前景系统的产品身份与上游负荷交接点 |
| product_classification_scope | CPC 3.0 `22130` Whey，解释为液态乳清而非单独分类的粉末产品 |
| recursive_input_rule | 已归类为液态乳清的输入应以 Whey 流 UUID、湿质量、限定信息和链接上游数据集作为产品输入记录；不得在接收过程中重复构建其上游乳清生产负荷 |
| upstream_dataset_requirement | 通过经审查的上游数据集和声明的分配处理链接原奶、乳酪或酪蛋白生产及共享凝固/分离负荷；前景从接收开始时应链接外购乳清数据集 |
| disclosure | 披露乳清来源、甜/酸状态、来源乳制品、动物种类、固形物与组成基准、处理状态、接收或分离点、纳入操作、分配方法、损失、共产品、废水路线、地理、期间和工厂门 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_product_identity` | 产品纳入 | 仅纳入乳酪、酪蛋白或类似乳品制造中，奶或乳制品凝固后与凝块分离得到的液态乳清，并保留甜/酸乳清及来源过程身份。 | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `boundary_start_and_end` | 前景边界 | 从乳清分离进入回收线或外购液态乳清接收开始；到合格液态乳清在声明工厂门准备发运时结束。 | `codex-cxs-289-1995-whey-powders`; `us-epa-ap42-9-6-1-cheese` |
| `boundary_included_operations` | 场内乳清处理 | 为声明产品实施时，纳入收集、转移、澄清、冷却、巴氏杀菌、液态浓缩、储存、清洗、包装和场内废水处理。 | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `boundary_acid_whey_timing` | 酸乳清路线 | 记录从分离到调理的时间，避免未披露的停留导致酸度变化；酸乳清应及时处理，并披露实际停留时间。 | `eu-2019-2031-fdm-bat` |
| `boundary_downstream_exclusions` | 粉末和衍生配料 | 从液态乳清前景边界排除干燥，以及乳清粉、蛋白质浓缩物或分离物、乳糖、渗透物粉、乳清干酪和配制饮料的下游制造。 | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `boundary_recursive_whey_input` | 外购或转移液态乳清 | 将同类别乳清记录为带上游数据集的输入，不得重复计算其上游乳品或回收负荷。 |  |
| `boundary_emissions_and_waste` | 直接排放与处理 | 纳入可归属于范围内操作的实测场内废水、产品损失、残渣、制冷剂损失、燃烧排放和处理输出；披露场外处理链接。 | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| whey_receipt_and_recovery | 乳清接收与回收 | required |  | 前景收集与产品交接 | 转入调理的湿乳清 |
| liquid_whey_conditioning | 液态乳清调理 | conditional | 销售液态乳清前实施澄清、乳脂/细渣去除、巴氏杀菌、冷却、膜处理或蒸发时纳入 | 前景调理 | 经调理的可泵送乳清 |
| storage_and_dispatch | 储存与发运 | required |  | 前景储存与产品发运 | 发运 1 kg 合格液态乳清 |
| onsite_effluent_management | 场内废水管理 | conditional | 废水或产品损失在场内处理、均质、消化或排放时纳入 | 前景废物与排放管理 | 经处理废水和残余输出 |

### 过程：乳清接收与回收（`whey_receipt_and_recovery`）

#### 输入

##### 产品流

###### 分离或外购液态乳清原料（`raw_whey_input`）

记录进入前景系统的湿乳清，包括来源、甜/酸状态、组成、温度及链接上游负荷的交接。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：实测接收或转入乳清回收线的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_whey_batch_mass_and_composition`
- 数据来源：采用由 `cp_whey_batch_mass_and_composition` 管理的校准罐计量、称重传感器、转移、实验室、库存和发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：必需（`required`）。每个数据集均必需；区分场内分离乳清与外购乳清，并链接其上游数据集。
- 来源：`codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### 乳清接收、转移和初始冷却用电（`recovery_electricity`）

将接收、泵送、筛分、转移和初始冷却消耗的电力记录为一项阶段特定电力交换。

- 选定流：Electricity supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：乳清接收与回收的计量电力或有文件依据的设备分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：必需（`required`）。乳清接收与回收过程必需；仅在确无用电且有证据时记录为零。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入调理或储存的回收湿乳清（`recovered_whey_intermediate`）

在计入残留、样品、单独回收输出和已记录乳清损失后，计算转移的湿态中间品。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或经对账的批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_whey_batch_mass_and_composition`
- 数据来源：采用由 `cp_whey_batch_mass_and_composition` 管理的校准罐计量、称重传感器、转移、实验室、库存和发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：必需（`required`）。必需；未发生调理操作时直接转入储存过程。
- 来源：`codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

##### 废物流

###### 接收与回收产生的废乳清（`recovery_whey_loss`）

记录送往一个有文件依据的废物或处理去向的乳清泄漏、残留、取样损失或不合格原乳清。

- 选定流：Waste whey from recovery
- 流属性/单位：Mass / kg
- 数量规则：实测废乳清质量或分配到有记录去向的质量平衡差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在实际产生废乳清流时适用；不得与废水或分离残渣合并。
- 来源：`eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese`

##### 基本流

### 过程：液态乳清调理（`liquid_whey_conditioning`）

#### 输入

##### 产品流

###### 进入调理的回收乳清（`conditioning_whey_input`）

记录进入所纳入调理操作的回收乳清湿质量和组成。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：从回收或接收罐实测的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_whey_batch_mass_and_composition`
- 数据来源：采用由 `cp_whey_batch_mass_and_composition` 管理的校准罐计量、称重传感器、转移、实验室、库存和发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在纳入 `liquid_whey_conditioning` 时适用。
- 来源：`codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### 液态乳清调理用电（`conditioning_electricity`）

记录澄清、分离、巴氏杀菌辅机、冷却、膜处理、蒸发辅机和相关泵的电力。

- 选定流：Electricity supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：纳入调理操作的计量电力或有文件依据的设备分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在调理设备耗电时适用；与回收和储存用电分开记录。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理用外购蒸汽（`conditioning_purchased_steam`）

记录为巴氏杀菌或蒸发跨越设施边界的外购蒸汽，不得与热水或燃料合并。

- 选定流：Purchased steam
- 流属性/单位：Mass / kg
- 数量规则：计量蒸汽质量；在前景记录中保留压力、温度、凝结水回流和焓值计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在使用外购蒸汽时适用；不得用本卡记录已由单独燃料卡计入的场内产汽。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理用外购热水（`conditioning_purchased_hot_water`）

将作为热公用工程使用的外购热水与工艺水和蒸汽分开记录。

- 选定流：Purchased hot water
- 流属性/单位：Mass / kg
- 数量规则：计量热水质量，并保留供回水温度用于热量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在外购热水供应时适用；不得重复计入已作为工艺水或 CIP 水记录的水量。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理燃烧的天然气（`conditioning_natural_gas`）

记录供应给场内锅炉或直接加热器、用于纳入调理热过程的天然气。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：计量气量，以有文件依据的低位热值换算并分配至调理过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧天然气时适用；不得与柴油、LPG、外购蒸汽或外购热水合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理燃烧的柴油（`conditioning_diesel`）

记录供应给场内锅炉或加热器、用于纳入调理热过程的柴油。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：分配至调理过程的实测柴油领用量或储罐库存差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧柴油时适用；除非可直接归属本过程，应将应急发电机柴油留在供电数据集中。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理燃烧的液化石油气（`conditioning_lpg`）

记录供应给场内锅炉或加热器、用于纳入调理热过程的液化石油气。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：分配至调理过程的实测 LPG 领用量或储罐库存差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧 LPG 时适用；不得与天然气或柴油合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清调理所供工艺水和 CIP 水（`conditioning_water`）

将跨越过程边界的冷水或常温工艺及清洗水记录为一项供水交换；外购热水另行记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至纳入调理和清洗操作的计量水量或经验证罐容记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在使用工艺水或 CIP 水时适用；排除外购热水和未跨越边界的内部循环水。
- 来源：`eu-2019-2031-fdm-bat`

###### CIP 用氢氧化钠（`conditioning_sodium_hydroxide`）

按产品质量和活性浓度记录供应给乳清生产线的氢氧化钠。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：与纳入清洗或消毒周期核对的氢氧化钠领用、加药控制器或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用该单一化学品时适用；任何其他清洗剂或消毒剂必须按具体物种另设卡片。
- 来源：`eu-2019-2031-fdm-bat`

###### CIP 用硝酸（`conditioning_nitric_acid`）

将供应给乳清生产线的硝酸与磷酸及其他清洗剂分开记录。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：与纳入清洗或消毒周期核对的硝酸领用、加药控制器或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用该单一化学品时适用；任何其他清洗剂或消毒剂必须按具体物种另设卡片。
- 来源：`eu-2019-2031-fdm-bat`

###### CIP 用磷酸（`conditioning_phosphoric_acid`）

将供应给乳清生产线的磷酸与硝酸及其他清洗剂分开记录。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：与纳入清洗或消毒周期核对的磷酸领用、加药控制器或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用该单一化学品时适用；任何其他清洗剂或消毒剂必须按具体物种另设卡片。
- 来源：`eu-2019-2031-fdm-bat`

###### 过氧乙酸消毒剂（`conditioning_peracetic_acid`）

按产品质量和活性浓度记录供应给乳清生产线的过氧乙酸消毒剂。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：与纳入清洗或消毒周期核对的过氧乙酸领用、加药控制器或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用该单一化学品时适用；任何其他清洗剂或消毒剂必须按具体物种另设卡片。
- 来源：`eu-2019-2031-fdm-bat`

###### 次氯酸钠消毒剂（`conditioning_sodium_hypochlorite`）

仅在次氯酸钠实际供应给纳入乳清生产线时记录该消毒剂。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：与纳入清洗或消毒周期核对的次氯酸钠领用、加药控制器或采购质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_and_materials`
- 数据来源：采用由 `cp_cleaning_water_and_materials` 管理的 CIP 加药控制器、物料领用或采购、水表及清洗周期记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用该单一化学品时适用；任何其他清洗剂或消毒剂必须按具体物种另设卡片。
- 来源：`eu-2019-2031-fdm-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经调理的液态乳清（`conditioned_whey_output`）

记录转入储存的经调理乳清的湿质量、固形物、pH 或酸度、温度和处理状态。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：实测经调理乳清转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_whey_batch_mass_and_composition`
- 数据来源：采用由 `cp_whey_batch_mass_and_composition` 管理的校准罐计量、称重传感器、转移、实验室、库存和发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在纳入调理时适用；不得将同一流再次记录为不合格乳清或废水。
- 来源：`codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### 回收乳清稀奶油（`conditioning_recovered_cream`）

仅在澄清或分离产生物理上分开的可销售乳清稀奶油流时记录。

- 选定流：Recovered whey cream
- 流属性/单位：Mass / kg
- 数量规则：单独转移回收输出的实测湿质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_allocation`
- 数据来源：采用由 `cp_coproduct_and_allocation` 管理的实测产量、组成、去向和分配记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在存在有文件依据后续用途的物理独立输出时适用；不得在其他共产品或废物卡中重复计算同一物料。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 回收乳脂（`conditioning_recovered_milk_fat`）

仅在回收乳脂是区别于乳清稀奶油的物理独立输出时记录。

- 选定流：Recovered milk fat
- 流属性/单位：Mass / kg
- 数量规则：单独转移回收输出的实测湿质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_allocation`
- 数据来源：采用由 `cp_coproduct_and_allocation` 管理的实测产量、组成、去向和分配记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在存在有文件依据后续用途的物理独立输出时适用；不得在其他共产品或废物卡中重复计算同一物料。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清澄清回收的分离细渣（`conditioning_recovered_dairy_fines`）

仅在数量、质量、用途和去向证明其为单独回收输出时，将分离细渣记录为产品。

- 选定流：Recovered separator fines from whey clarification
- 流属性/单位：Mass / kg
- 数量规则：单独转移回收输出的实测湿质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_allocation`
- 数据来源：采用由 `cp_coproduct_and_allocation` 管理的实测产量、组成、去向和分配记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在存在有文件依据后续用途的物理独立输出时适用；不得在其他共产品或废物卡中重复计算同一物料。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 液态乳清渗透物（`conditioning_fluid_whey_permeate`）

仅在膜处理产生具有已记录用途或市场去向的独立可泵送输出时记录液态乳清渗透物。

- 选定流：Fluid whey permeate
- 流属性/单位：Mass / kg
- 数量规则：单独转移回收输出的实测湿质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_and_allocation`
- 数据来源：采用由 `cp_coproduct_and_allocation` 管理的实测产量、组成、去向和分配记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在存在有文件依据后续用途的物理独立输出时适用；不得在其他共产品或废物卡中重复计算同一物料。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 送往处理的蒸发器凝结水（`conditioning_evaporator_condensate`）

记录从调理过程流出并进入废水管理的单独收集蒸发器凝结水；内部回用计入水平衡，但不是边界交换。

- 选定流：Evaporator condensate from whey concentration
- 流属性/单位：Mass / kg
- 数量规则：实测废物流质量，或以有文件依据的密度将体积换算为质量，并分配至其去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该独立废物流跨越调理边界时适用；保留其唯一实际去向。
- 来源：`eu-2019-2031-fdm-bat`

###### 乳清澄清产生的不合格分离细渣（`conditioning_rejected_dairy_fines`）

将没有已记录产品去向的分离细渣记录为一项具体废物流。

- 选定流：Rejected separator fines from whey clarification
- 流属性/单位：Mass / kg
- 数量规则：实测废物流质量，或以有文件依据的密度将体积换算为质量，并分配至其去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该独立废物流跨越调理边界时适用；保留其唯一实际去向。
- 来源：`eu-2019-2031-fdm-bat`

###### 乳清调理产生的废过滤残渣（`conditioning_filter_residue`）

记录从纳入乳清调理所用过滤器中物理移除的废过滤残渣。

- 选定流：Spent filter residue from whey conditioning
- 流属性/单位：Mass / kg
- 数量规则：实测废物流质量，或以有文件依据的密度将体积换算为质量，并分配至其去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该独立废物流跨越调理边界时适用；保留其唯一实际去向。
- 来源：`eu-2019-2031-fdm-bat`

###### 调理产生的不合格乳清（`conditioning_rejected_whey`）

仅在不合格调理乳清批次未作为产品回收或内部返回时，将其记录为废物。

- 选定流：Rejected whey from conditioning
- 流属性/单位：Mass / kg
- 数量规则：实测废物流质量，或以有文件依据的密度将体积换算为质量，并分配至其去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该独立废物流跨越调理边界时适用；保留其唯一实际去向。
- 来源：`eu-2019-2031-fdm-bat`

###### 乳清调理和 CIP 产生的废水（`conditioning_wastewater`）

记录从调理和 CIP 转移至场内或场外处理的废水流，排除单独回收产品和凝结水。

- 选定流：Dairy processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测废物流质量，或以有文件依据的密度将体积换算为质量，并分配至其去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该独立废物流跨越调理边界时适用；保留其唯一实际去向。
- 来源：`eu-2019-2031-fdm-bat`

##### 基本流

###### 场内调理供热产生的化石二氧化碳（`conditioning_carbon_dioxide_fossil_to_air`）

计算为纳入调理供热实际燃烧天然气、柴油或 LPG 所释放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据实际燃料用量、经审核的物质特定因子和有文件依据的单位换算计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧且具有物质特定证据时适用；不得在没有经审核方法时拆分聚合排放来推导本卡。
- 来源：`eu-2021-2279-environmental-footprint`

###### 场内调理供热产生的一氧化氮（`conditioning_nitrogen_monoxide_to_air`）

在实测或依据经审核的物种特定燃烧记录推导时，将一氧化氮作为单独物质记录。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据实际燃料用量、经审核的物质特定因子和有文件依据的单位换算计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧且具有物质特定证据时适用；不得在没有经审核方法时拆分聚合排放来推导本卡。
- 来源：`eu-2021-2279-environmental-footprint`

###### 场内调理供热产生的二氧化氮（`conditioning_nitrogen_dioxide_to_air`）

在实测或依据经审核的物种特定燃烧记录推导时，将二氧化氮作为单独物质记录。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据实际燃料用量、经审核的物质特定因子和有文件依据的单位换算计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧且具有物质特定证据时适用；不得在没有经审核方法时拆分聚合排放来推导本卡。
- 来源：`eu-2021-2279-environmental-footprint`

###### 场内调理供热产生的二氧化硫（`conditioning_sulfur_dioxide_to_air`）

在实测或依据有文件依据的燃料硫含量及经审核方法计算时，将二氧化硫作为单独物质记录。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据实际燃料用量、经审核的物质特定因子和有文件依据的单位换算计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内燃烧且具有物质特定证据时适用；不得在没有经审核方法时拆分聚合排放来推导本卡。
- 来源：`eu-2021-2279-environmental-footprint`

### 过程：储存与发运（`storage_and_dispatch`）

#### 输入

##### 产品流

###### 进入储存的经调理乳清（`storage_whey_input`）

记录进入最终储存和发运的液态乳清质量、组成、温度和状态。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：进入最终储存的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_whey_batch_mass_and_composition`
- 数据来源：采用由 `cp_whey_batch_mass_and_composition` 管理的校准罐计量、称重传感器、转移、实验室、库存和发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：必需（`required`）。必需；未纳入调理时，该输入可直接来自回收过程。
- 来源：`codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition`

###### 储存、制冷、转移和装载用电（`storage_electricity`）

记录储罐搅拌、制冷、转移和装载的阶段特定电力。

- 选定流：Electricity supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：储存与发运的计量电力或有文件依据的设备分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：必需（`required`）。储存与发运过程必需；仅在这些操作确无用电且有证据时记录为零。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### R717 氨制冷剂补充量（`storage_ammonia_refrigerant_input`）

记录补充至服务于纳入乳清储存或冷却的 R717 制冷回路的无水氨。

- 选定流：Ammonia, anhydrous, refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：仅一次分配至纳入制冷系统的实测制冷剂采购量或库存平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用 R717 时适用；任何其他制冷剂必须在数据集验证前按具体化学物质另设输入卡。
- 来源：`eu-2019-2031-fdm-bat`

###### 低密度聚乙烯包装膜（`packaging_ldpe_film_input`）

记录跨越声明产品边界的低密度聚乙烯包装膜，不得与其他包装材料合并。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 高密度聚乙烯包装容器（`packaging_hdpe_container_input`）

记录跨越声明产品边界的高密度聚乙烯包装容器，不得与其他包装材料合并。

- 选定流：High-density polyethylene packaging container
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 纸质包装标签（`packaging_paper_label_input`）

记录跨越声明产品边界的纸质包装标签，不得与其他包装材料合并。

- 选定流：Paper packaging label
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 瓦楞纤维板包装（`packaging_corrugated_fibreboard_input`）

记录跨越声明产品边界的瓦楞纤维板包装，不得与其他包装材料合并。

- 选定流：Corrugated fibreboard packaging
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 钢制包装容器（`packaging_steel_container_input`）

记录跨越声明产品边界的钢制包装容器，不得与其他包装材料合并。

- 选定流：Steel packaging container
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 铝制包装容器（`packaging_aluminium_container_input`）

记录跨越声明产品边界的铝制包装容器，不得与其他包装材料合并。

- 选定流：Aluminium packaging container
- 流属性/单位：Mass / kg
- 数量规则：通过实测或供应商有文件依据的单件质量换算的物料清单或领用数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在该确切包装材料跨越边界时适用；散装发运采用有证据的 `not_applicable`，任何其他材料必须另设卡片。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门合格液态乳清（`whey_reference_product`）

这是参考产品；记录发运湿质量以及声明液态乳清的全部必需限定信息。

- 选定流：Whey `7ee9083e-5a51-476e-b96f-1501752e169a`
- 流属性/单位：Mass / kg
- 数量规则：声明工厂门 1 kg 合格湿产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 数据来源：PCR 参考流定义和合格产品发运记录。
- UUID 状态：已核验既有参考流（`verified_reference`）。
- 不确定性：参考数量固定；湿质量测量和产品合格判定的不确定性应另行披露。
- 适用性：必需（`required`）。必需，并固定为 PCR 定量参考。
- 来源：`codex-cxs-289-1995-whey-powders`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 储存与发运产生的废乳清（`storage_whey_loss`）

记录送往一个有文件依据废物去向的不合格产品、罐底残留、样品、泄漏或过期液态乳清。

- 选定流：Waste whey from storage and dispatch
- 流属性/单位：Mass / kg
- 数量规则：实测损失或经对账的储存与发运质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在实际产生废乳清流时适用；不得与包装废物合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 低密度聚乙烯包装膜废料（`packaging_ldpe_film_waste`）

将发运前产生的低密度聚乙烯包装膜废料记录为一项材料特定废物流。

- 选定流：Low-density polyethylene packaging film scrap
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 不合格高密度聚乙烯包装容器（`packaging_hdpe_container_waste`）

将发运前产生的不合格高密度聚乙烯包装容器记录为一项材料特定废物流。

- 选定流：Rejected high-density polyethylene packaging containers
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 纸质标签废料（`packaging_paper_label_waste`）

将发运前产生的纸质标签废料记录为一项材料特定废物流。

- 选定流：Paper packaging label scrap
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 瓦楞纤维板包装废料（`packaging_corrugated_fibreboard_waste`）

将发运前产生的瓦楞纤维板包装废料记录为一项材料特定废物流。

- 选定流：Corrugated fibreboard packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 不合格钢制包装容器（`packaging_steel_container_waste`）

将发运前产生的不合格钢制包装容器记录为一项材料特定废物流。

- 选定流：Rejected steel packaging containers
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 不合格铝制包装容器（`packaging_aluminium_container_waste`）

将发运前产生的不合格铝制包装容器记录为一项材料特定废物流。

- 选定流：Rejected aluminium packaging containers
- 流属性/单位：Mass / kg
- 数量规则：分配到有记录去向的实测废料或不合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 数据来源：采用由 `cp_packaging_and_dispatch` 管理的包装物料清单、领用、单件质量、计数、废料和发运记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该确切包装废物时适用；不得将随合格产品离厂的包装记录为工厂废物。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 释放到空气的 R717 氨制冷剂（`storage_ammonia_refrigerant_to_air`）

记录服务于纳入乳清储存或冷却的 R717 制冷回路释放的氨。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：仅一次分配至纳入制冷系统的实测泄漏量或制冷剂库存平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在实际使用 R717 且有记录释放时适用；不得用本卡记录其他制冷剂物种。
- 来源：`eu-2019-2031-fdm-bat`

### 过程：场内废水管理（`onsite_effluent_management`）

#### 输入

##### 产品流

###### 场内乳清废水处理用电（`effluent_treatment_electricity`）

记录可归属于乳清生产线废水均质、泵送、曝气、分离、消化或最终处理的电力。

- 选定流：Electricity supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：计量处理用电，或按乳清生产线水力负荷或污染负荷进行的有文件依据分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 数据来源：优先采用专用仪表记录；否则采用由 `cp_energy_and_utilities` 管理并与账单核对的设备分摊记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在场内处理时适用；实际使用的具体处理化学品必须按化学物质另设卡片，不得并入本电力卡。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 进入场内处理的乳清生产线废水（`whey_wastewater_input`）

将从调理边界转入场内处理的实际废水仅记录一次，并保留水力负荷和组成。

- 选定流：Dairy processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或使用有文件依据的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在场内处理时适用；将该输入与 `conditioning_wastewater` 链接，系统总量不得重复计算。
- 来源：`eu-2019-2031-fdm-bat`

##### 基本流

#### 输出

##### 产品流

###### 厌氧处理回收的沼气（`effluent_recovered_biogas`）

仅在厌氧处理产生具有实测数量和已记录用途的流时，将沼气记录为产品。

- 选定流：Recovered biogas
- 流属性/单位：Energy / MJ
- 数量规则：转移至已记录用途的实测回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该物理独立回收输出时适用；不得与其他处理产品或废物合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 乳清废水处理回收水（`effluent_recovered_water`）

仅在回收水的数量、质量、回用方式和去向均有记录时，将其记录为产品。

- 选定流：Recovered water
- 流属性/单位：Mass / kg
- 数量规则：转移至已记录用途的实测回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该物理独立回收输出时适用；不得与其他处理产品或废物合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

###### 磷回收产生的鸟粪石（`effluent_recovered_struvite`）

仅在磷回收产生具有已记录质量和用途的物理独立输出时记录鸟粪石。

- 选定流：Recovered struvite
- 流属性/单位：Mass / kg
- 数量规则：转移至已记录用途的实测回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该物理独立回收输出时适用；不得与其他处理产品或废物合并。
- 来源：`eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 废水处理污泥（`effluent_treatment_sludge`）

将废水处理污泥记录为独立湿质量流，并在重要时记录干质量。

- 选定流：Wastewater treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或使用有文件依据的密度将体积换算为质量；重要时保留干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该独立废物输出且去向有记录时适用；不得与其他残余物或排放合并。
- 来源：`eu-2019-2031-fdm-bat`

###### 乳清废水厌氧处理消化残余物（`effluent_anaerobic_digestate`）

将厌氧处理消化残余物与好氧污泥和筛余物分开记录。

- 选定流：Anaerobic treatment digestate
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或使用有文件依据的密度将体积换算为质量；重要时保留干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该独立废物输出且去向有记录时适用；不得与其他残余物或排放合并。
- 来源：`eu-2019-2031-fdm-bat`

###### 乳清废水处理筛余物（`effluent_screenings`）

将筛网或筛分设备物理去除的粗大固体记录为一项独立废物流。

- 选定流：Wastewater treatment screenings
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或使用有文件依据的密度将体积换算为质量；重要时保留干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该独立废物输出且去向有记录时适用；不得与其他残余物或排放合并。
- 来源：`eu-2019-2031-fdm-bat`

###### 转入下水道的经处理乳清废水（`effluent_treated_wastewater_to_sewer`）

将转入下水道或场外处理系统的经处理废水记录为废物流，而非直接基本流排放。

- 选定流：Treated dairy wastewater to sewer
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或使用有文件依据的密度将体积换算为质量；重要时保留干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；披露前景记录中的仪表、衡器、采样、分摊和时间覆盖不确定性。
- 适用性：条件适用（`conditional`）。仅在产生该独立废物输出且去向有记录时适用；不得与其他残余物或排放合并。
- 来源：`eu-2019-2031-fdm-bat`

##### 基本流

###### 排放至地表水的水（`effluent_water_to_surface_water`）

记录直接排放至受纳地表水体的经处理水质量。

- 选定流：Water to surface water
- 流属性/单位：Mass / kg
- 数量规则：使用有文件依据的密度将最终出水体积换算为质量，并归一化至参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在直接排放至地表水且具有代表性监测时适用；不得用本卡记录间接下水道转移。
- 来源：`eu-2019-2031-fdm-bat`

###### 排放至地表水的化学需氧量（`effluent_chemical_oxygen_demand_to_water`）

根据最终出水流量和有代表性的 COD 浓度，将化学需氧量作为一项监测水排放参数计算。

- 选定流：Chemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：最终出水体积乘以有代表性的 COD 浓度，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在直接排放至地表水且具有代表性监测时适用；不得用本卡记录间接下水道转移。
- 来源：`eu-2019-2031-fdm-bat`

###### 排放至地表水的总氮（`effluent_total_nitrogen_to_water`）

根据最终出水流量和有代表性的 TN 浓度，将总氮作为一项监测水排放参数计算。

- 选定流：Total nitrogen to surface water
- 流属性/单位：Mass / kg
- 数量规则：最终出水体积乘以有代表性的 TN 浓度，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在直接排放至地表水且具有代表性监测时适用；不得用本卡记录间接下水道转移。
- 来源：`eu-2019-2031-fdm-bat`

###### 排放至地表水的总磷（`effluent_total_phosphorus_to_water`）

根据最终出水流量和有代表性的 TP 浓度，将总磷作为一项监测水排放参数计算。

- 选定流：Total phosphorus to surface water
- 流属性/单位：Mass / kg
- 数量规则：最终出水体积乘以有代表性的 TP 浓度，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在直接排放至地表水且具有代表性监测时适用；不得用本卡记录间接下水道转移。
- 来源：`eu-2019-2031-fdm-bat`

###### 排放至地表水的总悬浮固体（`effluent_total_suspended_solids_to_water`）

根据最终出水流量和有代表性的 TSS 浓度，将总悬浮固体作为一项监测水排放参数计算。

- 选定流：Total suspended solids to surface water
- 流属性/单位：Mass / kg
- 数量规则：最终出水体积乘以有代表性的 TSS 浓度，并记录单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 在工厂门发运的合格液态乳清
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_effluent_and_emissions`
- 数据来源：采用由 `cp_waste_effluent_and_emissions` 管理的校准衡器或流量计、采样、实验室、转移联单、事故和处理记录。
- UUID 状态：未解决（`unresolved`）；在 flow-hybrid-search 与 state=100 直读完成精确双重核验前 UUID 保持为空。
- 不确定性：PCR 不提供默认值或数值范围；传播前景测量、分摊、换算因子和质量平衡不确定性。
- 适用性：条件适用（`conditional`）。仅在直接排放至地表水且具有代表性监测时适用；不得用本卡记录间接下水道转移。
- 来源：`eu-2019-2031-fdm-bat`

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分别计量的乳清回收、调理、储存、清洗和处理操作 | 通过细分计量过程避免分配，并把可直接归属的投入、排放和废物分配给乳清操作。 | `eu-2021-2279-environmental-footprint` |
| `allocation_system_expansion` | 明确扩展的产品系统 | 仅在额外共产品功能和被替代产品均得到明确建模及经验性论证时使用系统扩展；报告扩展系统整体结果，不得无说明地抵扣乳清。 | `eu-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | 不可分离的共享乳品或处理操作 | 无法细分或合理系统扩展时，使用与乳清及其他输出功能相关且有文件依据的因果物理关系；除非证明湿质量与功能相关，否则不得仅因方便使用湿质量。 | `eu-2021-2279-environmental-footprint` |
| `allocation_other_relation` | 缺少可辩护物理关系的多功能操作 | 仅在说明为何拒绝细分、系统扩展和物理分配后，才采用其他有文件依据的关系，例如共产品产生阶段的路线特定经济价值；披露价格、期间、地理、因子和敏感性。 | `eu-2021-2279-environmental-footprint` |
| `allocation_upstream_whey` | 共享凝固、凝块分离和上游乳品操作 | 不得默认给可销售乳清分配零上游负荷。链接经审查的上游数据集，并按实际路线和去向披露乳清作为共产品、产品还是废物进入。 | `eu-2021-2279-environmental-footprint`; `eu-2019-2031-fdm-bat` |
| `allocation_recovered_outputs` | 回收乳脂、固体、沼气、回用水和其他输出 | 仅当数量、质量、后续用途和去向均有记录时才把输出归为共产品；否则按实际处理路线记录为废物或排放。 | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_whey_batch_mass_and_composition` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch | 乳清原料、中间品、产品、共产品和损失 | 批次、罐体、实验室和发运记录 | 批次/批号；来源过程；种类；甜/酸状态；时间戳；湿质量；总固形物；可获得时的蛋白质/脂肪/乳糖/灰分；pH 或酸度；温度；处理状态；去向 | 经校准罐体、称重传感器、流量计、地磅和代表性实验室取样 | kg 和声明组成单位 | 每批次、转移或发运批 | 代表性连续 12 个月或完整声明生产期 | 全部纳入乳清线、罐体和发运点 | 对账期初库存 + 输入 = 输出 + 期末库存 + 损失，并将合格发运质量归一化至 1 kg | 校准、样品监管链、实验室方法、批次对账和签署放行记录 |
| `cp_energy_and_utilities` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch | 电力、燃料、蒸汽、热、制冷和其他公用工程 | 计量表、发票和运行小时记录 | 表计编号；起止读数；燃料量；蒸汽压力/温度或焓；设备小时/负荷；分配驱动；产量 | 优先专用计量；否则使用与设施总量对账的工程分摊 | kWh、MJ、kg 燃料、kg 蒸汽或来源单位 | 连续或每账期 | 与产品产出相同期间 | 全部纳入乳清设备和共享公用工程系统 | 扣除无关负荷，分配有记录的共享负荷，用记录因子换算并除以合格产品 kg | 表计校准、发票、运行日志、换算因子和分摊对账 |
| `cp_cleaning_water_and_materials` | liquid_whey_conditioning; storage_and_dispatch | 工艺水、CIP 水、清洗和消毒产品 | 水表、CIP 配方、加药及采购/领用记录 | CIP 周期编号；水量；冲洗终点；化学品及活性浓度；剂量；温度；生产线/罐；回收或排放量 | 优先分表和加药控制器；否则用经验证的罐容和配方记录 | kg 或 m3 水；kg 产品；活性浓度 | 每清洗周期或每日 | 与产品产出相同期间 | 全部纳入生产线、罐体和装载系统 | 将周期分配到设备和产品路线，对账采购量并归一化至合格产品 kg | 表计校准、加药校准、CIP 日志、导电率/pH/浊度终点和采购对账 |
| `cp_packaging_and_dispatch` | storage_and_dispatch | 包装和发运乳清 | 材料清单、包装领用、计数、装载和发运记录 | 包装物品/材料；单件质量；数量；皮重；毛/净产品质量；散装/包装状态；去向；批号 | 经校准秤、数量对账和发运文件 | kg | 每发运批 | 与产品产出相同期间 | 全部纳入发运方式 | 数量换算为质量；除非损失/更换可归属，否则排除可重复使用资产；归一化至发运产品 kg | 秤校准、供应商规格、领用对账和发运记录 |
| `cp_waste_effluent_and_emissions` | whey_receipt_and_recovery; liquid_whey_conditioning; storage_and_dispatch; onsite_effluent_management | 产品损失、残渣、废水、污泥、直接排放和处理输出 | 废物转移、流量计、取样、实验室、事故和处理记录 | 流编号；来源过程；湿/干质量；废水体积；取样时间；浓度；去向；处理路线；回收输出；事故损失 | 经校准秤/表计和按文件化分析方法进行的代表性取样 | kg、m3、mg/L 或污染物特定单位 | 每次转移和代表性取样事件 | 与产品产出相同期间，覆盖运行和清洗时段 | 全部纳入生产线和场内处理 | 由流量和浓度计算污染物质量，将乳清损失与批次平衡对账，并归一化至合格产品 kg | 校准、取样计划、实验室认可或 QA、联单、处理日志和质量对账 |
| `cp_coproduct_and_allocation` | liquid_whey_conditioning; onsite_effluent_management; shared upstream dairy operations | 共产品身份与分配 | 生产、组成、销售、转移和分配记录 | 输出编号；数量；组成/功能；去向；采用时的价格和币种；价格期间/地理；物理关系；细分证据；分配因子；因子和 | 收集过程特定记录并记录分配层级决策 | kg、组成单位、货币/kg 或物理驱动 | 每分配期间及重大路线变更 | 与共享清单和输出相同期间 | 与乳清数据集链接的全部多功能操作 | 先分配直接流，为剩余共享负荷计算经审查因子，并要求因子和在舍入容差内为一 | 签署方法决策、来源记录、价格或物理驱动证据、敏感性结果和因子和校验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_mass` | 全部清单行 | 归一化数量 = 报告期数量 / 合格发运湿乳清 kg | 发运湿乳清质量；清单行数量 | 每 1 kg 参考乳清的数量 |  |
| `close_whey_mass_balance` | 回收、调理和储存 | 期初库存 + 湿乳清输入 + 并入材料 = 合格乳清 + 共产品 + 废物/损失 + 期末库存；调查未解释差额，浓缩路线保留固形物平衡 | 批次质量；库存；固形物；共产品；废物 | 湿质量和固形物平衡闭合 | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `calculate_concentration_factor` | 浓缩液态乳清 | 浓缩倍数 = 进料湿质量 / 浓缩物湿质量，并以记录损失后的进料和产品固形物质量交叉校验 | 进料/产品湿质量和固形物分数 | 浓缩倍数及去除水平衡 |  |
| `calculate_utility_intensity` | 能源和水 | 汇总路线可归属计量用量及有记录的共享分摊，换算为声明单位并除以合格产品 kg | 公用工程记录；分配驱动；产品质量 | 每 kg 参考乳清的 kWh、MJ、kg 或 m3 |  |
| `calculate_pollutant_release` | 直接排放至水体 | 污染物 kg = 末端废水体积 × 代表性浓度 × 单位换算因子；多样品采用流量加权汇总 | 流量计；实验室结果；取样覆盖 | 每 kg 参考乳清的污染物 kg | `eu-2019-2031-fdm-bat` |
| `apply_allocation_hierarchy` | 共享多功能操作 | 通过细分分配直接流；否则采用经审查的系统扩展或因果物理关系；仅在记录拒绝前述步骤及敏感性后使用其他关系 | 直接测量；功能；物理驱动；市场价值；输出量 | 已分配共享清单和因子集 | `eu-2021-2279-environmental-footprint` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考乳清和原料 | 为每个纳入产品批保留来源过程、种类、甜/酸状态、组成基准、处理状态、温度、浓缩状态和散装/包装状态。 | 批次规格、实验室结果和发运记录 |
| `dq_mass_and_stock` | 全部物料流 | 使用经校准的质量或体积测量，记录密度换算，并在批次或报告期层面对账库存、转移、共产品、损失和产品。 | 校准、库存、批次和对账记录 |
| `dq_composition` | 乳清、共产品和浓缩路线 | 对用于身份、质量平衡或分配的总固形物/干物质、pH/酸度和重要组成字段采用代表性样品与文件化方法。 | 取样计划、监管链、方法、实验室 QA 和结果 |
| `dq_temporal_coverage` | 前景活动 | 使用代表性连续 12 个月或完整声明生产期，纳入清洗、启动、停机、不合格品和异常事件；说明排除理由。 | 生产日历、计量覆盖、批次清单和事故日志 |
| `dq_completeness` | 过程图与清单 | 覆盖所有必需过程和实际发生的条件过程；重要时纳入公用工程、清洗、包装、产品损失、废水、直接排放和场外处理链接。 | 工艺流程图、纳入清单、台账对账和链接数据集 |
| `dq_allocation` | 共享乳品和处理操作 | 保留直接归属证据、层级决策、驱动数据、和为一的分配因子，以及采用经济价值等其他关系时的敏感性。 | 分配工作表、来源数据、批准记录和敏感性分析 |
| `dq_uuid_and_source_traceability` | 数据库身份和外部规则 | 使用不带数据集版本的经审查 Tiangong UUID，并为非默认边界、分配、过程和校验规则保留稳定外部 source id。 | 身份回读记录、来源登记和 PCR 符合性审查 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | 参考产品 | 要求 Whey UUID、Product flow 类型、CPC 3.0 编码 `22130`、甜/酸和来源过程身份、湿产品状态、组成基准、处理、温度、地理和工厂门；拒绝粉末和衍生配料产品。 | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `validate_reference_support` | 定量参考 | 要求 1 kg 湿乳清、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和参考单位 kg。 |  |
| `validate_process_coverage` | 前景过程图 | 必须纳入回收/接收和储存/发运；实际发生时必须纳入调理和场内废水管理；禁止无说明纳入干燥或下游粉末制造。 | `eu-2019-2031-fdm-bat`; `us-epa-ap42-9-6-1-cheese` |
| `validate_mass_and_solids_balance` | 乳清原料、产品、共产品、库存和损失 | 要求湿质量闭合，浓缩路线还要求固形物闭合；调查未解释差额，并禁止把同一乳清同时计为产品和废水。 | `codex-cxs-289-1995-whey-powders`; `fao-2013-milk-dairy-human-nutrition` |
| `validate_acid_whey_timing` | 酸乳清路线 | 要求分离至调理时间、停留条件和足以识别储存期间重大变化的酸度或 pH 记录。 | `eu-2019-2031-fdm-bat` |
| `validate_utilities_and_cleaning` | 电力、蒸汽、热水、天然气、柴油、LPG、水、制冷剂和清洗物质 | 对每个单独命名交换要求来源记录、单位换算、共享服务分摊、时间对齐和清洗周期覆盖；PCR 默认值或数值范围不得替代前景数据。 | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_atomic_inventory_flows` | 全部前景交换 | 对实际发生的每项阶段特定电力、热载体、燃料、制冷剂物种、供水、加工助剂、清洗或消毒物质、包装材料、产品、共产品、废物流和基本流排放分别要求一张卡；拒绝集合标签，并要求对本 PCR 未列出的任何实际交换新增具体卡片。 | `eu-2019-2031-fdm-bat`; `eu-2021-2279-environmental-footprint` |
| `validate_allocation` | 多功能过程 | 要求分配层级决策、直接归属、所选驱动、和为一的因子、来源期间/地理，以及采用经济或其他兜底关系时的敏感性；拒绝无文件依据的零负荷乳清。 | `eu-2021-2279-environmental-footprint` |
| `validate_wastewater_and_emissions` | 废物与直接排放 | 要求流量、去向、处理链接、代表性取样、计算方法，并在发布前确定精确基本流身份；不得接受无对应流量的污染物浓度。 | `eu-2019-2031-fdm-bat` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 液态乳清回收、调理、储存和发运的单元过程前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 甜/酸状态、来源乳品过程与种类、固形物/组成基准、处理和浓缩状态、温度、包装形式、地理、期间、工厂门和分配方法匹配的液态乳清数据集 |
| excluded_use | 乳清或酸乳清粉；干燥乳清配料；以干品销售的乳清蛋白浓缩物或分离物；乳糖；乳清渗透物粉；乳清干酪；配制饮料；产品状态不兼容或上游分配未披露的路线 |
| required_metadata | 参考流和 UUID；CPC 参考；来源乳品过程和种类；甜/酸状态；湿质量和组成基准；pH/酸度；处理和浓缩状态；温度；散装/包装状态；纳入过程；地理；期间；分配方法；链接上游和处理数据集 |
| required_quality_disclosure | 计量和实验室覆盖；质量和固形物平衡；清洗/启动/停机覆盖；分配因子和敏感性；无范围重要流的未解决定量证据；未解决非参考 UUID；原子化废物和排放完整性；数据质量评价 |
| update_trigger | 来源乳品路线、产品身份、组成或浓缩、加工技术、能源或用水系统、清洗制度、分配方法或价格、处理路线、法规、来源证据、地理或数据年限发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-289-1995-whey-powders` | standard | Codex Alimentarius, CXS 289-1995, Standard for Whey Powders, https://www.fao.org/input/download/standards/184/CXS_289e.pdf（检索日期 2026-08-10） | 乳清和酸乳清作为从凝块分离所得液态乳制品的权威定义，以及液态乳清与粉末的区分 |
| `fao-2013-milk-dairy-human-nutrition` | official_guidance | Food and Agriculture Organization of the United Nations, Milk and dairy products in human nutrition, 2013, https://www.fao.org/4/i3396e/i3396e.pdf（检索日期 2026-08-10） | 甜/酸乳清身份、来源路线、用途和产品类别排除 |
| `eu-2019-2031-fdm-bat` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-10） | 酸乳清及时处理、乳清回收路线、就地清洗、水/物料和能源管理、低全球变暖潜势制冷剂选项、废水监测参数以及条件性处理与回收操作 |
| `us-epa-ap42-9-6-1-cheese` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.6.1 Natural and Processed Cheese, Supplement C, August 1997, https://www.epa.gov/sites/default/files/2020-10/documents/c9s06-1.pdf（检索日期 2026-08-10） | 乳清分离与处理过程分解，以及乳酪制造、乳清回收和干燥之间的边界 |
| `eu-2021-2279-environmental-footprint` | standard | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-10） | 原材料、能源、产品、废物和排放的完整前景清单，以及多功能层级、细分、系统扩展、物理分配和有文件依据的兜底关系 |
