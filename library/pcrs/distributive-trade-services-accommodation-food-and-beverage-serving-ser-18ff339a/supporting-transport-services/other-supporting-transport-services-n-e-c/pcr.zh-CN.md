---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-transport-services-n-e-c
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 未另分类的其他运输支持服务

## 1. 范围与适用性

本已审较窄方法仅覆盖运输用途天然气液化及再气化，排除剩余类别中的航空器机型签注及GPS/无线电导航定位服务和其他未审功能，不作为跨产业通用公用工程服务PCR。液化与再气化分别采用必需路线/状态情景，不假定一条路线的一kg与另一条路线一kg功能可互换。[来源：`un-cpc-transport-phase`]

排除天然气开采生产及单独供应上游处理、独立运输、货物装卸、独立仓储（67220）、配气零售及下游客户燃烧。仅纳入服务入口约定内真实调质、泵、压缩、制冷气化、必要过程缓冲周转、BOG管理、能源维护及可归属选定调相的资产；按合同及设施接口界定重叠，不因同一站址而合并。

| 路线 | 实际验收转换 | 必需物理范围 |
| --- | --- | --- |
| liquefaction | 声明气态入口至定义出口的合格净LNG | 真实来料调质压力组成、制冷循环组分、压缩负荷、冷端状态质量、BOG回收及净交付，不设密度、体积缩减或比能耗默认值。 |
| regasification | 声明LNG入口至定义出口的合格净气态送出 | 真实入口组成状态、ORV/SCV/空气/中间介质或其他实证气化器、泵送出压力、热源、再冷凝BOG及净交付质量；技术条件分开。 |

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-transport-services-n-e-c |
| classification_refs | CPC 3.0 67990; narrower |
| covered_products | 按实际合格净交付质量的运输用天然气液化或再气化服务 |
| excluded_products | 机型签注、GPS无线电导航、其他未审剩余功能、气体商品生产、独立仓储运输及客户终端使用 |
| representative_product | 指定组成温度压力下实际合格净气态送出1kg对应的再气化服务 |
| production_route | 声明单一路线入口 → 执行真实调质及调相 → 管理真实能源BOG损失缓冲 → 核验合格净出口 |
| market_state | 针对客户保管气体完成的服务；上游商品负荷属于完整燃气链并另行连接 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供选定运输用途天然气调相服务 |
| How much | 声明出口相态状态下实际合格净交付气体1kg对应服务，剔除内部回路、燃料、损失及不合格库存 |
| How well | 匹配保管接口的真实声明组成温度压力及质量验收，具有组成及质量平衡 |
| How long or cycle | 真实生产交付观测期间，含可归属启停停机、必要缓冲及库存修正 |
| reference_flow_link | `service_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 运输用天然气调相服务，合格净质量基准 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 运输用途；液化或再气化；真实场址日期路线供应商；进出口保管端点；来料及交付组成含甲烷高碳烃CO2氮水及相关污染物；真实进出口相态温度压力和质量验收；合格净交付kg及观测期间；真实进料库存变化过程缓冲时长内部回路转燃料回收外送BOG及每项损失去向；压缩制冷循环或ORV/SCV/空气/中间介质气化器及能源来源；陆上浮式资产范围；能源来源温度压力；实际取退水温度化学地点；逐种化学品冷剂；排放逸散火炬效率证据；副产品供应商重叠；真实全寿命输出分母及不确定性 |

数据包须声明全部限定。kg属性计本服务的气体质量基准，不把电、热、水、设备数量或废物改为服务kg。客户进料交付气为保管平衡，不是重复生产负荷的新产气体输入输出；此纯服务处理不使完整燃气链的上游产气、耗气或损失为零，须在负责燃气链边界连接这些上游负荷及损失补料一次。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用cp_mass计本服务对应真实合格净出口质量；参考输出准确1kg，路线组成状态质量必需且不互换。 |
| gas_conversion | service_output; liq_fuelgas; regas_fuelgas | 质量 | kg | 质量体积换算须真实组成压力温度及核验密度或计量状态方程，明确标准体积基准条件，不设通用LNG密度或膨胀比。 |
| thermal_energy | liq_steam; regas_steam; regas_heat | 能量 | MJ | 按真实净交付焓及供回状态和供应商损耗边界，不仅按水量推热，不混同电能及燃料能量。 |
| component_mass | ref_methane; ref_ethane; ref_propane; ref_ethylene; ref_nitrogen; amine; hypochlorite | 质量 | kg | 真实化学组分质量与总混合冷剂或水溶液分开，记录核验组成及库存回收，VOC/PFAS/冷剂集合选择器不是原子交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 协议调相入口的真实客户气体/LNG，具有实测组成状态及保管所有权 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅运输用天然气液化或再气化 |
| recursive_input_rule | 外购同功能调相以兼容路线状态输出基准及供应商覆盖计一次，剔除重叠自有能源资产 |
| upstream_dataset_requirement | 真实外耗能源材料冷剂、过程资产更新及真实处理；客户商品保管及内部BOG另追踪 |
| disclosure | 运输用途；液化或再气化；真实场址日期路线供应商；进出口保管端点；来料及交付组成含甲烷高碳烃CO2氮水及相关污染物；真实进出口相态温度压力和质量验收；合格净交付kg及观测期间；真实进料库存变化过程缓冲时长内部回路转燃料回收外送BOG及每项损失去向；压缩制冷循环或ORV/SCV/空气/中间介质气化器及能源来源；陆上浮式资产范围；能源来源温度压力；实际取退水温度化学地点；逐种化学品冷剂；排放逸散火炬效率证据；副产品供应商重叠；真实全寿命输出分母及不确定性 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_route | 选择一条真实液化或再气化路线及明确物理状态；IFC描述更广LNG链，本方法仅含适用真实调相过程及必要调质，独立运输仓储装卸及上游产气另定范围。 | un-cpc-transport-phase; ifc-lng-2017 |
| boundary_bog | 按组成及去向核对真实BOG产生、返回再冷凝再液化、内用燃料、外返销售、库存变化、放空火炬及逸散，内部转移不是新外购或重复合格输出；气体虽客户所有，燃料消耗及排放仍计负责服务阶段。 | ifc-lng-2017 |
| boundary_heat_water | 识别真实压缩冷剂循环或ORV/SCV/空气中间介质气化器及热源，电燃料蒸汽外购热分别计；实测源特定取退水量地点温度热变化及残余化学，不设默认温度限值或因环境供热声称零影响。 | ifc-lng-2017 |
| boundary_emissions | 真实燃烧、火炬不完全氧化未燃尽、放空、逸散、来料分离污染物及冷剂损失按单一物种介质计；不假定火炬完全破坏、不把总气体当甲烷、不混总氮氧化物物种或用VOC集合交换。 | ifc-lng-2017 |
| boundary_assets | 保留建设制造、必要过程缓冲资产、维护更换及真实废物接收并有寿命利用证据，独立销售仓储、运输船推进及客户燃气链资产不变成过程调相资产。 |  |

## 6. 过程清单结构

准确选一个路线过程，再接真实适用共用管理及完成；初始卡为条件真实交换，不是强制配方。其他真实燃料冷却介质吸附剂废物副输出或化学排放逐项设具体行。保管进料BOG及合格交付在cp_mass核对，内部回路不是另一参考输出。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| liquefaction | 天然气液化 | conditional | 所选路线或真实适用共用过程，不重复两路线 | foreground | 每合格净交付气体1kg对应服务 |
| regasification | 天然气再气化 | conditional | 所选路线或真实适用共用过程，不重复两路线 | foreground | 每合格净交付气体1kg对应服务 |
| management | 真实公用工程BOG维护及排放管理 | conditional | 所选路线或真实适用共用过程，不重复两路线 | foreground | 每合格净交付气体1kg对应服务 |
| completion | 合格净调相服务交付 | required | 唯一服务输出 | foreground | 每合格净交付气体1kg对应服务 |

### 过程：天然气液化 (`liquefaction`)

#### 输入

##### 产品流

###### 天然气液化用户端电力 (`liq_power`)

实际液化路线使用电网/外供电时纳入，记录压缩、制冷、来料调质、泵及控制真实终端和损耗；剔除已由现场燃料发电表示的电力。

- 选定流：天然气液化用户端电力
- 流属性/单位：能量 / kWh
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_liquefaction`

