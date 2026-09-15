---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unrefined-copper-copper-anodes-for-electrolytic-refining
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未精炼铜；电解精炼用铜阳极

## 1. 范围与适用性

本 PCR 适用于火法精炼未精炼铜和后续电解精炼用铜阳极的门到门生产。前景边界始于已声明的粗铜或含铜废料进入火法精炼工序，止于合格未精炼铜或铜阳极净产出离开生产者大门。仅在声明进料状态、铜品位、杂质组成和上游数据集后，方可覆盖原生进料和再生进料路线。

纳入进料接收、必要时的熔化、氧化、还原或插木还原、除渣、阳极炉废气处理，以及生产阳极时的阳极浇铸和冷却。排除矿石和精矿生产、焙烧、铜锍熔炼、本边界前的吹炼、电解精炼、阴极铜生产、半成品加工、下游运输、使用和寿命终结。语义边界依据 `ec-jrc-nfm-bref-2017`，并由 `us-epa-ap42-primary-copper-smelting-1986` 独立佐证原生路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unrefined-copper-copper-anodes-for-electrolytic-refining |
| classification_refs | CPC 3.0：41412，未精炼铜；电解精炼用铜阳极（`un-cpc-3-0-2025`） |
| covered_products | 离开所声明精炼边界的火法精炼未精炼铜；拟用于电解精炼的浇铸铜阳极 |
| excluded_products | 铜锍和沉积铜；精炼阴极铜；精炼铜合金和中间合金；铜粉及铜半成品 |
| representative_product | 适合转入电解精炼的阳极铜 |
| production_route | 对已声明粗铜进行火法精炼，可条件性加入再生含铜废料；先氧化后还原或插木还原；条件性阳极浇铸 |
| market_state | 生产者大门处的固态未精炼铜或固态浇铸铜阳极；声明温度、铜品位、杂质组成、尺寸和验收状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于进一步铜精炼的已声明火法精炼未精炼铜产品 |
| How much | 生产者大门处 1,000 kg 合格产品净产出 |
| How well | 满足采购方或精炼厂对铜品位、杂质组成、物理形态以及阳极几何形状和完整性的验收规范 |
| How long or cycle | 一个完整生产批次；不赋予使用期限功能 |
| reference_flow_link | 离开前景边界的合格产品净质量，不包括内部返回的不合格品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 阳极铜 `23b431ee-f7a0-4788-b2e2-7361cd48d4ad` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 已声明产品形态；铜品位及分析基准；杂质组成；原生、再生或混合进料路线；大门处物理状态和温度；适用时的阳极尺寸和验收规范；场址和地理范围；报告期；分配方法；每项外部含铜进料的上游数据集身份和边界 |

