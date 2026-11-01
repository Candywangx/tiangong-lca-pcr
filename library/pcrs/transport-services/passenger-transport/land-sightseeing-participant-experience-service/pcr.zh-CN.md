---
pcr_id: pcr.land-sightseeing-participant-experience-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 陆上观光参与者体验服务

## 1. 范围与适用性

本PCR覆盖真实陆上非轨道观光旅客运输体验，含固定行程和真实灵活参与服务窗口。功能是与载客运输一同交付的景观解说观光，不是仅运至旅游地点。巴士是示例而非全范围；真实动力车辆人力动物运输非轨道缆索保留原生分支。其他真实陆上配置仍在范围内，数据使用前须独立适用依据。

参考是一名真实参与者获得一次已履约声明观光行程服务窗口。计数前声明真实激活使用履约、日期天数路线圈次停靠时长质量纳入项。灵活上下车不强制虚构整圈；真实反复登乘车辆航段是组成，不添最终体验。售票未用通票运力每次登乘不自动成为完成人次。

保留所有真实非轨道陆上观光旅客产品；缺UUID数量技术物种依据物理分支数据是就绪缺口，不悄排产品。排除轨道水航空观光、一般A到B运输或纯团体包车、仅预订组装、独立导游徒步或仅租用可用性最终功能。真实导览自操作安排须真实供应参与角色及载客观光功能复核，不按营销词或机械移用公交租用规则分类。

CPC64132为非轨道陆上旅客观光运输，以巴士为例。本方法保留完整真实功能并拟exact，须独立语义复核。缆索驱动不能把轨道导向缆车变非轨道，景观营销名不能确定观光分类。相邻CPC背景中的独立导游旅游组装功能有别。计数及算法为PCR明确选择，不是分类广告规定的单位。

保留真实已含导游解说数字音频耳机设备餐饮景点门票接驳安全无障碍。不假定所有游览含餐入场，也不能删真实纳入项。驾驶导游驭手人员不增参与产出，儿童婴儿无假定成人座位当量。完整购入观光导览支持结果替代确切已含前景一次。

含归属供应载客空驶调位等待未用未履约待命测试救援失败作业、工作支持及真实车辆设施路径场地制造饲养维修更新退役端口。不假定动物休息照护及耦合缆索作业零负荷。不提供通用载客游览时长日粮热量劳务燃料动物物种因子资产寿命排放范围因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.land-sightseeing-participant-experience-service |
| classification_refs | CPC3.0 64132;exact;actual land-except-rail passenger sightseeing function |
| covered_products | 全部真实陆上非轨载客观光体验，固定行程或灵活履约参与窗口，具真实方式纳入 |
| excluded_products | 轨水航；纯包车一般交通；仅预订组装独导徒步或纯租可用性功能 |
| representative_product | 一名参与者已履约的陆上观光体验 |
| production_route | 真实参与观光履约含动力人动物非轨缆作业解说支持供应生命周期 |
| market_state | 声明使用质量纳入的真实履约行程窗口，非单售票 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一名参与者已履约的陆上观光体验 |
| How much | 1名真实参与者履约声明行程服务窗口 |
| How well | 真实方式路线窗口激活使用停靠解说质量纳入履约标准 |
| How long or cycle | 真实声明日期天圈窗口行程时长，不假整圈默认小时 |
| reference_flow_link | fulfilled_sightseeing_participant |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一名参与者已履约的陆上观光体验 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 真实供应观光功能及供应责任；非轨道陆上方式机构；固定行程或真实灵活参与服务窗口；激活使用履约标准；真实日期天数圈次停靠时长质量；真实参与驾驶导游驭手动物角色；已含解说音频餐饮景点接驳；原生载体车辆动物物种配置接收端口；队列期间供应阶段覆盖；未用空驶待命失败作业；同资产全用户寿命；真实化学干湿CN来源接收去向 |

