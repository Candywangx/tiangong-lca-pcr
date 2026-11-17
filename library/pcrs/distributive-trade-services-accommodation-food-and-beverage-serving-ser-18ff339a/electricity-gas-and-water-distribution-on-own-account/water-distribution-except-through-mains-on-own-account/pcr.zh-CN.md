---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-except-through-mains-on-own-account
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 自营饮用水公路槽罐车配送

## 1. 范围与适用性

面向专用签约柴油饮用水公路槽罐车的前景服务方法，保留原PCR身份及窄于CPC69230路线。清单每交换记录一个计量对象及一个主属性/单位，实际供应时可含指定完整设备和明确服务。前景范围及分配为PCR选择；应急指南仅供定性运营/卫生证据，不供数值默认。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-except-through-mains-on-own-account |
| classification_refs | CPC 3.0:69230; narrower：仅饮用水槽罐车路线 |
| covered_products | 通过签约专用公路槽罐车从供方灌装接口至接收储罐卸水验收的自营散装饮用水配送服务 |
| excluded_products | 水商品生产和处理；管网；瓶装水；灌溉；纯撮合中介；非饮用水；船舶/铁路/手推车运输；下游储存/配水 |
| representative_product | 由配送经营者自营组织的专用饮用水槽罐车配送 |
| production_route | 运营专用签约柴油槽罐车及指定供应装车计量撬装与增强EPDM软管；发生时采用碳酸钠清洗及次氯酸钠消毒；废水封闭收集 |
| market_state | 实际交付温压下符合声明接收规格的液态饮用水；参考交易对象为配送服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供自营散装饮用水公路槽罐车配送服务 |
| How much | 接收方卸水接口净验收1 m3水对应的配送服务 |
| How well | 卸水时符合明确的当地法定及客户验收规格；保留供方/水源、温度、检测方法、结果、判定和签字；不设全球通用余氯限值 |
| How long or cycle | 在声明的连续12个月内首次灌装的原始批次，跟踪至最终交付、退回、废物去向及车辆返程完成；期末保管量未结清则不得完成 |
| reference_flow_link | accepted_distribution_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 饮用水公路槽罐车配送服务 |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 水源及供方; 饮用水验收规格; 交付交接点及保管责任; 公路槽罐车供方范围; 车辆及路线类别; 体积温度及计量表基准; 原始灌装批次群及后续结清; 灌入/验收比及拒收/损失去向; 清洗化学品及浓度; 地区及运行期间 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_volume | accepted_distribution_service | 体积 | m3 | 采用质量判定后经校准的净卸水验收体积；1000 L = 1 m3。体积为声明温度下液态实测体积，不能用气体标准体积。扣除拒收量；A必须为正。 |
| energy_conversion | loading_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用官方净热值参考属性，作为归档电力记录的电能计量约定，并非声称电力可燃。E_MJ = 3.6 * E_kWh，仅转换一次；外部电网电力供至使用点；排除外购校准/检测便携能源，供方发电留背景。 |
| concentration_basis | hypochlorite_solution | 质量 | kg | 记录购入溶液质量、有效氯质量分数，体积换算时记录批次密度；m_solution = V_L * rho_kg/L。溶液生产数据集不能再次乘有效成分比例。不设默认浓度或投加量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供方生产且质量放行饮用水到达灌装接口；所运水生产在本服务外。 |
| starting_condition_role | 自营配送者控制实际专用签约柴油车辆保管/交付、装车、卫生及现场维修。 |
| product_classification_scope | 窄于CPC69230：仅专用饮用水柴油公路槽罐车。 |
| recursive_input_rule | 不得同类配送服务递归。具体供应设备及明确现场服务投入为边界交换，供方制造/道路/工具及场外接收加工为背景。 |
| upstream_dataset_requirement | 使用模型必须各水源D_s/A水生产及拒收/退回/损失去向一次且不抵扣，不假定1m3。供应产品/服务仅按声明验收点关联，外部废物背景以后从实际交接点关联一次。不前景供方/接收递归。 |
| disclosure | 原D_s/A及去向比例、验收A、灌装/返程/废物结清、供应设备规格/质量/服务份额、服务纳排矩阵、前景废物接收点及实际使用点量、缺口及不确定性。 |

| rule_id | rule | source_ids |
| --- | --- | --- |
| foreground_gate | 所选前景为实际签约专用柴油槽罐车运行及配送者装车计量、封闭设备卫生和现场维护。纳入重载/空载/返程/失败/怠速/泵送直至返车、接收验收判定及实际废物移交。配送者保留自营保管/商业责任。接收方储存/配水/使用及配送者中间储水在外。 | who-tanker-2013; unsd-cpc30-69230 |
| no_background_recursion | 供方制造/开采/材料部件生产、完整上游运输、道路、供方工具/工厂/支援资本及场外废物接收处理属背景，不是运营前景过程。保留完整车辆/撬装/软管投入，具具体供应验收交接点和唯一质量/kg身份；保留实测服务归属，不拆BOM、不加入工厂/道路/报废处理内部。资本投入数据集止于供应设备点，排除后来前景运营供应及报废处理。 |  |
| commodity_ownership | 所运水仍为实物保管账，不是此服务水商品清单输入/输出。使用模型必须添加各水源D_s/A生产，覆盖验收及拒收/退回/损失新增水源，按有记录去向将R_s/A及L_s/A去向计一次且不抵扣。不得再加1m3水商品或重复供方源头检测。内部再装载不是新增摄入。辅助清洗水仍单独投入。 |  |
| single_measurement_object | 每卡一个具体可计量对象、一个主属性及一个优选单位。允许明确完整多材质车辆/设备、配方产品、已表征废物载体或明确校准/验收服务。原计数/米/体积/小时仅凭同对象证据换为选定单位。独立化学品、电力、燃料、介质及方向仍分开；不得通用生命周期服务或选择器。 |  |
| service_gates | 仅明确现场计量表校准及卸水验收检测作为外购前景服务投入，按实际有效技术/分析工时。合同固定对象/方法/交付结果及所含便携供应/能源/样品移动/供方带回废物。所含活动不得重复前景资源。任何排除的配送者自供资源完整前须具体卡/协议，供方范围须采集而非猜测。槽罐车行驶仍用实际柴油/尿素/物种及资产投入，不再完整运输交换。 |  |
| waste_handover | 仍须封闭收集卫生废水。清单产出止于实际签字外部移交，具实测载体、组成、数量及接收方。此前景无假设接收投入、场外处理试剂/排放或未来终端情景。之后可从该确切交接点关联背景废物运输/处理一次，不把所含水/化学品作为未处理排放重复。不得假定有现场处理；实际泄漏/直接排放或现场处理符合前须具体介质卡/协议扩展，不能漏掉或置零。 | who-cleaning-2013; kingcounty-tanker-snapshot |
| route_extensions | 保持原专用饮用柴油槽罐车路线、散装可复用化学品供给及所运水灌装后不投加/处理。发生/配置审查须识别实际未列前景化学品、包装、维修、物种或泄漏，完整前加入具体单属性卡。发生/身份未知是缺口，不是零。WHO/King County应急数量不是默认剂量或全球法律；所选前景范围/分配为PCR方法选择。 | who-tanker-2013; kingcounty-tanker-snapshot |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_delivery | 装车及专用柴油公路配送 | required | 实际所选前景使用，条件发生每月核实 | 单对象/属性边界交换或实际前景排放 | 1 m3 已验收配送服务 |
| p_hygiene | 前景设备卫生及封闭废物收集 | conditional | 实际所选前景使用，条件发生每月核实 | 单对象/属性边界交换或实际前景排放 | 归属参考流活动 |
| p_maintenance | 现场设备维修 | conditional | 实际所选前景使用，条件发生每月核实 | 单对象/属性边界交换或实际前景排放 | 归属参考流活动 |
| p_assets | 指定设备服务归属 | required | 实际所选前景使用，条件发生每月核实 | 单对象/属性边界交换或实际前景排放 | 归属参考流活动 |