构建前景数据包时，`必需限定信息` 应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失这些信息时参考流定义不完整。对于已声明的非阳极火法精炼产出，仍采用 1,000 kg 质量功能，披露已确认的阳极铜 UUID 仅为类别代表，并在获得精确流之前保持非阳极产出身份未解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准衡器确定合格产品净质量；参考数量不包括浇铸不合格品和内部返回物。 |
| `copper_mass_balance` | 含铜输入和输出 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录接收态质量和铜品位基准；不得以含铜量替代物理流质量。 |
| `gas_reference_conditions` | 气态天然气、丙烷、压缩空气和工业氧气 | 选定流所对应的体积或质量 | m3 或 kg | 保持选定流属性。体积记录须声明温度、压力、干湿基准和标准状态换算。 |
| `electricity_energy` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留电表 kWh，并按 1 kWh = 3.6 MJ 换算；披露电压等级和供电地理范围。 |
| `water_accounting` | 冷却水和废水 | 选定流所对应的质量或体积 | kg 或 m3 | 区分总循环量、补水量、蒸发量和排水量；仅跨越前景边界的水构成交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在火法精炼边界接收的粗铜或含铜废料，并声明质量、铜品位、杂质组成、物理状态、温度、来源和上游数据集身份 |
| starting_condition_role | 进入前景火法精炼的上游含铜产品投入 |
| product_classification_scope | 火法精炼未精炼铜和电解精炼用铜阳极；CPC 3.0 代码 41412 仅为分类背景，不构成规范身份 |
| recursive_input_rule | 外购同类别未精炼铜按其上游数据集记为输入；场址内部火法精炼铜和不合格阳极作为内部转移，不递归套用本 PCR |
| upstream_dataset_requirement | 每项外部粗铜或含铜废料投入须有具名上游数据集，或披露截断、地理、技术、时间覆盖、品位和分配状态 |
| disclosure | 声明进料路线及比例、是否含熔化、还原剂、富氧、炉型、废气控制、浇铸技术、冷却水模式、内部循环、产品形态和排除工序 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_feed_gate` | 前景起始边界 | 从已声明粗铜或含铜废料的计量接收开始；除非扩展数据集单独报告，否则排除采矿、精矿制备、铜锍熔炼和吹炼。 | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `boundary_refining_operations` | 前景工序 | 纳入氧化、还原或插木还原、除渣、炉气和无组织废气捕集处理，以及直接归属的公用工程和排放。 | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `boundary_anode_casting` | 产品形态条件 | 产品为铜阳极时纳入阳极浇铸、冷却、不合格品处理和浇铸排放；仅对已声明非阳极产出标记不适用。 | `ec-jrc-nfm-bref-2017` |
| `boundary_electrorefining_exclusion` | 下游边界 | 止于生产者大门处的合格产品净产出；排除电解精炼、阴极铜生产、半成品加工、下游运输、使用和寿命终结。 | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fire_refining` | 火法精炼和废气处理 | required | 对所声明产品边界始终纳入 | 前景氧化、还原或插木还原、除渣和废气处理 | 转入浇铸或作为未精炼铜销售的火法精炼铜净量 |
| `anode_casting` | 阳极浇铸和冷却 | conditional | 产品为铜阳极时纳入；否则说明不适用 | 前景浇铸、冷却、检验和不合格品返回 | 生产者大门处 1,000 kg 合格阳极铜净产出 |

### 过程：火法精炼和废气处理（`fire_refining`）

#### 输入

##### 产品流

###### 原生路线粗铜进料（`fr_blister_copper`）

记录原生或混合路线中跨越火法精炼边界的粗铜。

- 选定流：粗铜 `ca87ab19-c076-4ccf-9cbd-b76cb932a880`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内计量的接收态粗铜入炉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copper_feed_mass`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 再生路线含铜废料进料（`fr_copper_scrap`）

再生进料跨越边界时记录含铜废料，并声明等级、来源、污染、预处理和所有权转移。

- 选定流：含铜废料 `096e8470-e8e1-4aa9-b35e-c5b4350f145e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量的合格含铜废料入炉质量；无废料路线为零并标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copper_feed_mass`
- 来源：`ec-jrc-nfm-bref-2017`

###### 气态天然气（`fr_natural_gas`）

记录作为炉用燃料或还原剂跨越边界的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配给精炼和相关后燃烧的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_reductant`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 丙烷（`fr_propane`）

仅在丙烷作为已声明还原剂或燃料跨越边界时记录。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于精炼的丙烷交付质量；未使用时为零并标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_reductant`
- 来源：`ec-jrc-nfm-bref-2017`

###### 氧化用压缩空气（`fr_compressed_air`）

记录供氧化、燃烧或后燃烧使用的计量压缩空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：所声明参考状态下的压缩空气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 工业氧气（`fr_industrial_oxygen`）

仅在工业氧气为富氧而跨越边界时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：所声明参考状态下的氧气计量体积；未富氧时为零并标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`ec-jrc-nfm-bref-2017`

###### 交流电（`fr_electricity`）

记录炉体驱动、废气处理、泵、风机、控制和精炼辅助设施的计量电力。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量或分表电量，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 火法精炼未精炼铜产出（`fr_unrefined_copper_output`）

记录在此大门销售或内部转入阳极浇铸的火法精炼未精炼铜。通用非阳极状态尚无精确 Tiangong UUID。

- 选定流：火法精炼未精炼铜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除残渣和返炉物后计量的火法精炼铜净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refining_outputs`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

##### 废物流

###### 含铜阳极炉渣（`fr_anode_furnace_slag`）

记录氧化阶段移出的炉渣，并声明内部返回、外部回收或处理去向。