必需限定信息在元数据等效字段声明。按真实固定灵活功能仅计一次兼容履约参与，原生导览团体时间头资产饲料量另计。N分子同真实队列期间；不猜激活不强全程不删免费儿童。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| participant_count | reference product | Number of items | Item(s) | N为功能兼容声明行程服务窗口期间真实履约参与者正计数。须激活使用履约依据，不强制整圈或按重复登乘乘N。功能质量天数窗口纳入项实质不同须分层。未用未知票不猜完成人。 |
| native_interfaces | all inventory rows | Native compatible property | Actual native unit | 保留载体供应功能资产饲养动物计数生物量原生。导览场次团游车时设施头日饲料kg不等于一次参与体验。仅以独立证明真实等价换算；体积质量需实际状态密度；kWh仅已核实3.6MJ/kWh。 |
| biological_chemistry | all inventory rows | Native compatible property | Actual native unit | 保留饲料粪尿收货干湿态真实含水CN组成体存、物种质量与kgC/kgN/CO2当量。保留实际来源粒径气水土子区室；未知接收不默认未指定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实供应载客观光功能及原生自有供应移交端口 |
| starting_condition_role | 采集覆盖接口，不是上游既有资产动物照护零负荷 |
| product_classification_scope | CPC3.0 64132;exact;actual nonrail land passenger sightseeing |
| recursive_input_rule | 完整同功能购入体验替已覆组成，仅展开缺单元不添最终输出 |
| upstream_dataset_requirement | 真实兼容原生功能量态技术物种质量期间地理生命周期供应覆盖，缺阶段必补 |
| disclosure | 真实供应观光功能及供应责任；非轨道陆上方式机构；固定行程或真实灵活参与服务窗口；激活使用履约标准；真实日期天数圈次停靠时长质量；真实参与驾驶导游驭手动物角色；已含解说音频餐饮景点接驳；原生载体车辆动物物种配置接收端口；队列期间供应阶段覆盖；未用空驶待命失败作业；同资产全用户寿命；真实化学干湿CN来源接收去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_experience | sightseeing_land | 从实际供应载客观光行程窗口及激活使用履约质量纳入运营参与角色出发。景观目的地不能单独把普通交通变观光；已含解说餐饮入场接驳保留实际功能。仅按实际产品边界分开安排预订独立导游纯租用。 | unsd-land-sightseeing-2025 |
| provider_phases | sightseeing_land | 逐活动来源供应生物资产期间阶段指定唯一责任。完整购入观光交通导览音频IT餐饮景点动物照护维修处理，替代确切已含前景投入释放资本一次；仅展开缺单元。保持原生供应单位功能，不按发票货币或内部转移作新购入。 | ghg-product-standard-2011 |
| motor_energy | sightseeing_land | 采真实燃料等级混合动力辅助来源作业。整股加组成碳源台账与替代对应覆盖物理组分互斥。供提燃洒回库存转移不同，排放用真实有据活动。内部电池再生余热不添外部供应；外供唯一端口责任，不再给避免能源信用。 | ipcc-mobile-combustion-2006 |
| human_roles | sightseeing_land | 真实人力不是动物饲料或燃料。普通人维生是披露方法边界，不是实测零或热量工资排放因子。评估真实工作专用餐饮PPE安全支持；体验实际供参与者餐饮仍纳入。记录真实人力电助，不按人力车名推动力。 |  |
| animal_lifecycle | sightseeing_land | 真实动物物种年龄工作休息头时日粮饮水健康厩养垫料全用户须记录。前期饲养交付覆盖与当前喂养照护粪尿期间互斥：全寿命供应替代对应本地照护释放，不另添全寿命负荷。饲料CN水分体存呼吸肠道释放粪尿去向须物理闭合；库存损失余差不能编排放。马科指南畜牧背景不提供通用所有物种或牛类换算。 | ipcc-livestock-2019 |
| cable_coupling | sightseeing_land | 真实非轨道缆索采完整耦合系统方向载具负载站驱控热待命救援测试及全用户总来源能。不能从额定功率mgh负载比或净避免电量推能。绳索机构载具塔站场地控救更新及真实制造运行退役端口独立。轨道导向须实际轨道方法，不按名称作非轨道。 | eu-cableway-interfaces-2016 |
| capital_and_fates | sightseeing_land | 交付制造资产设施仅含已核实制造安装供应；饲养动物需求仅含有据饲养交付阶段。同资产全用户兼容寿命分配原生需求，不创造全寿命观光身份。未含原装更换组件电池挽具路径场地基础设施维修退役补一次。独立识别实际水油动物清洗残余及各气水土物种接收；采用真实再生处置处理，不按规定许可或假定零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sightseeing_land | 真实陆上观光体验及归属原生生命周期 | required | 真实履约参与功能，物理路线供应示例仅按真实发生 | foreground | fulfilled_sightseeing_participant |

### 过程：陆上观光体验 (`sightseeing_land`)

#### 输入

##### 产品流

###### 条件性真实柴油供应 (`motor_diesel`)

仅为供应端真实兼容有据柴油等级混合。整股加碳源账与替代物理组分互斥。供提燃洒回转质量不同；其他真实燃料独立身份，不假定都用柴油。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_motor。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_motor`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性供应无铅汽油 (`motor_gasoline`)

仅为有据制剂混合碳源端口的真实无铅车用汽油独立供应，不按汽车吉普品牌推断。整股组分互斥，供提燃洒回分；真实含铅其他制剂各自交换。 已核实通用汽油身份以质量计，明确等级制剂供应未指定；不证明无铅组成或特定供应路线，真实前景记录须证明。

- 选定流: 汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_motor。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_motor`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实输入充电交流电 (`charging_ac`)