### 过程：装车及专用柴油公路配送 (`p_delivery`)

#### 输入

##### 产品流

###### 交流电 (`loading_electricity`)

配送者装车及单独记录现场卫生/维修实际使用的使用点外部电网交流电，保留表、电压及供方。排除槽罐车柴油及已含于外购检测/校准服务的便携电源。此处不展开上游发电过程。 按第8节 `inv_event_attribution` 执行。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * E_kWh/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

###### 柴油 (`delivery_diesel`)

实际进入运营前景车辆油箱并用于重载/空载/返程/失败行驶、怠速/等待及车载泵的柴油。以燃料库存或批次体积密度换算测消耗质量。供应止于此交接点，实际燃烧排放另列。签约供方须披露实物燃料使用，不能另加完整运输因子。 按第8节 `inv_event_attribution` 执行。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：M_diesel/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 选择性催化还原用尿素水溶液 (`delivery_urea`)

仅实际采用时计入槽罐车SCR消耗的供应整溶液，以kg测量并保留组成。不重复上游配方成分；未发生须有车辆/尾气控制证据。

- 选定流：选择性催化还原用尿素水溶液
- 流属性/单位：质量 / kg
- 数量规则：M_urea/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 饮用水卸水验收检测服务 (`acceptance_testing`)

单一明确签约接收验收检测，按具名批准当地饮用/客户规程从卸水接口采样至签字验收/拒收判定。唯一主属性为分析人员时间/h，采实际在场分析小时。排除供方源头水检测。合同含其采样/检测试剂、便携仪器/能源、样品运输及供方带回检测废物；不得同时进入前景燃料/材料/废物卡。配送者明确自供项目须独立具体卡并从该服务排除。

- 选定流：饮用水卸水验收检测服务
- 流属性/单位：分析人员时间 / h
- 数量规则：T_test/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_testing`
- 来源：kingcounty-tanker-snapshot

#### 输出

##### 产品流

###### 饮用水公路槽罐车配送服务 (`accepted_distribution_service`)

仅对应质量验收后净卸水体积的参考服务，排除拒收、损失及未结清库存，不是水商品。

- 选定流：饮用水公路槽罐车配送服务
- 流属性/单位：体积 / m3
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

##### 基本流

###### 化石二氧化碳，排入空气 (`delivery_co2_fossil`)

槽罐车引擎/泵及尾气控制实际前景化石二氧化碳，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_co2_fossil/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 生物源二氧化碳，排入空气 (`delivery_co2_biogenic`)

槽罐车引擎/泵及尾气控制实际前景生物源二氧化碳，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_co2_biogenic/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 一氧化碳，排入空气 (`delivery_co`)

槽罐车引擎/泵及尾气控制实际前景一氧化碳，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_co/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 甲烷，排入空气 (`delivery_ch4`)

槽罐车引擎/泵及尾气控制实际前景甲烷，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：甲烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_ch4/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 一氧化二氮，排入空气 (`delivery_n2o`)

槽罐车引擎/泵及尾气控制实际前景一氧化二氮，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：一氧化二氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_n2o/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 一氧化氮，排入空气 (`delivery_no`)

槽罐车引擎/泵及尾气控制实际前景一氧化氮，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_no/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 二氧化氮，排入空气 (`delivery_no2`)

槽罐车引擎/泵及尾气控制实际前景二氧化氮，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_no2/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 二氧化硫，排入空气 (`delivery_so2`)

槽罐车引擎/泵及尾气控制实际前景二氧化硫，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_so2/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 颗粒物，空气动力学直径不大于2.5微米，排入空气 (`delivery_pm25`)

槽罐车引擎/泵及尾气控制实际前景颗粒物，空气动力学直径不大于2.5微米，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：颗粒物，空气动力学直径不大于2.5微米，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_pm25/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 颗粒物，空气动力学直径大于2.5且不大于10微米，排入空气 (`delivery_pmcoarse`)

槽罐车引擎/泵及尾气控制实际前景颗粒物，空气动力学直径大于2.5且不大于10微米，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：颗粒物，空气动力学直径大于2.5且不大于10微米，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_pmcoarse/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

###### 氨，排入空气 (`delivery_nh3`)

槽罐车引擎/泵及尾气控制实际前景氨，排入空气。不默认数量或因子，不是整尾气包。供方制造及场外废物处理排放在外。 按第8节 `inv_event_attribution`、`inv_emission_evidence` 执行。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg
- 数量规则：M_delivery_nh3/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`


### 过程：前景设备卫生及封闭废物收集 (`p_hygiene`)

#### 输入

##### 产品流

###### 装车设备清洗用饮用水 (`auxiliary_water`)

前景供水交接点实际外购配送者泵/软管清洗冲洗水，唯一优选单位为实测温度下m3；区别于所运水D_s及车辆清洗。

