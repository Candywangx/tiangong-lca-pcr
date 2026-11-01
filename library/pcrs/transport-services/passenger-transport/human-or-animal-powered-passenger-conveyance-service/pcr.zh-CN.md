---
pcr_id: pcr.human-or-animal-powered-passenger-conveyance-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 附操作人员的人力或畜力旅客运送服务

## 1. 范围与适用性

本 PCR 适用于附操作人员、由人拉或动物牵引的车辆或交通工具提供的真实城市或郊区道路旅客运送功能，包括人拉或脚踏人力车，以及由驮畜承载旅客。覆盖全部实际符合该功能的动物物种及人力配置，不限马属动物或轮式车。以证据声明真实城市或郊区服务范围及地理责任。不强加任意距离阈值、固定班期、票证形式或通用载客率。技术示例、动物名称或休闲标签本身不能证明该旅客运送功能。

一个参考项是一名实际旅客完成其独立声明的运送，具有真实起讫、停靠及返程边界、内容、质量、距离和时长。操作人员、车辆与动物可服务多名旅客或混合活动，但不作为所计旅客产出。随行助手或操作人员不因被承载就成为旅客；真实双重角色须声明。同一声明的完成服务中，内部换乘、动物团队变化或中途登乘不增加最终完成产出。实际不同服务边界须先区分再汇总。等待、调位、休息、取消、中断及失败活动，即使没有合格完成，也须保留因果归属资源；N=0时不能给出有限每项强度。

排除不附操作人员的裸租，包括73114明确指向的无驾驶人员客运车辆出租；单独动物销售或饲养、劳务雇用、纯货运、仅售票，以及不具实际旅客运输功能的普通动物接触、门票或以主动体育冒险为主的体验。其他铁路、水运、观光行程、纯机动或城际产品须按真实功能及分类另行判断。实际辅助动力本身不自动排除仍符合人力或动物动力功能的服务：须识别其真实角色、能源、驱动设备及未覆盖负荷，不能隐去，也不能因缺数据排除真实产品。驮畜载客不要求配套畜力牵引车。货运及其他真实独立产出，仅按证据共享公共资源，不能转为旅客完成次数。