真实兼容外部交流电于充电表计，仅含端内损失。记录实际人力电助调温辅助，内部放电再生不另供应，不由额定容量推耗。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_motor。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_motor`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实非轨道缆索驱动交流电 (`cable_drive_ac`)

真实完整耦合非轨道设施在供应边界兼容总输入交流电。按表计含真实全用户方向载具驱控站待命，不按方向再分添另一总量，不把再生作第二进口外供信用。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_cable。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cable`
- 来源: `eu-cableway-interfaces-2016`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 未覆盖游览场地支持交流电 (`support_ac`)

仅为动力充电缆索完整供应未覆盖的真实兼容支持场地音频调度用电，先计量后有据分配，不重供应已含电。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实供应游览支持自来水 (`support_tap_water`)

仅真实兼容供应自来水作支持清洗或实际供用，不是瓶装饮料河道取水或假定清洗废水蒸发；留水质状态存回去向。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性真实动物饮用自来水 (`animal_tap_water`)

仅真实兼容独立供应动物饮用自来水，按原生质量计核，区别支持清洗水。其他水源另有身份；不单由供应推摄入体存尿蒸发，不猜体密换算。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `woah-working-equids-2021`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性供应合成洗涤剂 (`detergent`)

仅真实兼容有据合成表面活性制剂。消毒肥皂溶剂盥洗及其他化学各自交换。完整清洗维修供应替代已含化学水能去向。

- 选定流: 洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_support。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性R134a供应 (`r134a_supply`)

仅真实单一R134a独供，匹配供应组成纯度原生端口，不推纯度阈值原生回用含量。初装归属一次，补充非泄漏。其他制冷混合回收物须实际身份。

- 选定流: 制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性饲养后工作马交付 (`working_horse`)

真实活马在有据年龄健康入役端口，具前期饲养覆盖原生头数兼容寿命。不是马肉马运或全寿命动物服务。移交前饲养与当前喂养照护粪尿期间不重叠，供应已含替代对应本地量。其他物种仍在范围，须自身身份生理依据，不套马科因子。

- 选定流: 进入服务移交端口饲养后活工作马
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `woah-working-equids-2021`; `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性真实草干草供应 (`horse_grass_hay`)

仅真实独供禾草干草，有植物组成状态含水CN收货原生质量。不是全部日粮或假定干物kg；真实谷矿其他饲料放牧自饲生产损失另记录身份。不用通用日粮物种换算。

- 选定流: 动物饲料交付端口禾草干草
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `woah-working-equids-2021`; `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性完整客车制造 (`motor_coach_supply`)

仅真实完整配置资产系统，具原生交付件数已核实制造安装供应端口，不是全寿命观光运输结果。原装部件电池机构土建匹配一次，再同资产全用户寿命作业分配；未覆运行更换维修退役独补。供应已含燃料直接排放其他阶段替代对应本地量。其他实际配置须原生展开，不排范围。

- 选定流: 交付制造端口完整观光客车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性完整游览汽车制造 (`motor_car_supply`)

仅真实完整配置资产系统，具原生交付件数已核实制造安装供应端口，不是全寿命观光运输结果。原装部件电池机构土建匹配一次，再同资产全用户寿命作业分配；未覆运行更换维修退役独补。供应已含燃料直接排放其他阶段替代对应本地量。其他实际配置须原生展开，不排范围。

- 选定流: 交付制造端口完整旅客游览汽车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性完整载客人力车制造 (`pedicab_supply`)

仅真实完整配置资产系统，具原生交付件数已核实制造安装供应端口，不是全寿命观光运输结果。原装部件电池机构土建匹配一次，再同资产全用户寿命作业分配；未覆运行更换维修退役独补。供应已含燃料直接排放其他阶段替代对应本地量。其他实际配置须原生展开，不排范围。

- 选定流: 交付制造端口完整载客人力车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性完整马拉载客车制造 (`horse_carriage_supply`)

仅真实完整配置资产系统，具原生交付件数已核实制造安装供应端口，不是全寿命观光运输结果。原装部件电池机构土建匹配一次，再同资产全用户寿命作业分配；未覆运行更换维修退役独补。供应已含燃料直接排放其他阶段替代对应本地量。其他实际配置须原生展开，不排范围。

- 选定流: 交付制造端口完整马拉载客车
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性完整非轨道架空索道供应 (`nonrail_cable_installation`)

仅真实完整配置资产系统，具原生交付件数已核实制造安装供应端口，不是全寿命观光运输结果。原装部件电池机构土建匹配一次，再同资产全用户寿命作业分配；未覆运行更换维修退役独补。供应已含燃料直接排放其他阶段替代对应本地量。其他实际配置须原生展开，不排范围。