- 选定流：含铜渣 `199d719c-1505-4223-886f-cfef1f9c6392`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：外部处理前离开精炼工序的炉渣计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_outputs`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 收集的含铜过滤粉尘（`fr_filter_dust`）

阳极炉废气控制设施收集的干粉尘须与残余空气排放分开记录。尚无精确 Tiangong UUID。

- 选定流：收集的含铜阳极炉过滤粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开控制设施或内部返回的过滤粉尘计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_outputs`
- 来源：`ec-jrc-nfm-bref-2017`

##### 基本流

###### 直接化石源二氧化碳排放（`fr_fossil_co2`）

仅记录前景燃料燃烧、还原或插木还原及后燃烧产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：直接排放实测值或经核证的场址碳平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

###### 直接二氧化硫排放（`fr_sulfur_dioxide`）

记录阳极炉烟囱和可归属无组织源的二氧化硫。尚未确认排入未指定室外空气的精确 Tiangong UUID。

- 选定流：二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：前景控制设施后的二氧化硫实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 残余颗粒物排放（`fr_particulate`）

无实测粒径分级时记录控制后的粒径未特指残余颗粒物；不得包含已收集的过滤粉尘。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：控制后烟囱和可归属无组织颗粒物的实测总质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

### 过程：阳极浇铸和冷却（`anode_casting`）

#### 输入

##### 产品流

###### 内部火法精炼铜转移（`ac_fire_refined_copper_input`）

记录从火法精炼转入浇铸的计量内部流；该流需要场址特定的内部中间流身份。

- 选定流：阳极浇铸用火法精炼铜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入浇铸的熔融或固态火法精炼铜计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格阳极铜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_mass`
- 来源：`ec-jrc-nfm-bref-2017`

###### 冷却水（`ac_cooling_water`）

记录跨越边界的补充水或直流水；排除内部总循环量。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于浇铸的补充水加直流冷却水计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格阳极铜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_water`
- 来源：`ec-jrc-nfm-bref-2017`

###### 交流电（`ac_electricity`）

记录浇铸机驱动、泵、冷却、检验和直接辅助设施的电力。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量或分表电量，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格阳极铜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格铜阳极（`ac_anode_copper`）

仅将验收合格并转入电解精炼的阳极记录为参考产出。

- 选定流：阳极铜 `23b431ee-f7a0-4788-b2e2-7361cd48d4ad`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开浇铸工序的合格阳极净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格阳极铜净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_casting_mass`
- 来源：`ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986`

###### 内部返回的不合格铜阳极（`ac_offspec_anode_copper`）

将不合格阳极作为独立内部中间流记录，不得计入参考产出。

- 选定流：不合格铜阳极
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内内部返回的不合格阳极计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格阳极铜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_mass`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

###### 直接冷却废水（`ac_wastewater`）

冷却水离开浇铸边界送处理或排放时记录废水，并声明铜、悬浮物、温度和处理状态。