下列动物、交通工具和饲料卡是具体原子交换示例，不是范围限制，也不是其他物种的替代身份。每项实际必要身份、原生数量、状态及去向须逐行补齐。普通人类维生和代谢，与完整役用动物支持，采用下文明确边界选择及比较敏感性；均不代表物理代谢或路线负荷为零。不提供通用日粮、排放因子、体重、水量平衡、载客率、寿命或数值范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.human-or-animal-powered-passenger-conveyance-service |
| classification_refs | CPC3.0 64117；exact 专属全子类范围，须符合真实城市或郊区父组情境 |
| covered_products | 附操作人员的真实城市或郊区人拉、动物牵引道路载客工具及承载旅客的驮畜，包含全部符合功能的物种和配置 |
| excluded_products | 无操作人员裸租73114；单独饲养、动物出售、货运或劳务；仅售票；无运输功能的动物接触或以体育冒险为主的体验；其他功能或地理范围的运输产品 |
| representative_product | 已完成的附操作人员城市或郊区人力或畜力旅客运送 |
| production_route | 实际旅客运送及操作人员工作；按物种发生的动物护理、生物活动和粪污；完整动物、交通工具和支持生命周期；实际辅助机制及未覆盖供应阶段 |
| market_state | 有兼容履约、完成及实际旅客证据的真实旅客运送服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 附操作人员的城市或郊区人力或畜力道路旅客运送，包括真实驮畜载客 |
| How much | 一名实际旅客完成一次独立定义的运送服务 |
| How well | 有据实际操作人员责任、起讫停靠返程边界、方式、物种和团队配置、旅客角色、助力、安全可达性及声明服务质量 |
| How long or cycle | 从接受服务起点至有据完成的实际声明运送范围及时间或服务窗口；运营支持期间与动物和资产寿命另列 |
| reference_flow_link | completed_conveyance |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的附操作人员城市或郊区人力或畜力旅客运送 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际旅客运输功能；操作人员及旅客角色；真实城市或郊区服务范围及地理责任；起讫；路径及返程边界；停靠换乘；实际旅客完成人次；时长及时间窗口；质量可达性；人力工作或实际物种团队及驮载牵引配置；实际助力及来源；各区段距离载客；空驶等待失败支持活动；期间；动物身份体状态及同群；工作休息和全使用者份额；饲养训练入役退役供应阶段；饲料湿干基及碳氮水和身体保留；全部实际排放及接收子区室；车辆动物资产完整寿命；人体维生代谢边界及敏感性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | completed_conveyance | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N 是同一完成边界的实际人次服务数，不是动物日、票、座位或车数；必须大于零。 |
| feed_moisture | grass_hay;collected_donkey_manure | Mass | kg | 保留饲喂、湿流及干物质基准；转换只能使用实际含水率及兼容状态。 |
| native_life | cycle_rickshaw;equid_cart;working_donkey_entry | Number of items | Item(s) | 原生交付数量乘同一单位有据寿命份额，不能以质量、租金或生命周期服务替代。 |
| species_unit | enteric_ch4;respired_biogenic_co2;manure_ch4;manure_n2o;manure_nh3 | Mass | kg | 物种质量须保留碳源及介质子区室；N 和 C 基准不得冒充分子质量，实际换算须有据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际履约、操作人员、车辆和动物记录及有据供应交接点 |
| starting_condition_role | 明确责任接口，不是历史动物或车辆负荷为零的起点 |
| product_classification_scope | 完整真实64117道路人力或动物工具及驮畜旅客运输功能，限组6411城市或郊区情境；不能因缺数据排除物种或物理路线 |
| recursive_input_rule | 同类已完成子服务仅作一次独立供应投入；只展开其未覆盖责任，不增加最终服务产出 |
| upstream_dataset_requirement | 核实实际能源、饲料、动物入役、车辆、护理及处理结果的原生单位、边界及实际适用性 |
| disclosure | 披露实际功能、人类与动物边界差异、供应覆盖、全部生命周期、粪污去向、分配、不确定性及未解项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| delivered_scope | completed_conveyance | 纳入实际附操作人员的人力或动物旅客运送、相关调位、等待、中断或失败服务、支持及车辆和动物生命周期份额。记录真实人数、起讫、停靠、方式、期间及完成情况；售票本身不证明交付。 | un-cpc3-2025 |
| provider_coverage | all_processes | 将每个供应方、活动、负荷及期间单元分配给一个兼容完整结果或明确物理展开。供应结果替代其准确已含投入、释放、动物护理或资产；缺失阶段须补齐，不得重复供应负荷。 原生供应强度q_u须先乘真实兼容需求A_u及有据旅客组或全部使用者份额，再仅除正N一次。保留供应结果实际小时、动物日、距离或人距离原生基准和覆盖；这些量不能直接等同完成人次服务。只有已与一个完整声明参考服务完全等效的供应结果才不再归一。其准确覆盖的活动阶段单元仅替代相应前景单元。 |  |
| human_boundary | conveyance_delivery;service_support | 普通人体维生、个人饮食住房生育及普通代谢释放按明确披露的服务边界惯例排除，不代表实测零代谢。记录操作人员助手旅客实际角色、任务、用力、助力、工作休息及专用支持。实际因果服务专用食品饮料、设施、PPE安全及公务出行须以有据归属纳入。扩展边界若纳入额外工作营养或归属人体代谢释放，须独立生理、摄入、用力和反事实证据，保留原生C/N/水及物质基准和介质，保持上游食物覆盖一致并披露敏感性。不得虚构员工劳务燃料交换，也不把工资工时热量换算成化石能源或通用食物因子。 |  |
| animal_support | animal_husbandry;animal_lifecycle | 每种实际役用动物均被维持以提供研究服务。纳入归属入役前繁育饲养训练、日常维持饲料和水、休息及非工作期、棚舍、健康、物种适当的蹄部皮肤及装备护理、退役和死亡去向。实际身体年龄状态同群、任务工作环境和全部支持功能决定证据需求；驮畜具有真实承载及鞍具负载接口，不假定客车牵引。入役前供应覆盖与入役后护理分开；仅计额外牵引饲料或把既有、租赁动物视为无负荷均无效。WOAH仅为其真实役用马属动物范围提供背景，不为其他物种提供数值或福利认证。 | woah-working-equids |
| manufacture_gate | vehicle_lifecycle;animal_lifecycle | 车辆制造交付与活体动物首次入役产品，仅覆盖已核实供应交接点。寿命活动量用于分配其实际原生数量，不创造虚构全寿命服务身份。未覆盖替换、兽医或蹄护理、维修、设施及退役须独立补齐，原装部件不得重复。 |  |
| feed_state | grass_hay;animal_tap_water | 按实际物种及身体同群分别追踪供应、放牧、消耗、损失及库存饲料和水。保留原料配方含水率、饲喂干物质及C/N，真实身体保留、生长泌乳或其他转移，饮水体内存量尿液粪便水分、呼吸蒸发及真实独立去向。库存和保留不是消耗或排放。不得将未解释的湿干基、碳氮水差额编为残余气体、废水或粪污。 |  |
| biogenic_carbon | enteric_ch4;respired_biogenic_co2;manure_ch4 | 保持肠道、呼吸、粪污与上游饲料碳核算一致。IPCC 国家清单净 CO2 惯例不是通用生命周期零影响规则。声明生命周期生物碳规则、实际物理释放及上游吸收和保留覆盖，不虚构固碳，也不重复饲料碳。 | ipcc-livestock-2019 |
| manure_fate | manure_handling | 明确排泄、收集、储存、处理、产品或废物转移及实际沉积或施用交接点。区分保留粪污、废水及空气物种。记录下游责任及产品或废物分配规则：必要废物处理须完成，真实有用产品须有其自身输出身份及有据分配。不得悄然漏掉土地沉积或间接氮路径、重复同一排放或自动给肥料和沼气信用。 | ipcc-livestock-2019 |
| actual_expansion | all_processes | 每项实际未示范材料、原生交通工具或驮载装备、动物物种及入役状态、饲料放牧或土壤吸收、能源燃料、供应结果、废物水流、排放物质颗粒及接收去向须有独立原子行。必需唯一row_id、一个存在过程、方向类型、单一实际身份状态、UUID或明确未解、原生属性单位数量和原始来源、同父过程CP、有据计算及供应覆盖接收方不确定性，并关联触发DQ id。保留已知子区室。发生、身份、数量或去向缺失阻断数据完成，不缩产品范围，也不按零。 |  |
| actual_mechanism | all_processes | 将真实人类任务、动物驮载牵引及全部辅助动力记录为一致运输系统。识别鞍挽具和身体接触、负载距离地形、联合团队以及恢复等待支持。助力能源驱动、充电加油、维修磨耗、事故救援和寿命负荷须为真实原子交换。实际电机、电池或混合燃料存在时，采用带来源台账的整体配制投入，或替代同一覆盖的物理组分投入，两者互斥；净供应领用、库存、燃烧、放空、洒漏和回收分别记录，供应不自动等于燃烧活动。纯机动或以冒险为主的功能须另作产品判断。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| conveyance_delivery | 实际旅客运送交付 | required | 全部实际所声明服务 | reference_process | completed_conveyance |
| animal_husbandry | 入役后役用动物饲养及生物活动 | conditional | 任一真实符合功能的役用动物物种支持服务 | support_process | completed_conveyance |
| manure_handling | 自有粪污路径及移交 | conditional | 真实役用动物排泄及相关责任 | support_process | completed_conveyance |
| vehicle_lifecycle | 交通工具及设施生命周期 | conditional | 真实相关交通工具或支持资产 | support_process | completed_conveyance |
| animal_lifecycle | 动物入役及退役生命周期 | conditional | 真实自有或未覆盖役用动物供应及生命周期 | support_process | completed_conveyance |
| service_support | 未覆盖的服务维修及支持 | conditional | 关联供应覆盖之外的真实必要支持 | support_process | completed_conveyance |