- 选定流: 建设移交端口完整非轨道架空载客索道设施
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_assets。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `eu-cableway-interfaces-2016`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性外供现场解说场次 (`purchased_commentary`)

一种真实外供现场解说场次，记录时长语言质量观众原生供应覆盖。不是每位参与全部导览音频设备或整个游览。完整导游交通支持替代确切已含阶段；自身司机导览不另添购入内部场次。真实原生小时团体其他单位须独立证明兼容，不强Count等价。

- 选定流: 已完成现场陆上观光解说场次服务
- 流属性/单位: Count / Item(s)
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_providers。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_providers`
- 来源: `bigbus-dublin-product`; `centralpark-pedicab-product`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真实已履约参与观光体验 (`fulfilled_sightseeing_participant`)

恰为真实一名参与者履约所声明固定行程灵活窗口，具真实激活使用完成质量纳入。不虚构整圈条件重复登乘产出或售未用通票自动完成。窗口功能实质不同另分层；部分失败保留分子，不自动全履约。

- 选定流: 一名参与者已履约的陆上观光体验
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_participants`
- 来源: `unsd-land-sightseeing-2025`; `bigbus-dublin-product`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

##### 废物流

###### 真实独立收集废润滑油 (`spent_oil`)

处理前产生点真实独收石油基废油，保组成净量；洗水滤芯油脂处理另身份，收集不证明再生处置。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实收集车辆场地清洗废水 (`collected_washwater`)

一种真实独立收集清洗出口，处理前实测组成原生质量接收。不是供水差额或直接水排；另计回用库存蒸发油泥真实处理覆盖。其他实际物理出口各自交换。

- 选定流: 产生移交端口收集液态观光车辆清洗废水
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_waste。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性独收马粪 (`horse_faeces`)

仅真实独收马粪，有实测湿量含水CN移交端口。不是粪尿垫料或假定肥料产品处理；真实混合粪流须真实组成原生行，不重这些组成。

- 选定流: 厩舍移交端口独立收集马粪
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 条件性独存马尿 (`horse_urine`)

仅真实独立暂存马尿，有原生湿量水CN及接收，不是全部动物废水或单kgN。真实共收粪垫料径流处理须独立规定并替代对应组成一次。

- 选定流: 暂存移交端口独立收集马尿
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

##### 基本流

###### 真实二氧化碳（化石源）向空气 (`co2_fossil`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 此身份为空气未指定，仅真实书面论证时用；已知城市非城市近地面其他具体受纳须另核兼容原子身份，不能合并丢弃；接收未知阻断完成。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实甲烷 (化石源)向空气 (`ch4_fossil`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 此身份为空气未指定，仅真实书面论证时用；已知城市非城市近地面其他具体受纳须另核兼容原子身份，不能合并丢弃；接收未知阻断完成。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实一氧化二氮向空气 (`n2o`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 此身份为空气未指定，仅真实书面论证时用；已知城市非城市近地面其他具体受纳须另核兼容原子身份，不能合并丢弃；接收未知阻断完成。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实颗粒物 (PM2.5)向空气 (`pm25`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 此身份为空气未指定，仅真实书面论证时用；已知城市非城市近地面其他具体受纳须另核兼容原子身份，不能合并丢弃；接收未知阻断完成。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_emissions。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion-2006`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实HFC-134a向空气 (`r134a_air`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 此身份为空气未指定，仅真实书面论证时用；已知城市非城市近地面其他具体受纳须另核兼容原子身份，不能合并丢弃；接收未知阻断完成。 天工直读无官方中文baseName，保留HFC-134a；CAS811-97-2。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_maintenance。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `ghg-product-standard-2011`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实真实动物呼吸生物源二氧化碳向空气 (`animal_respiration_co2`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 保留真实空气介质子区室生物源；已核实生物源身份独立于化石对应UUID。 此已核身份为空气未指定；仅真实书面受纳范围论证时采用。已知城市非城市近地面其他具体子室须另核兼容原子身份，受纳未知阻断完成。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

###### 真实真实动物肠道释放生物源甲烷向空气 (`animal_enteric_ch4`)

