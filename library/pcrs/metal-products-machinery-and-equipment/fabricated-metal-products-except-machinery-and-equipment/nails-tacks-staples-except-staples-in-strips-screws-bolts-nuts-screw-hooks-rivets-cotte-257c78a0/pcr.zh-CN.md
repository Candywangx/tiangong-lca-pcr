---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nails-tacks-staples-except-staples-in-strips-screws-bolts-nuts-screw-hooks-rivets-cotte-257c78a0
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁、钢、铜或铝制钉、平头钉、订书钉（成条订书钉除外）、螺钉、螺栓、螺母、钩头螺钉、铆钉、销、开尾销、垫圈及类似制品

## 1. 范围与适用性

本 PCR 适用于所述产品类别内单件金属紧固及类似制品的工厂门生产，包括钉、平头钉、非成条订书钉、螺钉、螺栓、螺母、钩头螺钉、铆钉、销、开尾销、垫圈，以及铁、钢、铜或铝制的物理性质相似制品。一个前景数据包表示一种已声明的制品系列和生产路线，不得把彼此无关的制品、金属和表面处理变体平均在一起。

范围包括送达生产场址门口的金属丝材或杆材、成形或镦锻、必需的机加工或螺纹加工、条件性热处理、清洗、条件性表面处理、检验，以及随产品供应的包装。范围不包括成条订书钉、管状或叉状铆钉、弹簧、电缆、安装或使用、维护、拆除及售后生命终期。原生金属和其他外购物料的生产由上游数据集表示，不在前景过程中重复建立。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nails-tacks-staples-except-staples-in-strips-screws-bolts-nuts-screw-hooks-rivets-cotte-257c78a0 |
| classification_refs | CPC 3.0: 42944（精确分类语境） |
| covered_products | 钉；平头钉；非成条供应的订书钉；螺钉；螺栓；螺母；钩头螺钉；铆钉；销；开尾销；垫圈；以及铁、钢、铜或铝制类似紧固制品。 |
| excluded_products | 成条订书钉；管状或叉状铆钉；弹簧；电缆；主要功能或材料不属于本类别的紧固组件；安装和使用服务。 |
| representative_product | 一批满足规定材料、尺寸、机械性能和表面状态要求的可销售紧固件或类似制品。 |
| production_route | 丝材或杆材接收与整备；镦锻、成形、冲压或机加工；适用时加工螺纹；条件性热处理；清洗和条件性表面处理；检验；包装。 |
| market_state | 在生产场址门口交付的合格、已检验且已包装产品；声明制品类型、金属/合金、牌号、尺寸、涂层和热处理状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产具有已声明紧固功能和规格的合格、可销售金属紧固件或类似制品。 |
| How much | 合格产品净质量 1 kg，不含单独声明的运输包装。 |
| How well | 满足已声明的制品标准或客户规范，包括材料/合金、尺寸与公差、机械性能等级、适用时的螺纹、热处理状态、表面状态或涂层和验收检验。 |
| How long or cycle | 截止生产场址门口的一次生产批次；不含使用寿命声明。 |
| reference_flow_link | `reference_fastener_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 紧固件，未指定 `0eddfdee-c657-4086-b39d-aa60466b6970` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制品类型；铁、钢、铜或铝材料及合金/牌号；原料形态；标称尺寸以及单件质量或件数；适用时的螺纹和公差；机械性能等级；成形和机加工路线；热处理状态；表面处理或涂层及涂层质量/厚度；检验标准和合格率；包装配置；生产地域和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 一致使用净干质量或销售状态金属制品质量。1 kg 产品参考质量不含瓦楞纸箱和托盘，二者作为单独投入记录。 |
| `piece_to_mass_conversion` | 仅以件数提供的生产或销售记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用按批次核实的合格单件平均质量把件数换算为质量；保留件数、样本量、称量方法和不确定性。 |
| `electricity_energy_conversion` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能，并按 1 kWh = 3.6 MJ 换算；不得把燃料低位热值因子用于电力。 |
| `gas_volume_reference` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或计量表的参比条件报告体积，并声明温度、压力、校正基准以及能源换算所用低位热值数据。 |

## 5. 系统边界

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产边界 | 纳入全部现场成形、机加工或螺纹加工、条件性热处理、洗涤或清洗、条件性表面处理、检验和包装，直至包装产品在生产场址门口放行。 | us-epa-metal-fastener-pollution-prevention-1995 |
| `boundary_conditional_routes` | 热处理和表面处理 | 仅在已声明产品实际采用时纳入热处理、酸洗、镀锌或其他表面处理。外包时，纳入供应商特定的上游过程数据集，以及已包含在该外购服务或交付投入边界内的运输。 | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-ferrous-metals-processing-bref-2022; ec-jrc-metal-surface-treatment-2022 |
| `boundary_upstream_inputs` | 外购投入 | 使用地域、技术、材料牌号和产品状态相适配的上游数据集表示金属原料、能源、水、化学品和包装的生产与交付；不得在前景清单中重复这些上游过程。 | — |
| `boundary_exclusions` | 下游和基础设施 | 排除安装、使用、维护和产品生命终期。除非研究目标要求，或有文件记录的筛选表明其具有重要性，否则排除资本品和工厂基础设施。 | — |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已声明的金属丝材或杆材、过程耗材、能源和包装送达生产场址门口，并识别供应商和上游数据集边界。 |
| starting_condition_role | 进入前景紧固件制造系统的上游产品。 |
| product_classification_scope | 每个前景数据包对应一种已声明的 CPC 42944 制品系列和金属/合金路线。 |
| recursive_input_rule | 若本类别内外购紧固件进入装配、工装、包装或返工，应作为一个原子产品投入记录并链接上游数据集；不得在本前景数据包内递归重建其制造清单。 |
| upstream_dataset_requirement | 有供应商特定数据时优先使用；否则使用地域、技术、材料牌号和产品状态相容的上游数据集，并披露替代。 |
| disclosure | 声明制品类型、合金和牌号、原料形态、生产技术、热处理、表面状态、外包工序、废料回收路线、包装以及全部上游数据集替代。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_and_machining` | 原料整备、成形、镦锻、螺纹加工和机加工 | required | 纳入实际采用的工序；不适用的二次机加工或螺纹加工不设置清单行，不得作为零值组合路线。 | 前景生产 | 1 kg 合格产品 |
| `heat_treatment` | 热处理和淬火 | conditional | 当已声明材料牌号和机械性能规范需要热处理时纳入。 | 前景生产 | 1 kg 热处理产品 |
| `cleaning_and_surface_finishing` | 洗涤、酸洗、抛光和表面处理 | required | 纳入实际清洗；仅在采用相应特定路线时纳入盐酸酸洗和锌涂层行。 | 前景生产 | 1 kg 清洗或表面处理产品 |
| `inspection_and_packaging` | 最终检验和包装 | required | 纳入放行检验和在生产场址门口随产品供应的实际包装。 | 前景生产 | 1 kg 合格包装产品，包装单独报告 |

