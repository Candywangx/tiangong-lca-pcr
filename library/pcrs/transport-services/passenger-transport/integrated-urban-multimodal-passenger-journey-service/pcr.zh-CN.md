---
pcr_id: pcr.integrated-urban-multimodal-passenger-journey-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 城市和郊区定班混合方式一体化旅客出行服务

## 1. 范围与适用性

本PCR适用于在预定城市或郊区线路班期上，统一负责且真实完成的一次混合方式旅客出行。覆盖真实铁路陆路水路组合，不限重型轨道加公交。每实际交付行程须使用一种以上有据不同运输方式，不要求每行程包含全部三大类或默认各一运输区段。汇总前声明真实方式分类成员、起讫线路班期换乘接驳责任质量及完成规则。网络提供多方式或未用换乘权利本身不能证明某次完成行程为混合方式。

一名真实旅客到达声明单向一体化目的地计一次。上车换乘临时再登船换船换车及组成运输区段是物理活动，不是额外最终产出共产品。保留真实运输区段重数、人员区间成员距离、接入离开接口、界内等待及真实中断，失败空载待命恢复活动仍须因果归属。N=0无有限强度，返程为另一实际声明行程而非默认包含单位。

真实铁路分支、包括公交无轨电车有轨电车及其他真实陆路方式的定班陆路分支和真实定班水运运输区段保留各自路线特定技术原生接口。纳入自营或未覆盖船舶轨路车辆车站码头坡道导轨道路换乘信息支持及完整制造使用维护更换退役。不能将道路柴油改名船用燃料。观测真实水体海况波浪尾流操纵旅居怠速活动船型燃料岸电舱底水污水及直接去向，特定投入不存在须证据而非通用因子。

排除单方式履约、不相关票券组合、无物理端到端责任的预约经纪价格汇总、非定班包租观光产品及作为此类产品的非城市城际产品。共同票价换乘时限路线规划建议不等于真实完成一体化服务。不提供通用换乘窗载客行程公里换算排放能耗因子资产寿命数量范围。缺真实身份量覆盖去向阻断完成使用，不因此语义排除真实合格路线。

官方方式示例不是穷尽清单。不能仅按方式名称排除另一真实合格城市郊区预定混合方式组成。须判断真实交付功能成员，并在使用前完整自身供应原生需求技术运营站点支持全资产寿命物种阶段接收高度责任。独立普通航空非城市服务不自动成为本联程产品，也不声称某技术案例当然属于本码。接入换乘步行或等待本身不自动构成第二种已交付运输方式。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.integrated-urban-multimodal-passenger-journey-service |
| classification_refs | CPC3.0 64113;exact |
| covered_products | 真实统一负责城市郊区预定线路班期混合方式行程，含真实铁路陆路水路组合且实际使用一种以上方式 |
| excluded_products | 单方式预约经纪仅票券不相关组合非定班包租观光非城市城际产品 |
| representative_product | 已完成的城市和郊区定班混合方式一体化旅客出行 |
| production_route | 真实行程连接供应单元闭合，自营外购铁路陆路水路运输区段、换乘支持资产残余物及单一最终联程完成 |
| market_state | 已完成且有履约记录的一体化服务；未使用票证不代表完成产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的城市和郊区定班混合方式一体化旅客出行 |
| How much | 1 次完成的联程人次，1 Item(s) |
| How well | 按声明线路、时刻安排、换乘及服务质量完成；保留实际偏离及中断记录 |
| How long or cycle | 从所声明第一次服务接续开始至所声明终点完成，含边界内换乘与等待；期间汇总须一致 |
| reference_flow_link | completed_integrated_journey |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的城市和郊区定班混合方式一体化旅客出行 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual accountable network/operator; urban/suburban extent; actual OD; predetermined routes/schedules; actual mode taxonomy and more-than-one-mode membership; all actual legs/providers/native quantities; one-way completion and reference quality; actual passenger and segment membership; transfer/connection/access/egress interfaces and in-boundary waiting; period and failures/empty/standby duties; owned/purchased phase/provider coverage; land/rail/boat architecture and power/fuel state; actual waterbody/sea-state/wave/wake responsibility; stations/piers/ramps/road/guideway/charging/transfer full asset life; actual material/species/medium/known subcompartment/fates; native units and all-user allocation uncertainty; actual eligibility and native interfaces of any other qualifying mode;examples are nonexhaustive; walking/transfer/waiting is not automatically a second delivered mode |

必需限定信息须在数据包元数据过程说明参考流备注或等效处声明，缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_integrated_journey | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N 为实际完成联程人次；票、上车、行程段、运力及车次均不是本分母。 |
| native_count | purchased_bus_leg;purchased_rail_leg;battery_bus_manufacture | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 每个投入保留自身服务或车辆单位。供应原生基准不兼容时须另建合适交换并核实等效关系，不得直接继承本卡。 |
| mass_basis | road_diesel;road_fossil_co2;paper_ticket_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实际产品、物种及原生组成基准。升转 kg 仅凭实际兼容密度和状态；不提供默认值。 |
| electrical_basis | road_electricity;rail_electricity;rail_ac_export;support_electricity | Energy | kWh | 仅对已核实兼容电能使用 1 kWh = 3.6 MJ；该单位链的低位热值标签不许可采用燃料热值因子。 |
| water_basis | support_tap_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 仅计兼容供应水体积；不由供水量直接推定废水、蒸发或自然取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际行程、运行、供应及资产记录，以及具有明确上游覆盖的购入结果 |
| starting_condition_role | 供应及物理运行的覆盖接口，不是所有上游负荷可忽略的起点 |
| product_classification_scope | 完整真实64113定班城市郊区混合方式功能，含铁路陆路水路组合，实际至少两不同方式而非强制三类，单一专属联程产出 |
| recursive_input_rule | 同类已完成子链使用一次，仅展开未覆盖单元；不新增最终产出或重复供应结果 |
| upstream_dataset_requirement | 每个能源、材料、供应服务和生命周期组件须有原生单位、边界、地理、技术、时期及质量证据；缺口强制补齐 |
| disclosure | 公布自营及购入矩阵、完整生命周期覆盖、期间和分母、分配及排除理由、不确定性与未解项；运行温室气体结果不可冒充完整多影响生命周期结果 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | journey_integration | 本PCR适用于在预定城市或郊区线路班期上，统一负责且真实完成的一次混合方式旅客出行。覆盖真实铁路陆路水路组合，不限重型轨道加公交。每实际交付行程须使用一种以上有据不同运输方式，不要求每行程包含全部三大类或默认各一运输区段。汇总前声明真实方式分类成员、起讫线路班期换乘接驳责任质量及完成规则。网络提供多方式或未用换乘权利本身不能证明某次完成行程为混合方式。 |  |
| coverage_cells | all_processes | 计量前，将每个供应方、资产、活动、负荷类型及期间覆盖单元，分配给兼容关联结果或明确前景展开。不同单元可有不同权属；任何单元不得重复或无人负责。 |  |
| provider_completeness | journey_integration | 购入行程段须披露参考单位、载客归属、能源上游及运行、维护、站点、资本和处置覆盖。完整链声明前须采集并建模每项缺口；合同付款本身不证明物理覆盖。 |  |
| same_category_recursion | journey_integration | 购入同类别一体化出行是一个替代的已完成子链，不是额外产出。其披露的完成边界仅使用一次，只展开未覆盖单元，并在有据交付边界终止递归。 |  |
| physical_activity_complete | owned_road_leg;owned_rail_leg | 即使上车人数为零，仍保留相关空驶调位、待机、停站、中断行程、维护试验和必要支持。收入里程等报表指标可能漏项，不能替代完整活动记录。 | fta-ntd-glossary |
| capital_boundary | asset_completion | 本 PCR 要求披露相关且尚未覆盖的车辆、电池、设备、站点及轨道设施制造、替换、维护和寿命终结的归属份额。这是本 PCR 的生命周期边界选择；ISO 14083 的公开运行边界不能证明某个供应结果已含或未含资本负荷。 |  |
| native_unit_gate | journey_integration | 数量制供应投入卡仅用于兼容的已完成人次行程段结果。其他原生单位必须有各自已核实的流、属性、单位和实际等效关系；不得把人公里、车公里、车小时或货币基准 UUID 填进数量卡。 |  |
| direct_release_gate | owned_road_leg;owned_rail_leg;uncaptured_support | 直接排放须记录实际物种、碳来源、原生基准及接收介质。收集废水和回收材料不是环境直接释放；失水不自动等于废水或水蒸气排放。 |  |
| unknown_not_zero | all_processes | 发生与否、数量、身份、供应边界、损失或去向未知时，阻断相应前景数据包完成；既不是零，也不是删除必要交换的许可。不适用须有肯定证据。 |  |
| capital_complete | asset_completion;water_terminal_support | 本 PCR 明确要求相关船舶及岸上资产制造、原装和更换设备、维护、坞修、充电或系泊或码头或航站资产及退役和寿终处理。寿命分配前核实实际交付点及覆盖。仅制造船舶身份不包含其他阶段，不能虚构全寿命服务或通用寿命。 |  |
| chemical_fates | owned_water_leg;owned_water_residues | 实际燃料、润滑油、制冷剂、冷却、清洗及涂层的供应、库存、使用、回收与去向须分开。逐项评估真实舱底水、黑灰水、洗涤塔水或污泥、压载进排水或沉积物、垃圾、防污剂浸出及船体清洗残余物。须识别实际物种、接收淡水或海水或土壤或空气及子区室；废物移交与直接环境释放是不同交换。 | imo-pollution |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| journey_integration | 一体化服务完成及购入行程段 | required | 始终；购入投入仅在实际发生时 | reference_process | completed_integrated_journey |
| owned_road_leg | 自营陆路运输区段物理运营 | conditional | 真实自营未覆盖定班公交无轨有轨电车或其他陆路方式单元 | foreground_process | completed_integrated_journey |
| owned_rail_leg | 自营铁路运输区段物理运营 | conditional | 真实自营未覆盖铁路方式单元及真实牵引配置 | foreground_process | completed_integrated_journey |
| uncaptured_support | 未覆盖的一体化及换乘支持 | conditional | 存在实际必要且未被关联结果计入的支持 | support_process | completed_integrated_journey |
| asset_completion | 未覆盖的资产生命周期补齐 | conditional | 存在实际相关且未被关联结果计入的生命周期组件 | support_process | completed_integrated_journey |
| owned_water_leg | 自营或未覆盖水路运输区段物理运营 | conditional | 真实水路责任单元 | support_process | completed_integrated_journey |
| owned_water_residues | 自营或未覆盖船上残余物 | conditional | 真实船上独立产生储存交接直接去向 | support_process | completed_integrated_journey |
| water_terminal_support | 未覆盖水运码头岸上支持 | conditional | 真实未覆盖码头岸上充电换乘单元 | support_process | completed_integrated_journey |