- 选定流：装车设备清洗用饮用水
- 流属性/单位：体积 / m3
- 数量规则：W_clean/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

###### 槽罐车清洗用饮用水 (`tanker_wash_water`)

供方运营前景内实际单独计量的罐体/车载软管清洗冲洗水，供方生产留背景；不得用所运水新增灌装量代此投入。

- 选定流：槽罐车清洗用饮用水
- 流属性/单位：体积 / m3
- 数量规则：W_tanker/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

###### 碳酸钠粉末 (`sodium_carbonate`)

仅批准规程实际采用时计配送者设备清洗粉末，供应产品质量kg，不设默认剂量。

- 选定流：碳酸钠粉末
- 流属性/单位：质量 / kg
- 数量规则：M_carbonate/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

###### 次氯酸钠水溶液 (`hypochlorite_solution`)

配送者卫生实际整溶液质量，记录批次密度/浓度。不对所运水灌装后投加，不对溶液供应重复乘有效成分比例。

- 选定流：次氯酸钠水溶液
- 流属性/单位：质量 / kg
- 数量规则：M_solution/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

###### 碳酸钠粉末 (`tanker_carbonate`)

车辆批准规程指定时实际单独记录卫生粉末，不含隐式供方清洗包。

- 选定流：碳酸钠粉末
- 流属性/单位：质量 / kg
- 数量规则：M_tanker_carbonate/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

###### 次氯酸钠水溶液 (`tanker_hypochlorite`)

车辆卫生实际单独记录整溶液kg，含浓度及密度，不重复配送者溶液。

- 选定流：次氯酸钠水溶液
- 流属性/单位：质量 / kg
- 数量规则：M_tanker_solution/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hygiene`

#### 输出

##### 废物流

###### 装车设备清洗废水 (`cleaning_wastewater`)

从配送者封闭收集实际转至有记录外部接收交接点的已表征整液载体，按交接温度m3并实测密度。含溶解化学品一次。此前景不含接收方处理投入/排放或假定配对接收。仍须产生/库存/转出质量账。

- 选定流：装车设备清洗废水
- 流属性/单位：体积 / m3
- 数量规则：W_waste_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_hygiene`
- 来源：who-cleaning-2013; kingcounty-tanker-snapshot

###### 槽罐车清洗废水 (`tanker_wastewater`)

槽罐车清洗消毒液从封闭前景收集实际移交，已表征；唯一优选属性体积/m3，声明接收交接点。不将所含水/化学品再作为未处理排放。场外接收方加工为背景。

- 选定流：槽罐车清洗废水
- 流属性/单位：体积 / m3
- 数量规则：W_tanker_waste_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_hygiene`
- 来源：who-cleaning-2013; kingcounty-tanker-snapshot


### 过程：现场设备维修 (`p_maintenance`)

#### 输入

##### 产品流

###### 矿物润滑油 (`work_mineral_oil`)

槽罐车/装车现场维护实际运营补加/换油消耗，按供给指定油kg计。排除设备已含初装油及库存/未用退回。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：O_work_mineral_oil/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`

###### 乙二醇冷却液 (`work_coolant`)

现场运行实际更换/补加整配方kg，保留组成及密度；不重复车辆初装液。

- 选定流：乙二醇冷却液
- 流属性/单位：质量 / kg
- 数量规则：O_work_coolant/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`

###### 柴油饮用水槽罐车轮胎，指定完整轮胎 (`replacement_tyre`)

进入运营前景的实际维护更换轮胎，单一声明尺寸/载荷/压力规格及供应净质量kg。排除轮辋，不拆轮胎材料。初装轮胎已含tanker_asset，不重复。

- 选定流：柴油饮用水槽罐车轮胎，指定完整轮胎
- 流属性/单位：质量 / kg
- 数量规则：O_replacement_tyre/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`

###### 装车泵EPDM机械轴封，指定总成 (`replacement_seal`)

实际明确验收的更换轴封，按供应净总成kg计，记录型号及配合适用性。内含弹簧/密封构成仅一次；整撬装更新另用新资产键，不再计此更换件。

- 选定流：装车泵EPDM机械轴封，指定总成
- 流属性/单位：质量 / kg
- 数量规则：O_replacement_seal/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_work`

###### 现场饮用水装车计量表校准服务 (`meter_calibration`)

单一签约校准对象为明确装车表，按批准检定方法在配送者场址提供签字校准结果。唯一主属性为技术人员时间/h，采实际在场有效校准小时，不以测试次数代理。合同含供方便携参考设备、其便携能源、标准物/试剂及其带回废物；排除已计量场址电力、其他维护和接收检测。核合同/去重矩阵，范围缺失为不完整。

- 选定流：现场饮用水装车计量表校准服务
- 流属性/单位：技术人员时间 / h
- 数量规则：T_calibration/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_calibration`

#### 输出

##### 废物流

###### 废矿物润滑油 (`used_oil`)

实际受污染排出整油载体在合法外部收集交接点移交，以校准秤kg计并表征污染。排除仍在车辆或留存库存油；不含接收方焚烧/回收排放。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：O_used_oil_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_maintenance`

###### 废乙二醇冷却液 (`spent_coolant`)

实际移交整配方冷却液载体，按kg及组成；不把所含水/乙二醇另报废物或直接排放。

- 选定流：废乙二醇冷却液
- 流属性/单位：质量 / kg
- 数量规则：O_spent_coolant_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_maintenance`

###### 报废指定饮用水槽罐车轮胎 (`used_tyre`)

实际已表征整轮胎移交具名接收方，净kg且排除轮辋；不虚构分离钢/橡胶流。仅实际前景交接，不含预期接收/处理。

- 选定流：报废指定饮用水槽罐车轮胎
- 流属性/单位：质量 / kg
- 数量规则：O_used_tyre_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_maintenance`

###### 废装车泵EPDM机械轴封 (`used_seal`)

实际移交已表征拆下轴封总成，净kg且留存内含构成仅一次，不再重复废物成分。

- 选定流：废装车泵EPDM机械轴封
- 流属性/单位：质量 / kg
- 数量规则：O_used_seal_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste_maintenance`


### 过程：指定设备服务归属 (`p_assets`)

#### 输入

##### 产品流

###### 专用柴油饮用水公路槽罐车，指定完整车辆 (`tanker_asset`)