###### 外购液化燃料天然气 (`liq_fuelgas`)

实际外购并由服务运营方燃烧的天然气时纳入；识别组成、燃料计量、压缩机/涡轮/锅炉负荷及热值基准。内部BOG及转作燃料的客户来料另列保管转消耗账，不能再次作为外购。

- 选定流：外购液化燃料天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_liquefaction`

###### 外购液化过程供热蒸汽 (`liq_steam`)

实际外供蒸汽用于来料调质/再生或过程供热时纳入；记录供回压力、温度、焓及凝结水范围，不与外购热水或现场锅炉燃料合并。

- 选定流：外购液化过程供热蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_liquefaction`

###### 制冷剂补充甲烷 (`ref_methane`)

声明制冷回路实际含该组分时纳入；计量可归属初充、真实补充、回收及库存变化，内部循环冷剂不是新消耗；混合冷剂按每个核验组分拆分，其他真实组分各自设行。

- 选定流：制冷剂补充甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

###### 制冷剂补充乙烷 (`ref_ethane`)

声明制冷回路实际含该组分时纳入；计量可归属初充、真实补充、回收及库存变化，内部循环冷剂不是新消耗；混合冷剂按每个核验组分拆分，其他真实组分各自设行。

- 选定流：制冷剂补充乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