所有节点共享最终联程参考，条件方式运输区段支持不增最终产出。每卡仅适用真实发生兼容对象及未覆盖单元，其他真实对象须强制原子扩展。

### 过程：一体化服务完成及购入行程段 (`journey_integration`)

#### 输入

##### 产品流

###### 已完成的城市定班公交单段旅客出行 (`purchased_bus_leg`)

仅用于购入且边界完整、与本数量单位兼容的单一公交方式人次行程段结果。每个兼容的供应方、线路和队列分别建交换。每人公里、车公里、小时或票价结果不可替代；采用其原生单位时必须另建已核实交换并证明实际等效关系。同一覆盖单元不得再加自营过程或已被供应结果计入的燃料、排放、站点与资本负荷。

- 选定流: 已完成的城市定班公交单段旅客出行
- 流属性/单位: Count / Item(s)
- 数量规则: 归属于所声明联程的实际交付、单位兼容的购入公交人次行程段之和 / N；cp_legs。不得默认每个联程恰好只有一个公交行程段。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_legs`
- 来源: `ghg-product-standard`

###### 已完成的城市定班重型轨道单段旅客出行 (`purchased_rail_leg`)

仅用于具有实际线路、供应方和边界的购入城市或郊区重型轨道人次行程段结果。有轨电车不得悄然按该重型轨道交换处理。供应方、配置或边界不兼容时分别建记录；供应结果已含的站点或车辆负荷不得重复加入。

- 选定流: 已完成的城市定班重型轨道单段旅客出行
- 流属性/单位: Count / Item(s)
- 数量规则: 归属于所声明联程的实际交付、单位兼容的购入重型轨道人次行程段之和 / N；cp_legs。单独的上车记录不能证明整个联程已完成。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_legs`
- 来源: `ghg-product-standard`

###### 已完成的城市定班有轨电车旅客运输区段 (`purchased_tram_leg`)

仅用于实际外部移交、在真实供应方原生数量服务质量交接点已完成且归属声明联程集合的本方式人次运输区段结果。每交换一具体供应路线队列，不异类方式打包。核实实际上游能源使用站码头换乘车船基础设施维护制造退役废物覆盖。其他原生单位须另核实交换实测等效，不能将人公里车公里小时票款放入本Count卡。自营物理运输区段为内部活动，不是另一外购结果。

- 选定流: 已完成的城市定班有轨电车旅客运输区段
- 流属性/单位: Count / Item(s)
- 数量规则: 归属旅客组真实交付兼容供应原生人次运输区段数量之和/N；cp_legs。保留真实重数全使用者，不默认每行程方式各一运输区段或再除载客。已含单元准确替换物理单元，缺失单元另行强制补齐。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_legs`

###### 已完成的城市定班无轨电车旅客运输区段 (`purchased_trolleybus_leg`)

仅用于实际外部移交、在真实供应方原生数量服务质量交接点已完成且归属声明联程集合的本方式人次运输区段结果。每交换一具体供应路线队列，不异类方式打包。核实实际上游能源使用站码头换乘车船基础设施维护制造退役废物覆盖。其他原生单位须另核实交换实测等效，不能将人公里车公里小时票款放入本Count卡。自营物理运输区段为内部活动，不是另一外购结果。

- 选定流: 已完成的城市定班无轨电车旅客运输区段
- 流属性/单位: Count / Item(s)
- 数量规则: 归属旅客组真实交付兼容供应原生人次运输区段数量之和/N；cp_legs。保留真实重数全使用者，不默认每行程方式各一运输区段或再除载客。已含单元准确替换物理单元，缺失单元另行强制补齐。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_legs`
- 来源: `translink-schedules`

###### 已完成的城市或郊区定班渡轮旅客运输区段 (`purchased_ferry_leg`)

仅用于实际外部移交、在真实供应方原生数量服务质量交接点已完成且归属声明联程集合的本方式人次运输区段结果。每交换一具体供应路线队列，不异类方式打包。核实实际上游能源使用站码头换乘车船基础设施维护制造退役废物覆盖。其他原生单位须另核实交换实测等效，不能将人公里车公里小时票款放入本Count卡。自营物理运输区段为内部活动，不是另一外购结果。

- 选定流: 已完成的城市或郊区定班渡轮旅客运输区段
- 流属性/单位: Count / Item(s)
- 数量规则: 归属旅客组真实交付兼容供应原生人次运输区段数量之和/N；cp_legs。保留真实重数全使用者，不默认每行程方式各一运输区段或再除载客。已含单元准确替换物理单元，缺失单元另行强制补齐。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_legs`
- 来源: `translink-schedules`, `translink-seabus`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的城市和郊区定班混合方式一体化旅客出行 (`completed_integrated_journey`)

一名真实旅客在实际预定线路班期上接受统一负责已完成城市郊区端到端混合方式行程。真实铁路陆路及或水路运输区段构成一种以上真实不同方式的声明路径，换乘上车运输区段记录是组成部分而非额外最终产品。真实成员完成覆盖由cp_journeys证明。

- 选定流: 已完成的城市和郊区定班混合方式一体化旅客出行
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_journeys`
- 来源: `dft-nts-2025`

##### 废物流

##### 基本流

### 过程：自营陆路运输区段物理运营 (`owned_road_leg`)

#### 输入

##### 产品流

###### 柴油 (`road_diesel`)

仅当自营或明确尚未覆盖的公交运行实际使用兼容柴油时适用。采集消耗质量、期初期末库存及转移。购入升数须先有实际兼容密度、状态和有据转换才能得到 kg；不提供默认密度、热值、调和组成或化石比例。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 归属于所研究服务的公交运行实际柴油消耗质量（含相关空驶及中断服务活动）/ N；cp_owned_road_activity。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_road_activity`
- 来源: `ghg-product-standard`

###### 交流电 (`road_electricity`)

仅计实际向所选自营充电接口供应的兼容交流电，包含该接口内实际记录的充电损耗。电池放电不是第二次购入能源。直流电、其他载能体及供应结果已计能源须另行区分。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 分配后的兼容交流电总输入量 kWh / N；cp_owned_road_activity。已核实电能单位组给出 1 kWh = 3.6 MJ，这不是燃料热值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_road_activity`
- 来源: `ghg-product-standard`

###### 陆路牵引供应接口的直流电 (`land_external_dc`)

仅用于真实方式在有据牵引接触网变电或充电供应点实际外部输入直流，核实真实电压供应地理上游整流线路储能损失覆盖。不是内部整流直流电池放电再生或交流改名直流。跨互斥原生点选择真实外部交流链或直流链，未覆盖转化损失资产单元各完整一次。

- 选定流: 陆路牵引供应接口的直流电
- 流属性/单位: Energy / kWh
- 数量规则: 同一计量点实际归属原生毛输入直流kWh/N；cp_owned_road_activity。不设通用整流因子或不兼容逆向抵扣，内部转移不是额外采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_road_activity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`road_fossil_co2`)

