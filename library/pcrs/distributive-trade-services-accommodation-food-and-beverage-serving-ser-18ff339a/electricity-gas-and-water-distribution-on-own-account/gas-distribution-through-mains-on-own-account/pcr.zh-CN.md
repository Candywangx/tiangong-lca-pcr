---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.gas-distribution-through-mains-on-own-account
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 管网燃气自营分配

## 1. 范围与适用性

本规则规定经本地干管和支管自营供应干燥化石天然气中的分配环节；方法配置窄于CPC 69120。入口须已完成调质及加臭，且路线不含分配交接范围内运行燃烧、火炬、净化或现场加臭。所有规范要求见下述规则表、流卡及采集协议。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.gas-distribution-through-mains-on-own-account |
| classification_refs | CPC 3.0:69120; narrower |
| covered_products | 干燥化石天然气经干管支管自营分配环节；附属表具维护 |
| excluded_products | 其他气体燃料；收费合同制分配；长输；独立装表抄表；制气；LNG瓶装路线；分配交接范围内运行燃烧火炬净化加臭 |
| representative_product | 以分配活动计量的1干基标准m3客户已验收交付气体 |
| production_route | 城市门站交接收气；本地调压；干管支管；客户交接表验收 |
| market_state | 符合管输要求且已加臭的干燥天然气；声明组成、交付压力及验收规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 自营本地燃气分配 |
| How much | 1 m3 |
| How well | 满足声明的客户交接压力、质量及计量规格的已验收干燥化石天然气 |
| How long or cycle | 一个完整连续12个月运行窗口；不隐含客户使用时长 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自营本地干燥天然气分配服务 |
| 参考流属性 | 标准状态体积 `93a60a56-a3c8-13da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 自营所有权及责任; 网络管段; 起止交接表坐标及ID; 气体化石来源及含加臭剂的干基组成; 273.15 K及绝对压力101325 Pa; 水分修正; 压缩因子和密度方法; 交付压力及验收规格; 实际12个月窗口; 已验收净D及原交付批次和退回修订; 前景供给/服务gate及资本覆盖; 不确定性; 排除作业发生性筛查 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| gas_reference | 参考产品 | 标准状态体积 `93a60a56-a3c8-13da-a746-0800200c9a66` | m3 | 参考量为273.15 K、101325 Pa绝压下1 m3验收干基化石天然气的分配服务活动。它不是燃烧能源投入或运行压力下体积，气体组成及交付压力另行声明。 |
| gas_state_conversion | 所有气体记录 | 标准状态体积 | m3 | 湿基实际体积仅按convert_gas_volume转换一次，使用绝压、水蒸气分压、K温度及匹配压缩因子。已按本基准校正的仪表读数不重复校正。能源账单须有同期实测低位热值及高低位换算依据。 |
| common_denominator | 所有清单行 | 该卡唯一流属性 | 该卡首选单位 | 每卡仅一个明确计量对象、一个主要property及其一个首选单位。可用实测原字段换算到该单位，不把质量/计数/时间作为可互换的卡单位。先汇总同一连续12个月的归属原量Aj，再除以正值D一次；D为accepted_delivery_cohort定义的验收干基标准交付体积。后续退回须同时修订原批次及其归一化清单，不得扣减无关当期分母。内部投料不固定为最终参考量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已处理并加臭的干基化石天然气在指定城市门站交接入口 |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0:69120; narrower |
| recursive_input_rule | 仅记录运行、现场维修及具体资产/服务的边界交换；不展开供应方内部。相邻重复分配段须先审查独立gate和损失归属。 |
| upstream_dataset_requirement | 后续背景关联须匹配电力、损失补充气、具体资产/耗材、安装/校准/交通服务的交付gate及已含范围；废物处理从前景移交gate接续。已验收主商品气上游由独立商品模型承担一次。 |
| disclosure | 城市门站/客户gate、组成、标准状态、压力、前景过程、具体资本份额、服务合同范围、背景未展开事项及缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | 所有过程 | 仅适用城市门站入口前已处理并加臭的干基化石天然气自营本地管网分配。纳入至客户验收交接表的减压、实际电力增压/加热、检漏、计量维护及应急作业，声明精确gate、所有权责任、气质、压力和验收条件。 | un-cpc-gas-distribution; eia-gas-delivery |
| boundary_exclusions | 所有过程 | 排除制气/处理、长输、散装储存、液化气/瓶装配送、客户燃烧、收费分配及独立计量产品。分配gate内运行燃料燃烧、火炬、净化或现场加臭使此较窄路线不适用；实际发生的排除过程不得记零。 | un-cpc-gas-distribution; eia-gas-delivery |
| boundary_service | gas_makeup; accepted_service | 主商品仅列于交接及库存台账，不设置主商品购气和售气清单卡。独立标识的商品模型承担已验收交付、被拒收商品转移及不合格供方退回，按来源和库存结转以防上游生产重复。本配气服务通过gas_makeup一次承担实际未回收物理损失及已证实未回收非授权取气的城市门站供气负担；商品模型必须排除这两部分数量。非授权交接转移保留在实物台账，不计入验收D或气体直接排放。账单残差及管存变化不自动成为排放或补气。 |  |
| boundary_foreground | distribution; maintenance | 清单限于运营管网及实际现场维修的边界交换。具体交付完整资产、经表征溶液及明确外部服务，只要计量对象唯一且仅一个主要属性/单位，即可整体保留。移除供应制造/采掘、供应方车辆/道路/工具制造、供应交通链及场外接收方处理内部。本模型为前景模型，后续匹配背景关联承接上游负荷，不重复前景投入。 |  |
| boundary_assets | maintenance | 原管网管段、调压站及独立计量资产以指定交付产品投入保留，另列定义清楚的敷设服务。建立无重叠验收清单、实物单位、供应/合同gate及实际原量；集成仪表/接头/涂层不作第二次投入。资本交付包装由供应方带走时留在其服务gate内；包装实际由前景留存/生成时，须先补充具体材料/废物卡及暂存/移交记录，方可完整使用。持续资产服务按capital_share归属。不得因财务资本化或费用化而遗漏同一更换实物。直接维修耗用密封件、油、校准气和试验水按实耗；形成持续服务的更换资产另建原键并分摊，不兼作耗材。 |  |
| boundary_contracts | maintenance; electricity | 每项采购服务须采集实际合同规格、主要单位、交付/验收gate和已含供料、能源、交通、维修、废物及直接排放范围。合同排除且由前景供给的项目另计一次；供应方已含项不重复。电力仅计前景运行/维修实际外购净接受供给，排除服务供应方已含电力。未列实际前景投入/排放须补充具体审查卡；合同缺项是缺口，不能据此忽略。 |  |
| boundary_waste | 所有废物输出 | 每项实际经表征废物载体在明确的前景暂存/拆除及移交gate记录一次，含接收方及接收质量；不再输出其所含物质。完整拆除仪表/站场可作为一种经表征载体。不得假定拆为纯组分，也不列未来处理接收配对卡。场外接收处理/运输的资源和排放是背景，不是本前景交换。实际现场处理/直排须先补充明确的审查过程及排放/废物卡，方可声称完整。 |  |
| boundary_compartment | 所有基本流输出 | 每次物理释放按首次技术系统-环境界面归属：通气/露天泄漏为空气，埋地直接释放为土壤。同一事件量互斥，之后土壤向空气迁移不作第二次分配排放。仅地表/羽流读数不能证明埋地源总损失。未知介质及留存/转化气体属于缺口，须与源测量对账。 |  |
| boundary_species | distribution; maintenance | 按实际化学物种及首次介质分别记录。气体组分卡仅在分析/事件证明该物种释放时适用，不设默认比例或自动填充微量物种。其他实际组分须补具体卡并同步协议/计算/翻译。校准混合气释放与管网气体事件分开，不属于补充气损失。 |  |
| boundary_transfers | distribution | 本路线回收管网气仅允许在同一网络再注入：匹配回收/再注入键并抵销内部数量，不给信用。每笔供应方退回须按交接键、数量、接收gate及去向确定独立商品模型责任。外售回收气/氮气或气体废物处理，须先审查具体产品/废物转移及gate，不能遗漏实际转移。第二分配段须审查无重叠gate及损失责任。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| distribution | 本地天然气分配及损失核算 | required | 所有适用管网 | foreground | 1 m3 accepted_service |
| maintenance | 管网资产服务投入及现场维修 | required | 实际持续资产及发生的维修；个别卡按实际规格/事件适用 | support | 归属原量每参考流 |

### 过程：本地天然气分配（`distribution`）

#### 输入

##### 产品流

###### 交流电 (`electricity`)

仅计前景管网运行、现场检漏和维修实际使用的外购净接受交流电，包括控制、电加热/增压、遥测及实际现场工具用电。以明确用电点计量并排除外购服务已含电力；不展开供应方发电内部。运行现场燃烧仍使本路线不适用。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：可归属实测kWh × 3.6 / D；cp_energy。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### 城市门站入口承担实际损失及非授权取气的干燥化石天然气 (`gas_makeup`)

一项按组成限定、以kg计量的天然气产品投入，覆盖归属本配气服务的实测未回收实际损失及已证实未回收非授权取气。保留入口供气规格及上游数据范围；并非输配气总量。这两类责任原因不改变其单一天然气物质、属性和单位。非授权气体是交接转移，不是基本流排放。

- 选定流：城市门站入口承担实际损失及非授权取气的干燥化石天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属(physical_loss_mass + U_mass) / D；cp_gas；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：

###### 管道吹扫用供应氮气 (`nitrogen_purge`)

仅有记录的氮气吹扫发生时纳入。逐事件称量气瓶或供气库存前后数量并对账领用、退回及剩余量，采用事件实际注入量，不得使用未匹配的年度采购量。供应氮气须区别于天然气原含氮及其后向空气释放。

- 选定流：管道吹扫用供应氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐事件实测实际出库并注入网络的氮气kg / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 自营本地干燥天然气分配服务 (`accepted_service`)

按声明干基标准状态，在客户交接表计量已验收净交付D = G - R，并按accepted_delivery_cohort关联原验收批次。实物月账使用毛交付G，不使用D。内部转移、拒收气体、非授权取气和重复读表不增加服务产出。

- 选定流：自营本地干燥天然气分配服务
- 流属性/单位：标准状态体积 `93a60a56-a3c8-13da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：`un-cpc-gas-distribution`