### 过程：原料整备、成形、镦锻、螺纹加工和机加工（`forming_and_machining`）

#### 输入

##### 产品流

###### 非合金钢丝原料（`steel_wire_input`）

仅在已声明的非合金钢丝路线记录此投入；其他钢种或原料形态必须设置各自的原子前景行。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：按批次计量的钢丝净领用量，包括计量退料和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 铜盘条原料（`copper_wire_rod_input`）

仅在已声明的铜或铜合金盘条路线记录此投入。

- 选定流：铜盘条 `99715c69-4245-44ff-a438-0e0d68377386`
- 流属性/单位：Mass / kg
- 数量规则：按批次计量的铜盘条净领用量，包括计量退料和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 铝线原料（`aluminium_wire_input`）

仅在已声明的铝或铝合金线材路线记录此投入。

- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：Mass / kg
- 数量规则：按批次计量的铝线净领用量，包括计量退料和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 成形和机加工电力（`forming_electricity`）

记录归属于拉拔或定径、镦锻、成形、冲压、机加工和螺纹加工的计量或分配电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于纳入的成形和机加工工序的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`

###### 二次机加工切削液（`cutting_fluid_input`）

采用钻削、车削、攻丝或类似机加工时，记录跨越过程边界的新鲜切削液补加量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存和送出回收液，分配至已声明批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

##### 废物流

默认原生或外购原料边界下，没有废物流作为本过程投入。若在现场重熔回收废料，应明确设置该独立投入及其处理过程。

##### 基本流

本过程不规定常规基本流投入。跨越环境边界的场址特定取用必须作为原子行补充。

#### 输出

##### 产品流

成形中间件留在前景系统内，不重复作为技术圈输出。

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开成形和机加工过程、送往回收或处理的钢边角料、切屑和不合格钢件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的净计量质量，不含内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 废铜（`copper_scrap`）

记录离开过程、送往回收或处理的铜或铜合金边角料、切屑和不合格件。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的净计量质量，不含内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 铝废料（`aluminium_scrap`）

记录离开过程、送往回收或处理的铝或铝合金边角料、切屑和不合格件。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的净计量质量，不含内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

##### 基本流

不规定默认直接基本流输出。来自机加工或成形的场址排放须按计量介质逐项补充。

### 过程：热处理和淬火（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用气态天然气（`heat_treatment_natural_gas`）

适用时记录热处理炉或回火炉燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已声明参比条件计量并归属于热处理的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 热处理电力（`heat_treatment_electricity`）

记录炉体、控制、循环、淬火操作和去应力设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于热处理的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`