供给前景验收点的一种明确可上路槽罐车配置，含罐体、底盘、车载泵及随车非燃料润滑/冷却初装液。运营柴油及SCR库存排除此设备交接点及供应净质量。唯一主属性为完整供应净质量kg；自重为证据，不是另一交换单位。采用实际服务份额。不再计所含金属/塑料/初装液或供方工厂/道路/工具清单。

- 选定流：专用柴油饮用水公路槽罐车，指定完整车辆
- 流属性/单位：质量 / kg
- 数量规则：C_tanker_asset/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

###### 电动饮用水装车计量撬装设备，指定完整总成 (`loading_skid`)

配送者可投运验收交接点一种明确验收的泵/电机/表/阀/支架完整撬装设备，以完整供应净设备kg计，排除声明运输包装。须有实际配置、质量及运行账。不递归部件/材料，不重复所含供应。

- 选定流：电动饮用水装车计量撬装设备，指定完整总成
- 流属性/单位：质量 / kg
- 数量规则：C_loading_skid/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

###### EPDM饮用水装车软管，指定增强总成 (`loading_hose`)

一种已明确供应验收且声明增强层/接头的软管总成，按净总成kg测量。EPDM、增强及接头保留在此单计量对象；米/计数原始记录仅用同配置实测总成质量换算，不从长度猜质量。

- 选定流：EPDM饮用水装车软管，指定增强总成
- 流属性/单位：质量 / kg
- 数量规则：C_loading_hose/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

#### 输出

##### 废物流

###### 报废指定完整饮用水公路槽罐车 (`retired_tanker`)

仅实际有记录前景报废移交具名接收方。 按第8节 `inv_retired_carrier` 执行。

- 选定流：报废指定完整饮用水公路槽罐车
- 流属性/单位：质量 / kg
- 数量规则：C_retired_tanker_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

###### 报废指定完整装车计量撬装设备 (`retired_skid`)

仅实际有记录前景报废移交具名接收方。 按第8节 `inv_retired_carrier` 执行。

- 选定流：报废指定完整装车计量撬装设备
- 流属性/单位：质量 / kg
- 数量规则：C_retired_skid_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

###### 报废指定增强EPDM饮用水软管 (`retired_hose`)

仅实际有记录前景报废移交具名接收方。 按第8节 `inv_retired_carrier` 执行。

- 选定流：报废指定增强EPDM饮用水软管
- 流属性/单位：质量 / kg
- 数量规则：C_retired_hose_handover/A
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

## 7. 分配与共产品处理