所有过程共享最终已完成人次服务参考，不创造条件节点的额外产品产出。每张卡仅在实际发生且尚未覆盖的对应交接点使用。

### 过程：实际旅客运送交付 (`conveyance_delivery`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的附操作人员城市或郊区人力或畜力旅客运送 (`completed_conveyance`)

一名实际旅客完成独立声明的城市或郊区附操作人员人力或畜力道路运送，包括实际驮畜载客。核实真实功能、操作人员与旅客角色、起讫停靠返程边界、服务范围、质量、时间和完成。中间动物团队或工具变化、调位等待均不增加最终完成产出。

一名实际旅客完成独立声明的城市或郊区附操作人员人力或畜力道路运送，包括实际驮畜载客。核实真实功能、操作人员与旅客角色、起讫停靠返程边界、服务范围、质量、时间和完成。中间动物团队或工具变化、调位等待均不增加最终完成产出。

- 选定流: 已完成的附操作人员城市或郊区人力或畜力旅客运送
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_journeys`
- 来源: `un-cpc3-2025`

##### 废物流

##### 基本流

### 过程：入役后役用动物饲养及生物活动 (`animal_husbandry`)

#### 输入

##### 产品流

###### 按饲喂状态供应的干燥禾草干草 (`grass_hay`)

仅用于入役交接点后实际供应的禾草干草。保留植物及规格、含水率、饲喂或干物质基准、库存、消耗与损失。鲜草放牧、豆科干草、谷物、配合饲料及垫料是不同交换。不规定固定日粮或每旅客饲料量。

- 选定流: 按饲喂状态供应的干燥禾草干草
- 流属性/单位: Mass / kg
- 数量规则: 按 cp_husbandry 归属的实际饲喂状态干草供应质量（含已核对损失）/N；包括日常维持及非工作支持，不仅计额外牵引饲料。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_husbandry`
- 来源: `woah-working-equids`

###### 自来水 (`animal_tap_water`)

仅计入役后自营动物饮用或护理实际供应的兼容自来水。这是产品供应，不是直接环境取水。供给、饮用、溢洒、蒸发及排出水须分别记录；其他水源须有实际独立身份。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 按 cp_husbandry 归属的实际原生供应质量kg/N。体积表记录须有独立实际水状态和密度换算证据，不能假定具体密度。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_husbandry`
- 来源: `woah-working-equids`

###### 交流电 (`stable_ac`)

仅用于本过程内相关且未被其他供应结果计入的畜舍照明、通风、抽水或护理兼容交流电。这是设施能源，不是动物代谢能，也不证明所有动物路线都用电。其他实际载能体另行拆分。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / MJ
- 数量规则: 按 cp_husbandry 归属的兼容交流电实际原生总输入MJ/N。兼容电表kWh按精确关系1kWh=3.6MJ换算；不替换为一次能源、动物代谢或净输出抵扣。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_husbandry`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 甲烷 (生物源) (`enteric_ch4`)

所声明役用动物亚组实际肠道释放的生物源甲烷。匹配物种、日粮、动物日及实际方法适用性，不抄用牛因子，也不由粪便产量推定。 这些已核实身份仅指空气、未指定。只有实际报告范围有文件依据时才可使用；已知城市、非城市或其他具体接收子区室时须另行核实身份并建立原子扩展行。接收范围未知时阻断完成。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 归属的本物种实际实测或可追溯模型质量 kg/N；cp_animal_emissions。不提供通用数值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal_emissions`
- 来源: `ipcc-livestock-2019`

###### 二氧化碳（生物源） (`respired_biogenic_co2`)

在所声明生命周期碳规则要求显式释放核算时，记录实际生物源呼吸 CO2。核对饲料上游吸收、碳保留及释放；IPCC 国家清单不计牲畜净 CO2 的惯例，不能证明物理呼吸为零或所有 LCA 方法均为零影响。 这些已核实身份仅指空气、未指定。只有实际报告范围有文件依据时才可使用；已知城市、非城市或其他具体接收子区室时须另行核实身份并建立原子扩展行。接收范围未知时阻断完成。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 归属的本物种实际实测或可追溯模型质量 kg/N；cp_animal_emissions。不提供通用数值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal_emissions`
- 来源: `ipcc-livestock-2019`