###### 淬火油补加（`quenching_oil_input`）

采用油淬路线时记录新鲜淬火油补加量；不得把浴槽总存量作为消耗量。

- 选定流：淬火油 `02f62137-e204-46e6-8e72-e88b450fbdc4`
- 流属性/单位：Mass / kg
- 数量规则：新鲜补加量加库存损失减回收油，分配至已声明批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

##### 废物流

本过程不规定常规废物投入。

##### 基本流

本过程不规定常规基本流投入。

#### 输出

##### 产品流

热处理零件留在前景系统内。

##### 废物流

废淬火油离开系统时必须作为独立原子废物流补充；在没有专门检索和成分审核的情况下，本 PCR 不主张其精确身份。

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`heat_treatment_fossil_co2`）

记录现场热处理燃烧直接排放的化石二氧化碳；不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放，或根据计量燃料、文件记录的碳含量和氧化因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`

### 过程：洗涤、酸洗、抛光和表面处理（`cleaning_and_surface_finishing`）

#### 输入

##### 产品流

###### 零件清洗和漂洗用工艺用水（`cleaning_process_water`）

记录供应至零件洗涤、漂洗和表面处理浴的工艺用水，并扣除内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：经计量或罐体平衡进入前景过程的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022

###### 碱性清洗用氢氧化钠（`cleaning_sodium_hydroxide`）

仅在采用相应化学体系时，记录进入碱性清洗的氢氧化钠产品质量；声明浓度和交付溶液状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：加入或补充清洗浴的交付产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：ec-jrc-metal-surface-treatment-2022

###### 酸洗用盐酸溶液（`pickling_hydrochloric_acid_30pct`）

仅在采用盐酸酸洗时记录交付浓度 30% 的盐酸溶液；其他浓度须设置单独识别的产品行并声明换算。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass / kg
- 数量规则：加入或补充酸洗槽的交付溶液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：ec-jrc-metal-surface-treatment-2022

###### 涂层用特高纯锌金属（`coating_shg_zinc_metal`）

仅在涂层路线消耗已声明的特高纯锌牌号时记录该金属锌。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存、回收锌渣和未用退料，分配至已声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：ec-jrc-ferrous-metals-processing-bref-2022; ec-jrc-metal-surface-treatment-2022

###### 清洗和表面处理电力（`finishing_electricity`）

记录洗涤机、泵、浴槽加热辅助设备、抛光和现场涂层设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于清洗和表面处理的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`

##### 废物流

不规定废物流作为投入。只有回流浴液跨越过程边界时才表示该物料。

##### 基本流

不规定常规基本流投入；不得用环境直接取水替代外购工艺用水。

#### 输出

##### 产品流

清洗或涂层后的零件留在前景系统内。

##### 废物流

###### 金属表面处理废水（`metal_finishing_wastewater`）

记录从洗涤、漂洗或表面处理离开并送往现场或场外处理的水性废物流，同时声明成分和去向。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或以实测密度换算体积，并扣除内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-ferrous-metals-processing-bref-2022

###### 零件洗涤废油泥（`oil_sludge_output`）

记录从零件洗涤或废水处理分离并离开过程的废油泥这一种废物流。

- 选定流：废油泥 `956abaf8-8049-4aad-bf6b-a06713de97a6`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的湿质量实测值，并披露含水量和含油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 废盐酸酸洗液（`spent_hydrochloric_pickling_liquor`）

记录离开酸洗槽的废盐酸液，包括残余游离酸和溶解金属盐；不得以通用废酸替代。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：从浴槽移出的实测质量减去内部再生回流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：ec-jrc-metal-surface-treatment-2022