###### 制冷剂补充丙烷 (`ref_propane`)

声明制冷回路实际含该组分时纳入；计量可归属初充、真实补充、回收及库存变化，内部循环冷剂不是新消耗；混合冷剂按每个核验组分拆分，其他真实组分各自设行。

- 选定流：制冷剂补充丙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

###### 制冷剂补充乙烯 (`ref_ethylene`)

声明制冷回路实际含该组分时纳入；计量可归属初充、真实补充、回收及库存变化，内部循环冷剂不是新消耗；混合冷剂按每个核验组分拆分，其他真实组分各自设行。

- 选定流：制冷剂补充乙烯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

###### 制冷剂补充氮气 (`ref_nitrogen`)

声明制冷回路实际含该组分时纳入；计量可归属初充、真实补充、回收及库存变化，内部循环冷剂不是新消耗；混合冷剂按每个核验组分拆分，其他真实组分各自设行。

- 选定流：制冷剂补充氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

###### 气体调质补充甲基二乙醇胺 (`amine`)

协议液化服务入口边界内确需实际MDEA脱酸时纳入；记录溶液组成及活性MDEA质量，水及其他配方组分另计；单独供应上游气体处理不重复。

- 选定流：气体调质补充甲基二乙醇胺
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_liquefaction`

###### 3A沸石分子筛 (`sieve`)

实际指定脱水介质时纳入，计量真实供应/更换及再生能源，并有服务寿命分配证据；其他分子筛等级或调质路线须另设真实材料行。

- 选定流：3A沸石分子筛
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_liquefaction`

###### 除汞用浸硫活性炭 (`mercury_carbon`)

实际来料污染物证据及该明确去除介质适用时纳入；计真实更换份额及再生处理范围，不假定所有来料均需除汞。

- 选定流：除汞用浸硫活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_liquefaction`

###### 已确定配置的天然气液化装置 (`liq_train`)

识别实际压缩/制冷/调质配置、建设制造、维护及更新，并用有证据全寿命合格输出分母，不仅用铭牌能力；不向每kg分整套装置。

- 选定流：已确定配置的天然气液化装置
- 流属性/单位：物品数量 / Item(s)
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_liquefaction`

### 过程：天然气再气化 (`regasification`)

#### 输入

##### 产品流

###### 天然气再气化用户端电力 (`regas_power`)

实际泵、压缩、再冷凝器、气化器辅机及控制时纳入；计量真实送出压力及ORV/SCV/空气/中间介质路线，不因环境供热推定零电耗。

- 选定流：天然气再气化用户端电力
- 流属性/单位：能量 / kWh
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_regasification`

###### 外购再气化燃料天然气 (`regas_fuelgas`)

实际外供燃料气燃烧时纳入，包括真实SCV或辅锅炉；内部送出气/BOG燃料按来源另计，不能重复购气，记录实际来源组成及燃烧。

- 选定流：外购再气化燃料天然气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_regasification`

###### 外购再气化供热蒸汽 (`regas_steam`)

实际外购蒸汽供热时纳入；保持供回焓及凝结水边界，真实蒸汽区别于外购热水供热、环境取水及内部SCV燃烧。

- 选定流：外购再气化供热蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_regasification`

###### 外购热水再气化供热 (`regas_heat`)

实际外部热水供热交付时纳入；以供应商范围计进出温度、质量流量及净焓，废热标签不建立零负荷或避免热量收益。

- 选定流：外购热水再气化供热
- 流属性/单位：能量 / MJ
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_regasification`

###### 已确定配置的天然气再气化装置 (`regas_train`)

识别真实ORV/SCV/空气/壳管或中间介质配置、泵/再冷凝器及陆上浮式装置范围；用有证据全寿命利用，海上服务资产不作为新客户运输船。

- 选定流：已确定配置的天然气再气化装置
- 流属性/单位：物品数量 / Item(s)
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_regasification`

##### 基本流

###### 再气化海洋取水 (`regas_seawater`)

真实ORV/沿海直接海水取水时纳入，计准确取水、地点、盐度、温度、泵送及加药；外购处理水为不同产品输入，不向内陆/空气/SCV路线强设通用海水取水。

- 选定流：再气化海洋取水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water_regasification`

###### 再气化河流取水 (`regas_riverwater`)

实际直接河流淡水取水时纳入，保留源特定温度、化学、季节流量及退水地点，与海水或地下水分开。