### 过程：自有粪污路径及移交 (`manure_handling`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废物移交点的不含垫料新鲜收集驴粪污 (`collected_donkey_manure`)

仅用于实际独立收集、不含垫料或其他动物残余物，且在移交点有据属于废物的驴粪尿流。记录实际组分、含水率、库存、收集损失及接收方。不同混合物须独立身份。肥料或产品状态、直接沉积粪污、废水及处理服务均不是此废物交换，须保留各自实际路径。

- 选定流: 废物移交点的不含垫料新鲜收集驴粪污
- 流属性/单位: Mass / kg
- 数量规则: 归属的实际湿流质量（扣容器皮重）/N；cp_manure。产生、储存、释放及移交须核对，不能通过差额虚构残余物。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_manure`
- 来源: `ipcc-livestock-2019`

##### 基本流

###### 甲烷 (生物源) (`manure_ch4`)

仅计自有排泄、储存或处理交接点的实际生物源 CH4，与肠道甲烷及供应结果已含粪污处理区分。匹配实际管理系统、气候和持续时间，不假设默认粪污管理比例。 这些已核实身份仅指空气、未指定。只有实际报告范围有文件依据时才可使用；已知城市、非城市或其他具体接收子区室时须另行核实身份并建立原子扩展行。接收范围未知时阻断完成。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 归属的本物种实际实测或可追溯模型质量 kg/N；cp_manure。不提供通用数值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_manure`
- 来源: `ipcc-livestock-2019`

###### 一氧化二氮 (`manure_n2o`)

仅计明确责任粪污路径实际释放的 N2O 物种质量。追踪排泄、保留、挥发、淋失及转移氮；kg N2O 不是 kg N。直接或间接土壤及下游排放须各有边界与方法，不得重复本事件。 这些已核实身份仅指空气、未指定。只有实际报告范围有文件依据时才可使用；已知城市、非城市或其他具体接收子区室时须另行核实身份并建立原子扩展行。接收范围未知时阻断完成。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 归属的本物种实际实测或可追溯模型质量 kg/N；cp_manure。不提供通用数值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_manure`
- 来源: `ipcc-livestock-2019`

###### 氨 (`manure_nh3`)

仅计有据粪污交接点实际释放的氨物种质量。保留 kg NH3 与 kg NH3-N 的区别及进入下游间接排放的氮转移；已包括间接 N2O 的因子不得重复计入。 这些已核实身份仅指空气、未指定。只有实际报告范围有文件依据时才可使用；已知城市、非城市或其他具体接收子区室时须另行核实身份并建立原子扩展行。接收范围未知时阻断完成。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 归属的本物种实际实测或可追溯模型质量 kg/N；cp_manure。不提供通用数值因子。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_manure`
- 来源: `ipcc-livestock-2019`

### 过程：交通工具及设施生命周期 (`vehicle_lifecycle`)

#### 输入

##### 产品流

###### 制造交接点的完整无助力脚踏客运三轮车 (`cycle_rickshaw`)

仅在实际采用该无助力脚踏车辆时适用。本行为完整配置的制造阶段交付，不是人类劳务、年度车辆服务或电力。记录已含原装部件；替换轮胎、维修及处置另计，除非实际供应方已明确覆盖。其他人拉交通工具须有各自具体身份。

- 选定流: 制造交接点的完整无助力脚踏客运三轮车
- 流属性/单位: Count / Item(s)
- 数量规则: 交付原生制造数量 Item(s) 乘同一车辆或队列归属活动量/有据兼容有效寿命总活动量，求和后除以 N；cp_vehicle_life。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_vehicle_life`

###### 制造交接点的完整双轮马属动物客运车 (`equid_cart`)

仅用于实际完整双轮客运车；不包括活体动物，鞍具或挽具仅在已核实交付产品边界证明包含对应组件时计入。未使用该车的骑乘或驮载没有本车需求。其他马车须独立识别，不得改称本配置。

- 选定流: 制造交接点的完整双轮马属动物客运车
- 流属性/单位: Count / Item(s)
- 数量规则: 实际交付车辆制造数量乘同一资产有据的全使用者寿命活动份额/N；cp_vehicle_life。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_vehicle_life`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：动物入役及退役生命周期 (`animal_lifecycle`)

#### 输入

##### 产品流

###### 首次投入服务交接点的已训练活体役用驴 (`working_donkey_entry`)

仅用于在有据首次服务交接点以活体且已训练状态供应的实际驴。核实上游繁育、饲养、饲料、兽医与训练覆盖；缺失的入役前负荷须补齐，不重复已含部分。本活体动物产品不是全寿命牵引服务。入役后饲养、休息日、退役与实际死亡均须明确负责。马或骡须有自身身份。