##### 基本流

实际表面处理路线的直接大气和水排放必须根据监测或有文件记录的计算，按物质和环境介质逐项补充；不允许设置“未指定排放”集合。

### 过程：最终检验和包装（`inspection_and_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_box_input`）

采用该包装时，记录随放行产品供应的瓦楞纸箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：已声明发运批次消耗的新纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：us-epa-metal-fastener-pollution-prevention-1995

###### 木制托盘（`wooden_pallet_input`）

记录随产品供应的木制托盘有效质量，适用时按有文件记录的复用或返还进行调整。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：按有文件记录的周转次数分配新托盘质量，或按已声明发运批次核算托盘净采购和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 检验和包装电力（`packaging_electricity`）

记录检验、分选、计数、贴标和包装设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于检验和包装的实测或分表分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

不规定默认包装废物投入。进入复用循环的返还包装须设置独立识别行和核算规则。

##### 基本流

检验和包装不规定常规基本流投入。

#### 输出

##### 产品流

###### 合格紧固件或类似制品（`reference_fastener_output`）

记录在工厂门放行的合格产品净质量；该质量不含包装。

- 选定流：紧固件，未指定 `0eddfdee-c657-4086-b39d-aa60466b6970`
- 流属性/单位：Mass / kg
- 数量规则：合格放行产品净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：un-cpc-3-0-structure-2025

##### 废物流

成品检验不合格件必须转入适用的金属特定废料行，不得在此重复计数。

##### 基本流