仅未覆盖来源真实准确物质碳源粒径释放，用实测或独立有据适用物种技术燃料控制活动方法。保物种kg，不是CN或当量；不由供油饲料补充推释放。分呼吸肠道粪尿尾非尾供应范围，不套牛转其他物种或国家净CO2惯例抹实物呼吸。粒径不重叠，R134a须真实充注添回移方法，不用未解余差。 保留真实空气介质子区室生物源；已核实生物源身份独立于化石对应UUID。 此已核身份为空气未指定；仅真实书面受纳范围论证时采用。已知城市非城市近地面其他具体子室须另核兼容原子身份，受纳未知阻断完成。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 真实归属兼容原生量 / N名履约参与；cp_animal。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_animal`
- 来源: `ipcc-livestock-2019`

范围证据要求：真实原生功能量态供应来源接收及适用方法为必需，不提供通用范围。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | sightseeing_land | 先细分真实专属参与行程供应资源。已含反复乘段解说入场餐食是组成，不添最终输出。原生团体导览场次车辆服务保留真实输出，不等价体验Count。独立实际产品须真实边界经复核分配。 |  |
| physical_shared | sightseeing_land | 共用剩余按有据真实因果驱动至全产品用户同期间。真实距离时间实载暴露动物工作休息支持耦合系统记录仅在有据时用。运力票价均分假定入住非默认，人距离吨距离不可加。 | ghg-product-standard-2011 |
| unused_failure | sightseeing_land | 真实未用通票未履约空驶调位等待待命测试天气救援失败部分资源保留有据因果池。未知激活使用不猜完成。N=0保留分子待解决边界期间，无有限每参与强度。 |  |
| delivered_phase_life | sightseeing_land | 逐物理资产系统动物，归属交付阶段需求=真实交付原生量乘研究兼容作业/有据正同资产全用户寿命总作业，再除N一次。记录阶段类型制造安装或前期饲养，不是全寿命服务。寿命作业同物理队列兼容基准；动物休息支持及其他真实用途仍核算。独立补未覆盖运行照护更新退役，不用年度采购折旧工资通用头年因子。 |  |
| recovery | sightseeing_land | 真实再用产品废物处理退役整机部件外供能保持原生端口唯一责任方法。不能重复回油粪肥产品及废物供应处理。不自动避免汽车饲料肥料原生材料电网信用。 |  |

## 8. 前景数据采集、计算与质量规则

以下履约归一化资本饲养分配物理记账为PCR明确采集方法。来源仅支持第11节限定功能背景一般原则，不声称给这些具体式。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_participants | sightseeing_land | 真实参与履约 | participant_itinerary_window_ledger | 参与窗口ID；真实供应功能；非轨机构；固定灵活行程；激活使用履约；日期天圈停时质量；参与驾驶导游驭手角色；纳入供应；未用部分失败；期间 | 核对真实供给激活使用行程履约。N为声明固定路或真实灵活窗口中功能兼容实际履约参与之和；记天圈供应，不强整圈。重复登乘票运力未用通票不自动生N。未知使用未解，未履约资源留因果池。 | Item(s);persons;days;h;km | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_motor | sightseeing_land | 真实动力车辆能量 | motor_fuel_meter_duty_ledger | 车辆来源作业；等级混合化学碳源；整股组分；供存提燃洒回转；载空停等地形；辅助充电交直流储能再生外供；全用户供应 | 用真实核对油据库存来源表计作业地形。整股来源账与替代组分互斥；分供提燃洒回。排放依据真实活动而非品牌或供应量。内部发电储再生不添进口。按有据全用户驱动归属原生量，再除N一次。 | kg;kWh;nativevolume;km;h | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_cable | sightseeing_land | 真实耦合非轨道缆索作业 | coupled_nonrail_installation_ledger | 真实机构非轨证明；设施期间；全载具方向用户；总表驱控热；载空待试救天气；进出再生；组件维修供应 | 采真实完整耦合设施供应作业覆盖，分表须总边界核对。实际全方向空载待命救试其他用户仍计。不用额定功率mgh载比自动再生信用。保持组件制造维修阶段原生范围；归有据全用户份额后除N一次。 | kWh;nativeunits;h;km | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_human | sightseeing_land | 真实人力角色专用支持 | human_role_work_support_ledger | 人员角色；任务用力时间；人力电助配置；普通维生边界；专用餐饮PPE安全；已含参与餐；供应阶段不确定 | 记真实导游驾驶驭手参与角色机构。披露普通维生惯例，真实工作专用耗材支持按供应数量敏感性评估。无工资热量转燃排因子或自动动物代谢等价。匹配已含参与餐，完整供应替代范围。归真实未覆原生量，除N一次。 | h;actualnativefood/supportunits | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_animal | sightseeing_land | 真实动物饲料体存释放 | species_feed_body_fate_balance | 真实物种头龄；工休全用户；日粮态收货干物水CN；摄水体CN水存；呼吸肠道粪尿垫料混合；健康厩养；接收处理；饲养当前喂养供应期间不确定 | 以独立适用生理核对物种真实日粮采购放牧库存摄入体生长损失CN水及测模呼吸肠粪尿。保工休照护全用户期间，不套牛因子。饲料干湿残余不互换；有据闭合不编余差排放。移交前饲养供应与当前喂养照护粪尿阶段互斥。实际混粪替同组成，接收处理直接释放不同。归有据原生量除N一次。 | head;head-time;kgasreceived;kgdrymatter;kgC;kgN;specieskg | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_support | sightseeing_land | 真实已含游览支持 | guide_food_audio_site_support | 真实纳入质量；解说音频IT耳机；餐饮食谱景点入场接驳；安全无障碍PPE；原生供应；水化能存废；全用户覆盖 | 读真实供给纳入工单供应表存。各真实餐解说音设备景点接驳安全支持保持具体身份原生量覆盖。已含功能不删，费用非物理投入。完整供应与配料能废覆盖互斥。先专属后有据共享未覆原生资源；除N一次。 | nativefunctions;kWh;m3;kg;Item(s) | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_providers | sightseeing_land | 真实完整供应范围 | native_provider_replacement_matrix | 真实供应功能原生单位数量；场团时参与；时长语言观众质量；自有供应；人员交通装备能资产料废排覆盖缺口 | 核真实购入功能原生量及阶段替代矩阵。一场现场解说非一参与或完整团游；小时人距资产服务须独立确切等价，不强Count。完整结果替确切组成，自有司机导游内部服务不再购入。归未覆原生量除N一次。 | actualnativeunits;Item(s)sessions;h | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_maintenance | sightseeing_land | 真实维修制冷废油 | maintenance_charge_material_ledger | 资产工单；化学制剂纯度；初末充注添移回泄方法；润滤油净干湿；组件更换；供应处理接收 | 用真实监测充注材料平衡工存接收。补充非泄漏，未解损失非自动排放。供应回收产品收废真实释放独立。原装更换供应阶段互斥；补实际缺化学组件去向除N一次。 | kg;nativeunits | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_assets | sightseeing_land | 真实交付资产饲养动物阶段 | same_asset_delivered_phase_life | 资产动物队列配置龄；交付原生量端口阶段；前饲制造安装；原装挽具电池；研究兼容作业；正全用户寿命；工休支持预测他用；维更新退役供应 | 读同物理队列真实供饲工程身体历史作业寿命退役。归属交付阶段需求=真实原生量乘研究兼容作业/正同资产全用户完整寿命作业，再除N一次。阶段为制造安装或有据役前饲养，非全寿命服务。缺当前运行照护喂释放更换场地资本退役独补；供应已含替本地对应量。 | Item(s);nativeunits;h;km;head-time | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_waste | sightseeing_land | 真实水废物接收路径 | actual_outlet_receiver_ledger | 真实来源水流；供水存回蒸发；组成干湿量；洗水泥油垫残；回收品；处理收集直释；接收介质子室供应重叠 | 以存接收记录实测各物理出口来源。供给差不定废，各独流水去向分。实际共收混合须实测组成，不是集合UUID。处理收集回收直接物种不同端口唯一责任，未知非零。归原生量除N一次。 | m3;kgwet;specieskg;nativeunits | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |
| cp_emissions | sightseeing_land | 真实物种受纳范围 | actual_species_source_medium | 真实来源阶段；燃动化技术控制；真燃饲体活动；模型因子来源版本原生基准；物种CN当量碳源粒径接收子室供应重叠不确定 | 实测或独立有据适用物种技术燃料控制活动方法，明范围基准。物种量非CN当量，供油饲料补充不定释放。保已知接收具体性论证未指定，分不重粒径粪肠呼吸供应阶段。汇兼容真实量除N一次；缺物种来源接收阻断完成。 | kgofeachactualspecies | 逐真实事件窗口供应表计；队列核对 | 真实同队列期间同资产寿命接口 | 真实适用原生路线供应来源单元，全用户核对 | 每声明的参考流 | 真实原始记录原生身份方法接收证明覆盖校准闭合不确定 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_participants | all inventory rows | 真实兼容原生量按直接有据共享覆盖归属功能一致履约参与队列，再仅除正真实N一次。不得再除票登圈载客导团头时编另一参考。 | cp_participants;cp_motor;cp_cable;cp_human;cp_animal;cp_support;cp_providers;cp_maintenance;cp_assets;cp_waste;cp_emissions | 每1Item(s)履约参与原生量 |  |
| delivered_phase_equivalence | working_horse;motor_coach_supply;motor_car_supply;pedicab_supply;horse_carriage_supply;nonrail_cable_installation | 逐物理资产系统动物，归属交付阶段需求=真实交付原生量乘研究兼容作业/有据正同资产全用户寿命总作业，再除N一次。记录阶段类型制造安装或前期饲养，不是全寿命服务。寿命作业同物理队列兼容基准；动物休息支持及其他真实用途仍核算。独立补未覆盖运行照护更新退役，不用年度采购折旧工资通用头年因子。 | cp_assets;cp_participants;cp_animal;cp_cable | 每参考真实制造安装或前饲原生当量 |  |
| animal_physical_balance | working_horse;horse_grass_hay;animal_tap_water;horse_faeces;horse_urine;animal_respiration_co2;animal_enteric_ch4 | 真实动物物种年龄工作休息头时日粮饮水健康厩养垫料全用户须记录。前期饲养交付覆盖与当前喂养照护粪尿期间互斥：全寿命供应替代对应本地照护释放，不另添全寿命负荷。饲料CN水分体存呼吸肠道释放粪尿去向须物理闭合；库存损失余差不能编排放。马科指南畜牧背景不提供通用所有物种或牛类换算。 | cp_animal;cp_assets;cp_waste;cp_emissions | 归一前真实CN水体存物种来源去向核对 |  |
| supplemental_exposure | sightseeing_land | 真实日窗口天圈参与车距导场小时动物头时耦合作业独计。补充暴露不替履约参与N或供应原生单位。 | cp_participants;cp_motor;cp_cable;cp_human;cp_animal;cp_providers | 仅补充真实暴露 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_fulfilment | fulfilled_sightseeing_participant | 要求真实载客观光功能非轨方式、行程或真灵活窗口、激活使用履约真实日天圈质量纳入角色正兼容N。不强整圈票登乘未用通票等完成，不猜参与。功能使用未知阻断完成体验数据。 | cp_participants |
| actual_motor | motor_diesel;motor_gasoline;charging_ac | 各真实载体等级混合动力辅助交直流充外供须独立具体原生身份量技术覆盖。整股账与替组分互斥，供提燃洒回异，内部存再生不添供应。其他动力配置仍在范围须依据。 | cp_motor |
| actual_cable | cable_drive_ac;nonrail_cable_installation | 证明真观光非轨机构及完整耦合驱方向空待救试天气全用户范围。补绳机构载具站塔控救场地初更新退役原生交换来源接收量。不按缆名分类mgh载比默认功再生信用。 | cp_cable;cp_assets |
| actual_human | support_tap_water;support_ac;purchased_commentary | 记驾驶导游驭手参与角色人电助。披普通维生惯例，评真实工作专餐饮PPE安全已含参与餐供应，不用工资热量转燃料或假定真支持零。各输入须原生身份量覆盖。 | cp_human;cp_support |
| actual_animal | working_horse;horse_grass_hay;animal_tap_water;horse_faeces;horse_urine;animal_respiration_co2;animal_enteric_ch4 | 各真动物物种队列工休日粮配料态水CN体存照护厩垫来源接收须独立适用身份原生量平衡。示例马草非全物种饲料。补前饲当前喂供应互斥及真呼吸肠粪尿处理态；未知非零，不套牛因子干湿kgN捷径。 | cp_animal;cp_assets;cp_waste;cp_emissions |
| actual_support | purchased_commentary;support_tap_water;detergent;support_ac | 逐已含解说音频耳机数字IT餐饮食谱入场景点接驳安全无障碍工作支持展开具体原生服务投入。真实纳入不删，不普假。完整供应替确切人员交通装备能料废资本单元，费非活动。 | cp_support;cp_providers |
| actual_capital | motor_coach_supply;motor_car_supply;pedicab_supply;horse_carriage_supply;nonrail_cable_installation;working_horse | 分别补真实配置制造资产设施饲养动物交付阶段，具正同资产全用户完整寿命作业不确定。缺初更换电池机构挽具路场基础设施照护维退补一次。不用全寿命UUID，不重前饲当前喂制造整组件覆盖。 | cp_assets;cp_animal |
| actual_fates_species | spent_oil;collected_washwater;horse_faeces;horse_urine;co2_fossil;ch4_fossil;n2o;pm25;r134a_air;animal_respiration_co2;animal_enteric_ch4 | 各废水粪尿垫混滤泥退役整组件餐包化学物种粒径接收须分具体原生态量来源接收处理责任。真混实测，不并无关废。保干湿CN物种已知受纳，未知非零非自动未指空气。 | cp_animal;cp_waste;cp_maintenance;cp_emissions;cp_assets |
| atomic_completion | all inventory rows | 每实际展开具唯一row_id一个真过程方向类型已核UUID或登记未解、原生属性单位真量来源供应接收端口、同父有效CP并联触发requirement_id。真未用供应已含须肯定证据。缺身份量覆盖去向阻断完整下游，不猜范围或可选删除。 | all declared collection protocols |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_and_window | sightseeing_land | 一个CountItem(s)为声明行程窗口使用履约质量纳入正兼容N下一真履约观光参与。不强整圈票登运力未用通票等价。 |  |
| real_mode_scope | sightseeing_land | 真陆上非轨观光保动力人动物非轨缆原生分支，非仅巴士或按名。缺量UUID来源属就绪不暗排产品。独导预订可用性轨水航普通交通不改名。 |  |
| closure_and_ownership | sightseeing_land | 整组分供存燃洒回内部能外供供应自有阶段动物饲体水CN呼吸粪尿及水废制冷物种接收核对不重不编余差不猜因子。 |  |
| lifetime_and_native | sightseeing_land | 制造安装前饲为真交付阶段，不是全寿命服务。同资产全用户寿命研究作业匹配，缺当期用护更新退役补一次。原生导览场团时头时人距与最终参与参考不同。 |  |
| unused_and_failure | sightseeing_land | 未用未履空调等休护待试救天气部分败资源留有据全用户池。N=0无有限强度。参与导驾驭动物人助配置真实，无运力成人等价默认。 |  |
| atomic_projection | sightseeing_land | 每CPprocess_id恰一真实processInventory.id，卡CP在同父。双语有序ID原生单位模式UUID来源规则指纹匹配。缺真身份量来源去向阻完整，检查非身份核实可发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 仅必需真实原生身份量覆盖去向功能复核完成后作secondary_dataset或background_dataset |
| allowed_use | 真实陆上非轨观光参与行程窗口，声明真实使用质量纳入原生方式生命周期 |
| excluded_use | 通用交通票登可用性整圈因子；轨水航纯导租改名；动物缆餐导供应原生去向未建模缺口 |
| required_metadata | 真实供应观光功能及供应责任；非轨道陆上方式机构；固定行程或真实灵活参与服务窗口；激活使用履约标准；真实日期天数圈次停靠时长质量；真实参与驾驶导游驭手动物角色；已含解说音频餐饮景点接驳；原生载体车辆动物物种配置接收端口；队列期间供应阶段覆盖；未用空驶待命失败作业；同资产全用户寿命；真实化学干湿CN来源接收去向 |
| required_quality_disclosure | 真实激活使用履约不确定分层方式角色供应矩阵原生量；动物生理前饲当前喂全用户寿命；未用失败池来源接收去向分配局限 |
| update_trigger | 真实功能窗口使用路日圈质纳入方式供应动物物种机构来源去向寿命履约方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-land-sightseeing-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,p36164132 and neighbouring modes;p46085961/85962. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅真陆上非轨观光载客功能巴士示例及独导安排背景，不规定计数完成公式。 |
| bigbus-dublin-product | handbook | Big Bus Tours,Dublin Help and FAQs,actual full official product content read2026-10-21. https://www.bigbustours.com/en/dublin//help | 特定运营者灵活反登解说激活日期纳入私租区别，非普适整圈餐时长载客因子规则。 |
| pinkjeep-scenic-product | handbook | Pink Adventure Tours,Broken Arrow,actual full official product content read2026-10-21. https://www.pinkadventuretours.com/sedona-tours/broken-arrow | 真实导览景观越野车停靠变取消作业示路线采集；不取价容时粗糙排因子。 |
| nps-cades-cove-rides | official_guidance | US National Park Service,Cades Cove Riding Stables,actual page read2026-10-21. https://www.nps.gov/places/cades-cove-riding-stables.htm | 仅真马马车干草车路线示例，无默认动物生理日粮寿命载客所有物种因子。 |
| centralpark-pedicab-product | handbook | CentralPark.org,Tours,actual provider/visitor product page read2026-10-21. https://centralpark.org/divi_mega_pro/tours/ | 人力车解说游与独立租车示功能角色复核，非官方园当局，也不证无电助数值因子运力。 |
| woah-working-equids-2021 | official_guidance | WOAH Terrestrial Animal Health Code,Chapter7.12 Welfare of working equids,actual PDFedition19July2021,Articles7.12.2 and7.12.6–13. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/chapitre_aw_working_equids.pdf | 定性马科护饲水休负荷背景，非全球最新版合规认证数值食谱寿命通用动物因子。 |
| ipcc-livestock-2019 | official_guidance | IPCC2019Refinement,Vol4Ch10Livestock and Manure Management,§10.1–10.5. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 仅物种饲料肠粪CN区别，不用牛默认头年日粮因子或国家净CO2惯例删物理呼吸。 |
| eu-cableway-interfaces-2016 | standard | EU2016/424 as adopted9March2016,AnnexI andAnnexII technical interfaces. https://www.legislation.gov.uk/eur/2016/424/annexes/adopted?view=plain | 仅历史缆索部驱待救接口，非当前域外法律自动观光分类或能寿因子。 |
| ipcc-mobile-combustion-2006 | official_guidance | IPCC2006Guidelines,Vol2Ch3MobileCombustion,§3.2. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 燃料活动技术控制碳源背景，不搬通用道路因子国家切断至完整游览生命周期。 |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011,Ch6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般功能边界数据细分有据物理分配；扩资本饲养人力边界履约作业式是PCR方法非规定因子。 |