- 选定流: 首次投入服务交接点的已训练活体役用驴
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生入役活体数量乘同一动物有据的归属寿命服务份额/N；cp_animal_life。不得再用寿命活动量重复摊薄每日饲料量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal_life`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：未覆盖的服务维修及支持 (`service_support`)

#### 输入

##### 产品流

###### 自来水 (`service_tap_water`)

用于相关交通工具清洗或运营支持的实际兼容自来水，不含动物供水计量及供应方已含供水。旅客饮料产品、环境取水及废水须独立识别。操作人员普通个人消费须按明确人类边界规则判断，不得悄然作为代谢燃料加入。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 按 cp_support 归属的实际原生供应质量kg/N。体积表记录须有独立实际水状态和密度换算证据，不能假定具体密度。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`maintenance_used_oil`)

仅用于交通工具维修在处理前产生并独立收集的实际石油基废润滑油。不是新油、含油废水、油脂混合物、动物脂肪或油处理服务。核实所含组分及实际废物交接点，运输与处理仍须独立完成。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 按 cp_support 归属的实际废油 kg（扣容器皮重）/N。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all_processes | 分配前先细分专用行程、动物、车辆、畜舍及支持记录。共享时须为该负荷及所有使用者和功能论证实际因果驱动，不存在通用旅客、货运或农业活动份额。 | ghg-product-standard |
| actual_occupancy | conveyance_delivery | 按实际人数、距离和资源使用归属载客区间负荷，并在相关时保留等级或配置。区分随行行李与独立提供货运。归属旅客组分子仅除实际完成 N 一次，已按人次表示的供应结果不得再除载客率。 |  |
| rest_and_failure | all_processes | 在对应服务池保留相关空驶、等待、失败及非工作支持负荷。当日没有旅客交付不等于动物休息和维持不存在。N=0 时没有有限每参考强度，须保留资源池并凭证据解决期间或边界。 |  |
| animal_maintenance_share | animal_husbandry;manure_handling | 按有据可用性、时间或资源证据，将真实完整动物日的护理与排放分配给全部支持功能，含休息支持，不能仅分配额外饲料。核对实际繁育、奶、肉、粪肥、农业或货运输出。动物质量、人距离、吨距离及食品输出不能直接合为一个分母。 |  |
| supply_lifetime_share | vehicle_lifecycle;animal_lifecycle | 每个实际交付单位或队列，按原生数量乘归属兼容活动量/有据全使用者寿命总活动量，再按 N 归一化。数量、分子及分母须匹配同一交付单位或队列；当期每日护理采用期间份额，不再除以寿命活动量。 |  |
| useful_products | manure_handling;animal_lifecycle | 按真实产品或废物状态、交接点及功能选择并披露分配。先细分，无法建立物理关系时须论证其他关系并作敏感性分析，不假定价值份额或避免肥料、饲料、车辆信用。退役动物产品与回收材料不得重复原活体产出或其全部负荷。 | ghg-product-standard |
| species_teams_other_functions | animal_husbandry;animal_lifecycle;conveyance_delivery | 使用实际动物身份及其全部有据功能，包括工作休息护理。团队不是一只动物的默认倍数，旅客数不是动物头数。先细分专用活动和投入，必要时再采用有据兼容物理关系并作敏感性分析。客运、货运和真实独立动物产品仅共享一次公共资源，不规定默认体重头数票价或平均份额。 |  |

## 8. 前景数据采集、计算与质量规则

以下完成判定、归属及记账公式是本 PCR 明确设计的方法。外部资料提供所注明的分类、护理或排放路径背景，不表示 WOAH、IPCC 或 GHG 标准规定了这些具体服务分配公式或人类维生边界。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | conveyance_delivery | 已完成旅客运送 | actual_record | journey_id;actual_persons;operator;OD;mode;species;conveyance;actual_segment_km;loaded_empty_waiting_failed_duty;completion;period;all_users;actual_passenger_transport_function;urban_suburban_extent;operator_assistant_passenger_roles;service_quality;actual_duration_window;drawn_pedalled_pack_configuration;team_animals;assistance_mechanism;shared_freight_other_outputs | 核对实际调度、旅客及起讫、完成证据、关联停靠及抽样误差。汇总前确定单向、多停靠和返程边界，不得代用票数。 汇总算法：N=完成所声明运送的实际合格人数之和；真实活动归属相同旅客组；归属总量仅除 N 一次。 | Item(s);km;h | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 声明期间的实际运送服务及全部使用者 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_husbandry | animal_husbandry | 入役后马属动物饲料水及畜舍支持 | actual_record | animal_id;species;age;body_state;entry_date;animal_days;all_functions;maintenance_rest_work;feed_SKU;moisture;as_fed_DM;stock;given_consumed_lost;water_source;meters;provider_scope;health_tasks;body_cohort_start_end;growth_lactation_retention;feed_C_N_moisture;grazing_native_intake;water_body_stores;work_rest_retirement_support;species_digestive_system;team_and_all_function_share | 读取实际日粮、库存、计量、健康及活动日志；拆分每种饲料、放牧、水、垫料及能源身份。保留动物日维持和休息及真实兽医、蹄护理和住房记录，不采用默认日粮或服务载荷。 汇总算法：按有据全功能护理份额（含休息）归属每项真实原生期间供应或消耗数量；旅客组分子仅除 N 一次。原生含水率和单位换算须有证据。 每种真实物种独立核对期初库存加采购及实际放牧，去向为消耗、期末存量与有据损失；保留真实身体同群变化、碳氮湿干及水存量和去向。团队、休息及非运输功能份额须有实际证据，不借用马属或牛比例。 | kg;kWh;m3;animal-day | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 实际入役后全部物种各自护理及全部支持功能 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_animal_emissions | animal_husbandry | 实际肠道及呼吸释放 | actual_record | animal_id;species;subgroup;animal_days;diet;feed_intake_basis;method;source_version;factor_basis;actual_species_mass;carbon_origin;air_subcompartment;upstream_carbon;retention;attribution;actual_body_feed_C_N_water_balance;respiration_water;actual_compound_mass;method_validity_species_state;no_residual_emission | 采用实际监测，或物种、日粮及亚组兼容且独立有据的模型，保留输入基准和不确定性。将真实呼吸及所选生命周期碳规则，与表征影响分开记录。 汇总算法：在相同护理或活动边界内向支持功能分配实际入役后物种质量，再仅除 N 一次。不合并肠道与粪污事件，不把国家净 CO2 省略当作物理零。 将饲料摄入、身体生长产品及其他碳氮水保留，与独立有据的呼吸肠道释放、排泄物及其他去向核对。国家净CO2遗漏或缺物种模型均不能证明物理排放为零；非常见物种量级显著性因子不能用作生产排放因子。 | kg species;animal-day | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 实际自营马属动物生物释放交接点及有据接收子区室 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_manure | manure_handling | 实际粪污流及释放 | actual_record | 动物标识；物种；排泄；粪尿；水；湿质量；干物质；挥发性固体；碳；氮；库存；收集；沉积；储存系统；气候；时间；处理；接收方；产品或废物状态；空气水土子区室；因子基准；来源；供应覆盖 | 采用独立计量的流、库存和接收记录及有据实际物种和系统排放方法。追踪组分经过收集、储存及最终责任；逐项识别每项实际产品、废物、废水和基本释放。 汇总算法：在各去向核对实际湿干基、碳及氮数量，保留有据损失及不确定性。按同一动物护理份额分配自有事件并仅除 N 一次；关联下游结果替代其已含事件。 按真实交接点处理粪便尿液及混合物：独立收集流与真实混合粪污对同一成分仅替代一次。真实垫料混入、土地沉积、冲洗和储存流保留各自身份及边界，不把所有物种强塞入驴粪污示例。 | kg wet stream;kg species;kg N;kg C | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 自有粪污产生、储存、处理及有据转移或沉积交接点 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_vehicle_life | vehicle_lifecycle | 真实交通工具制造及生命周期 | actual_record | 资产标识；配置；制造原生数量；已含原装件；投入；替换；维修；退役；兼容寿命总活动量；期间旅客组活动量；全部使用者；供应覆盖；预测来源 | 读取实际工程量、配置特定供应数据、寿命活动或工程依据及去向记录。租金或折旧不是物理数量；缺失阶段逐项识别。 汇总算法：实际交付数量乘同一资产旅客组活动量/正全使用者寿命总活动量，再除 N；区分原装与替换组件及未覆盖维修或退役。 | Item(s);native component units;km;h | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 归属本生命周期过程的真实人力或动物交通工具、鞍挽具及道路或支持资产 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_animal_life | animal_lifecycle | 真实入役动物及寿命分配 | actual_record | animal_id;species;training_state;first_service_gate;native_entry_count;breeding_rearing_training_coverage;pre_entry_feed;service_dates;retirement;death;all_functions;total_lifetime_duty;cohort_duty;care_provider_scope;uncertainty;pack_drawn_role;animal_id_cohort;body_state;all_functions_work_rest_retirement;included_provider_stage_cells | 读取动物特定采购、入役前饲养训练及寿命活动记录；区分实测寿命与有据预测。核实首次入役供应覆盖，未含上游阶段、退役护理及实际最终去向须独立补齐。 汇总算法：实际交付入役活体数量乘同一动物归属寿命服务份额，再除 N。入役后每日饲料及排放留在真实期间，不作第二次寿命摊销。 活体动物是生物性交付或饲养产品，不是制造机器或生命周期运输结果。匹配同一动物同群身体训练入役状态、兼容完整全用户寿命活动及原生供应单位；缺失入役前饲养训练及后期护理退役须独立补齐。 | Item(s);animal-day;h | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 真实入役动物及未覆盖入役前或退役生命周期交接点 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |
| cp_support | service_support | 真实清洗维修及操作支持 | actual_record | task_id;actual_material;native_quantity;stock;work_specific_food_water;ordinary_subsistence_exclusion;water_meter;waste_composition;receiver;species_medium;provider_scope;all_users;attribution;human_roles_work_rest_exertion;dedicated_food_PPE_safety;incremental_metabolic_inclusion_boundary;physiology_intake_counterfactual;actual_assistance_carrier;net_withdrawal_burn_spill_recovery | 读取服务专用采购、工单、计量库存及独立接收记录。拆分每项真实耗材、供应服务及残余物。区分普通个人饮食与有据专用支持，不作通用劳务能源转换。 汇总算法：按有据全部使用者驱动归属实际互斥原生任务、供应及去向数量，并仅除 N 一次；不由用水推废水或新油领用推废油。 记录实际人类任务休息角色及工作专用食物安全支持。采用扩展代谢边界时，须独立记录真实摄入、用力反事实、C/N/水及物质数量和接收介质，保持上游食物边界一致并披露敏感性，不能虚构劳务燃料。实际辅助动力的能源燃料驱动投入，以及供应库存燃烧洒漏回收量分别记录。 | native kg;m3;kWh;actual service units | 实际事件及期间核对 | 声明相同服务期间及明确生命周期接口 | 仅相关且未被覆盖的服务支持任务及其实际去向 | 每声明的参考流 | 原始证据、供应覆盖、全使用者闭合、来源适用性及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | completed_conveyance | N=完成同一所声明操作人员与交通工具服务边界的实际人数之和；单独保留中断或无产出活动。 | cp_journeys | Item(s) |  |
| normalize_once | all_processes | 将真实兼容原生数量归属所声明旅客组，再仅除正 N 一次。期间、边界及全部使用者份额须匹配。 | cp_journeys;cp_husbandry;cp_animal_emissions;cp_manure;cp_vehicle_life;cp_animal_life;cp_support | native amount per Item(s) |  |
| manufacture_and_entry | cycle_rickshaw;equid_cart;working_donkey_entry | 归属供应量=实际交付原生供应数量乘同一单位旅客组活动量/兼容全使用者寿命总活动量后求和。该分子再除 N；其他生命周期阶段保持独立原生数量。 | cp_vehicle_life;cp_animal_life | native supply per Item(s) |  |
| animal_period_share | grass_hay;animal_tap_water;stable_ac;enteric_ch4;respired_biogenic_co2 | 归属动物期间数量=真实完整期间数量乘有据全功能支持份额，并保留维持和休息。不是假设边际工作日粮，不再除寿命活动量。 | cp_husbandry;cp_animal_emissions | native amount before /N |  |
| manure_species | manure_ch4;manure_n2o;manure_nh3;collected_donkey_manure | 仅采用有记录的物种、系统及来源方程和原生单位换算。区分产生湿流、保留固体、碳氮转移及每项真实释放；由 N 或 C 转换分子质量时记录化学计量。 | cp_manure | kg stream or native species |  |
| supplemental_distance | completed_conveyance | 补充人距离=每区间真实人数乘真实区间 km 后求和。该实测披露不改变数量参考，也不固定每次行程距离。 | cp_journeys | supplemental passenger-distance |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_service | completed_conveyance | 保留真实人数、起讫、操作人员、路线状态、停靠、完成、期间及载客情况。完成缺失或服务方式未知会阻断生产；动物、车辆或票数不是人次服务数。 | cp_journeys |
| actual_feed_care | grass_hay;animal_tap_water;stable_ac | 以准确原生身份、状态及数量展开每项真实放牧来源、干草规格、谷物、配合饲料、盐矿物、垫料、水源、热或能源、兽医和蹄护理供应或服务。干草卡不是通用日粮；动物休息支持及饲养均为强制。 | cp_husbandry |
| actual_animal_sources | enteric_ch4;respired_biogenic_co2 | 匹配真实物种、消化系统、年龄状态、日粮、动物日、方法及不确定性。逐项展开每项必要实际释放，保留物质、碳来源、接收介质和子区室及原生物种质量。保留已知子区室，为未指定身份提供依据；缺失释放不是零。 | cp_animal_emissions |
| actual_manure_fates | collected_donkey_manure;manure_ch4;manure_n2o;manure_nh3 | 展开每种真实保留粪污组成、垫料混合物、废水、有用粪肥产品、直接沉积、收集储存处理土壤路径及真实物种。记录湿干基、VS、C、N、接收交接点、下游责任及来源因子覆盖。单张粪污卡或所列气体不代表穷尽；收集或去向未知会阻断完成。 | cp_manure |
| actual_conveyances | cycle_rickshaw;equid_cart | 每种真实人拉或脚踏工具、座椅、鞍挽具、棚舍、道路畜舍车间资产、替换件及退役材料，须有自身配置和交接点原生供应或去向交换及有据全使用者活动量。不以通用机动车、质量或租金替代完整原生数量产品。 | cp_vehicle_life |
| actual_animal_lifecycle | working_donkey_entry | 每种实际物种及身体训练入役状态须展开为具体原生活体动物或饲养身份。真实驮畜载客需要鞍具负载和支持，不产生虚构畜力牵引车。补齐有据繁育饲养训练、全使用者寿命及工作休息支持、未覆盖退役护理死亡及真实产品，不重复当期饲料或供应覆盖；数据缺失阻断完成，不排动物范围。 | cp_animal_life |
| actual_support | service_tap_water;maintenance_used_oil | 分别展开每项真实工作专用耗材、维修、卫生或数字设施、食品饮料、业务调位供应服务及废物或直接释放。保留明确人类维生排除、理由及敏感性。每种真实润滑剂、油脂、化学品、水及废物均须自身身份、原生数量及接收方；未知不代表不存在。 | cp_support |
| identity_coverage | completed_conveyance;cycle_rickshaw;equid_cart;working_donkey_entry;grass_hay;animal_tap_water;stable_ac;enteric_ch4;respired_biogenic_co2;manure_ch4;manure_n2o;manure_nh3;collected_donkey_manure;service_tap_water;maintenance_used_oil | 每项真实新增交换须有唯一 row_id、单一父过程、方向类型、具体身份、UUID 或明确未解状态、原生属性单位、数量、采集协议、来源和接收方或介质子区室。关联触发 requirement_id 及供应覆盖单元；身份或数量缺失阻断最终完成。不虚构因子或通用范围。 | cp_journeys;cp_husbandry;cp_animal_emissions;cp_manure;cp_vehicle_life;cp_animal_life;cp_support |
| species_body_balance | animal_husbandry;manure_handling;animal_lifecycle | 要求各真实物种亚组、身体状态、日粮工作休息生理及独立有据来源方法。核对湿干碳氮水与真实库存身体产品保留，以及独立有据呼吸肠道排泄土壤空气水去向。未经验证实际适用性，不以牛对骆驼或马属对其他动物缩放，也不采用残余气体废物补平。国家净CO2惯例不是物理为零证明。 | cp_husbandry;cp_animal_emissions;cp_manure;cp_animal_life |
| actual_human_mechanism | conveyance_delivery;service_support;vehicle_lifecycle | 保留人体操作助手旅客角色、真实任务工作休息专用支持、普通维生代谢边界及敏感性。驮载牵引人拉脚踏及真实辅助动力须逐行展开原生装备、来源、护理、磨耗去向并使用同父过程CP。缺示例卡不免除真实义务。 | cp_journeys;cp_support;cp_vehicle_life |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference | completed_conveyance | 核实一个真实已完成旅客产出、1 Item(s)、正 N、操作人员、实际起讫路径及停靠和人力或动物方式；票证、人体、车辆或动物数不能替代。 |  |
| coverage | all_processes | 核对供应方、入役前后、维修及退役仅覆盖一次，制造或动物入役数量不得改称全寿命服务。每个采集协议仅引用一个存在过程，每张卡使用其本过程的协议。 |  |
| human_animal_boundary | all_processes | 明确披露普通人类维生排除及动物完整支持纳入。不凭路线标签比较，须先核实功能与边界等效并作敏感性分析；不得推定动物负荷为零或直接将食物转劳务能源投入。 |  |
| mass_and_state | animal_husbandry;manure_handling | 采用独立去向核对饲料含水率、库存、消耗与损失及动物和粪污的水、碳、氮。kg NH3、NH3-N、N2O、N2O-N、CO2 及 C 基准不同。未知平衡须解决，不虚构残余释放。 |  |
| manure_emissions | manure_handling | 区分肠道与粪污来源，核实系统、气候、时间和物种适用性、空气子区室、直接和间接及土壤或下游责任，因子覆盖不得重复。实际直接沉积或未收集粪污路径也须完成。 |  |
| lifetime | vehicle_lifecycle;animal_lifecycle | 要求有据正寿命活动量及全部使用者闭合、实际交付数量，以及独立部件、入役前饲养、护理与退役交接点。在役寿命预测须披露来源和不确定性，实测证据变化时更新。 |  |
| completion | all_processes | 每项适用身份、数量或去向缺口均为强制生产门槛。仅缺通用范围不是零交换，也不要求编造因子。双语和投影规则及已核实原生身份须一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset；仅在全部强制身份、数量、覆盖及去向要求完成并复核后使用 |
| allowed_use | 按附操作人员的实际城市或郊区人力或动物工具及驮畜旅客功能、物种配置、起讫距离时间质量、完成期间及完整声明生命周期边界使用 |
| excluded_use | 无操作人员裸租、城际或其他功能产品、通用人公里零排放零代谢标签、把人体食物当通用燃料、未核物种因子或未补齐真实护理去向 |
| required_metadata | 实际功能及完成 N；操作人员；方式物种配置；起讫距离载客；期间；动物日与休息；人类排除；全寿命和供应矩阵；粪污去向及空气子区室；实际分配 |
| required_quality_disclosure | 未解身份数量；膳食或动物日估计；饲料湿干基；物种方法适用性；生命周期预测；碳氮去向；边界比较敏感性 |
| update_trigger | 路线功能、动物物种、饲养、供应覆盖、配置寿命、粪污管理或接收区室、人体边界及分配改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD,CPC Version3.0 Explanatory Notes,30 June2025,actual parent-group6411 p358 and subclass64117 p360. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整附操作人员人力或动物道路工具及驮畜载客，限城市或郊区父组情境；不限马属，也不规定服务数值或生理方法。 |
| woah-working-equids | official_guidance | WOAH/OIE,Terrestrial Animal Health Code,Chapter7.12,Welfare of working equids,actual19July2021 edition,Articles7.12.2 and7.12.6–7.12.13. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en/chapitre_aw_working_equids.pdf | 仅为实际范围内役用马驴骡提供定性护理背景；明确排除运动休闲研究及仅肉用生物制药马属动物。不作通用动物旅游福利认证、其他物种生理或数值日粮寿命和LCA分配规定。其他实际物种仍在PCR范围，须独立采集和生理证据。 |
| ipcc-livestock-2019 | official_guidance | IPCC,2019 Refinement to2006 Guidelines,Volume4,Chapter10,sections10.1–10.5,especially actualpp10.10–10.11,10.33–10.34,10.50 and10.74–10.75. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 用于物种饲料、肠道粪污碳氮分立路径及方法适用性问题。不采用默认因子体重日粮含水率；非常见物种粗略显著性外推不能当准确生产排放因子。不提供人体代谢模型或物理CO2为零结论。 |
| ghg-product-standard | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters6,7 and9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 用于功能边界披露及细分或有据分配原则。人类维生排除、役用动物寿命纳入及自定公式是明确 PCR 选择，不是该标准规定或数值因子。 |