仅计自营公交覆盖单元实际向兼容环境空气释放的化石源 CO2。采用实测或可追溯计算的物种质量，并记录燃料碳来源、因子、控制装置和释放边界。CO2 当量、总碳或生物源 CO2 不得填入本行。不引入通用排放因子。该 UUID 仅核实为向空气排放、未指定（1.3.4）。只有实际记录的报告范围能够论证采用未指定子区室时才可使用。若已知城市、非城市或其他具体接收子区室，须另行采用经独立核实的原生身份并建立原子扩展行；保留该具体性，不得绑定此通用空气 UUID。接收范围未知时阻断完成。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 分配后的实际向空气释放的化石 CO2 质量 kg / N；cp_road_residues。仅计尚未覆盖的直接释放，不重复供应方排放或上游燃料生产结果。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_road_residues`
- 来源: `ghg-product-standard`

### 过程：自营铁路运输区段物理运营 (`owned_rail_leg`)

#### 输入

##### 产品流

###### 交流电 (`rail_electricity`)

仅在自营重型轨道具有实际兼容交流电边界时适用。计入所计量边界内的牵引、相关空驶及必要辅助使用。按实际计量与供应覆盖区分上游电网、整流、线路损耗与站点使用，不添加通用百分比。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 分配后的兼容交流电总输入量 kWh / N；cp_owned_rail_activity。内部利用的制动回收能量仅通过减少计量输入体现一次，不同时列产品外供或避免电网负荷信用。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_rail_activity`
- 来源: `ghg-product-standard`

###### 铁路牵引供应接口的直流电 (`rail_external_dc`)

仅用于真实方式在有据牵引接触网变电或充电供应点实际外部输入直流，核实真实电压供应地理上游整流线路储能损失覆盖。不是内部整流直流电池放电再生或交流改名直流。跨互斥原生点选择真实外部交流链或直流链，未覆盖转化损失资产单元各完整一次。

- 选定流: 铁路牵引供应接口的直流电
- 流属性/单位: Energy / kWh
- 数量规则: 同一计量点实际归属原生毛输入直流kWh/N；cp_owned_rail_activity。不设通用整流因子或不兼容逆向抵扣，内部转移不是额外采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_rail_activity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交流电 (`rail_ac_export`)

仅计经独立计量、技术状态兼容且实际跨越自营轨道边界交给外部接收方的电力。内部制动回收或净计量节约不是外供。记录接收方及供应覆盖；发生外供不等于自动允许替代信用。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 分配后的实际交流电总外供量 kWh / N；cp_owned_rail_activity。使用本行前须核对输入、内部回收、储能变化和外供。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_owned_rail_activity`
- 来源: `ghg-product-standard`

##### 废物流

##### 基本流

### 过程：未覆盖的一体化及换乘支持 (`uncaptured_support`)

#### 输入

##### 产品流

###### 交流电 (`support_electricity`)

实际用于本产品且未被供应方或牵引数据集计入的一体化调度、换乘协助、站点或管理设备兼容交流电。边界须独立计量或按因果驱动分配。票款收入比例或固定每票能耗假设不充分。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 分配后的尚未覆盖实际交流电 kWh / N；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `ghg-product-standard`

###### 自来水 (`support_tap_water`)

仅计上游覆盖之外、自营清洗或换乘设施实际供应的兼容自来水。这是产品投入，不是自然环境取水。雨水、自行取水及其他处理状态供水须采用各自实际身份；不假设所有网络必然有相同需水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 分配后的实际供应自来水 m3 / N；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `ghg-product-standard`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废纸（未指定） (`paper_ticket_waste`)

仅计在所声明接收边界实际分开收集、身份兼容的非危险纸质票证。须核实组成与接收条件；热敏涂层、磁条、覆膜或塑料票证不得悄然合入本身份。不得以纸生产或处理活动代替该废物流。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass / kg
- 数量规则: 分配后的实际兼容废弃纸票质量 kg / N；cp_support_residues。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_residues`
- 来源: `ghg-product-standard`

##### 基本流

### 过程：未覆盖的资产生命周期补齐 (`asset_completion`)

#### 输入

##### 产品流

###### 完整低地板电池电动城市公交车 (`battery_bus_manufacture`)

仅在自营运行实际采用相应完整车辆配置时，计入其制造阶段供给；仅当关联生产结果包含原装电池时才随整车计入。本行不是全寿命资产服务结果。替换电池、维护、基础设施及寿命终结须另行完成，且不得重复已含负荷。

- 选定流: 完整低地板电池电动城市公交车
- 流属性/单位: Count / Item(s)
- 数量规则: 对每辆实际车辆 b，将其交付制造数量 Item(s) 乘以归属兼容活动量/同一车辆有据且兼容的寿命总活动量，再求和并除以 N；cp_assets。队列使用实际交付数量及定义一致的队列份额。不虚构质量或默认寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard`

###### 制造交接点的完整常规排水型客运渡轮 (`ferry_manufacture`)

仅用于以有据完整配置交付的实际自航排水型渡轮。本行为制造阶段供应，不是船舶出租、航次、年度可用性或全寿命运输服务。核实实际船体、发动机或电机、原装电池及设备覆盖；已含部件不能再作制造投入。若候选供应结果已含使用阶段，不能悄然当作仅制造：须隔离已核实制造覆盖，或识别其真实已完成结果并准确替换已含前景单元。

- 选定流: 制造交接点的完整常规排水型客运渡轮
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造交付数量 Item(s) 乘同一船舶或队列归属兼容活动量/有据全使用者有效寿命总活动量，求和后除以 N；cp_assets。本供应未含的维护、更换电池、坞修及退役须另行补齐。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

###### 制造交接点的完整电池电动水翼客运渡轮 (`hydrofoil_manufacture`)

仅用于在制造交接点实际交付的完整电池电动水翼船，须证明水翼结构、控制、电机、原装电池及配件覆盖。不是常规排水型渡轮卡，也不是全寿命飞行或运输服务。其他水翼配置须有自身实际身份，供应方未含的水翼、控制或电池更换及退役须另行负责。

- 选定流: 制造交接点的完整电池电动水翼客运渡轮
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造 Item(s) 乘同一船舶有据归属活动量/全使用者有效寿命总活动量，再除 N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `hydrofoil-case`

###### 制造交接点的完整客运气垫船 (`hovercraft_manufacture`)

仅用于在制造交接点实际交付的完整客运气垫船，须证明船体、升力风机、推进螺旋桨、原装柔性围裙、发动机或电机及配件覆盖。本行为制造阶段供应，不是通用船舶或全寿命运输结果。原装与更换围裙和风机覆盖须互斥，并补齐交付结果未含的维护及退役。

- 选定流: 制造交接点的完整客运气垫船
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造 Item(s) 乘同一船舶有据归属活动量/全使用者有效寿命总活动量，再除 N；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `hovercraft-architecture`

###### 制造交接点的完整自航客运水上出租艇 (`water_taxi_launch_manufacture`)

仅用于在制造交接点实际交付的完整自航客运水上出租艇，须有实际船体、发动机或电机、原装电池及配件覆盖依据。不是常规渡轮或出租船与船员可用性服务。其他真实推进或船体配置须使用自身具体身份。缺失制造部件、维护、更换、交付及退役须完成一次，完整艇中已含原装设备不能再采购。

- 选定流: 制造交接点的完整自航客运水上出租艇
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造交付 Item(s) 乘同艇或队列归属兼容活动量/有据全使用者有效寿命总活动量，再除 N；cp_assets。须含真实商业及非商业支持用途，不能以票或收费小时默认寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `water-taxi-operator-case`

###### 制造交接点的完整客货船 (`cargo_passenger_ship_manufacture`)

仅用于在制造交接点实际交付、提供非邮轮港到港旅客及货物功能的完整船舶。核实真实货运设备、旅客舱室或卫生或旅居设备、船体、驱动及原装电池覆盖。本行为制造阶段供应，不是邮轮包、货物吨公里或全寿命旅客服务。不能用渡轮或水上出租艇整船身份替代；每项缺失部件或阶段及后续更换均须与已含整船分开。

- 选定流: 制造交接点的完整客货船
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生制造 Item(s) 乘同船或队列归属兼容活动量/有据全使用者有效寿命总活动量，再除 N；cp_assets。共用船体或推进及专属旅客或货物设备采用真实细分或全功能份额，不虚构人吨换算。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `cargo-passenger-operator-case`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：自营或未覆盖水路运输区段物理运营 (`owned_water_leg`)

#### 输入

##### 产品流

###### 加注交接点的船用馏分柴油 (`marine_distillate`)

仅用于在船上处理前实际供应给船舶且有据的船用馏分柴油；保留牌号、规格、混配、碳源、供应交接点及库存。通用道路柴油身份不足以证明匹配。其他残渣油、润滑油及化学燃料须独立身份。采用一项完整交付混合燃料加组分或碳源台账，或以组分供应替换相应完整混合燃料及上游覆盖，并闭合质量、原生量及供应方责任；不能两者并计。

- 选定流: 加注交接点的船用馏分柴油
- 流属性/单位: Mass / kg
- 数量规则: 由库存、使用及去向平衡确定的归属实际加注供应 kg/N；cp_water_activity。供应、消耗、燃烧、泄漏、回收及保留库存须区分，采购量未经核对不得直接视为燃烧活动量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_activity`
- 来源: `imo-fuel-lca-2024`, `iso8217-abstract`

###### 交流电 (`vessel_shore_ac`)