| rule_id | rule | source_ids |
| --- | --- | --- |
| exclusive_route | 所有专用行程及零里程怠速/泵/失败事件归原灌装群。单趟验收为零仍将负荷留群总量；多站仅除正总验收A。不用灌入体积/距离捷径。 |  |
| shared_operations | 实际前景工单优先直接归属/分表。否则不可再分运营/卫生/维修资源按同一实测期间本群设备作业小时/全部使用者作业小时分配，含后续期。已属该群量不再乘受益者份额。不按收入，分母未知为不完整。 |  |
| equipment_attribution | 仅保留明确槽罐车、装车撬装及软管供应对象资本投入。记录原资产键、配置、实际完整净质量及有证据总服务寿命驱动。车辆驱动为实际群内开机小时/全部使用者寿命开机小时，含怠速/空载/泵/失败；撬装/软管为实际群内连接运行小时/全部使用者寿命同小时。原资产购于群前仍贡献实测份额。系数对供应设备质量一次，除A一次。独立整设备更新用新键；维护更换及初装内含供应不得重复。不嵌套供方/道路/工具资本分配。 |  |
| no_credit | 拒收/退回/再装载水及废物不抵扣；内部转移不产生新摄入或验收服务。实际报废资产载体若已移交，按原资产服务系数一次，不计当前处置年度整质量。不得为闭合资产生命周期而虚构未来废物量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | p_delivery | accepted_distribution_service | 水源、流量及验收账 | 原灌装ID; 水源/供方/地理/处理ID; 首灌时刻; D_s; 各交接V/rho/温度; 表前后读数; A; 拒收; 退回; 损失/介质; 内部再装; 期初期末保管; 检测/判定/签字; 返车 | 逐原分流/批次用校准灌卸表及签字质量记录，将退回/损失追水源。同批密度按交接温度实测，不假定1000kg/m3。每日用custody_balance/commodity_ratio，供方源头测试不含接收服务。 | m3; L; kg; kg/m3; degC | 每灌装/转移/卸水/最终去向；每日对账 | 声明连续12个月首灌直至最终保管/返程结清 | 水源接口至接收验收/拒收返程 | 每参考流 | 表校准、样品链、源/接收签字及结清日志 |
| cp_transport | p_delivery | delivery_diesel; delivery_urea; delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | 实际车辆/燃料/排放日志 | 行程/原灌装/车辆/源/事件ID; 路段角色; GPS/里程表; 开机/怠速/泵/失败小时; 燃料期初购入期末退回; kg或L及同批密度/温度; 组成/生物分数/低位热值; SCR溶液质量/浓度; 物种测试/因子原生基准/控制/不确定性; 原资产键; 常规/资本事件类别; 实际事件量; alpha_j; 供方验收前已含资源排除 | 逐事件匹配GPS/引擎/油票及校准油箱/流量记录，含零里程期间。燃料实际消耗用库存、称重或实测批次体积*密度；因子按准确原生量基准及实际控制记录，用emission_species。逐趟/每月对账，不用供方车辆公里背景因子，不猜未发生。 区分验收后已观测一次性资本事件及常规运营，应用foreground_capital_events一次，不重复供方已验收设备范围。 | kg; L; kg/L; degC; h; km; kg/kg; MJ/kg | 每行驶/怠速/泵/失败事件；每月燃料对账 | 原发运群至最终返车 | 签约专用槽罐车运营前景 | 每参考流 | 供方实物日志、校准读数、源/控制因子证据及签字发生 |
| cp_energy | p_delivery | loading_electricity | 使用点电网表 | 表/场址/事件/源ID; kWh购入及同购买退电; 电压/供方; 起止; 群/全用户运行小时; 服务便携能源排除; 原资产键; 常规/资本事件类别; 实际事件量; alpha_j; 供方验收前已含资源排除 | 读取配送者装车及单列现场卫生/维修校准分表，匹配发票/源交接，用shared_operations一次。排除购入检测/校准便携能源及供方发电。用electricity_gate后乘3.6换算一次。 区分验收后已观测一次性资本事件及常规运营，应用foreground_capital_events一次，不重复供方已验收设备范围。 | kWh; h | 每运行期间，每月发票核对 | 全部实际群前景期间含后续 | 配送者供给装车/维修/卫生电力 | 每参考流 | 校准、发票、阶段表及全用户小时 |
| cp_hygiene | p_hygiene | auxiliary_water; tanker_wash_water; sodium_carbonate; hypochlorite_solution; tanker_carbonate; tanker_hypochlorite | 实际卫生水/化学品库存 | 责任者/场址/车辆/设备/事件/原灌装ID; 批准规程; 水表/温度; 准确化学批次; 整质量; 有效分数; 密度; 期初购入期末退回转移; 事件/群/全用户小时; 卫生结果 | 分表供应清洗水，称粉末/整溶液或用实测同批密度换算。消耗=期初+购入-期末-外退并调有记录转移；先原事件直接归属再shared_operations。车辆/配送者分行ID，不对所运水投加/默认量。每月库存对账并将液体关联封闭废物批次，签发生/未发生。 | m3; kg; kg/L; mass fraction; degC; h | 每清洗消毒事件及每月库存/未发生 | 实际原群卫生含后续 | 配送者泵/软管和车辆卫生分别 | 每参考流 | COA/SDS、校准表/秤及批准签字规程 |
| cp_work | p_maintenance | work_mineral_oil; work_coolant; replacement_tyre; replacement_seal | 前景维修部件及库存 | 工单/资产/原灌装ID; 配置; 更换对象规格; 接收/安装净质量; 换算时计数及同对象质量; 油/冷却液批次/密度; 期初购入期末退回复用; 初装液排除; 工单/全用户小时; 产生废物批次; 原资产键; 常规/资本事件类别; 实际事件量; alpha_j; 供方验收前已含资源排除 | 各实际轮胎/轴封称重或用同型号可追溯供应净质量；油液用校准秤或批次密度。库存对账真实消耗及复用退回，排除初装及已在cp_assets同记录整设备更新。直接事件或shared_operations归属，各项主单位kg。实际额外部件/油液须独立具体属性/单位卡。 区分验收后已观测一次性资本事件及常规运营，应用foreground_capital_events一次，不重复供方已验收设备范围。 | kg; count; kg/count; L; kg/L; h | 每工单/库存转移，每月对账及未发生 | 群实际维护工单至后续 | 仅运营车辆/装车设备前景 | 每参考流 | 签字工单、型号/质量记录、库存/秤证据及去重登记 |
| cp_calibration | p_maintenance | meter_calibration | 明确校准/检测服务验收 | 服务/工单/对象/责任者/场址/原灌装ID; 具名规程/方法; 采样点/样品链; 原始分析/技术人员起止/休息/有效小时; 判定/结果/证书; 合同含便携供应/能源/样品出行/带回废物; 排除配送者资源; 源头测试排除; 发票/去重ID | 逐明确表校准或接收验收工单核合同、方法及交付结果，采签字在场时刻并扣休息/并行无关作业。实际有效h为主数量，未经实测时间不得用次数代。各内含资源/废物仅归供方服务一次；配送者自供排除项完整前须具体前景卡。接收在卸水采样，校准在具名配送者表。不重复供方源头水检测。 | h; timestamp | 每明确服务工单及每月合同/发票对账 | 实际群验收/校准工单，含失败/复测 | 接收接口检测及配送者现场表校准 | 每参考流 | 签字工时、方法/证书、样品链、发票及纳入/排除矩阵 |
| cp_testing | p_delivery | acceptance_testing | 明确校准/检测服务验收 | 服务/工单/对象/责任者/场址/原灌装ID; 具名规程/方法; 采样点/样品链; 原始分析/技术人员起止/休息/有效小时; 判定/结果/证书; 合同含便携供应/能源/样品出行/带回废物; 排除配送者资源; 源头测试排除; 发票/去重ID | 逐明确表校准或接收验收工单核合同、方法及交付结果，采签字在场时刻并扣休息/并行无关作业。实际有效h为主数量，未经实测时间不得用次数代。各内含资源/废物仅归供方服务一次；配送者自供排除项完整前须具体前景卡。接收在卸水采样，校准在具名配送者表。不重复供方源头水检测。 | h; timestamp | 每明确服务工单及每月合同/发票对账 | 实际群验收/校准工单，含失败/复测 | 接收接口检测及配送者现场表校准 | 每参考流 | 签字工时、方法/证书、样品链、发票及纳入/排除矩阵 |
| cp_assets | p_assets | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 指定供应设备服务账 | 原资产/责任者/型号/配置ID; 验收日/交接点; 实际完整供应净kg; 所含初装液/轮胎范围; 排除包装; h_cohort; H_lifetime_all_users; 驱动来源; 全部受益者/既往分配; 购入/更新/维护排除; 实际报废接收/日期/净kg/排液; 原资产键; 常规/资本事件类别; 实际事件量; alpha_j; 供方验收前已含资源排除；修订版本/日期；各原服务群实际全寿命小时；来源数量ID/X_jx；各来源F_booked_jkx；w_jk；delta_jkx；原验收A_k；更正链接；cp_capital_amendment逐来源B/版本及原N字段 | 用可追溯厂家同配置净质量或校准整对象称重，原计数/长度仅凭同对象实测质量换算。采车辆开机小时含怠速/空载/泵，撬装/软管连接运行；全用户寿命驱动取经审计车队/设备历史或有记录工程估计/区间，无默认。按equipment_share对账既往份额及剩余寿命变化。如实际报废交接，核接收联单及排液/质量，沿原系数并在最终退役时确定为w_jk；不采未来终端流或供方资本链。 区分验收后已观测一次性资本事件及常规运营，应用foreground_capital_events一次，不重复供方已验收设备范围。 最终退役时对账全部实际全寿命小时及各来源记账台账，按equipment_share计算最终份额和带符号更正，保留原验收A_k及版本链接。逐受影响服务群和来源核查，防止更正遗漏或重复；分母缺失/非正时阻止结果。 终态和来源/分母修订须完成cp_capital_amendment对账。 | kg; h; count; m; kg/count; kg/m | 每资产验收/更新/报废及每日小时；年度寿命复审 | 服务该群实际供应资产含此前购买；全部原受益者全寿命记录和更正；仅观测交接 | 仅指定槽罐车、装车撬装及软管 | 每参考流 | 验收/配置/质量记录、校准日志、版本化寿命/份额账及实际移交联单 |
| cp_capital_amendment | p_assets | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_waste_hygiene | p_hygiene | cleaning_wastewater; tanker_wastewater | 原废物产生/库存/移交账 | 批次/原灌装/工单/资产/责任者ID; 准确载体/规格/组成; 产生/期初/转出/期末kg; 产生及移交V/rho/温度; 泄漏/蒸发/添加; 接收方/日期/交接/联单; 收集责任; 服务带回排除 | 校准秤或液位/体积加同批实测密度温度，按批准样品链表征载体（液体含Cl2当量余氯QA、pH、配方/污染）。库存按kg对账，不按异温体积，逐原批追签字实际接收移交。整载体产出一次，排除服务已含供方带回废物。背景处理之后可从确切交接点关联，此处不要求接收过程数量。库存/身份/接收未知或实际直接排放完整群前须解决/准确卡。 | kg; m3; kg/m3; degC; mg/L; pH | 每产生/库存移动/移交；每月对账 | 原产生群至实际前景移交 | 封闭卫生收集及现场维修废物交接 | 每参考流 | 校准、表征样品、质量库存及签字接收联单 |
| cp_waste_maintenance | p_maintenance | used_oil; spent_coolant; used_tyre; used_seal | 原废物产生/库存/移交账 | 批次/原灌装/工单/资产/责任者ID; 准确载体/规格/组成; 产生/期初/转出/期末kg; 产生及移交V/rho/温度; 泄漏/蒸发/添加; 接收方/日期/交接/联单; 收集责任; 服务带回排除 | 校准秤或液位/体积加同批实测密度温度，按批准样品链表征载体（液体含Cl2当量余氯QA、pH、配方/污染）。库存按kg对账，不按异温体积，逐原批追签字实际接收移交。整载体产出一次，排除服务已含供方带回废物。背景处理之后可从确切交接点关联，此处不要求接收过程数量。库存/身份/接收未知或实际直接排放完整群前须解决/准确卡。 | kg; m3; kg/m3; degC; mg/L; pH | 每产生/库存移动/移交；每月对账 | 原产生群至实际前景移交 | 封闭卫生收集及现场维修废物交接 | 每参考流 | 校准、表征样品、质量库存及签字接收联单 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| custody_balance | accepted_distribution_service | 逐原新灌装群以kg平衡：m_D+m_open=m_A+m_R+m_loss+m_close。各m=sum(V_i*rho_i)，用实际交接温度同批实测液体密度。D_s保留水源交接点体积，A实际卸水验收体积，R/L_loss为声明去向交接体积。不得等同异温体积。内部再装载相消。各水源/供方/地理/处理组合分s，匹配上游且不重复源关联。新灌装群m_open=0，前群库存保留谱系排除。完整前须m_close=0且全部最终交付/退回/损失去向及返车已知。 | D_s; A; R; L_loss; V_i; rho_i; m_open; m_close; cp_custody | 结清原灌装质量账 |  |
| commodity_ratio | accepted_distribution_service | b_s=D_s/A，为每1m3服务的水源商品m3。使用模型必须添加sum_s(b_s*匹配水源/供方/地理/处理上游清单)，另加R_s/A及L_s/A去向一次且不抵扣。不得再加1m3验收水生产。D_s仅一次记原水源灌入，不含内部再装载。辅助水供应仍在独立前景投入背景。 | D_s; A; R_s; L_s; cp_custody | 水源商品及去向比例 |  |
| normalize_foreground | 所有清单行 | 逐非参考行先按单一选定分子单位汇总实际归属原始量，再除正A一次。卡M_/W_/T_/O_变量为归一前归属总量，不是已有每m3因子。仅电力将E_kWh换3.6*E_kWh MJ一次。整溶液仍为产品质量，不是有效成分质量。服务T_test/T_calibration为明确规程实际有效工时，不由次数猜小时。内部材料/公用量绝不固定参考1m3。 原服务群设备/资本更正按equipment_share使用原A_k，不得改用当前A。失败或零产出任务保留其消耗，归一化前归属有证据的原父服务群。若整个责任群无正值验收A_k，保留原始总量及未解决缺口，不得输出单位参考结果，也不得转嫁无关成功群。 | A; M_total; W_total; T_test; T_calibration; O_total; E_kWh; cp_transport; cp_energy; cp_hygiene; cp_testing; cp_calibration; cp_work | 每参考流单属性量 |  |
| equipment_share | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 在本入口声明的适用范围内，按顺序完整执行规则组：equipment_share_initial_driver; equipment_share_remaining_life; equipment_share_final_shares; equipment_share_source_corrections; equipment_share_constraints。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets; equipment_share_initial_driver; equipment_share_remaining_life; equipment_share_final_shares; equipment_share_source_corrections; equipment_share_constraints | 归属实际设备及已观测移交质量总量 |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| trip_totals | delivery_diesel; delivery_urea | K=sum全部实际车辆公里，含重载/空载/返程/失败；公路路线K>0仅QA，不是燃料/排放分母。直接测全部开机怠速/泵/零里程失败事件及燃料/尿素消耗。汇总M_diesel/M_urea归原群至最终返车。不乘完整车辆公里因子或重复实际往返距离；不得因K_event=0推零负荷。 | K; M_diesel; M_urea; engine_hours; idle_hours; pump_hours; A; cp_transport | 实际完整群实物总量 |  |
| emission_species | 所有清单行 | 实际前景源/事件释放用一个实测物种质量或有记录车辆/燃料/控制特定因子，具原生基准及不确定性。kg物种/kg燃料因子仅乘燃料一次，不再乘组成；碳/元素因子用有证据化学计量换算一次。化石/生物碳分开。NO与NO2分别，颗粒细/粗不重叠且不再加总颗粒。若含实测非尾气PM，在原源记录分辨，不与收集轮胎/刹车废物重复；实际其他物种/介质完整前须准确卡。年度燃料/碳平衡仅QA事件释放，不另排放。供方制造/场外处理因子不属此处。实际因子/排放未知为不完整，不是零。 | fuel_mass; factor; composition; source_event; control_state; A; cp_transport | 各前景物种质量 |  |
| waste_handover_balance | 所有清单行 | 逐实际原产生废物批次：M_gen+M_open=M_ship+M_close+M_documented_other，以kg用各实际交接温度/组成实测V*rho。不等同异温体积。M_documented_other含独立有证据泄漏/蒸发/添加且符号正确，跨环境时须明确额外卡。液体W_handover=sum(M_ship/rho_handover) m3，不用另一密度下产生体积替代。保留原源/事件及收集联单。跟踪群产生废物至实际移交，期末库存/接收方未解阻止原群完整。继承前群废物保留谱系排除。不要求前景接收方处理实物清单。 | M_gen; M_open; M_ship; M_close; M_documented_other; rho_handover; A; cp_waste_hygiene; cp_waste_maintenance | 实际前景移交总量及结清质量账 |  |
| electricity_gate | loading_electricity | E_kWh为实际外部电网购入，仅扣可证同一购买退电，不用无关本地外送净额。新现场发电须明确前景路线/卡更新，电量内部备忘，实际燃料/物种一次。不重复购入检测/校准便携电量或供方背景发电。 | E_kWh; import; same_purchase_return; cp_energy | 不重复使用点电网电力 |  |
| uncertainty_reconcile | 所有清单行 | 独立表/库存用校准不确定性传播对账；超过有记录合成不确定性的未解残差须调查纠正，不强行平衡。A=0、身份/发生未知、负库存未解、原灌装/车辆/废物移交未闭合阻止完整单位数据。寿命/因子估计记录方法/区间/敏感性；应急示例及候选行不是默认量或法律限值。 | raw_ledgers; calibration; uncertainty; A | 对账前景及披露缺口 |  |
| foreground_capital_events | 所有清单行 | 完整供应设备交接点为可投运验收，供方在该点前已含交付/安装/检定不另计前景资源。该点后实际观测到的配送者运营投运、场址安装改造或退役任务仍属前景。已有具体卡可覆盖同一实测资源/对象：原账区分事件、原资产键及资本事件/常规状态。原资产一次性事件归属总量=sum(实际原始事件量*该原资产alpha_j)一次；常规工单用原服务直接归属或shared_operations。仅在具体卡对象允许范围内用于实际场址电力、实际车辆燃料/泵及源排放或实际排液/交接；不同资源/物种完整前须独立准确卡。不重复供方交接前资源，不在退役年重置整事件负荷，无背景支援资本。 最终退役时，每项已观测来源事件使用equipment_share最终w_jk，按其各自F_booked_jkx及带符号delta_jkx在原服务群/A_k作更正；未记账的新事件从零起算。不得再次叠加未分配物理QA总量。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | event_id; original_asset_id; event_kind; actual_quantity; alpha_j; A; cp_energy; cp_transport; cp_work; cp_assets | 一次归属已观测前景资本事件量 |  |
| equipment_share_initial_driver | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 本条属于 equipment_share。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。各实际供应资产j，初始分配alpha_j=h_cohort_j/H_lifetime_all_users_j，采用有证据正的全部受益者寿命分母及equipment_attribution固定驱动。C_asset=sum(m_net_supplied_j*alpha_j) kg。仅实际移交时C_retired_handover=sum(m_actual_handover_j*alpha_j) kg，实际最终退役后alpha_j采用最终w_jk，不设预期终端流。alpha_j后不再群/全用户比例。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | 方法组成部分；清单结果归原入口 |  |
| equipment_share_remaining_life | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 本条属于 equipment_share。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。剩余寿命/使用修订须有记录并冻结全部已接受历史份额，F_prev_all_users为所有原受益者历史份额之和。修订后当前期唯一公式为alpha_new,current=(1-F_prev_all_users)*h_current/H_remaining_all_users。H_remaining_all_users为正，包含当前期及全部受益者剩余使用，采用同一设备固定驱动；h_current为此原受益群当前期同口径使用量。该新alpha仅用于新归属数量，保留既往比例及原供应质量，要求0<=F_prev_all_users<=1且全部受益者累计份额<=1。不得用修订总寿命重算全部历史、重置原质量或在购置/处置年度重置分配。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | 方法组成部分；清单结果归原入口 |  |
| equipment_share_final_shares | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 本条属于 equipment_share。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，不得除以此时为零的剩余小时。对每个原受益服务群k，按全部用户及期间的同一设备驱动计算w_jk=h_actual_jk/sum_all_lifetime_actual_h_j，纳入失败/怠速/空载/泵使用。要求有依据且为正的总量，sum_k(w_jk)=1。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | 方法组成部分；清单结果归原入口 |  |
| equipment_share_source_corrections | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 本条属于 equipment_share。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对每项原来源数量x（供应资产、已观测一次性资本事件或实际退役载体），保留其各自已记账份额F_booked_jkx，计算delta_jkx=w_jk-F_booked_jkx；数量更正为delta_jkx*X_jx。从未记账的新实测载体/事件采用F_booked_jkx=0。各来源最终归属量均为w_jk*X_jx。保留原已接受记账及原始物理记录，对每个原服务群结果作版本化更正，并将更正后归属总量仅除以其原正值验收A_k一次。带符号delta可冲回过度分配，但不是负物理流或替代抵扣。不得将余额整项归处置年A、重复乘份额或暗改旧物理量。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | 方法组成部分；清单结果归原入口 |  |
| equipment_share_constraints | tanker_asset; loading_skid; loading_hose; retired_tanker; retired_skid; retired_hose | 本条属于 equipment_share。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际全寿命小时、已记账份额或原A_k缺乏依据时阻止单位参考结果，不得等分或改用当期A。不确定剩余使用记录方法/区间/敏感性，不虚设质量/寿命。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | m_net_supplied_j; m_actual_handover_j; h_cohort_j; H_lifetime_all_users_j; alpha_j; F_prev_all_users; h_current; H_remaining_all_users; alpha_new_current; h_actual_jk; sum_all_lifetime_actual_h_j; X_jx; F_booked_jkx; w_jk; delta_jkx; A_k; A; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。保留既有独立驱动：槽车为含怠速/空驶/泵送的发动机运行小时，装卸撬/软管为连接操作小时；各设备按相同单位包含全部使用者和期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_completion | 所有清单行 | 未绑定卡身份仍未验证，完整前景发布前须哈希绑定官方直读响应/回执，核UUID/状态、双语官方名、实际对象/状态、方向/类型、主属性/单位及介质/交接点。检索命中或旧结论不足。现有AC为历史核实使用点身份，不是新查。参考服务不得用水商品UUID。 | 直读响应/回执及逐行审查 |
| scope_and_occurrence | 所有清单行 | 采前及每月签字车辆/场址/供方/工单/库存审查确认各必需/条件对象发生或未发生。核实际具体设备配置及服务合同边界、每行一个属性/单位，不重复所含初装液/供应/便携能源/废物。实际未知/额外化学品、包装、维修、物种、介质或现场处理完整前须准确前景扩展，不能其他材料卡或零。 | 签字发生/配置及合同去重矩阵 |
| acceptance_quality | accepted_distribution_service | 采前具名当地饮用/客户标准、采样位置/方法/频次及有资质判定人。记录供方源头及接收卸水结果和所有失败及样品链。供方源头测试仍在D_s生产，接收检测服务起于卸水采样点。签字不等于饮用合规，WHO/King County应急剂量/余氯/时间不确立全球限值。 | 批准当地检测规程、样品链及签字判定 |
| projection_translation | 所有清单行 | 逐项中英核对象、方向/类型、UUID/名称、单属性/单位、公式/分母、条件/否定/强度及交接点。全部强制范围、归属、采集、计算和质量要求须在受支持源表及实际structured/guidance；schema/fingerprint/名称marker不等于语义/科学批准。 | 双语语义审查、解析数组及确定性投影对照 |
| inv_event_attribution | loading_electricity; delivery_diesel; delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | 同对象验收后已观测现场一次性事件采用foreground_capital_events，常规使用仍归原群。 | 所列各清单行既有的采集协议和证据。 |
| inv_emission_evidence | delivery_co2_fossil; delivery_co2_biogenic; delivery_co; delivery_ch4; delivery_n2o; delivery_no; delivery_no2; delivery_so2; delivery_pm25; delivery_pmcoarse; delivery_nh3 | 采集前筛实际车辆/控制/燃料；按emission_species用一个实测物种质量或有记录源特定因子。 | 所列各清单行既有的采集协议和证据。 |
| inv_retired_carrier | retired_tanker; retired_skid; retired_hose | 单一已表征完整供应对象废物载体，净kg，实际排液/含液明确对账。实际最终质量按equipment_share采用原资产最终实际全寿命份额及各来源更正，不虚构未来未观测废物或配对接收投入，不展开场外处理/资本链。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | rule | source_ids |
| --- | --- | --- |
| reference_gate | 须唯一1m3的accepted_distribution_service产出、正A及公路K>0、全部限定、原灌装保管/返车及群废物交接结清。拒绝水商品参考、前群混入或去向未解。 |  |
| basis_and_conservation | 检查custody_balance及commodity_ratio、A一次、全部空载/失败/怠速/泵事件、前景服务/设备/维修和实际废物交接。核同对象换算、固定设备驱动及无整资产/初装/更换/服务资源重复。前景不含背景递归、未来接收或场外处理物种。 最终退役时核查equipment_share全部用户实际全寿命驱动、各来源记账台账、w_jk及带符号delta_jkx和版本化原服务群A_k更正；不得除以剩余小时、将余额整项归处置年或形成负物理流抵扣。 |  |
| validate_capital_amendment | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| completeness_truth | 实际未绑定身份、原始数量/发生缺失、服务交接点、当地验收证据、平衡/交接未解或排放无依据阻止完整前景数据。candidate/authored及aligned/localized不代表方法/发布批准。交付前核实际中英及机器guidance义务。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景自营槽罐车配送服务候选 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 原专用签约柴油饮用水槽罐车路线，净卸水验收1m3；使用模型补各水源D_s/A生产及拒收/退回/损失去向且不抵扣。供应设备及服务投入保留确切交接点和单属性/单位。 |
| excluded_use | 管网、瓶装/非饮用/灌溉水、其他方式、纯中介、配送者中间储水、独立水商品、完整供方/接收方生命周期清单或饮用合规证明。 |
| required_metadata | 全部参考限定；原灌装ID/各水源D_s/A/R_s/A/L_s/A、实际温度密度及保管/返程结清；实物怠速/失败/泵事件；设备净质量及原服务份额；明确服务方法/工时/合同矩阵；实际废物交接点/联单/库存；数量/发生/校准及不确定性。 |
| required_quality_disclosure | 仅前景范围、背景关联点/去重、未绑定身份、数据/因子缺失、服务范围及寿命不确定性、当地验收规格及candidate/aligned状态，不代表方法批准。 |
| update_trigger | 路线/交接/规格/车辆或供应设备配置/服务合同/化学品/废物交接/实际排放/寿命假设变化或新官方身份。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc30-69230 | official_guidance | 联合国统计司CPC 3.0子类69230解释说明。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69230 | 仅分类语境：卡车/其他方式自营配送及排除；本PCR自行选择更窄路线 |
| who-tanker-2013 | official_guidance | WHO/WEDC《槽罐车安全供水》，技术说明12，2013年7月，第12.1–12.2页、框12.2。https://www.who.int/docs/default-source/wash-documents/wash-in-emergencies/technical-notes-on-wash-in-emergencies/who-tn-12-delivering-safe-water-by-tanker.pdf | 仅应急路线运营、燃料/里程/维护/保管记录类型及交付质量条件。前景边界/分配及单对象/属性判定为PCR选择；不采用物流示例数值 |
| who-cleaning-2013 | official_guidance | WHO/WEDC《储水罐及槽罐车的清洗消毒》，技术说明3，2013年7月，第3.1–3.4页。https://www.who.int/docs/default-source/wash-documents/wash-in-emergencies/technical-notes-on-wash-in-emergencies/who-tn-03-cleaning-and-disinfecting-water-storage-tanks-and-tankers.pdf | 清洗/冲洗/消毒顺序及液废去向需求；适配配送者设备为作者方法；不将来源剂量/配方作通用值，也不声称来源推荐碳酸钠 |
| kingcounty-tanker-snapshot | official_guidance | 西雅图及金县公共卫生《公用饮用水卡车运输指南》，2026-10-27快照。https://kingcounty.gov/en/dept/dph/health-safety/safety-injury-prevention/emergency-preparedness/personal-preparedness/truck-transportation-of-water | 独立地区应急指南：批准水源、清洗/检测、交付记录及防消毒液入河；说明法域条件差异，不采用数值 |