- 选定流：废水 `d4117728-768b-4cbe-8a3b-45b2ad87f2ab`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：送处理或排放的废水计量体积；无排污的闭路循环为零并标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格阳极铜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_water`
- 来源：`ec-jrc-nfm-bref-2017`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可独立计量的工序 | 通过分别计量火法精炼、废气处理和浇铸，并将直接交换归入其致因工序，尽量避免分配。 |  |
| `allocation_internal_recycling` | 场址内返回的炉渣、粉尘、火法精炼铜和不合格阳极 | 作为内部转移，不赋予上游负荷抵扣或避免产品信用，也不得重复计数；质量保留在过程平衡中。 | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `allocation_external_recovery` | 离开边界送外部回收的残渣 | 明确建模残渣转移。除非研究方法要求，否则前景数据集不计替代信用；边界外系统扩展须披露。 |  |
| `allocation_multiple_products` | 不可避免的联合商品产出 | 首先采用有文件支持的物理因果关系；无法证明时采用大门处净收入，并披露价格、币种、时期和敏感性；内部转移不得作为产品分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_copper_feed_mass` | `fire_refining` | 粗铜和含铜废料 | 地磅、加料、化验和库存记录 | 时间；批次；来源；流身份；净质量；铜品位；杂质；水分基准；库存 | 将交付和库存变动与加料记录核对 | kg 和质量分数 | 每次交付和加料 | 完整报告期 | 所有精炼单元 | 各原子进料分别求和，调整库存并归一化 | 校准；化验；磅单；加料日志；核对表 |
| `cp_fuel_and_reductant` | `fire_refining` | 天然气和丙烷 | 流量计、储罐和发票 | 时间；燃料；计量；质量或体积；参考状态；分配标签 | 专用计量或核对共享计量 | m3 或 kg | 每批或每日 | 完整报告期 | 炉体和后燃烧器 | 各具体燃料分别求和并归一化 | 校准；发票；燃料规格 |
| `cp_process_gases` | `fire_refining` | 压缩空气和工业氧气 | 流量计和运行记录 | 时间；气体；体积；压力；温度；湿度；纯度；阶段 | 读取流量计并保留状态换算 | m3 | 每批或连续 | 完整报告期 | 炉体和气体系统 | 各气体分别求和并归一化 | 校准；气体证书；运行日志 |
| `cp_electricity` | `fire_refining` | 电力 | 电表记录 | 时间；电表；过程；kWh；电压；地理；共享负荷分配 | 读取分表并记录共享负荷分配 | 原始 kWh，报告 MJ | 每小时、每批或每月 | 完整报告期 | 各前景工序 | 按过程汇总 kWh，乘 3.6 后归一化 | 校准；发票；分配表 |
| `cp_refining_outputs` | `fire_refining` | 未精炼铜、炉渣和粉尘 | 衡器、批次、残渣、化验和库存记录 | 批次；身份；质量；品位；去向；返回标志；库存 | 称量产出或核对容器和库存 | kg | 每次出炉或转移 | 完整报告期 | 炉体和废气控制 | 各产出分别汇总，保留内部返回并归一化 | 校准；化验；转移单；联单 |
| `cp_direct_air_emissions` | `fire_refining` | 二氧化碳、二氧化硫和颗粒物 | 烟囱测试、连续监测、无组织估算和排放报告 | 排放源；污染物；浓度；流量；时长；水分；氧修正；状态；控制；不确定度 | 采用批准的测量或核证平衡，保持烟囱与无组织部分可追溯 | kg | 连续或测试期 | 代表性测试及全期运行 | 所有可归属排放源 | 按源积分，排除重叠并归一化 | 校准；方法报告；检出限；不确定度 |
| `cp_casting_mass` | `anode_casting` | 转入铜、合格阳极和不合格阳极 | 转移称量、批次、检验和拒收记录 | 批次；转入质量；数量；质量；验收；拒收；去向；库存 | 核对转入铜、合格品、不合格品和库存 | kg | 每批 | 完整报告期 | 所有浇铸线 | 分别汇总合格和不合格质量并归一化 | 校准；规范；核对表 |
| `cp_casting_water` | `anode_casting` | 冷却水和废水 | 补水、循环、排污和排放计量 | 仪表；数量；来源；温度；循环；排污；蒸发；去向；水质 | 计量跨边界补水和排水，排除内部循环 | 输入 kg，输出 m3 | 每日或连续 | 完整报告期 | 浇铸冷却系统 | 输入和输出分别求和并归一化 | 校准；水量平衡；排放记录；化验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 所有清单行 | 报告数量 = 报告期交换量 / 报告期合格产品净质量 × 1,000 kg | 交换量；产品净质量 | 每 1,000 kg 参考产品数量 |  |
| `calc_electricity_conversion` | `fr_electricity`; `ac_electricity` | 电力 MJ = 电表 kWh × 3.6 | 电表 kWh | MJ |  |
| `calc_casting_output` | `ac_anode_copper` | 合格净质量 = 浇铸总质量 - 不合格质量 - 期末在制品增加 + 期初在制品减少 | 浇铸总量；不合格量；库存变动 | 合格阳极净质量 |  |
| `calc_copper_reconciliation` | 两个过程 | 输入铜 = 输出铜 + 残渣含铜 + 库存变动 + 已量化未平衡差 | 质量；品位；库存 | 闭合度和未平衡差 | `ec-jrc-nfm-bref-2017` |
| `calc_water_balance` | 浇铸冷却 | 边界输入 = 废水 + 蒸发 + 产品带出 + 库存变动 + 已量化未平衡差 | 补水；排水；蒸发；带出；库存 | 水量平衡闭合度 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 含铜流 | 声明物理状态、品位、杂质、来源或去向、返回状态和精确身份；粗铜或不合格阳极不得使用合格阳极 UUID。 | 化验证书；主数据；批次和转移记录 |
| `dq_completeness` | 前景清单 | 覆盖至少 95% 运行日并核对完整报告期所有交换记录；披露排除项。 | 覆盖矩阵；缺失数据日志；核对表 |
| `dq_measurement` | 实测数量 | 使用与流属性相符的校准仪表或衡器，保留校准、检出限和参考状态。 | 校准证书；仪表台账；实验室 QA |
| `dq_temporal` | 所有记录 | 采用同一报告期，通常为连续 12 个月，或采用有理由且涵盖重大启停影响的代表性测试期。 | 生产日历；测试期说明；运行日志 |
| `dq_geography_technology` | 外部输入和背景链接 | 匹配地理、电压、燃料状态、氧气边界、水源、炉型和控制技术，或披露代表性限制。 | 供应商数据；技术说明；数据集元数据 |
| `dq_uncertainty` | 计算和分配数量 | 记录原始数据、分配和质量平衡不确定度；不得用未解决外部范围替代前景数据。 | 不确定度表；敏感性；审查签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求 1,000 kg 合格产品净产出，阳极铜 UUID 仅用于合格阳极；非阳极产出保持明确未解决。 | `un-cpc-3-0-2025` |
| `validation_process_condition` | 过程图 | 必须纳入 `fire_refining`；阳极产品必须纳入 `anode_casting`，非阳极产品须记录不适用理由。 | `ec-jrc-nfm-bref-2017` |
| `validation_atomic_flows` | 清单 | 拒绝合并燃料、公用工程、残渣、废水或排放标签；每行须为具有独立数量、属性、单位和适用性的单一交换。 |  |
| `validation_mass_balance` | 含铜流 | 每个过程须进行物理质量和含铜量核对；调查并披露未平衡差，不得强制闭合。 | `ec-jrc-nfm-bref-2017` |
| `validation_no_double_count` | 残渣和排放 | 确认内部返回不重复承担负荷，收集粉尘不同时计作颗粒物排放，上游电力或燃料排放不计作前景直接排放。 | `ec-jrc-nfm-bref-2017`; `us-epa-ap42-primary-copper-smelting-1986` |
| `validation_records` | 数据包 | 要求关联采集协议、时间覆盖、校准、来源和去向元数据，并披露估算、分配、缺失或不适用值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 火法精炼未精炼铜或铜阳极生产的门到门次级数据集 |
| downstream_use | 产品状态、地理、技术、时期和分配相容时，可作为电解精炼、铜产品或生命周期模型的背景输入 |
| allowed_use | 所声明边界内的归因建模；与相容上游数据集聚合；披露路线比例的情景分析 |
| excluded_use | 缺少相容链接数据集时表示矿石到阴极铜；用作阴极铜；使用未核实二氧化硫或内部中间流 UUID；未披露回收信用 |
| required_metadata | PCR id 和版本；产品形态；参考 UUID 适用性；场址；地理；时期；进料比例和品位；炉型和浇铸技术；还原剂；富氧；能源、水和控制；分配；上游数据集；未解决身份 |
| required_quality_disclosure | 覆盖和缺失数据；校准；化验方法；质量、铜和水量平衡；排放方法；参考状态；分配和敏感性；代表性；不确定度；循环处理 |
| update_trigger | 进料路线或品位、炉型或浇铸技术、产品规范、能源或氧气供应、控制、分配或地理发生重大变化，或代表性报告期已超过三年 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41412 正式分类身份 |
| `ec-jrc-nfm-bref-2017` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，JRC107041，2017。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索日期：2026-09-04） | 火法精炼边界、投入、炉渣、阳极浇铸与冷却、内部循环、废气和粉尘控制 |
| `us-epa-ap42-primary-copper-smelting-1986` | 正式指南（`official_guidance`） | 美国环境保护署，AP-42 第 12.3 节《原生铜冶炼》，1986 年 10 月，1995 年 1 月重排。https://www.epa.gov/sites/default/files/2020-11/documents/c12s03.pdf（检索日期：2026-09-04） | 独立原生路线过程分解，以及燃料、空气、炉渣、颗粒物和二氧化硫交换 |