- 选定流：再气化河流取水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water_regasification`

#### 输出

##### 基本流

###### 再气化海洋退水 (`regas_sea_return`)

真实排回海洋时纳入；计真实水量、来源接收、温度热变化、盐度及残余化学物，化学物须逐种排放行，热影响须适用场址方法，水量不能单独代表。

- 选定流：再气化海洋退水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water_regasification`

###### 再气化河流退水 (`regas_river_return`)

实际退至明确淡水河流时纳入；保留接收、温度及组成，不替为海洋退水，不假定全部取水原样退回。

- 选定流：再气化河流退水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water_regasification`

### 过程：真实公用工程BOG维护及排放管理 (`management`)

#### 输入

##### 产品流

###### LNG过程公用工程供应水 (`process_water`)

实际外购过程/锅炉补水/设备洗涤/卫生用水时纳入，明确来源、处理及终端；其他来源产品各自设行，闭环循环不是新取水。

- 选定流：LNG过程公用工程供应水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water_management`

###### 水处理活性次氯酸钠 (`hypochlorite`)

实际使用该水处理化学品时纳入；计活性物、溶液浓度及单独供应稀释水，反应/残余产物逐项记录，不把投入原样当排放。

- 选定流：水处理活性次氯酸钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_management`

###### 过程吹扫用压缩氮气 (`nitrogen_purge`)

实际过程/惰化气体使用时纳入，记录压力及交付质量，区分已计制冷回路氮气、内部回用及真实放空组成。

- 选定流：过程吹扫用压缩氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_management`

###### 矿物压缩机润滑油 (`lubricant`)

真实压缩机油等级及维护适用时纳入，按维护间隔及可归属路线输出计消耗更换，不向每kg分全量油充注。

- 选定流：矿物压缩机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chemical_management`

###### 已确定配置的过程缓冲LNG罐 (`buffer_tank`)

仅声明调相过程真实必要缓冲周转时纳入；固定保管接口、库存时长及全寿命建设维护份额，独立仓储服务及其资产BOG另定范围，不重复。

- 选定流：已确定配置的过程缓冲LNG罐
- 流属性/单位：物品数量 / Item(s)
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assets_management`

#### 输出

##### 废物流

###### 废甲基二乙醇胺水溶液 (`spent_amine`)

实际分离废溶液时纳入，测量水/胺/污染物组成；追踪真实处理再生，核对活性输入与废溶液基准。

- 选定流：废甲基二乙醇胺水溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废3A沸石分子筛 (`spent_sieve`)

实际卸出介质时纳入，测量真实质量吸附物并追踪再生处置，不逐运行日新设全量废物。

- 选定流：废3A沸石分子筛
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废载汞浸硫活性炭 (`spent_carbon`)

实际除汞介质及实测载量时纳入，追踪围控及真实接收，不假定无汞处理或完全破坏。

- 选定流：废载汞浸硫活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废矿物压缩机润滑油 (`used_oil`)

实际移除分离废油时纳入，计真实质量及接收处理，不自动计回收收益。

- 选定流：废矿物压缩机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 已收集含油LNG过程废水 (`oily_water`)

真实封闭排水/过程含油水时纳入，记录组成及真实处理端点；若有生活污水及水压测试废水分别设真实流，不合并全部废水。

- 选定流：已收集含油LNG过程废水
- 流属性/单位：体积 / m3
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

##### 基本流

###### 排入空气的甲烷 (`methane`)

实际真实逸散、放空、火炬未燃尽或制冷甲烷排放，各源分别记录时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的乙烷 (`ethane`)

实际真实气体/冷剂乙烷排放，分别保留来源去向时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的丙烷 (`propane`)

实际真实气体/冷剂丙烷排放，分别保留来源去向时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的丙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的乙烯 (`ethylene`)

实际真实制冷剂乙烯排放时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的乙烯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的化石二氧化碳 (`co2`)

实际真实燃烧/火炬或来料分离CO2排放，区分来料原有CO2及燃烧生成CO2时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的一氧化碳 (`co`)

实际真实不完全燃烧CO排放时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的一氧化氮 (`no`)

实际真实燃烧NO排放，明确总氮氧化物当量分物种惯例时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的二氧化氮 (`no2`)

实际真实燃烧NO2排放，不重复总氮氧化物时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的二氧化硫 (`so2`)

实际真实含硫燃料/酸气燃烧并有核验硫平衡时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

###### 排入空气的硫化氢 (`h2s`)

实际真实分离酸气或逸散H2S排放，不向甜气强设时纳入。以实测或独立核验源特定方法，在真实空气接收端量化所列物种；不用通用VOC/气体集合，其他真实物种各自设行。

- 选定流：排入空气的硫化氢
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：为声明调相服务实测可归属交换
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`

### 过程：合格净调相服务交付 (`completion`)

#### 输出

##### 产品流

###### 运输用天然气调相服务，合格净质量基准 (`service_output`)

以声明调相后状态实际净交付合格气体一kg表示对应调相服务；选择液化或再气化，服务输出不是新制造客户天然气。

- 选定流：运输用天然气调相服务，合格净质量基准
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`