仅用于在兼容且有据的使用点岸电接头实际从外部输入，并用于相关船舶推进、电池充电或旅居负荷的交流电。核实电压、供应方及上游电缆、充电器或储能损失。内部直流母线、电机输出、电池放电及再生能量是内部转移，不是本外部供应。实际仅直流外供须独立核实原生身份，不能改称交流电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 同一计量交流交接点的归属外部毛输入 kWh/N；cp_water_activity。交接点上下游损失分开核对，不重复计入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_activity`
- 来源: `imo-fuel-lca-2024`, `damen-ferry-cases`

###### 自来水 (`vessel_tap_water`)

用于相关船上卫生、清洗及所含旅客或船员服务的实际兼容自来水。环境取水、海水淡化水及包装饮料是不同供应。记录船上水箱期初期末库存、产生、使用及去向；不能将供应量等同废水排放量。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 库存核对后的归属实际供应 m3/N；cp_water_activity。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_activity`

###### 洗涤剂 (`vessel_detergent`)

仅用于相关船上清洗在使用前实际供应的兼容洗涤剂混合物，须核实组分或配方及供应方覆盖。消毒剂、防污涂料、洗涤塔试剂、溶剂及单项化学物质不能自动视为本洗涤剂，其实际残余物及排放须有独立识别路径。

- 选定流: 洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位: Mass / kg
- 数量规则: 库存闭合后的归属实际原生供应 kg/N；cp_water_activity。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_activity`

###### 船舶充电入口的直流电 (`vessel_shore_dc`)

仅用于在实测船舶充电入口实际外部交付的直流电，须与充电器上游交流供应交接点区分。核实转换、储能、电缆损失及供应方范围。实际链只表示一次：含上游交流的已完成直流供应替换同一交流供应；若自营上游交流和充电器，则下游直流为内部转移，不能两者均作采购能量。内部直流主母线本身不能证明外部直流供应。

- 选定流: 船舶充电入口的直流电
- 流属性/单位: Energy / kWh
- 数量规则: 已核实外部直流入口的归属实际毛输入 kWh/N；cp_water_activity，与同链上游交流表示互斥。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_activity`
- 来源: `hydrofoil-case`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`exhaust_fossil_co2`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_water_releases。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_releases`
- 来源: `imo-fuel-lca-2024`

###### 二氧化碳（生物源） (`exhaust_biogenic_co2`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_water_releases。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_releases`
- 来源: `imo-fuel-lca-2024`

###### 甲烷 (化石源) (`exhaust_fossil_ch4`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_water_releases。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_releases`
- 来源: `imo-fuel-lca-2024`

###### 一氧化二氮 (`exhaust_n2o`)

仅用于相关船上燃烧向空气实际排放的本化学物种；在适用时保留化石或生物碳源、发动机、负荷、后处理及实际接收子区室。所绑定身份是未指定空气，仅在有据报告范围允许未指定空气时采用；已知城市、非城市或具体空气子区室须独立核实原生身份或强制替换行。不得假设为零或采用通用船用因子。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实际监测或独立有据且发动机、燃料、负荷兼容模型得到的归属物种 kg/N；cp_water_releases。采用实际燃烧活动及分子基准，不能将 kg C 或 kg N 改名为分子质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_releases`
- 来源: `imo-fuel-lca-2024`

###### HFC-134a (`refrigerant_hfc134a`)

仅用于相关船上制冷或空调实际释放的 HFC-134a（CAS811-97-2），是排放物质，不是新制冷剂产品或混合冷却剂。所绑定未指定空气身份须有据适用；已知子区室须核实替换身份。平台本记录没有中文 baseName，因此保留正式原名。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 通过充注、补充、回收、库存、设备平衡或监测确定的归属实际释放 kg/N；cp_water_releases。采购或补充量不自动等于泄漏量，上游新制冷剂及回收废物须另列。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_releases`
- 来源: `imo-fuel-lca-2024`

### 过程：自营或未覆盖船上残余物 (`owned_water_residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`vessel_used_oil`)

仅用于在处理前产生并独立收集、符合原生废物交接点及组分的实际石油或合成废润滑油。舱底含油水、含油吸附物、燃油油泥及混合清洗液须为独立流。实际运输或处理服务及其覆盖负荷须完成一次，不能由废物身份推断。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 产生点归属实际废物 kg（扣容器皮重）/N；cp_water_residues。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residues`
- 来源: `imo-pollution`

###### 接收移交点的已收集机舱含油舱底水 (`collected_bilgewater`)

仅用于以废物状态移交、实际已收集的机舱含油舱底水混合物，须有实测水、油及固体组分和湿质量基准。不是新燃料、纯废润滑油、货舱清洗水、分离油泥、压载水或直接排海。处理或接收边界及已发生船上分离须明确。

- 选定流: 接收移交点的已收集机舱含油舱底水
- 流属性/单位: Mass / kg
- 数量规则: 归属实际移交湿 kg（扣容器皮重）/N；cp_water_residues。产生、船上处理、储存、回用、释放及移交须分开闭合，接收方处理部分不能再作为未经处理直接排放计入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residues`
- 来源: `imo-pollution`

###### 接收移交点的已收集船上厕所黑水 (`held_blackwater`)

仅用于接收移交点以废物状态单独贮存的实际厕所污水混合物，须有水和固体基准及组分。灰水、黑灰混合水、洗涤塔水及压载水须独立身份。若实际发生船上处理或直接排放，须采集各自投入、残余物及物种和接收水体；没有本移交不能取消该义务。

- 选定流: 接收移交点的已收集船上厕所黑水
- 流属性/单位: Mass / kg
- 数量规则: 归属实际移交湿 kg/N；cp_water_residues。核对水箱库存、卫生用水、实际污水产生及全部独立去向，不以供水量假设排放量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residues`
- 来源: `imo-pollution`

###### 塑料包装废物 (`vessel_plastic_packaging`)

仅用于处理前实际独立收集且组分兼容的塑料包装废物，不是全部船舶垃圾、复合包装、食物污染混合物或焚烧服务。说明聚合物、污染及实际接收方；其他未表示混合物须独立列行。

- 选定流: 塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位: Mass / kg
- 数量规则: 归属实际净废物 kg/N；cp_water_residues。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residues`
- 来源: `imo-pollution`

##### 基本流

### 过程：未覆盖水运码头岸上支持 (`water_terminal_support`)

#### 输入

##### 产品流

###### 交流电 (`port_ac`)