检验和包装不规定常规基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线和公用工程 | 优先采用物理细分、分表和批次记录。仅分配无法直接归属的剩余共用消耗。 | — |
| `allocation_shared_operations` | 剩余共用电力、水和耗材 | 按机器时间、处理质量、浴槽吞吐量或计量负荷等有文件记录的因果动因分配；仅当质量合理代表因果关系时使用质量分配。 | — |
| `allocation_scrap_outputs` | 金属废料和不合格件 | 按实测质量和去向把离开前景系统的废料记录为废物。不得在前景清单内抵扣原生金属避免生产；任何回收替代均属于单独声明的下游情景。 | — |
| `allocation_no_double_counting` | 内部循环和外包处理 | 内部循环物料既不计入投入消耗，也不计入废物输出。外包工序只能纳入供应商过程数据集或其分解清单之一，不得两者同时纳入。 | — |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `forming_and_machining` | 金属原料、电力、切削液和金属废料 | 采购、库存、计量、批次和地磅记录 | batch_id; article_id; alloy_grade; feedstock_form; opening_stock; receipts; closing_stock; returned_material; electricity; cutting_fluid_makeup; scrap_mass; conforming_output_mass | 将物料库存与批次领退料核对；读取专用电表或按文件记录分配共用电表；按金属种类称量各废料流 | kg; MJ | 每批次，按月核对 | 具有代表性的连续 12 个月，覆盖产品组合 | 已声明场址内全部纳入的成形和机加工生产线 | 按制品路线汇总净流量，再除以合格产出质量 | 经校准的秤和计量表；库存核对；批次流转单；废料票据 |
| `cp_heat_treatment_records` | `heat_treatment` | 天然气、电力、淬火油和直接化石二氧化碳 | 计量表、燃料质量、浴槽维护和烟气记录 | batch_id; furnace_id; treated_mass; gas_volume; gas_reference_conditions; electricity; quench_makeup; recovered_oil; fuel_carbon_content; oxidation_factor; measured_co2 | 读取炉体计量表；核对淬火油补加；使用烟气实测或有文件记录的燃料碳计算 | m3; MJ; kg | 每个热处理批次，按月核对计量表 | 覆盖炉装载的具有代表性的连续 12 个月 | 产品使用的全部现场热处理设备 | 按实测装载量或运行时间把计量流量分配至处理批次，再按合格产出归一化 | 计量表校准；燃料证书；浴槽日志；计算表；适用时的烟气报告 |
| `cp_finishing_records` | `cleaning_and_surface_finishing` | 水、清洗化学品、酸洗酸、锌、电力、废水、废油泥和废酸洗液 | 计量表、浴槽日志、采购、库存、实验室和废物转移记录 | batch_id; treated_mass; water_input; recycle_water; chemical_product; concentration; bath_charge; bath_makeup; zinc_stock; electricity; wastewater_mass_or_volume; density; oil_sludge_mass; sludge_water_content; spent_liquor_mass; free_acid; dissolved_metals; destination | 计量水和电；核对浴槽补加和锌库存；称量废物或使用实测密度换算体积；保留分析成分 | kg; MJ | 每次浴槽加料和产品批次，按月核对 | 覆盖表面处理路线的具有代表性的连续 12 个月 | 归属于产品的全部现场和外包表面处理路线 | 扣除内部循环和库存退回；按合格产品质量归一化净投入和输出 | 经校准的计量表和秤；浴液分析；化学品证书；废物联单；供应商表面处理数据 |
| `cp_packaging_records` | `inspection_and_packaging` | 合格产品、瓦楞纸箱、木制托盘和电力 | 放行、称量、包装清单、托盘循环和计量记录 | batch_id; accepted_piece_count; sampled_piece_mass; accepted_product_mass; rejected_mass; box_mass; box_count; pallet_mass; pallet_count; pallet_trips; returned_pallets; electricity | 称量放行产品和包装；核实件数到质量换算；核对托盘复用；读取或分配包装电表 | kg; MJ | 每个放行发运批次，按月核对 | 覆盖包装形式的具有代表性的连续 12 个月 | 已声明场址内全部检验和包装工序 | 用合格产品质量归一化包装净消耗和电力；参考产品产出不含不合格品和包装质量 | 经校准的秤；验收记录；包装规范；托盘返还记录；电表分配 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | 全部清单行 | 归一化数量 = 分配至已声明产品的净流量 / 合格产品净质量；分母不含运输包装 | 批次或报告期净流量；合格产品质量 | 每 1 kg 参考产品的数量 | — |
| `calc_piece_count_to_mass` | 件数记录 | 产品质量 = 合格件数 × 经核实的批次单件平均质量；可用时采用批次直接称量 | 合格件数；抽样或直接测得的单件质量 | 合格产品质量 | — |
| `calc_direct_fossil_co2` | `heat_treatment_fossil_co2` | 使用实测直接烟气 CO2；否则按计量燃料量 × 有文件记录的燃料碳含量 × 氧化因子 × 44/12 计算，并采用一致的体积到质量换算 | 天然气体积和参比条件或天然气质量；碳含量；氧化因子 | kg 化石二氧化碳 | — |
| `calc_reusable_pallet` | `wooden_pallet_input` | 封闭复用循环中，有效托盘投入 = 新托盘质量 / 有文件记录的全寿命周转次数；否则使用托盘净采购加期初库存减期末库存和经核实返还 | 新托盘质量；周转次数；采购；库存；返还 | kg 木制托盘投入 | — |
| `calc_mass_balance_check` | 金属原料、产品和金属废料 | 对每种已声明金属比较含金属投入与合格产出、金属废料、库存变化和实测处理损失；调查无法解释的不平衡，不得强制闭合 | 金属投入；产品产出；金属特定废料；库存变化；实测损失 | 披露的质量平衡残差 | — |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个所表示产品系列识别制品类型、合金/牌号、尺寸、螺纹、机械等级、热处理、涂层和适用验收标准。 | 产品规范；合格证；批次流转单 |
| `dq_temporal_coverage` | 前景记录 | 采用有代表性的连续 12 个月；较短期间必须证明覆盖产品组合、炉装载、浴槽周期、维护和季节影响。 | 带日期的计量、生产、库存和废物记录 |
| `dq_mass_completeness` | 金属投入和输出 | 将每条金属路线与合格产品、金属特定废料、库存变化和实测损失核对；披露残差和纠正调查。 | 签署的质量平衡表；秤校准；废料票据 |
| `dq_route_separation` | 条件性热处理和表面处理 | 不得在不报告路线份额和分配动因的情况下平均缺失与存在的工序。供应商表面处理数据必须匹配已声明涂层和地域。 | 路线特定批次记录；供应商数据集和规范 |
| `dq_measurement_traceability` | 全部采集行 | 保留计量表或秤标识、校准状态、原始单位、换算、分配动因和记录责任人。 | 校准证书；原始导出；计算工作簿 |
| `dq_uuid_qualifiers` | 含 UUID 的流 | 确认前景产品状态、浓度、牌号、地域和技术持续兼容所选 Tiangong 身份；UUID 身份不能替代这些限定信息。 | 供应商证书；流直读审核；过程说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 产品和参考流 | 制品不在覆盖清单内、材料不是铁/钢/铜/铝、缺失必需限定信息，或参考产出不恰为 1 kg 合格产品净质量时，校验失败。 | un-cpc-3-0-structure-2025 |
| `validate_inventory_atomicity` | 过程清单 | 每个清单行必须识别一个产品、废物或基本交换。拒绝公用工程总称、组合燃料、组合包装、组合废物或未指定排放。 | — |
| `validate_process_applicability` | 过程图 | 必需过程必须有前景记录。仅在已声明路线适用时设置条件性热处理、酸洗和锌涂层行；不适用路线须在数量汇总之外明确标记为不适用。 | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022 |
| `validate_mass_and_units` | 计量与计算 | 检查 kg 参考质量、kWh 到 MJ 换算、天然气参比条件、件数到质量证据、包装质量排除以及金属特定质量平衡残差。 | — |
| `validate_waste_and_recycling` | 废料、废水、污泥和废酸洗液 | 要求实测质量、重要时的成分、去向和内部循环排除。不得在前景清单中采用避免负担抵扣。 | us-epa-metal-fastener-pollution-prevention-1995; ec-jrc-metal-surface-treatment-2022 |
| `validate_source_and_dataset_fit` | 证据和上游数据集 | 确认来源标识可解析，外部证据仅用于其支持的规则，并且每个上游数据集在地域、技术、材料牌号、产品状态和交付边界方面兼容。 | — |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明金属紧固件或类似制品路线的前景工厂门生产数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品碳足迹、LCA 过程数据集和生命周期模型；所需工厂门清单必须对应材料、过程和表面处理限定信息相容的已声明 CPC 42944 制品。 |
| excluded_use | 未声明的跨金属或跨制品类型平均；成条订书钉；弹簧；管状或叉状铆钉；安装、使用或生命终期声明；规格或系统边界不相容产品的比较。 |
| required_metadata | PCR id 和版本；制品类型；材料/合金和牌号；尺寸和单件质量；机械等级；成形和机加工路线；热处理；涂层/表面状态；场址和地域；报告期；分配；废料和废物去向；包装；上游数据集标识和替代。 |
| required_quality_disclosure | 按过程和流的完整性；计量表和秤覆盖；件数到质量方法；质量平衡残差；分配份额；路线份额；浴液和废物成分；供应商数据覆盖；时间代表性；未解决 UUID 和范围证据需求。 |
| update_trigger | 制品组合、合金、原料形态、成形技术、炉体或燃料、涂层路线、废水处理、包装、分配方法、场址地域、上游数据集或代表性报告期发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司。《CPC Version 3.0 Structure》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05）。 | 正式类别身份和覆盖产品表述。 |
| `us-epa-metal-fastener-pollution-prevention-1995` | official_guidance | 美国环境保护署。《Pollution Prevention Assessment for a Manufacturer of Metal Fasteners》。EPA/600/S-95/016，1995 年 8 月。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003VJO.TXT（检索日期：2026-09-05）。 | 紧固件原料、过程分解、清洗、热处理、表面处理、包装和指定废物流。 |
| `ec-jrc-ferrous-metals-processing-bref-2022` | official_guidance | 欧盟委员会联合研究中心。《Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry》。JRC131649，EUR 31321 EN，DOI 10.2760/196475，2022。https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索日期：2026-09-05）。 | 条件性镀锌、化学/电解表面处理及相关废水处理边界。 |
| `ec-jrc-metal-surface-treatment-2022` | official_guidance | Huygens, D. 和 Saveyn, H.G.M.。《Technical proposals for by-products and high purity materials as component materials for EU Fertilising Products》。JRC128459，EUR 31035 EN，DOI 10.2760/185544，2022，第 19.2.8 节。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC128459/JRC128459_01.pdf（检索日期：2026-09-05）。 | 金属清洗、氢氧化物清洗、盐酸酸洗、废酸洗液和锌镀层过程分解。 |
| `china-state-council-fastener-tariff-terms-2010` | official_guidance | 中华人民共和国国务院，正式税则术语表，2010。https://www.gov.cn/gzdt/att/att/site1/20100302/001e3741a2cc0cf6c6d301.pdf（检索日期：2026-09-05）。 | 螺钉、螺栓、螺母、钩头螺钉、铆钉、销、开尾销和垫圈的专业中文术语。 |