##### 废物流

##### 基本流

###### 向空气排放的化石甲烷 (`methane_air`)

仅化石甲烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的化石甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`epa-gas-calculation-2025`

###### 向空气排放的化石二氧化碳 (`carbon_dioxide_air`)

仅化石二氧化碳从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的化石二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`epa-gas-calculation-2025`

###### 向空气排放的乙烷 (`ethane_air`)

仅乙烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的丙烷 (`propane_air`)

仅丙烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的丙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的正丁烷 (`n_butane_air`)

仅正丁烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的正丁烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的异丁烷 (`isobutane_air`)

仅异丁烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的异丁烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的正戊烷 (`n_pentane_air`)

仅正戊烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的正戊烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的异戊烷 (`isopentane_air`)

仅异戊烷从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的异戊烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的氮气 (`nitrogen_air`)

仅氮气从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向空气排放的四氢噻吩 (`tht_air`)

仅四氢噻吩从网络直接跨界进入受纳空气时纳入。适用时保留实际化石来源及状态。 按第8节 `inv_air_species` 执行。

- 选定流：向空气排放的四氢噻吩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的化石甲烷 (`methane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的化石甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`epa-gas-calculation-2025`

###### 向土壤释放的化石二氧化碳 (`carbon_dioxide_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的化石二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`epa-gas-calculation-2025`

###### 向土壤释放的乙烷 (`ethane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的丙烷 (`propane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的丙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的正丁烷 (`n_butane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的正丁烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的异丁烷 (`isobutane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的异丁烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的正戊烷 (`n_pentane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的正戊烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的异戊烷 (`isopentane_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的异戊烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的氮气 (`nitrogen_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

###### 向土壤释放的四氢噻吩 (`tht_soil`)

仅该组分从管道边界直接进入土壤时纳入。 按第8节 `inv_soil_release` 执行。

- 选定流：向土壤释放的四氢噻吩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次归属的实测或按组分计算排放质量 / D；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：

### 过程：管网资产服务及现场维修（`maintenance`）

#### 输入

##### 产品流

###### 验收合格的聚乙烯燃气管段及其指定管件 （`asset_pe_pipe`）

按指定压力等级、直径及聚乙烯牌号确定交付产品gate的管段实测质量；不含包装及敷设服务，不重复加入树脂、已含管件或供应方工厂投入。

- 选定流：验收合格的聚乙烯燃气管段及其指定管件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总各原资产键的验收kg × 原资产服务归属份额alpha / D；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 验收合格的涂层碳钢燃气管段及其指定管件 （`asset_steel_pipe`）

实测完整管段质量，包含附着防腐涂层及指定管件，记录钢级、壁厚和直径；不另计其中涂层或钢材。

- 选定流：验收合格的涂层碳钢燃气管段及其指定管件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总各原资产键的验收kg × 原资产服务归属份额alpha / D；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 验收合格的电动预制燃气调压站 （`asset_station`）

以配置特定的完整站场为对象，在现场调试验收移交gate计量，包含撬架、调压器、阀门、控制、集成仪表及声明覆盖的基础/安装。称量完整站场或汇总经核验且不重叠的交付模块质量。供应采购/建造为背景，不另计内部部件或重复安装。

- 选定流：验收合格的电动预制燃气调压站
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总各原资产键的验收kg × 原资产服务归属份额alpha / D；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 验收合格的独立膜式燃气计量组件 （`asset_customer_meter`）

以实际独立供货的客户计量组件配置为对象，在安装调试验收gate计量，含指定壳体、计数装置和接头；不含asset_station内已计仪表。按校准称量或经核验的供应方单件质量及验收数量求质量。

- 选定流：验收合格的独立膜式燃气计量组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总各原资产键的验收kg × 原资产服务归属份额alpha / D；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 验收合格的燃气管线开挖敷设及恢复服务 （`pipe_installation`）

按特定沟槽、深度、路面及管道安装规格的合同活动，以验收路线长度计量。包含约定gate内开挖、垫层、回填、连接、测试、路面恢复，以及承包商能源、交通、工具和废物管理；排除单列采购管材和单列前景试验供水。采集实际验收长度和合同含/不含项，不另计承包商内部材料/能源或同一站场安装。

- 选定流：验收合格的燃气管线开挖敷设及恢复服务
- 流属性/单位：长度 / m
- 数量规则：汇总各原资产键的验收m × 原资产服务归属份额alpha / D；cp_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 燃气系统更换用丁腈橡胶密封件 （`seal_nitrile`）

按实际规格记录维修领用实耗密封件，采用一种有配方说明的制品；不拆其组分。

- 选定流：燃气系统更换用丁腈橡胶密封件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由期初库存＋接收－期末库存－未耗用退回确定归属实耗kg / D一次；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 燃气管网设备用矿物润滑油 （`lubricant`）

实测前景设备维修耗用的指定润滑油；排除供应设备或采购服务已含油品。

- 选定流：燃气管网设备用矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由期初库存＋接收－期末库存－未耗用退回确定归属实耗kg / D一次；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 有证书的甲烷-氮气校准混合气 （`calibration_mix`）

以一种有证书的交付校准混合气规格为对象，按混合气总质量计量，记录甲烷摩尔/质量分数及证书。它是校准产品，不是管网损失补充气；按证书及回收守恒分别核算实际排放甲烷和氮气。

- 选定流：有证书的甲烷-氮气校准混合气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由期初库存＋接收－期末库存－未耗用退回确定归属实耗kg / D一次；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 燃气管道水压试验供水 （`test_water`）

在前景入口计量实际现场水压试验事件取水。排除敷设/校准合同已含供水；未留存或回用的排出载体只作为废物移交一次。

- 选定流：燃气管道水压试验供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由期初库存＋接收－期末库存－未耗用退回确定归属实耗kg / D一次；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 指定燃气交接计量表的外部校准服务 （`meter_calibration_service`）

仅独立外部校准合同实际发生时适用：按指定仪表及验收测试规程计量技术人员实际作业时间；除合同明确排除项外，包含供应方校准气、仪器、能源、交通和废物。合同排除的投入按单列实际流采集，不重复计入已含校准气或供应方排放。

- 选定流：指定燃气交接计量表的外部校准服务
- 流属性/单位：时间 / h
- 数量规则：汇总实际验收且归属管网维修任务的h / D一次；cp_services。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

###### 燃气管网维修人员专用轻型厢式车运输服务 （`maintenance_transport_service`）

仅实际外购、运送指定维修人员及工具的轻型厢式车服务适用，包含验收行程gate内车辆、燃料、空驶调度及分配后的怠速作业。按实际载人/空驶车公里及任务归属计量；仅怠速合同费用须按有依据的供应方总服务分摊换算，不能在零公里时消失。这是具体运输产品，不另计供应方燃料、车辆或道路清单。

- 选定流：燃气管网维修人员专用轻型厢式车运输服务
- 流属性/单位：车辆行驶距离 / vehicle-km
- 数量规则：汇总实际验收且归属管网维修任务的vehicle-km / D一次；cp_services。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 拆除的聚乙烯燃气管载体 （`waste_pe_pipe`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：拆除的聚乙烯燃气管载体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 拆除的涂层碳钢燃气管载体 （`waste_steel_pipe`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：拆除的涂层碳钢燃气管载体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 拆除的膜式燃气计量组件 （`waste_meter`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：拆除的膜式燃气计量组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 拆除的燃气调压站组件 （`waste_station`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：拆除的燃气调压站组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 废弃燃气系统丁腈橡胶密封件 （`waste_nitrile`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：废弃燃气系统丁腈橡胶密封件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 燃气管网设备废矿物润滑油 （`waste_oil`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：燃气管网设备废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 经表征的燃气管道水压试验废水 （`waste_pressure_water`）

不重复计供应服务已含废物或载体所含物质。 按第8节 `inv_waste_carrier` 执行。

- 选定流：经表征的燃气管道水压试验废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经期初/期末暂存对账的归属移交载体kg / D；cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 校准产生的化石甲烷排入空气 （`calibration_methane_air`）

仅有证书校准混合气实际现场向空气释放时适用。排除回收气、气瓶余量及外购校准服务已含排放；不加入管网泄漏/补充气。其他实际介质/物种须审查补充。

- 选定流：校准产生的化石甲烷排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐事件汇总(唯一来源事件权重 × 实际释放混合气kg × 证书物种质量分数) / D；直接实测物种kg仅先乘唯一事件权重再/D，不再乘组成；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 校准产生的氮气排入空气 （`calibration_nitrogen_air`）

仅有证书校准混合气实际现场向空气释放时适用。排除回收气、气瓶余量及外购校准服务已含排放；不加入管网泄漏/补充气。其他实际介质/物种须审查补充。

- 选定流：校准产生的氮气排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐事件汇总(唯一来源事件权重 × 实际释放混合气kg × 证书物种质量分数) / D；直接实测物种kg仅先乘唯一事件权重再/D，不再乘组成；cp_maintenance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_direct | 所有清单行 | 先细分独立计量的管网/站场/任务；已直接归属量份额为1。共享外购电优先用子表实用量，否则用实测设备kW×实际运行/待机h并与总表对账。剩余共享经常维修材料和校准作业仅用本网络已实施人员h/同工单全受益方人员h一次。专用运输直接归属；共享人员行程按同一行程本网络实际技术人员人公里/全受益方人公里，空驶调度关联其有据载客服务批次。不得留到以后另选驱动，已归属活动不重复乘份额。原资本现场事件改用foreground_site_attribution。分母缺失/非正是缺口，不默认等额或价格分配。 |  |
| allocate_assets | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | 每项保留的原固定资产及其安装使用capital_share一次。保留原量/规格/键、投运日、有证据的寿命估计、全用户时间/服务台账及历史分配。不采集嵌套供应方车辆/道路/工具支持资本清单。质量和寿命由现场证据确定，不设默认值。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 |  |
| allocate_losses | distribution | 每次泄漏/放散及已证实非授权取气事件按责任段及原期间归属一次；共享实测量在实物划分后按验收标准体积吞吐分配。本服务承担未回收U_mass与physical_loss_mass的城市门站生产负担，按验收D归一化，不将U加至D或视为排放。拒收、失败维修/测试及应急工作负荷归属验收D。不设副产品或避免产气/回收信用。验收商品气生产及供方退回另由商品模型核算，且不得再次计入gas_makeup。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas | distribution | accepted_service; gas_makeup | 交接及存量台账 | 表号；节点；时刻；方向；验收拒收；退回；Va/Vn；修正状态；Pa；pw；Ta；Zn；Za；干基组成；密度；Hn；高低位比；期初期末管存；内部转移；来源品级；不合格供方退回接收方及接收节点；准确外部商品气模型ID；实物转移数量；负荷责任证明；原验收/事件ID及批次；毛G；实际客户R及退回时间；供方Sret；其他Oin/Oout来源/接收方及责任；已证实非授权U事件/gate、计量方法、持续期、实测标准体积、密度/组成、不确定性、回收ID/量/日期及原事件关联；S0/S1；修订版本及原/修订D与U_mass；商品模型排除gas_makeup的证明；| 读取经校准交接表与同步管存模型或仪表记录；核查证书及来源品级分析。每次来源品级变化及稳定运行每月采样；核实实际温压、干湿基准和组成特定的压缩因子及密度。交付规格及签署验收须独立于账单核对。 每次退回及非授权转移/回收均在实际交接gate及时间用校准方法计量，保留原读数及状态转换。非授权转移须有独立事件证据、期间/持续时间及接收方（未知接收方须明确披露），与表计差额分开。有审查的现场估计须附方法/来源/不确定性及敏感性；U缺乏依据时仍为未解决，不得重分类为泄漏。逐月记录各转移类别发生/未发生/未知及证据；无依据的未发生不是零。将转移和回收ID核对至原验收/事件批次，同时对分母和关联清单修订保留版本。| m3; kg; Pa; K; MJ/m3 | 间隔读表；逐月对账；每次品级变化 | 一个含停运的完整连续12个月窗口 | 全部城市门站、客户交接表及同一网络管存 | 每参考流 | 校准；表具设置；签署验收；分析；不确定性；存量与转移对账 |
| cp_release | distribution | nitrogen_purge; 管网气体基本流输出 | 事件及检漏登记 | 事件或部件ID；来源；起止；维修复测；速率单位；混合气或组分因子标志；方法；不确定性；采样时刻；干基组成；组分密度；四氢噻吩kg/m3；氮气期初期末库存、领用退回及实际注入kg；氮气回收留存释放kg；首次受纳空气或土壤或未知；埋深路径；源损失确定；干混合气压缩因子；组分摩尔质量；捕集；重叠ID；原资产/事件键；运行/资本现场阶段；alpha或当期受益份额； | 至少每年一次且每次维修事故后筛查全部范围内干支管、阀门、表具调压设备。用经校准方法计泄漏放散流量，按记录的实际持续期积分；检测前持续期须有证据和不确定性。难以直接计量的泄漏采用经审查、部件材料特定的场址估算及来源和不确定性，不得用通用默认值或未解释气差。登记每次降压、吹扫及应急事件；各事件工况须有代表性气样证据，不同时补采事件样。 | m3; kg; h | 每事件；年度完整检漏；维修复测 | 同一完整12个月，含无人监测间隔与应急 | 全部范围内管段、站场、表具、放散口与吹扫 | 每参考流 | 校准；检出限；事件持续期；分析；签署维修记录；首次受纳介质及埋管路径证据；源损失方法；捕集与重叠对账 |
| cp_energy | distribution | electricity | 用电点外购电台账 | 表号；时间；净接受kWh；电网接收/退回；设备；电压；实际kW及运行/待机h；服务合同排除项；管网/任务受益键 | 读取校准分时表，与账单和总表对账外部总供给及其退回。划分实际管网/维修用电和供应服务已含电力；仅不可单独计量的份额可用实际kW/h并与总量对账。不假定现场发电。 | kWh; MJ | 每计量间隔；每月闭合 | 与D相同连续完整12个月 | 全部前景用电点 | 每参考流 | 校准；供应gate；表/账及分摊对账 |
| cp_assets | maintenance | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | 原始验收资产及安装台账 | 原资产键；配置/验收清单范围；含/不含部件；质量或安装长度；称量或数量×经核验单件质量；供应验收gate；原交付/投运日；验收证；实际服务天/h；全用户预留干基标准体积能力及预留/可用h；匹配能力小时总量；有依据寿命估计及不确定性；历史份额；剩余份额；更换/退役关联；服务已含材料/能源/交通/废物；cp_capital_amendment逐来源B/版本及原N字段 | 查验原始交付、竣工图、设备标签及工程验收证；逐项称量定义资产或对账核验模块/单件质量与验收数量，不虚构设备重量。按签章竣工段测路线长度。覆盖存量及新增资产，审查全受益方台账及寿命证据；原存量证据缺失须登记缺口。每年及配置/退役变化时复核剩余寿命。 终态和来源/分母修订须完成cp_capital_amendment对账。 | kg; m; item; day; h | 每次交付/更换；每月服务量；每年寿命复核 | 本期D窗口及持续原资产服务历史 | 仅范围内管网、站场及独立仪表 | 每参考流 | 衡器校准；供应质量证据；验收竣工记录；驱动对账；寿命估计来源及历史期间校正日志 |
| cp_capital_amendment | maintenance | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_maintenance | maintenance | seal_nitrile; lubricant; calibration_mix; test_water; calibration_methane_air; calibration_nitrogen_air | 现场任务消耗及排放台账 | 任务/日期/资产；材料/牌号/状态；期初库存；接收；未用退回；期末库存；领用/实耗kg；校准证书组成及摩尔质量；气瓶前后质量；回收/留存/实际释放气体；首次空气界面；试验入口表/密度/温度；服务已含范围；受益驱动；不确定性 唯一原来源任务/资产；经常/资本现场标记；全受益方已实施人员h； | 每次实际作业称量领用/退回及气瓶库存，核验有证混合气和试验水校准表；体积用记录温度及适用配方的实际水密度换算。耗用材料与废物/留存对账；校准混合气甲烷＋氮气质量独立闭合，不混入管网气台账。排除供应方已含供料/排放；组成或去向缺失为未解决项。 | kg; m3; K | 每个任务；每月库存闭合 | 与D相同完整12个月 | 仅实际前景现场维修 | 每参考流 | 衡器/表校准；签章任务及库存记录；证书；物种及水对账 |
| cp_services | maintenance | meter_calibration_service; maintenance_transport_service | 明确服务合同验收台账 | 服务/任务/供应方/合同；精确仪表/行程配置；已含/排除资源/排放/废物；原始技术人员起止时间；验收h；行程起终/载人/空驶km；车辆ID/类型；仅怠速作业；实际受益驱动；验收；换算证据 受益方技术人员ID/人数及各载客段km；关联空驶段/服务批次； | 签约及每次验收核对服务范围；记录实际校准人员作业h或里程表/GPS车公里，含归属空驶调度。多人团队按供应数据集同口径人员总h。仅怠速活动须归属有证据的行程/服务批次且批次总距离非零、供应服务已含怠速负荷；整体零距离合同须另审时间型服务，不得记零清单。对账每合同投入及其排除的前景供料，不重复已含项。 | h; vehicle-km | 每次实际合同任务/行程；每月对账 | 与D相同完整12个月 | 明确管网任务及其服务gate | 每参考流 | 合同；签章验收；人员工时；GPS/里程表；供应范围及怠速覆盖证据 |
| cp_waste | maintenance | waste_pe_pipe; waste_steel_pipe; waste_meter; waste_station; waste_nitrile; waste_oil; waste_pressure_water | 前景拆除、暂存及移交台账 | 批次；源任务/资产；运行/资本来源；适用原资本批次；实际配置；附着材料；干湿基准；实测载体kg；采样组成/水分；期初/生成/期末暂存；移交/验收日；接收方/场地/gate；验收kg；合同责任；校准；清单估计/校正状态 | 每项实际经表征载体移交前称量，核验签章联单及接收验收，不要求接收方内部处理记录。对账期初暂存＋生成－期末暂存－移交，调查运输差异。现场留存废物披露为库存，不虚构处理或环境排放。区分实际运行任务及原资本退役，适用capital_retirement。发现新实际载体/现场释放须先补充具体卡方可完整使用。 | kg | 每次拆除/生成/移交；每月暂存闭合 | 同一D窗口；资本废物保留原资本历史 | 仅前景生成及明确移交gate | 每参考流 | 衡器；采样；联单；接收验收；暂存/资产对账；待移交gate登记 |
| cp_scope | distribution | 所有条件性交换 | 发生及范围登记 | 场地/任务/期间；资产配置；条件卡；发生/未发生/未知；排除的燃烧/火炬/净化/加臭；实际合同gate；未列投入/废物/物种；证据；审核人/日期；缺口负责人/补证方法 | 交叉核验实物设备、公用工程采购、交接/维修/应急记录、服务合同及废物记录。逐场地、完整期间签署每项条件状态，未知不等于未发生。实际排除路线使本路线不适用；实际未列前景交换须补审具体卡。供应方内部过程不转成新前景卡。 | occurrence state | 初次；每次变化/事件；年度闭合 | 同一完整12个月 | 全部范围内场地及实际前景任务 | 每参考流 | 签章清单；实物/合同证据；缺口登记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_gas_volume | 所有气体记录 | 未修正的湿基工况读数：Vn = Va × (Pa - pw)/Pn × Tn/Ta × Zn/Za；Tn = 273.15 K；Pn = 101325 Pa绝对压力。Pa、pw、Ta、Zn、Za须来自同一气体和状态时段。仅有干基证据时pw可为0。仪表已报告本干基标准体积时直接使用Vn；不同标准基准须有相应换算记录。 | cp_gas; Va; Pa; pw; Ta; Zn; Za | 干基标准气体m3 | epa-gas-calculation-2025 |
| energy_to_volume | accepted_service; gas_makeup | 仅有气体能量总量E时，以同期实测低位热值Hn（按本PCR干基标准m3计的MJ）计算Vn = E/Hn，先统一能量单位。高位热值账单须先用实测高低位比对账；不得采用通用热值或固定密度。同一交接不得同时加计仪表体积与由能量反推体积。 | cp_gas; E; Hn | 对账后的标准体积 |  |
| gas_balance | distribution | 逐实物月份核对S0 + C + R + Oin = G + U + Sret + Oout + L + S1 + residual。S0/S1为期初/期末管存；C为排除另记退回的城市门站收气；R为客户实际退回先前已验收气体；G为扣退回前已验收客户外向毛交付；U为已证实非授权外向毛转移，不能由差额推定；L为实测未回收实际泄漏/放散损失；Sret为实际退供方气体；Oin/Oout为其他有证据的外部收气/出气，包括非授权气体退回及拒收转移，并标明具体来源/接收方及责任模型。各类互斥；供方退回不是客户R。此式使用毛G，不得用净D；R在实际退回月份列实物流入，即使原验收批次属于更早期间。内部转移抵消。仅汇总兼容的干基标准体积，并用实测密度/组成另核组分质量；组成变化须按质量对账。将残差与传播的仪表/管存不确定性比对并调查；未知残差既不是已证实U，也不是甲烷或零。外供吹扫氮气单独守恒，不是天然气收气/损失。 | cp_gas; cp_release | 实物月度毛气量平衡及残差 |  |
| accepted_delivery_cohort | accepted_service; gas_makeup | 对每个完整12个月服务批次p，以干基标准m3计算D_p = G_p - R_p；G_p为源自p的已验收毛交付，R_p为关联这些具体验收ID、来源/品级及原期间的累计实际退回，不论退回发生日期。无实物退回的贷项通知不形成R。供方退回、拒收/未验收转移及U不得从D扣减。实际退回列入当期实物流入/库存，同时通过版本化修订历史一次修正原批次D及该批次全部Aj/D；不得从无关当期D扣减早期批次退回。退回库存保留原商品来源/负担，不作新购入或重复生产抵扣；后续重新验收交付须另有验收ID并关联该库存。累计退回须与原交付对账，缺关联、超额退回或D非正均阻止完成。U的后续修正/回收同样修订原U_mass及该批次gas_makeup，不得从无关当期事件扣减。 | cp_gas; 原验收/事件ID; 来源/品级; G; R; U; 实物回收; 批次; 修订历史 | 原批次正值净D及版本化清单修订 |  |
| release_species | methane_air; carbon_dioxide_air; ethane_air; propane_air; n_butane_air; isobutane_air; n_pentane_air; isopentane_air; nitrogen_air; tht_air; methane_soil; carbon_dioxide_soil; ethane_soil; propane_soil; n_butane_soil; isobutane_soil; n_pentane_soil; isopentane_soil; nitrogen_soil; tht_soil | 对每个不重叠的首次界面泄漏或放散事件e，以mi = sum(Vn,e × Pn × xi,e × Mi / (Zmix,n,e × R × Tn))计算kg；Vn为干混合气m3，Pn = 101325 Pa，Tn = 273.15 K，xi为实测干基摩尔分数，Mi为kg/mol组分摩尔质量，R为Pa*m3/(mol*K)的SI摩尔气体常数，Zmix,n为该事件混合气在Pn及Tn的压缩因子。也可用独立实测混合气kg乘实测组分质量分数，两个方法不得并计。不得将混合气体积直接乘纯组分密度，除非已独立论证并审查等Z近似及其不确定性。组分专属实测质量或速率及组分专属排放因子已含组成，不得再乘xi。按记录的泄漏或事件持续期积分速率并只汇总一次；常规检漏不得与同一应急事件重叠。未燃气体不乘氧化因子。四氢噻吩直接采用实测kg/m3浓度，只乘一次Vn。 | cp_release; cp_gas; xi; Mi; Zmix; R | 报告窗口各组分kg | epa-gas-calculation-2025 |
| makeup_loss | gas_makeup | 归属投入kg = physical_loss_mass + U_mass，之后再除以D。physical_loss_mass为逐事件实测未回收泄漏/放散质量；U_mass为已证实非授权转移质量减去关联原事件且有证据的实物回收，不是账单缺口或差额推定残差。开票、付款或经济赔偿不能消除实际供气负担。非授权气体回收仅列Oin，不列客户R；同一退回/回收ID不得同时列入两类。各质量由匹配实测干基标准体积与混合气密度/组成计算，或将实测组分质量对账后求和一次。先按来源/品级分量，再汇总并关联相应城市门站供气范围；不得默认密度/组成。两者一次归属本配气服务，从商品模型排除，供气数据还须排除本分配段以防递归。仅physical_loss_mass可通过release_species形成直接泄漏组分排放；U不得仅因被取走而形成甲烷或其他基本流输出。不加管存变化、内部循环或未解释残差。组分求和排除外供吹扫氮气。回收/修正按accepted_delivery_cohort；实物交接转移/库存按毛量记账，不作负担分配。 | cp_gas; cp_release | 实际损失及已证实未回收非授权取气对应的城市门站气体kg |  |
| normalize_totals | 所有清单行 | 每个非参考卡数量＝归属原总量Aj / D一次。电力Aj＝归属净接受kWh × 3.6 MJ/kWh。资产及关联安装Aj先用capital_share；运行耗材/服务用实际净耗量及实测受益份额一次。不同投入属性保留各卡单位，不递归展开供应实物。 | cp_gas; cp_energy; cp_assets; cp_maintenance; cp_services; cp_waste; D | 每参考流的卡首选单位 |  |
| capital_share | asset_pe_pipe; asset_steel_pipe; asset_station; asset_customer_meter; pipe_installation | 对原固定资产a及期间p，alpha_a,p＝t_active_a,p / L_a × b_a,p。t_active为本D窗口实际在役时间，单位与有证据的预计总服务寿命L_a相同；仍可用资产的待机/停机纳入在役时间，并记录投运/拆除日期。b为同一在役期间本管网占全受益方总服务的实测无重叠份额，在实物划分后确定。专用管网资产b＝1。共享资产b＝本管网有记录的预留干基标准体积能力（m3/h）×实际预留/可用h在期间的总和，除以同一资产全受益方相同口径的总和；保留核验配置/能力及预留记录，包含待机。这一固定能力小时驱动不按价格，也不留待后续建模选择；核对全用户总量且不重复同一份额。分母缺失或非正为缺口。原验收资产kg/m × alpha后再/D；安装m使用相同关联资产alpha，不再另乘寿命比例。保留原资产键、全期间/用户及累计份额<=1。退役前L是带不确定性的有依据估计，不是已知未来实际寿命。寿命修订时冻结已入账份额，此后以剩余原始份额×实际剩余期间在役时间/有证据剩余寿命×同一全用户b归属，而不是重置原总量。退役时校正受影响批次；不重置历史份额，不虚构质量/寿命。持续更换资产另建原键；直接重复耗材/任务不再乘资本份额。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | cp_assets; original asset key; t_active; L; b; prior fractions | 守恒的原资产归属 |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| capital_retirement | 资本活动产生的废物输出 | 将实际前景资本拆除/移交载体质量关联原资产键及服务受益批次。资产全寿命前景废物总量按原资产投入相同的最终守恒服务份额归属一次，不在退役年D承担全部质量后又分给历史资本批次。实际退役前披露未来废物未观测及固定归属/校正方法，不虚构未来接收处理或声称已观测。取得实际质量/gate后，替换任何明确有证据的预期移交估计，校正原受影响批次，不并列预期/实际入账。运行维修废物按本期实际任务份额，不作寿命分配。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | cp_assets; cp_waste; original asset key; original service fractions | 资本及运行废物归属一次 |  |
| nitrogen_balance | nitrogen_purge; nitrogen_air; nitrogen_soil | 外购吹扫氮气＝回收＋留存＋外运＋排入空气＋排入土壤，按实际事件及唯一首次界面核算。天然气自身氮气另按release_species加入，吹扫氮气不得算入补充天然气质量。内部回收/再注入抵销；实际外运须审查转移身份/gate，不得遗漏输出。 | cp_release; cp_gas | 独立吹扫氮气质量闭合 |  |
| calibration_balance | calibration_mix; calibration_methane_air; calibration_nitrogen_air | 对实际有证书的两组分混合气，直接取证书质量分数，或以实测摩尔分数按wi＝xi Mi / sum(xj Mj)换算。实际取出混合气＝退回/回收＋留存＋释放。物种释放kg＝实际释放混合气kg × wi一次；已测物种kg不再乘分数。两物种质量及气瓶库存均须闭合。不设默认混合配比，不把混合气体积直接乘纯物种密度，不与管网补充气损失相连。 | cp_maintenance; certificate; xi; Mi; stocks; recovery | 校准专属甲烷及氮气kg |  |
| waste_handover | 所有废物输出 | 各实际载体批次：期初前景暂存＋实际生成＝验收移交＋期末前景暂存＋有证据的其他实际转移。对账载体湿质量及表征组成，不把载体及其含物质量相加。移交接收方不是环境释放，也不自动成为回收副产品；不给无证据回收信用。场外处理资源/排放留在匹配背景关联，不形成第二条前景链。 | cp_waste; carrier mass; storage; receiver acceptance | 实测前景移交kg |  |
| foreground_site_attribution | 所有清单行 | 逐实际前景任务/事件区分经常运行与可识别原资产安装/投运/退役。经常材料、作业、试验/校准释放及废物按allocate_direct固定当期工单受益份额。原资本现场来源事件在/D之前仅用capital_share对应原资产守恒alpha一次；实际交接依capital_retirement保留原事件/批次，不整项压当年D。资产或安装服务输入已加权的不得再乘alpha。在cp_assets/cp_maintenance/cp_services/cp_waste采集原事件数量、原资产键、阶段、受益方、alpha及原分母。气体/物料物理平衡仍为未分配QA；阶段加权总量另列，绝不相加重复。已含于所选产品/服务gate的供应方验收前活动不是前景事件。实际阶段或数量未知阻止数据完整声明。 已按具体作业/物料规则归属的数量在此权重为1，不重复当期受益份额。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | cp_assets; cp_maintenance; cp_services; cp_waste; D | 一次归属实际现场总量/D |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。保留既有先时间、再期间份额的方法：各原在役期间p的u_c,p=t_active_p*b_c,p，b为该期间预留干基标准体积容量小时份额，全部受益者份额和为一。U_final=sum_p(t_active_p)=sum_c,p(u_c,p)，各在役期间仅计一次；不得改成跨期总容量小时权重。仍可用时的待机/停机按capital_share保留在t_active中。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 所有清单行 | 未绑定卡为明确计量候选身份。使用前须逐卡独立直读准确对象、记录状态、property、单位、介质及官方双语名称并保存哈希绑定receipt。历史交流电仅用于已核实用电点角色，不宣称新鲜查询；搜索或他人结论不能替代绑定。 | cp_gas; cp_energy; cp_assets; cp_maintenance; cp_services; cp_waste |
| quality_missing | 所有清单行 | 未知数量、身份、组成、资产原量/寿命、合同范围、持续时间或介质是缺失，不是零。登记缺口负责人、补证方法、不确定性及完整性影响；仅经审查的现场估计可使用并敏感性披露，否则阻止完整声明。不把例子、估计或检出限当默认值/合规限值。 | cp_scope; 所有采集协议 |
| quality_occurrence | 所有过程 | 逐场地/任务及全期间签认发生、未发生或未知。气体组分按实际分析，不自动填微量排放。排除路线实际发生则拒绝本路线；未列前景实物流补审，供应内部不展开。 | cp_scope |
| quality_temporal | 所有清单行 | 连续完整12个月包含待机、停机、无人值守及应急；每月对账。每次源/牌号变化及稳定运行至少每月测组成，事件气不同须补样，记录代表性、仪表校准/检出限、温压/压缩因子来源及传播不确定性。 | cp_gas; cp_release; cp_energy |
| quality_gate_closure | maintenance | 按原责任范围逐项核对具体资产/服务、现场耗材、废物及实际排放。采购完整物不要求拆为化学组分，关键是唯一计量对象/property/单位与合同gate可验证。保留原资本份额和历史校正，不递归背景工厂/车辆/道路/工具或接收处理。不因缩窄前景清单而令已验收商品气上游免费，须明确外部商品模型责任。 | cp_assets; cp_maintenance; cp_services; cp_waste; cp_gas |
| inv_air_species | methane_air; carbon_dioxide_air; ethane_air; propane_air; n_butane_air; isobutane_air; n_pentane_air; isopentane_air; nitrogen_air; tht_air | 将不重叠的实测泄漏放散事件仅归属本物质；不得另加混合物排放或土壤源释放。 | 所列各清单行既有的采集协议和证据。 |
| inv_soil_release | methane_soil; carbon_dioxide_soil; ethane_soil; propane_soil; n_butane_soil; isobutane_soil; n_pentane_soil; isopentane_soil; nitrogen_soil; tht_soil | 采用源界面损失量及土壤介质，不得把其随后迁移到空气再计为一次源释放。下游环境转化属于另行明确的归趋模型，不得默认乘氧化因子。 | 所列各清单行既有的采集协议和证据。 |
| inv_waste_carrier | waste_pe_pipe; waste_steel_pipe; waste_meter; waste_station; waste_nitrile; waste_oil; waste_pressure_water | 仅实际在前景责任内拆除或生成并移交该载体时适用。实测载体质量、附着物/污染和含水量，标识来源资产/任务、暂存及接收验收gate。资本退役废物遵循原资产归属，直接运行废物遵循本期任务。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_service | 核对自营干基天然气路线、验收交接gate及排除过程发生情况。拒绝整个CPC的exact覆盖、收费分配、氢气/液化石油气/人造气/长输等同，或将客户燃烧纳入本服务。 | un-cpc-gas-distribution |
| validate_reference | 所有清单行 | 要求全部限定信息、唯一1 m3 accepted_service、正值D、实际12个月、退回和单次归一化。核对干基、标准状态、Zmix、相匹配组成及双语卡的单位/公式。 |  |
| validate_balance | distribution; maintenance | 分别核对气体、物种、吹扫氮气及校准混合气守恒。拒绝把未解释余差当甲烷、混淆原生/吹扫/校准来源、重复乘组成、混合气与物种双计、无依据空气/土壤重复或直接乘纯物种密度。 须有逐月毛G、实际R及已证实U出口，区分供方/其他转移，并在实测不确定性下解释残差或对账为零。D = G - R须回溯原批次，跨期修订只记一次并核对库存/来源结转。核实gas_makeup承担未回收实际损失及已证实未回收U，商品模型排除同量；U不得增加D或气体直接排放。|  |
| validate_foreground | 所有清单行 | 每卡是一个具体可计量交换、一个主要属性及首选单位，明确完整资产/溶液/服务可整体保留。核对范围/验收、已含资源去重、实际原资产份额及废物移交；不得供应递归、无定义集合、未知置零、材料与同一组件双计、载体所含物双计或退役年全额资本入账。 |  |
| validate_capital_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| validate_projection | 所有清单行 | 比较双语对象、绑定时官方显示名、方向/类型、ID、单位、公式/分母、条件、否定、约束强度和全部协议/规则引用。重新生成structured/guidance须包含所有强制表格规则。Schema/指纹/原子化/本地化检查是结构证据，不是科学批准；身份/数据缺口须明确并阻止发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | own_account_gas_distribution_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为独立商品天然气模型的分配阶段前景清单；后续匹配背景供给/服务/处理只关联一次 |
| excluded_use | 全产气至燃烧足迹；收费分配；其他气体/排除路线；未经背景链接即声称全生命周期；由检查推断科学批准 |
| required_metadata | 所有参考限定；D；气体/物种/吹扫/校准守恒；外部商品模型责任；前景过程gate；具体资产/服务验收范围；原资产质量/长度及全用户寿命服务份额；当期实耗；废物移交/暂存；逐卡身份receipt |
| required_quality_disclosure | 未绑定身份；缺失数量/寿命/合同范围；估计及校正；未观察未来退役；不确定性；背景未展开/未链接事项及防重复 |
| update_trigger | 气质/源变化；管网/设备/合同gate变化；仪表校准；泄漏/应急；剩余寿命证据及退役校正；新实际前景交换 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-gas-distribution | official_guidance | UNSD CPC 3.0, 69120. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69120 | 自营气体燃料分配及表具维护；排除项与较窄范围判断 |
| eia-gas-delivery | official_guidance | US EIA, Natural gas explained: Delivery and storage of natural gas. https://www.eia.gov/energyexplained/natural-gas/delivery-and-storage.php | 区分加工、长输、本地干支管及大宗储存 |
| epa-gas-calculation-2025 | official_guidance | US EPA, 40 CFR 98.233, July 1 2025 edition, paragraphs (t), (u), (v), equations W-33, W-35, W-36, printed pp.931–933. https://www.govinfo.gov/content/pkg/CFR-2025-title40-vol23/pdf/CFR-2025-title40-vol23-sec98-233.pdf | 仅支持气体状态修正、甲烷二氧化碳组分和质量换算结构；干气公式是本PCR自行制定的SI换算，补入实测水蒸气及标准状态压缩因子。本PCR另行要求场址实测组成并采用273.15 K及101325 Pa，不采用美国标准状态密度、默认组成、阈值或申报豁免，也不作法规合规判定。 |