用于相关登船坡道、码头、预约或控制、照明及岸上设备在使用点实际输入的兼容交流电，不含已计量 vessel_shore_ac 或供应方已含电力。岸上储能或充电器损失归实际交接点责任方，不能将同一采购既分给港口又分给船舶。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 归属实际港口毛输入 kWh/N；cp_water_terminal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_terminal`
- 来源: `damen-ferry-cases`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | all_processes | 先拆分可独立计量的供应方、方式、运行、支持和资产，再分配共有负荷。行程段换乘是同一服务的组成部分，不是需再次分配的共产品。 | ghg-product-standard |
| allocate_physical | all_processes | 针对实际资源及资源池全部使用者，采用有据的因果物理驱动。人距离、车距离、运行时间或占用面积时间仅在资源关系有据时使用。份额须对所有服务产品闭合，不得使用统一万能比例。 |  |
| no_fare_proxy | journey_integration | 票款收入、售票数和额定载客容量不是自动适用的物理驱动。若无法确立物理拆分或驱动，使用前须论证替代关系并披露敏感性，不得虚构比例。 | ghg-product-standard |
| avoid_second_division | journey_integration | 已按完成旅客行程段表示的供应结果，按其原生基准使用一次。不得再次除以载客率、座位容量或旅客数。归属的汇总负荷仅除以 N 归一化一次。 |  |
| empty_and_failure | owned_road_leg;owned_rail_leg | 将相关空驶与失败服务负荷归入对应服务池；失败联程不增加完成产出。若 N 为零，保留该池并凭证据解决汇总期间或边界，不得除以零或声称强度为零。 |  |
| export_no_credit | rail_ac_export | 独立交付的外供电力须有实际接收方及边界。内部回收不是共产品；真实联合产出按所声明且一致的分配规则处理并披露敏感性，不自动给予避免电网负荷信用。 |  |
| asset_lifetime_share | asset_completion | 对每个兼容队列，按有据寿命活动量及研究活动份额分配。原始车辆及电池制造、替换、维护和处置，须在所有使用者与期间间保持组件互斥；改变寿命假设须更新并披露不确定性。 |  |
| actual_mode_and_wave_duties | all_processes | 细分真实供应方式船轨路资源池，保留完整真实人员区间及其他使用者。真实水况波浪尾流相关速度等待操纵旅居空载失败换乘等待误接试验恢复活动依有据因果归属，不设天气因子载客或每方式一运输区段默认。失败联程履约不增最终N，相关直接物理波浪尾流干扰证据及评估限制须明示。 |  |
| whole_blend_and_supply_gate | all_processes | 采用真实完整交付燃料配方混合物加组分碳源台账，或以组分供应替换准确供应上游覆盖并闭合原生质量供应责任，两者不能并计。区分必要供应净提取与真实燃烧排空泄漏回收保留量，不得采购等于燃烧。工厂点身份须桥接真实接收使用点并另负责缺交付调节储存损失阶段，不能改牌号或虚构密度。 |  |

## 8. 前景数据采集、计算与质量规则

完成覆盖原生缩放记账公式是本PCR明确方法设计，外部来源仅支持已述真实定义物理背景，不声称FTA、DfT、TransLink、IMO、ISO规定这些全寿命联程公式。缺通用范围不免除强制真实量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | journey_integration | 完成的联程人次 | service_ledger | 隐私保护 journey_id；实际人数；起点；终点；线路；时刻表；实际起止；方式及车辆变化；供应行程段 ID；团体票人数；完成或取消；实际行程段 km；期间；真实方式分类；一种以上不同方式；铁路陆路水路分支；区间人员成员；换乘步行等待边界；接驳失败 | 联结实际履约、验票、调度和换乘证据；分别审查匹配错误及抽样扩展，不从 NTS 推定统一换乘时限。 汇总算法：N=符合要求且已完成联程的实际人数之和；换乘增加行程段或上车次数，不新增完成联程；完成状态缺失保持待解 确认每真实已完成路径在预定线路班期使用一种以上有据方式，不能从方式供给票价时窗或付款推物理履约，换乘换车不增最终完成。 | Item(s); 人; km; 时间 | 每个行程；期间核对 | 同一声明服务期间 | 所声明一体化网络及起讫点或服务类别 | 每声明的参考流 | 有据联结及匿名化；完成证明；覆盖与不确定性 |
| cp_legs | journey_integration | 供应结果覆盖 | provider_ledger | journey_id；leg_id；供应方；方式；地理；数据集及版本；原生单位；数量；距离；起止；完成；能源上游及运行；站点、资本、维护和处置覆盖；真实铁路陆路水路方式；船型有轨无轨类别；原生量活动乘数；码头车站换乘全寿命单元 | 用实际供应履约和完整数据集边界核对合同；检查每个采用结果的原生基准。数量制投入须单位兼容；其他单位另需已核实的原生交换及等效关系。 汇总算法：每个供应方、活动、负荷和期间单元仅映射一次；只汇总兼容数量；保留真实行程段次数 每真实方式供应运输区段按供应原生需求乘观测活动再因果份额/N一次。Count卡仅适用计数完成结果，真实人公里车公里小时须另准确身份实测换算。完整供应结果或匹配物理阶段不能并计。 | 供应原生单位; Item(s); km | 每个供应方及队列；资料更新 | 与行程集匹配的期间 | 全部实际服务的自营与购入行程段 | 每声明的参考流 | 供应来源、单位及边界证明；闭合覆盖矩阵；无重复载客归一化 |
| cp_owned_road_activity | owned_road_leg | 自营物理运行 | operating_records | 车辆、列车及配置；自营覆盖单元；燃料及电力总输入外供；计量；期初期末库存；储能；空驶、载客、试验、待机及中断活动；全部使用者因果驱动；必要计算因子及来源 | 使用已核对计量、库存、调度日志及实际物理分配证据；独立于 NTD 报表指标排除项确定所需运行。按每个实际载能体与技术状态拆分。 汇总算法：实际消耗量=兼容期初+收入-期末-非消耗转移，调整项单独说明；归属总量仅除以 N 一次 完整真实胶轮轨轮无轨接触网有轨牵引交流直流整流电池轨道道路架线变电制动轮胎磨耗冷却及全部真实能源耗材去向接口。内部交流变直流再生非另一采购，真实柴油完整混配组分须互斥供应上游覆盖及真实燃烧库存。 | kg; kWh; km; 车公里; h; 实际物种单位 | 计量或车辆记录；期间结算 | 与 N 一致的运行及分配期间 | 真实自营未覆盖陆路分支，含依真实方式责任归属公交无轨有轨电车 | 每声明的参考流 | 计量边界；损耗与回收核对；驱动理由及全部使用者份额闭合 |
| cp_owned_rail_activity | owned_rail_leg | 自营物理运行 | operating_records | 车辆、列车及配置；自营覆盖单元；燃料及电力总输入外供；计量；期初期末库存；储能；空驶、载客、试验、待机及中断活动；全部使用者因果驱动；必要计算因子及来源 | 使用已核对计量、库存、调度日志及实际物理分配证据；独立于 NTD 报表指标排除项确定所需运行。按每个实际载能体与技术状态拆分。 汇总算法：实际消耗量=兼容期初+收入-期末-非消耗转移，调整项单独说明；归属总量仅除以 N 一次 负责真实轨道车转向架轨道导轨牵引交流直流整流充电再生及柴油氢蒸汽其他真实路线投入释放。重轨供应卡不证明全部铁路方式采用该原生身份，其他真实原生产出载具须扩展。 | kg; kWh; km; 车公里; h; 实际物种单位 | 计量或车辆记录；期间结算 | 与 N 一致的运行及分配期间 | 真实自营未覆盖铁路分支及真实配置原生能源点 | 每声明的参考流 | 计量边界；损耗与回收核对；驱动理由及全部使用者份额闭合 |
| cp_support | uncaptured_support | 未覆盖的一体化与站点支持 | meter_and_procurement_records | 支持单元；实际电水材料；站点、房间及设备；期间；全部使用者驱动；上游已含情况；库存；实际清洗、信息及换乘支持 | 检查计量、账单、设备日志和现场记录；只计量或按因果分配关联结果未含的支持。最终使用前逐项识别每种化学品、材料与供应服务。 汇总算法：仅删除已证明上游已含的覆盖；按有据物理驱动分配实际计量量；仅除以 N 一次 闭合真实公交铁路水路换乘接入离开步行连接电梯扶梯雨棚等待误接指引信息票媒责任，不是另一旅客产出。water_terminal_support仅负责分配未覆盖单元，不能重复相同计量资产。 | kWh; m3; 各自实际原生单位 | 实际交易及结算 | 匹配服务期间 | 所有未覆盖的一体化、站点及支持接口 | 每声明的参考流 | 计量及供应边界交叉核对；实际不适用证明；强制身份与数量缺口登记 |
| cp_assets | asset_completion | 全寿命资产与基础设施 | asset_cohort_ledger | asset_id；实际配置；原装电池覆盖；制造数据集；替换、维护及处置；投入服务日期；兼容寿命活动量；实际研究及全部使用者活动量；预测依据与不确定性；船体水翼围裙；轨路车辆；码头坡道岸电；道路轨道架线；全使用者寿命 | 检查资产及工程记录和供应生命周期覆盖；对在役资产区分已观察寿命与有据预测。匹配制造原生参考，证据变化时修订预测。 汇总算法：制造等效量=交付原生制造数量乘以归属兼容活动量/总兼容有效寿命活动量，须对应同一车辆或队列；其他组件使用独立实际数量及互斥覆盖；按 N 归一化 完整每真实船铁路道路码头换乘充电导轨资产原生制造量同资产全使用者有效寿命活动，含自营供应未含阶段。船原装船体驱动电池水翼风机围裙设备与后续更换坞修改装维护退役互斥，制造身份不是全寿命服务，一张电池公交卡不代表其他车。 | Item(s); 兼容车公里; 资产原生单位 | 资产或队列采购、替换及更新 | 全寿命基准及期间归属活动 | 每项相关且尚未覆盖的车辆、电池、站点、轨道与支持资产 | 每声明的参考流 | 配置、寿命和来源证明；不确定性；全部使用者及跨期不重复；无抄用默认质量或寿命 |
| cp_road_residues | owned_road_leg | 实际废物与直接释放 | fate_and_emission_ledger | 来源单元；实际材料或物种；组成；碳来源；实测或原生质量；必要计算因子及来源；库存；收集及处理；运输；接收方；介质；上游已含情况 | 读取实际监测或计算方法及废物转移记录。区分收集与释放、整股与分别处理的组分、收集与处理、库存变化与消耗。 汇总算法：仅凭证据换算和分配实际事件量；核对去向；不虚构排放或以零填差额 | 物种或载体原生单位; kg; m3 | 事件或有依据监测估计期间 | 匹配活动及废物、库存结算 | 唯一父节点owned_road_leg内每真实自营或未覆盖产生释放边界，含公交无轨有轨电车等全部实际合格陆路机制，仅采用本过程互斥覆盖单元。 | 每声明的参考流 | 物种、介质、单位及方法证明；接收边界；发生或不发生证据；因子出处；平衡局限 |
| cp_rail_residues | owned_rail_leg | 实际废物与直接释放 | fate_and_emission_ledger | 来源单元；实际材料或物种；组成；碳来源；实测或原生质量；必要计算因子及来源；库存；收集及处理；运输；接收方；介质；上游已含情况 | 读取实际监测或计算方法及废物转移记录。区分收集与释放、整股与分别处理的组分、收集与处理、库存变化与消耗。 汇总算法：仅凭证据换算和分配实际事件量；核对去向；不虚构排放或以零填差额 | 物种或载体原生单位; kg; m3 | 事件或有依据监测估计期间 | 匹配活动及废物、库存结算 | 每个实际自营或未覆盖的产生及释放边界；本协议仅用于本过程的自营轨道废物及直接释放，采用本过程独立且互斥的覆盖单元 | 每声明的参考流 | 物种、介质、单位及方法证明；接收边界；发生或不发生证据；因子出处；平衡局限 |
| cp_support_residues | uncaptured_support | 实际废物与直接释放 | fate_and_emission_ledger | 来源单元；实际材料或物种；组成；碳来源；实测或原生质量；必要计算因子及来源；库存；收集及处理；运输；接收方；介质；上游已含情况 | 读取实际监测或计算方法及废物转移记录。区分收集与释放、整股与分别处理的组分、收集与处理、库存变化与消耗。 汇总算法：仅凭证据换算和分配实际事件量；核对去向；不虚构排放或以零填差额 | 物种或载体原生单位; kg; m3 | 事件或有依据监测估计期间 | 匹配活动及废物、库存结算 | 每个实际自营或未覆盖的产生及释放边界；本协议仅用于本过程的未覆盖支持的废物及直接释放，采用本过程独立且互斥的覆盖单元 | 每声明的参考流 | 物种、介质、单位及方法证明；接收边界；发生或不发生证据；因子出处；平衡局限 |
| cp_asset_residues | asset_completion | 实际废物与直接释放 | fate_and_emission_ledger | 来源单元；实际材料或物种；组成；碳来源；实测或原生质量；必要计算因子及来源；库存；收集及处理；运输；接收方；介质；上游已含情况 | 读取实际监测或计算方法及废物转移记录。区分收集与释放、整股与分别处理的组分、收集与处理、库存变化与消耗。 汇总算法：仅凭证据换算和分配实际事件量；核对去向；不虚构排放或以零填差额 | 物种或载体原生单位; kg; m3 | 事件或有依据监测估计期间 | 匹配活动及废物、库存结算 | 每个实际自营或未覆盖的产生及释放边界；本协议仅用于本过程的未覆盖资产生命周期的废物及直接释放，采用本过程独立且互斥的覆盖单元 | 每声明的参考流 | 物种、介质、单位及方法证明；接收边界；发生或不发生证据；因子出处；平衡局限 |
| cp_water_activity | owned_water_leg | 真实能源、水及消耗品供应和全部活动 | actual_record | 船舶；结构；发动机或电机；升力推进水翼控制；运行模式期间；拖曳缆绳岸上驱动责任；燃料牌号；混配；碳源；期初库存；接收；期末库存；燃烧；泄漏；回收；岸电交流或直流交接点；毛输入；转换损失；电池荷电量；水库存；其他供应；供应方单元；全使用者份额；调度接客取消返回；商业私人其他用途；货物旅居停留 | 取得加注、计量、水箱及活动记录和真实测量配置。核对航行、旅居、空载、失败、充电及结构特定升力、模式转换和岸滩进出。逐一识别实际燃料、水、化学品及供应能源交接点，区分供应、燃烧、损失、回收和库存。完整混合燃料加组分台账或替换组分供应须闭合质量与供应方责任，不能并计。核对交流或直流充电边界、储能与充电器损失；内部电池放电或再生不是新增外供。 在全部支持船舶用途中核对真实水上出租车调度、接客、等待、取消或失败及返回活动和各平台供应责任。客货路线保留真实旅客旅居、食品、卫生及货物或冷藏活动，并支持每项专属或共用单元，不能以货运为主假设旅客无负荷。 汇总算法：每实际原生期间数量 Q 按兼容活动或全使用者份额 a 归属旅客组，仅计算一次 sum(Q*a)/N。燃料活动为核对后的燃烧质量，不是未经核对采购量；外部能源交接点互斥选择。 实际量依闭合运输区段人员阶段供应覆盖及全使用者资源活动份额归属联程旅客组，N是最终混合方式联程完成而非水路登船或航次。 | kg;kWh;m3;hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 自营或未覆盖船上供应及真实全使用者活动 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_water_releases | owned_water_leg | 实际独立识别空气物种 | actual_record | 船舶；燃料；碳源；发动机；负荷；后处理；活动；燃烧活动；监测或模型；因子基准；来源范围；物种质量；空气子区室；制冷剂充注；补充；回收；库存；供应方单元；不确定性 | 采集实际物种监测，或燃料、发动机、负荷、模式兼容且独立有据的模型，包括真实升力、推进及旅居发电机。区分化学、碳、氮基准及接收区室。燃料生命周期仅温室气体范围不能删除其他实际物种。确定每种制冷剂真实充注回收平衡；按需要独立扩展实际 NO、NO2、SO2、CO、NMVOC组分、粒径、生物源CH4及其他释放，不能用一项 NOx 或 SOx 收集标签作身份。 汇总算法：按匹配活动份额将实际分子或物种质量归属旅客组，仅除 N 一次。模型 q=sum(兼容燃烧活动*有据物种因子)，保留真实因子单位、换算及不确定性；不提供通用因子。 实际量依闭合运输区段人员阶段供应覆盖及全使用者资源活动份额归属联程旅客组，N是最终混合方式联程完成而非水路登船或航次。 | kg | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 自营或未覆盖且位于真实子区室的实际空气释放 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_water_residues | owned_water_residues | 实际独立识别废物及水或材料去向 | actual_record | 船舶；流标识；来源；组分；含水率；相态；质量或体积；密度基准；产生；库存；船上处理；回收；移交；接收方；运输处理覆盖；直接物种释放；接收水体子区室；压载；涂层；围裙或水翼残余物；不确定性 | 使用真实水箱、维护、用水、化学品及接收记录。舱底水、黑水、灰水、混合污水、洗涤塔水或污泥、压载进排水或沉积物、食物或其他垃圾、涂层或浸出物及围裙或水翼残余物须按真实组分和交接点分开。闭合投入或产生、库存、处理、回收、移交及释放。直接水或土壤或空气物种按真实接收介质扩展，不能将废物质量当基本物质。真实压载环境进排水须与自来水产品分开，不虚构通用使用。 汇总算法：每项实际独立湿流、干流或原生流 Q 及有据服务份额 a 计算 sum(Q*a)/N；保留含水率和密度换算证据。处理结果仅替换其已含处理或排放单元，不替换废物产生或其他流。 实际量依闭合运输区段人员阶段供应覆盖及全使用者资源活动份额归属联程旅客组，N是最终混合方式联程完成而非水路登船或航次。 | kg;m3 | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实船上残余物产生、贮存、处理及外部接收 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |
| cp_water_terminal | water_terminal_support | 实际码头、岸上及组织供应、资产和去向 | actual_record | 港口；码头；登离船；岸滩进出；充电器或储能；计量；供应方；电压；上下游交接点；供应；废物；释放；资产；寿命；全使用者；归属活动；覆盖单元；远程组织方；真实接客码头；装卸冷藏停留；分配因果性 | 实测或支持实际相关航站、登离船、控制、预约、系泊、充电及岸滩进出服务，包括未覆盖岸上能量损失。逐项列实际投入、废物、释放和码头、坡道、航站、充电器或储能资产及其维护和寿终处理，不能因港口而非渡轮运营方持有而遗漏。使用完整供应结果或其未覆盖物理单元，须匹配原生交接点。 纳入真实私人或公共接客码头及专属或共用货物装卸、冷藏和货物导致等待的设施能源单元。与旅客旅居或登船分开支持因果全使用者归属，货运停靠延误不能自动全归旅客或全免负荷。 汇总算法：实际原生期间流按实测或有据全使用者资源或活动份额归属，再除 N；资产制造先按同资产寿命份额再除 N。船舶岸电交流或直流链与港口采购须闭合且不重复分配。 实际量依闭合运输区段人员阶段供应覆盖及全使用者资源活动份额归属联程旅客组，N是最终混合方式联程完成而非水路登船或航次。 | kg;kWh;m3;Item(s);hour | 真实事件及期间核对 | 相同服务期间及有据生命周期接口 | 真实未覆盖港口、岸上或组织责任 | 每声明的参考流 | 原始记录、原生身份、覆盖及全使用者闭合、不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| count_linked | completed_integrated_journey | N=符合条件且已完成联程的实际人数之和；既不是票数，也不是各行程段上车次数之和。 合格须实际一种以上方式成员和声明质量下完整预定城市郊区路径，实际物理运输区段数不是最终N。 | cp_journeys | N; Item(s) |  |
| normalize_once | all_processes | q_ref=归属的实际兼容原生数量/N；要求 N>0 且覆盖、期间匹配。 | cp_journeys;cp_legs;cp_owned_road_activity;cp_owned_rail_activity;cp_support;cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues;cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal | native amount per Item(s) |  |
| leg_assignment | purchased_bus_leg;purchased_rail_leg;purchased_tram_leg;purchased_trolleybus_leg;purchased_ferry_leg | 汇总归属于联程集的实际兼容人次行程段结果；保留真实次数及各供应边界。 | cp_journeys;cp_legs | provider-native quantities |  |
| energy_units | road_electricity;rail_electricity;rail_ac_export;support_electricity;land_external_dc;rail_external_dc;vessel_shore_ac;vessel_shore_dc;port_ac | 仅对已核实兼容电能，MJ=3.6*kWh。区分总输入、总外供与储能，不推导燃料因子。 | cp_owned_road_activity;cp_owned_rail_activity;cp_support | MJ or kWh on compatible electrical basis |  |
| asset_equivalents | asset_completion | 车辆制造等效量=求和_b(交付制造数量 Item(s)_b*归属兼容活动量_b/有据兼容寿命总活动量_b)；期间总量再除以 N。分子、分母及交付数量须对应同一车辆或队列；其他组件需要独立数量。 | cp_assets;cp_journeys | Item(s) vehicle per reference journey |  |
| supplemental_distance | journey_integration | 补充实际人距离=各行程段实际人数*实际行程段 km 后求和；它不是数量参考，也不提供每次出行的固定距离。 | cp_journeys;cp_legs | supplemental passenger-distance disclosure | dft-nts-2025 |
| water_supply_species_fates | owned_water_leg;owned_water_residues;water_terminal_support | 每真实水路船阶段以兼容基准闭合供应加期初库存产生=期末库存使用转化泄漏排空回收外供及每去向，内部转移相抵。燃料供应真实燃烧活动化学排放不同。逐实际物种实测或独立有据组分发动机负荷模型、正确分子碳源接收后因果全使用者旅客组份额/N一次。完整混燃料或替换组分上游单元互斥，外部交流直流链损失互斥，收集湿舱底黑水为混合物而非直接物种或纯废油。 | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal;cp_journeys | 每联程原生归属材料物种去向 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| linked_count | completed_integrated_journey | 保留实际全程完成及人员联结；票证、上车或行程段总数不能代替 N。完成或换乘联结缺失时阻断完成。 | cp_journeys |
| provider_matrix | purchased_bus_leg;purchased_rail_leg | 保留闭合的供应方、活动、负荷、期间矩阵及原生单位和生命周期覆盖证明。任一缺口或重叠均阻断相应数据包完成。 | cp_legs |
| actual_carriers | road_diesel;road_electricity;rail_electricity;support_electricity | 卡片未表示的每种实际燃料、氢气、直流电、蒸汽或供热、制冷剂及辅助化学品，均须独立识别、计量并展开。发生、身份或数量缺失时阻断完成；不假设所有线路都使用全部投入。 | cp_owned_road_activity;cp_owned_rail_activity;cp_support |
| actual_provider_units | purchased_bus_leg;purchased_rail_leg | 将每个不兼容的供应方、状态或原生结果展开为自身已核实交换；保留实际距离、载客、边界等效关系与来源不确定性。缺证明时阻断完成；检索无匹配不等于服务量为零。 | cp_legs |
| actual_assets | battery_bus_manufacture | 完成每项相关且尚未计入的配置特定车辆、电池、设备、轨道及站点生命周期组件。不得将电动公交卡代用于其他资产，也不得以折旧金额当作物理寿命。缺支持证据时阻断完成。 | cp_assets |
| actual_materials_wastes | support_tap_water;paper_ticket_waste;battery_bus_manufacture | 按组成、状态、原生数量及接收边界采集每项实际购入材料、耗材、维修件、收集废水及废物流。不同流分别展开。身份、数量或去向缺失时阻断完成。 | cp_support;cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues |
| actual_emissions | road_fossil_co2;owned_rail_leg;uncaptured_support | 对全部实际尾气、非尾气、逸散或水土释放，保留物质、物种或粒径类别、来源、接收介质及子区室、数量基准及方法。不得为通用空气身份丢弃已知具体子区室；采用未指定须有报告范围依据。CO2 卡不覆盖其他物种。缺必要排放数据时阻断完成，绝不当作零。 | cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues |
| actual_digital_support | support_electricity;uncaptured_support | 识别实际一体化、信息或通信供应服务及其原生服务、资产、能源覆盖；分别展开每项未覆盖服务，仅剔除已证明计入的负荷。覆盖缺失时阻断完成。 | cp_support |
| period_uncertainty | purchased_bus_leg;purchased_rail_leg;completed_integrated_journey;road_diesel;road_electricity;road_fossil_co2;rail_electricity;rail_ac_export;support_electricity;support_tap_water;paper_ticket_waste;battery_bus_manufacture | 明确保留期间匹配、库存变化、未完成行程、在役资产寿命预测及抽样客流数据。估计必须有方法、来源和不确定性，不虚构通用范围。 | cp_journeys;cp_owned_road_activity;cp_owned_rail_activity;cp_assets |
| identity_and_translation | purchased_bus_leg;purchased_rail_leg;completed_integrated_journey;road_diesel;road_electricity;road_fossil_co2;rail_electricity;rail_ac_export;support_electricity;support_tap_water;paper_ticket_waste;battery_bus_manufacture | 逐项将已绑定身份及正式中文显示与独立 Tiangong 直读及支持证据核对。未解的具体流继续登记，不以检查器通过自动提升候选状态。 | all collection protocols |
| full_mode_membership | completed_integrated_journey | 必须有实际完整联程及合格城市郊区预定线路班期和一种以上有据方式，保留真实铁路陆路水路分类成员全部阶段人员换乘质量起讫完成及真实自营外购原生覆盖。网络目录票价时窗付款登船数据本身不是履约，成员端到端连接不完整阻断完成结果。 | cp_journeys;cp_legs |
| water_architecture_wave | owned_water_leg;owned_water_residues;water_terminal_support;asset_completion | 必须有真实水体海况波浪尾流路径船型推进记录，排水水翼气垫实际船体驱动翼控制升力风机围裙岸滩进出等待怠速维修磨损去向及其他真实化学人力拖曳缆索配置须完整物理原生接口。负责真实拖曳供应或物理拖曳能源绳岸机构寿命，不默认船上燃料。相关真实波浪尾流物理干扰干预须有证据原生单位评估限制，不虚构波浪排放kg天气因子。 | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal;cp_assets |
| water_all_fates | owned_water_leg;owned_water_residues;water_terminal_support | 必须逐项真实船用牌号燃料混配润滑油制冷冷却清洁防污洗涤塔供应，舱底黑灰水洗涤水污泥压载进排水沉积物垃圾清洗浸出直接释放依真实组分干湿原生量接收分别列。不得道路柴油替代全部废物合并空气物种绑废水或删未列强制去向。 | cp_water_activity;cp_water_releases;cp_water_residues;cp_water_terminal |
| land_rail_traction_life | owned_road_leg;owned_rail_leg;asset_completion;uncaptured_support | 必须真实无轨有轨公交其他陆路铁路原生交流直流整流充电再生燃料电池氢柴油蒸汽其他实际推进投入、接触网变电转向架轨道道路轮胎制动轨磨耗热释放全寿命。具体公交重轨卡不能代表全部真实方式，每缺失真实载具供应投入资产物种去向须按下列原子字段扩展，不能因未知UUID遗漏。 | cp_owned_road_activity;cp_owned_rail_activity;cp_assets;cp_support |
| transfer_and_terminal | uncaptured_support;water_terminal_support;asset_completion | 必须完整真实轨路水换乘站码头岸壁坡道电扶梯步道雨棚指引票务信息充电系泊资产等待接入离开边界误接恢复活动，含制造维护退役全使用者，每原生供应资产计量单元单责任。换乘用户为真实成员不额外新增产出，共同票价不单独证明责任。 | cp_support;cp_water_terminal;cp_assets |
| atomic_full_expansion | all_processes | 必须每真实未列投入产出供应结果材料资产废物直接物种去向有唯一row_id、一个已存在process_id、方向产品废物基本类型、单项真实身份状态配方、核实UUID或明确未解、原生属性单位真实量实测计算基准、有效同父CP、原始来源、供应阶段原生点已含单元、接收已知子区室水体阶段、不确定性归一化。不能复数集合行未知零或检查通过冒充完成。真实供应原生量按实际活动缩放再分配/N一次，每已含单元只替换匹配物理单元。 | all actual collection protocols and coverage/quantity/fate records |
| other_qualifying_mode_interfaces | all_processes | 若另一真实方式履行相同定班城市郊区联程服务，必须确立真实端点角色方式资格及每运输区段一具体供应原生活动。真实原生量按实测活动缩放再因果全使用者份额/N，供应已含单元只替换准确物理单元。原子扩展完整方式特定载具推进能源基地站点维护退役及释放接收接口。若真实存在航空组成，含实际滑行起飞爬升巡航等待备降空载着陆阶段、货物乘员角色机场支持飞机寿命及真实化学颗粒高度量，不能用通用地面空气或人公里因子。技术案例本身不证明本码成员。换乘步行等待不自动确立第二种交付运输方式。未知真实原生身份量覆盖阻断完成而非排除合格产品。 | all actual native mode/provider/phase/asset/fate records and valid same-parent protocols |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_service | completed_integrated_journey | 每个计数记录须证明一名真实旅客完成所声明合格城市郊区定班混合方式路径，实际使用一种以上真实不同运输方式。须声明实际负责运营方起讫期间方式成员预定线路班期无障碍服务质量换乘边界，登乘票券权利本身不证明本产出。 |  |
| validate_denominator | cp_journeys | N 为实际完成的联程人次。核对票证、上车、换乘、行程段、取消与完成行程记录，不将它们等同。团体票须保留实际人数。 |  |
| validate_distance | cp_journeys;cp_legs | 补充人距离由实际行程段距离及人数确定。1 Item(s) 出行不存在固定 km 换算，不得将数量参考改称人公里。 |  |
| validate_cells | all_processes | 每个必要负荷单元须被兼容供应结果或明确前景数据覆盖一次；联合审查供应资料与自有投入，查漏并去重。 |  |
| validate_native | all_processes | 对每项采用的交换核实 UUID 身份、参考属性与单位链、技术状态、供应方及地理、边界和接收介质。参考产品流身份未解不豁免数量支持链独立核实。 |  |
| validate_atoms | all_processes | 最终数据完成前，将每个实际供应方、材料、制冷剂、资产、废物及排放展开为独立兼容的原子交换；不允许集合标签或继承无关 UUID。 |  |
| validate_energy | owned_road_leg;owned_rail_leg | 核对总输入、外供、内部回收与储能变化。不把电池放电视为购入供给，不由票价推断燃料量，不由无尾气推断生命周期负荷为零。 |  |
| validate_residues | cp_road_residues;cp_rail_residues;cp_support_residues;cp_asset_residues | 核对实际废物载体、成分或物种、原生基准、库存变化及去向。不得混合 kg N 与 kg N2O、kg C 与 kg CO2、收集液体与空气或水释放、整件物品与已单计组件。 |  |
| validate_temporal | all_processes | 分子、N、供应活动及物理分配驱动须使用兼容服务单元和期间；保留不完整、零产出及中断的资源池待处理。 |  |
| validate_completion | all_processes | 缺实际数量与缺通用范围是不同问题。实际数量及必要身份和覆盖必须凭证据完成；不得用猜测范围、默认排放因子或缺失即零规则制造完整性。 |  |
| validate_full_mixed_scope | journey_integration | 须真实64113城市郊区预定线路班期、一种以上真实不同方式及真实端到端旅客完成。完整方法容纳真实铁路陆路水路组合，不能只轨道公交或强制三类。拒绝仅预约经纪共同票价当完成及运输区段登船重复产出。 |  |
| validate_water_and_power | owned_water_leg;owned_water_residues;water_terminal_support;owned_road_leg;owned_rail_leg | 须真实船轨路结构海况波浪原生燃料牌号毛外部交流直流点，不得道路柴油当船用证明交流改直流内部转移当采购。分别舱底黑水油污泥压载防污清洗去向及真实物种介质已知子区室，未解真实需要不能为零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset，仅在全部真实必要身份量覆盖寿命去向完成复核后 |
| allowed_use | 仅在同一已声明起讫点、模式、服务质量、期间及边界条件下采用已完成且证据充分的服务结果；跨条件比较须先证明功能等效 |
| excluded_use | 单方式仅预约经纪未用权票价标签默认人公里因子运输区段双计缺水陆铁分支责任或运营结果冒充全寿命，真实包不完整 |
| required_metadata | 运营责任、网络及起讫点；路径和时刻；模式和供应；完成 N；实际距离；原生单位；覆盖矩阵；资产和终结边界；物理分配；数据期间及不确定性 |
| required_quality_disclosure | 身份或数量未解项、抽样及联结误差、供应边界缺口、生命周期覆盖、寿命预测、排放方法与介质、排除及敏感性；不能以检查通过替代完成证据 |
| update_trigger | 线路或服务功能、模式、供应或能源技术、票务联结或完成规则、资产配置和寿命、排放去向、计量或标准边界变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF page 359, subclass 64113. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整64113范围：定班城市郊区一种以上方式含铁路陆路水路，仅分类不规定通用方式数量因子。 |
| dft-nts-2025 | official_guidance | UK Department for Transport, NTS 2025: Notes and definitions, updated 11 September 2026, Trips, stages and distance. https://www.gov.uk/government/statistics/national-travel-survey-2025/nts-2025-notes-and-definitions | 用于行程、行程段、距离的区分；实际一体化服务完成规则由本 PCR 明确规定。不采用 NTS 数值平均或换乘时限。 |
| fta-ntd-glossary | official_guidance | US FTA, National Transit Database Glossary, entries Unlinked Passenger Trips, Service Supplied, Service Consumed, Actual Vehicle Miles. https://www.transit.dot.gov/ntd/national-transit-database-ntd-glossary | 用于上车计数报表及供给活动和消费活动的区分。NTD 不定义本 PCR 联程分母或全寿命边界。 |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6, 7 and 9, especially printed pages 28–29, 34–37 and 63–64. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 用于功能边界披露及分配顺序；不从该标准取得运输因子、资产寿命或票款分配比例。这里纳入资本是所披露的 PCR 选择。 |
| iso14083-scope | standard | ISO 14083:2023 official public abstract/scope, edition 1, 2023-03. https://www.iso.org/standard/78864.html | 公开范围仅提供旅客及货物运输链运行背景。未取得完整规范文本，不据此推断详细 ISO 符合性、因子或资本规则。 |
| imo-fuel-lca-2024 | official_guidance | IMO Resolution MEPC.391(81),22March2024,2024 marine-fuel LCA Guidelines,annex p3 sections1–2. https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MEPCDocuments/MEPC.391(81).pdf | 燃料链及船上推进发电接口，含岸电；仅CO2、CH4、N2O。明确排除制冷剂及其他列出物种，不是整船清单；不采用默认因子。 |
| imo-pollution | official_guidance | IMO Pollution Prevention,public page accessed21October2026,opening paragraphs. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | 定性区分油、污水、垃圾、空气、压载、防污及接收路径，不提供因子、真实浓度、普遍发生或法定排放许可。 |
| iso8217-abstract | standard | ISO8217:2024,edition7 May2024,public abstract only. https://www.iso.org/standard/80579.html | 船用燃料规格类别及船上处理前交接点，未读取完整规范正文。不据此给出牌号数值、组分、密度、硫含量或合规结论。 |
| damen-ferry-cases | literature | Damen Road Ferries and Ferry2306 Electric,primary product pages accessed21October2026. https://www.damen.com/vessels/ferries/roro-ferries ; https://www.damen.com/vessels/ferries/city-ferries/ferry-2306-electric | 实际案例接口：客车渡轮、岸上充电储能、柴油备用及内部直流。仅为产品案例，不将营销减排、容量或充电性能作通用参数。 |
| hydrofoil-case | literature | Candela P-12 Shuttle,primary technical product page accessed21October2026. https://candela.com/pro-series/p-12-shuttle/ | 实际电动水翼控制、水翼结构或转换及外部直流充电结构，不将宣传节能、航程、容量或寿命作通用因子。 |
| hovercraft-architecture | literature | Griffon Hoverwork/Griffon Marine,How Hovercraft Work,public primary technical explanation accessed21October2026. https://www.griffonhoverwork.com/products/hovercraft/how-hovercraft-work/ | 真实升力风机、柔性围裙及推进螺旋桨在水面岸面上的功能，不提供客运排放、磨损或燃料因子。 |
| bts-ncfo-2024 | official_guidance | BTS2024 National Census of Ferry Operators printable questionnaire,PDF pp2 and11. https://www.bts.gov/sites/bts.dot.gov/files/2025-02/2024%20NCFO%20Printable%20Questionnaire.pdf | 美国普查背景及区分旅客、车辆容量并排除船员；不将容量或假设车长作为真实载客、参考分母或全球服务定义。 |
| water-taxi-operator-case | literature | Fastrac,Water Taxi Service,primary operator page accessed21October2026. https://fastrac.com/cruises/water-taxi/ | 案例特定按需点到点、私人或共乘及出码头返回活动接口，不将票价、容量、载客或燃料因子作通用规则。 |
| cargo-passenger-operator-case | literature | Relais Nordik,2026–2027 Conditions and rates for carriage of passengers,PDF pp5 and7;actual crossing/cargo versus cruise homepage and optional bed/meal pages. https://relaisnordik.com/wp-content/uploads/2026/03/rni-bella-tg-p-2026-2027-en-final.pdf ; https://relaisnordik.com/en/ ; https://relaisnordik.com/en/lits/ ; https://relaisnordik.com/en/manger-a-bord/ | 案例特定区分港到港运输、货运及一体邮轮，可选舱餐及途中再登船；不采用票价、容量、食品、舱室寿命或通用分配系数。 |
| translink-schedules | official_guidance | TransLink Schedules and Maps,official public page accessed21October2026. https://www.translink.ca/schedules-and-maps/ | 实际案例铁路公交通常无轨接驳SeaBus网络连接预定时刻，不证明真实完成N或全部服务通用量路线合格。 |
| translink-seabus | official_guidance | TransLink SeaBus Schedules,official public page accessed21October2026. https://www.translink.ca/schedules-and-maps/seabus.aspx | 真实定班渡轮水体码头轨陆换乘接口，不采用容量过水时长频率载客因子。 |
| translink-transfer | official_guidance | TransLink Transferring and AddFare,official public page accessed21October2026. https://www.translink.ca/transit-fares/transferring-and-addfare | 真实票媒依赖换乘条件表明共同票价通行权不等于物理完成，不采用通用换乘窗票价分配。 |