## 7. 分配与副产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_route | 直接计量各真实路线及合格输出，共用压缩BOG能源以有记录物理负荷、净焓、实测运行或因果处理量分配，核对真实启停及库存；不平均液气路线kg、铭牌能力或费用。 |  |
| allocate_custody | 客户保管气及内部燃料BOG与外购燃料分开，真实耗用客户气产生真实来源排放及燃气链补料责任，不是在此零排放或重复产气输入；完整链作者连接商品生产损失一次。 |  |
| allocate_recovery | 返回再液化再冷凝BOG为一次内部平衡，路线出口合格气仅计一次；以其他状态外送气若为副服务须另报功能负荷分配，不默加分母或计避免产品收益。 |  |
| allocate_coproduct | 真实集成调质若有回收NGL硫或其他副输出，先拆真实功能过程计量，不能拆时记录因果物理分配并核对质量能量；逐项增加明确副输出，不自动计冷热BOG利用收益。 |  |
| allocate_life | 按有证据全寿命真实合格服务利用分实际资产制造建设及独立维护更新；预期路线输出须有能力利用停机收率退化寿命证据，跨用户期间份额守恒不逐年重置；不虚设寿命或向每kg分整设施。 |  |
| allocate_supplier | 求和前核对能源装置BOG仓储供应商覆盖及自有行；浮式再气化装置建设可归属，但运输航程或独立仓储另定范围；过程缓冲按真实库存时长计一次，不能另售后又作为未报免费仓储。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | completion | service_output | 按组成分解的保管调相账 | 运输用途；液化或再气化；真实场址日期路线供应商；进出口保管端点；来料及交付组成含甲烷高碳烃CO2氮水及相关污染物；真实进出口相态温度压力和质量验收；合格净交付kg及观测期间；真实进料库存变化过程缓冲时长内部回路转燃料回收外送BOG及每项损失去向；压缩制冷循环或ORV/SCV/空气/中间介质气化器及能源来源；陆上浮式资产范围；能源来源温度压力；实际取退水温度化学地点；逐种化学品冷剂；排放逸散火炬效率证据；副产品供应商重叠；真实全寿命输出分母及不确定性；共同源记录及保管转移编号 | 以校准进出口质量计量或有真实组成温度压力及密度状态方程证据的体积换算；将客户进料、真实外部气及期初库存与合格交付、期末库存、转燃料、另行外送气副输出和逐项放空火炬逸散损失核对；内部BOG返回再冷凝及冷剂回路作为内部转移抵消，不作新采购生产。仅计实际合格净出口，修正不合格返工退回料，不重复计循环处理；保留组分碳平衡、实际缓冲保管时长及不确定性。 由completion负责覆盖所选路线及management的唯一保管/组分总账；各过程源记录按共同记录/转移编号与cp_mass核对一次，此总账不新增management产出或另一服务分母。 | kg | 连续批次计量及每保管期 | 完整真实调相交付期含启停库存变化 | 真实所选进出口缓冲端点 | 每参考流 | 校准质量质量验收计量；气分析；库存燃料BOG记录；组分平衡 |
| cp_energy_liquefaction | liquefaction | liq_power; liq_fuelgas; liq_steam | 真实来源终端能源账 | 路线技术；真实计量起止；外部燃料组成kg热值基准；内用客户BOG燃料另列；kWh/MJ；供回状态焓；压缩泵气化器负荷；启停；供应商范围；真实合格出口质量；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 真实外部电、每种外燃料、蒸汽热量分别计量；将源特定内燃料燃烧与cp_mass核对且不重复采购，真实发电效率损耗仅计一次；计真实热供回焓、实际处理量及全部可归属阶段，不设比能耗或SCV/ORV默认。 本协议仅适用于所列liquefaction过程交换；共享记录按validate_protocol_partition核对。 | kWh; kg; MJ | 每计量阶段及核对观测期 | 全部真实路线能源及可归属停机 | 真实压缩制冷气化器及供应 | 每参考流 | 计量；真实燃料BOG库存平衡；状态数据；供应商重叠；分配 |
| cp_energy_regasification | regasification | regas_power; regas_fuelgas; regas_steam; regas_heat | 真实来源终端能源账 | 路线技术；真实计量起止；外部燃料组成kg热值基准；内用客户BOG燃料另列；kWh/MJ；供回状态焓；压缩泵气化器负荷；启停；供应商范围；真实合格出口质量；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 真实外部电、每种外燃料、蒸汽热量分别计量；将源特定内燃料燃烧与cp_mass核对且不重复采购，真实发电效率损耗仅计一次；计真实热供回焓、实际处理量及全部可归属阶段，不设比能耗或SCV/ORV默认。 本协议仅适用于所列regasification过程交换；共享记录按validate_protocol_partition核对。 | kWh; kg; MJ | 每计量阶段及核对观测期 | 全部真实路线能源及可归属停机 | 真实压缩制冷气化器及供应 | 每参考流 | 计量；真实燃料BOG库存平衡；状态数据；供应商重叠；分配 |
| cp_refrigerant | liquefaction | ref_methane; ref_ethane; ref_propane; ref_ethylene; ref_nitrogen | 回路组分冷剂账 | 真实循环回路；每种化学组成；初充寿命份额；补充回收期初期末库存kg；泄漏放空来源接收；真实路线输出 | 将真实混合阶式冷剂分解具体化学组分，以库存回收平衡计外供净补充，循环质量非消耗；按有证据真实寿命利用分初充更换，不重复供应商库存；量化每种真实化学损失接收，其他冷剂另设路线特定行。 | kg | 每补充回收及核对期 | 完整真实回路运行维护间隔 | 真实化学回路供应商 | 每参考流 | 组分证书；充回记录；库存；泄漏证据 |
| cp_chemical_liquefaction | liquefaction | amine; sieve; mercury_carbon | 具体化学品介质账 | 路线终端；准确化学品配方等级；实测kg活性比例；另计水；更换再生；捕集杂质；吹扫压力；供应商范围；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 计每项真实化学品介质，区分活性物溶剂及混合产品组分且不重复供应；连接真实污染物任务证据及真实更换间隔，不设强制配方；再生能源、移除污染物及废物排放另追踪。 本协议仅适用于所列liquefaction过程交换；共享记录按validate_protocol_partition核对。 | kg | 每真实领用更换再生间隔 | 真实期间及有证据更换份额 | 真实过程供应商端点 | 每参考流 | 采购库存配方记录；真实质量平衡；维护 |
| cp_chemical_management | management | hypochlorite; nitrogen_purge; lubricant | 具体化学品介质账 | 路线终端；准确化学品配方等级；实测kg活性比例；另计水；更换再生；捕集杂质；吹扫压力；供应商范围；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 计每项真实化学品介质，区分活性物溶剂及混合产品组分且不重复供应；连接真实污染物任务证据及真实更换间隔，不设强制配方；再生能源、移除污染物及废物排放另追踪。 本协议仅适用于所列management过程交换；共享记录按validate_protocol_partition核对。 | kg | 每真实领用更换再生间隔 | 真实期间及有证据更换份额 | 真实过程供应商端点 | 每参考流 | 采购库存配方记录；真实质量平衡；维护 |
| cp_water_regasification | regasification | regas_seawater; regas_riverwater; regas_sea_return; regas_river_return | 来源接收特定水热账 | 源水体产品；真实体积流量；进出温度压力盐度；季节地点；冷却加热负荷；蒸发滞留退水；杀生剂残余反应产物；真实接收处理；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 真实来源产品与循环水分别计，匹配真实退水消耗；记录实测热变化热通量及当地接收条件，不用通用温度限值；化学残余须各自物种介质及真实处理，不以水量代替；真实海水河流地下水其他源不互换。 本协议仅适用于所列regasification过程交换；共享记录按validate_protocol_partition核对。 | m3 | 连续代表真实取退水期 | 完整适用路线及真实季节接收背景 | 真实来源接收方 | 每参考流 | 流量计；温度化学样；季节接收证据；水平衡 |
| cp_water_management | management | process_water | 来源接收特定水热账 | 源水体产品；真实体积流量；进出温度压力盐度；季节地点；冷却加热负荷；蒸发滞留退水；杀生剂残余反应产物；真实接收处理；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 真实来源产品与循环水分别计，匹配真实退水消耗；记录实测热变化热通量及当地接收条件，不用通用温度限值；化学残余须各自物种介质及真实处理，不以水量代替；真实海水河流地下水其他源不互换。 本协议仅适用于所列management过程交换；共享记录按validate_protocol_partition核对。 | m3 | 连续代表真实取退水期 | 完整适用路线及真实季节接收背景 | 真实来源接收方 | 每参考流 | 流量计；温度化学样；季节接收证据；水平衡 |
| cp_assets_liquefaction | liquefaction | liq_train | 全寿命过程资产账 | 配置物料表建设；装置缓冲范围；所有权供应商；制造维护更新；有证据年数真实处理利用收率停机；寿命合格出口kg；累计分配；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 识别真实过程资产及有证据全寿命合格输出，区分单一路线状态及独立仓储运输资产；分可归属建设制造及独立维护更新，守恒累计用户期间份额；铭牌处理量乘任意寿命不是证据，未知分母明确待审。 本协议仅适用于所列liquefaction过程交换；共享记录按validate_protocol_partition核对。 | Item(s) | 每分配及配置更新变化 | 有证据全寿命及真实观测服务期 | 真实调相装置缓冲及供应商 | 每参考流 | 建设物料表；真实利用收率；寿命证据；累计份额 |
| cp_assets_regasification | regasification | regas_train | 全寿命过程资产账 | 配置物料表建设；装置缓冲范围；所有权供应商；制造维护更新；有证据年数真实处理利用收率停机；寿命合格出口kg；累计分配；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 识别真实过程资产及有证据全寿命合格输出，区分单一路线状态及独立仓储运输资产；分可归属建设制造及独立维护更新，守恒累计用户期间份额；铭牌处理量乘任意寿命不是证据，未知分母明确待审。 本协议仅适用于所列regasification过程交换；共享记录按validate_protocol_partition核对。 | Item(s) | 每分配及配置更新变化 | 有证据全寿命及真实观测服务期 | 真实调相装置缓冲及供应商 | 每参考流 | 建设物料表；真实利用收率；寿命证据；累计份额 |
| cp_assets_management | management | buffer_tank | 全寿命过程资产账 | 配置物料表建设；装置缓冲范围；所有权供应商；制造维护更新；有证据年数真实处理利用收率停机；寿命合格出口kg；累计分配；source_record_id；exchange_id；process_id；归属驱动因素；已分配份额；报告期 | 识别真实过程资产及有证据全寿命合格输出，区分单一路线状态及独立仓储运输资产；分可归属建设制造及独立维护更新，守恒累计用户期间份额；铭牌处理量乘任意寿命不是证据，未知分母明确待审。 本协议仅适用于所列management过程交换；共享记录按validate_protocol_partition核对。 | Item(s) | 每分配及配置更新变化 | 有证据全寿命及真实观测服务期 | 真实调相装置缓冲及供应商 | 每参考流 | 建设物料表；真实利用收率；寿命证据；累计份额 |
| cp_waste | management | spent_amine; spent_sieve; spent_carbon; used_oil; oily_water | 具体废物接收账 | 单一流；真实kg/m3；溶液吸附物汞油组成；来源路线；真实转移处理再生处置；供应商覆盖 | 称量计量每种真实流，按真实组分基准追踪最终接收处理，不预设无害破坏回收或避免负荷；废介质与移除污染物排放分开，其他真实具体流各自增加。 | kg; m3 | 每真实废物转移期间 | 全部可归属真实废物 | 真实来源及接收处理端点 | 每参考流 | 转移单；真实分析；再生处置范围；平衡 |
| cp_release | management | methane; ethane; propane; ethylene; co2; co; no; no2; so2; h2s | 来源组分分解气体去向账 | 路线来源；真实气体组成质量；燃烧燃料火炬效率氧化；放空逸散冷剂泄漏；单一物种kg接收；移除酸气路线；真实监测因子分物种；碳硫平衡 | 实测分物种真实来源流，并与cp_mass及冷剂化学平衡核对；用独立核验组成效率方法计算真实源燃烧火炬排放，报告未燃甲烷及其他物种而不假定完全破坏；来料原有CO2与氧化CO2分开，NO/NO2若源于总氮氧化物当量须有分物种文件且不重复总量；其他真实化学物接收各自增加，缺失排放证据非零。 | kg | 每来源作业扰动及代表监测 | 真实期全部代表正常扰动来源 | 真实来源介质 | 每参考流 | 计量泄漏实测；真实组成；核验方法；气碳硫平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_attribution | 所有清单行 | 真实可归属交换除以同路线状态质量期间实际合格净出口kg，并核对库存损失返工；唯一服务输出准确1kg。 | cp_mass; 实际交换采集协议 | 每参考流单一交换 |  |
| gas_fate_balance | service_output; methane; ethane; propane; co2; co; so2; h2s | 闭合保管燃料BOG损失库存的真实组分质量及碳硫平衡，抵消内部返回且合格交付计一次；记录实测换算组成及未解残差，不强制零。 | cp_mass; cp_release; cp_refrigerant | 组分去向及核对净交付 |  |
| asset_attribution | liq_train; regas_train; buffer_tank | 按有证据真实资产全寿命利用的可归属路线输出份额分实际制造建设及独立更新，守恒跨期间供应商累计份额。 | cp_assets_liquefaction; cp_assets_regasification; cp_assets_management; cp_mass | 每参考流资产量 |  |
| species_fate | methane; ethane; propane; ethylene; co2; co; no; no2; so2; h2s | 采用实际物种实测或核验来源组成燃烧火炬效率及分物种，并在数据集中明确单位不确定性；不提供数值燃料泄漏火炬破坏或回收因子。 | cp_release; cp_mass; cp_energy_liquefaction; cp_energy_regasification | 每参考流单一物种量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_route | service_output | 真实运输用途路线合格净质量进出口状态组成及验收必需，不混两调相路线。 | cp_mass |
| quality_bog | management | 要求真实BOG燃料放空火炬逸散库存记录及组分平衡，内部回收不变新采购或默认收益。 | cp_mass; cp_release |
| quality_thermal | regasification; liquefaction | 保持真实技术热源冷剂组分取退水热状态化学，缺适用热生态表征须披露，不作零影响。 | cp_energy_liquefaction; cp_energy_regasification; cp_refrigerant; cp_water_regasification; cp_water_management |
| quality_life | 所有资产行 | 真实清单及寿命输出分母须能力利用停机收率寿命证据并审供应商重叠，未知寿命不能声称完整生命周期。 | cp_assets_liquefaction; cp_assets_regasification; cp_assets_management |
| quality_gaps | 所有清单行 | 披露缺失身份组分火炬接收证据、上游燃气链连接、副输出分配及场址噪声水生态方法缺口，缺失非零。 | cp_waste; cp_release; cp_mass |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 仅覆盖运输用天然气液化再气化，排除机型签注GPS导航及其他剩余功能、独立仓储运输及上游商品产气。 | un-cpc-transport-phase |
| validate_reference | 唯一service_output须等于1kg并匹配实测合格净出口质量，路线状态组成温压质量及真实期间必需；内部循环不合格库存燃料损失不作合格交付。 |  |
| validate_balance | 核对保管外燃料内部BOG库存及逐种去向，不重复购气或合格输出，不假定火炬完全破坏，不暗计冷热BOG收益；纯服务边界不声称完整燃气链上游商品负荷为零。 |  |
| validate_atomic_life | 每行须单一真实交换及各自正确属性单位介质，含取退水热证据；核验寿命份额供应商覆盖，未知身份方法缺口保持明确，不声称发布就绪。 |  |
| `validate_protocol_partition` | 每项采集协议须指向一个已存在的process_id且仅覆盖其所列流行；每张清单卡须关联其实际过程的对应协议。每次物理读数、交付、转移、排放或资产分配保留唯一source_record_id和exchange_id。源记录服务多个过程或数据集时，在同一期间共用总账中记录分配驱动因素、原始总量、各归属份额及边界外剩余量；各归属数量与剩余量之和须与原始总量一致。拆分协议不得复制完整读数、新增服务产出或重新开始资产寿命分配。每个声明情景保留同一匹配的产出分母，过程数量仅为归属证据，不形成额外归一化。内部转移仅核对一次，并保留跨全部使用方和期间的资产累计份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | transport_natural_gas_phase_conversion_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同物理路线状态及气体质量服务基准兼容的单一运输用液化或再气化组件，向燃气链连接一次 |
| excluded_use | 通用产业支持、机型签注导航、完整燃气商品生命周期、无关仓储运输、跨路线kg等效或自动避免冷热BOG收益 |
| required_metadata | 运输用途；液化或再气化；真实场址日期路线供应商；进出口保管端点；来料及交付组成含甲烷高碳烃CO2氮水及相关污染物；真实进出口相态温度压力和质量验收；合格净交付kg及观测期间；真实进料库存变化过程缓冲时长内部回路转燃料回收外送BOG及每项损失去向；压缩制冷循环或ORV/SCV/空气/中间介质气化器及能源来源；陆上浮式资产范围；能源来源温度压力；实际取退水温度化学地点；逐种化学品冷剂；排放逸散火炬效率证据；副产品供应商重叠；真实全寿命输出分母及不确定性 |
| required_quality_disclosure | 真实计量路线组成代表性、商品保管及上游连接、内部燃料BOG物种平衡、热影响、水及接收环境的证据缺口及有证据资产寿命分母 |
| update_trigger | 运输用途路线技术、来料出口组成状态质量、负荷、BOG火炬回收、热量、水及化学品供应、供应商缓冲边界或寿命输出证据变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-transport-phase | official_guidance | 联合国统计司CPC3.0 67990解释说明，共享草案PDF378页。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67990 | 运输用天然气液化再气化，机型签注导航在已审较窄方法外 |
| ifc-lng-2017 | official_guidance | IFC/世界银行集团《液化天然气设施环境健康安全指南》，2017-04-11，第1–2、5–9、21–23页。https://www.ifc.org/content/dam/ifc/doc/mgrt/20170406-final-lng-ehs-guideline-april-2017.pdf | 仅支持定性真实路线过程、BOG燃料火炬逸散、水热化学及废物来源背景；不采用数值限值LNG密度膨胀比效率或排放因子，较广LNG运输仓储范围不自动纳入 |
