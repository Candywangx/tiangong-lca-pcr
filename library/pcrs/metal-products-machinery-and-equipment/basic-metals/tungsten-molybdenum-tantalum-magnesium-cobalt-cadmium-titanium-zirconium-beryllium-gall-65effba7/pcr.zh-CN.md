---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-65effba7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 锻轧特种有色金属及其制品；镁粉

## 1. 范围与适用性

本 PCR 适用于以下两类产品的厂门前景数据包：以钨、钼、钽、镁、钴、镉、钛、锆、铍、镓、铪、铟、铌、铼、铊、锗或钒为主要金属的某一种明确锻轧产品或制品，以及金属镁粉。数据包必须明确一种主要金属或合金、一种产品形态、一种牌号或成分和一条生产路线；不得对不同金属、粉末与锻轧状态或功能无关的制品求平均。

前景边界始于明确的金属或合金原料进入报告工厂，止于合格产品在厂门具备发运条件。边界纳入实际发生的厂内成形、机械加工、热处理、清洗、表面处理和机械法粉末生产。矿石开采、选矿、冶炼、精炼和化学法制粉属于上游，除非这些工序同址发生并作为独立前景过程明确纳入。使用阶段、装配为其他下游产品、出厂后运输和寿命终结不在本 PCR 范围内。

以下最低清单以钛板作为锻轧产品代表，并另设有条件适用的镁粉过程。其他纳入范围的金属或制品数据包必须将代表性材料流替换为准确的原子流，同时保留相同的数据采集、质量平衡、边界和披露逻辑；不得把钛或镁的流 UUID 改名后用于其他金属。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-65effba7 |
| classification_refs | CPC 3.0: 41602 |
| covered_products | 所列金属及其明确合金的锻轧形态和制品；采用明确机械路线生产的金属镁粉 |
| excluded_products | CPC 41602 以外的未锻轧金属和非镁金属粉末；矿石和精矿；未明确同址纳入的初级冶炼与精炼；化学法制粉；以废料为参考产品；主要功能已归入更具体下游类别的产品 |
| representative_product | 钛板 |
| production_route | 金属原料的成形与加工；镁粉有条件采用机械研磨、磨蚀或雾化路线 |
| market_state | 报告工厂厂门的合格干燥产品，并声明牌号、成分、尺寸或粒径分布、状态或热处理状态、表面光洁度和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明商业规格的一种明确锻轧金属产品或制品，或金属镁粉 |
| How much | 1 kg 合格产品净质量 |
| How well | 满足所声明的牌号或合金成分、几何尺寸或粒径分布、状态或热处理状态、表面光洁度和质量验收要求 |
| How long or cycle | 工厂厂门状态；不设使用寿命 |
| reference_flow_link | `reference_product_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钛板 `f32fc628-252f-40fe-8f8d-fd0efb955e92` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要金属及合金或牌号；产品形态；尺寸或粒径分布；状态、热处理或粉末状态；表面光洁度；再生含量声明及核算方法；生产路线；工厂地理位置；技术时期；厂门包装状态 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。已确认的参考流仅代表钛板；其他纳入范围的产品必须使用其准确产品流，不得在语义上复用该 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验之后、发运之前确定净干质量或按产品规格确定的可销售质量；披露不可避免的表面膜、涂层和直接包装是否计入。 |
| `energy_conversion` | 电力和燃料记录 | 能量流采用 Net calorific value | MJ | 保留原始电表或账单单位，记录换算因子，并按 1 kWh = 3.6 MJ 报告电力；不得把电力当作现场燃料燃烧。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume | m3 | 记录气体体积时同时记录温度、压力以及干基或湿基；仅按有记录的参考状态换算。 |
| `solution_mass_basis` | 工艺用水、切削液和氢氧化钠溶液 | Mass | kg | 报告交付产品或溶液质量，并分别披露浓度和配制水；不得以溶液质量代替活性化学品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂接收的金属或合金原料，按金属、成分、物理形态、供应商、再生含量声明和实测入厂质量识别 |
| starting_condition_role | 进入厂门成形、加工或镁粉生产的上游产品 |
| product_classification_scope | CPC 3.0 代码 41602 内的一种产品；分类仅提供语境，不能替代明确的材料和产品身份 |
| recursive_input_rule | 对已包含成形负荷的同类别锻轧投入，按其准确采购产品流和上游数据集记录，不在本前景过程中递归展开 |
| upstream_dataset_requirement | 每项采购金属、合金、燃料、电力、化学品、气体和水投入必须链接地理和技术适宜的上游数据集，或披露缺失链接 |
| disclosure | 声明纳入的单元操作、外包工序、内部循环、截断决定、现场处理、分配决定，以及铸造、表面处理、制粉和包装是否在边界内 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景产品系统 | 纳入从明确原料接收到最终检验和厂门发运准备之间的所有实际单元操作；上游初级金属生产仅在同址且明确建模时纳入。 | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_on_site_casting` | 成形前铸造 | 仅当现场铸造生产随后在同址成形的坯料、锭、棒、带材、丸粒或其他前体时纳入，并披露与成形的质量衔接。 | `us-epa-nfmf-471` |
| `boundary_surface_treatment` | 厂内化学或电化学处理 | 纳入成形现场实施的清洗、蚀刻和表面处理，以及其槽液、漂洗水、废水、污泥和排放。 | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_powder_route` | 镁粉 | 纳入明确的机械研磨、磨蚀或雾化及相关调质；化学沉淀制粉和仅作为精炼末端步骤的制粉必须采用其他上游方法。 | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_actual_atomic_flows` | 所有纳入工序 | 将所有实际材料、能源、水、气体、废物和基本交换分别作为原子流加入；模板中没有预列某流不构成截断许可。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_forming_fabrication` | 金属成形、加工与精整 | required | 锻轧产品或制品始终纳入；仅生产镁粉的数据包不使用 | 将明确金属原料转化为合格锻轧产品的前景过程 | 1 kg 合格产品 |
| `magnesium_powder_production` | 机械法镁粉生产与调质 | conditional | 仅当参考产品为镁粉时纳入 | 机械研磨、磨蚀或雾化及粉末最终调质 | 1 kg 合格镁粉 |

### 过程：金属成形、加工与精整（`metal_forming_fabrication`）

本代表性清单适用于钛板。其他锻轧产品必须把金属原料、产品、废料、废水组分和基本流排放替换为准确身份，同时保留逐行采集逻辑。

#### 输入

##### 产品流

###### 钛坯原料（`mf_titanium_billet`）

记录代表性成形路线消耗的入厂钛坯。供应商生产属于上游，除非同址发生。

- 选定流：钛坯
- 流属性/单位：Mass / kg
- 数量规则：计量投入过程的验收钛坯质量，扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-epa-nfmf-guidance-1989`

###### 成形与加工用电（`mf_electricity`）

记录成形、机械加工、精整、控制系统及所分配辅助系统消耗的外购或现场供应电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入过程可归属的计量电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 直接热工序用天然气（`mf_natural_gas`）

仅当纳入的炉、烘箱、干燥器或其他热设备直接燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：纳入热工序可归属的计量天然气体积；无燃烧时使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 接触冷却和漂洗用工艺水（`mf_process_water`）

记录作为接触冷却、漂洗、槽液配制或湿法清洗而跨越过程边界的工艺用水；仅在单独计量并证明处于过程边界之外时，才能排除非接触循环系统补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入成形与表面处理工序的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

###### 机械加工与磨削用切削液（`mf_cutting_fluid`）

仅当纳入机械加工、磨削、钻削、车削或类似湿法去除金属工序时记录切削液补加量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：实测加入系统的新鲜切削液浓缩液或交付产品；稀释水单独披露
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_fluid_records`
- 来源：`niosh-metalworking-fluids-1998`

###### 碱性表面处理用氢氧化钠（`mf_sodium_hydroxide`）

仅当纳入的碱洗、蚀刻或废水处理工序消耗氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测交付的氢氧化钠产品或溶液质量，并披露浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-epa-nfmf-guidance-1989`

###### 热切割或加热用工业氧气（`mf_industrial_oxygen`）

仅当工业氧气供应给纳入的热切割或加热工序时记录；本行不得用于压缩空气或惰性气体。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：纳入工序可归属的计量氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：

##### 废物流

不预设废物投入。实际使用的外购废料必须作为其准确流单独记录，并披露前一生命周期负荷的处理方式。

##### 基本流

本门到门过程不预设基本流投入。资源开采属于所链接的上游数据集，除非在声明的前景边界内发生。

#### 输出

##### 产品流

###### 合格钛板（`mf_titanium_plate`）

仅记录通过所声明产品验收要求的板材。本输出为代表性参考流。

- 选定流：钛板 `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- 流属性/单位：Mass / kg
- 数量规则：计量合格产品净质量；将清单归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`un-cpc-3-structure-2025`

##### 废物流

###### 钛边角料与加工废料（`mf_titanium_scrap`）

将离开过程的钛边角料、切屑和其他可回收固体钛作为单独废物流记录。内部循环废料保留在过程内，在质量平衡中跟踪，但不作为边界交换。

- 选定流：钛废料
- 流属性/单位：Mass / kg
- 数量规则：实测离开前景边界的钛废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`niosh-metalworking-fluids-1998`

###### 从系统排出的废切削油（`mf_waste_cutting_oil`）

记录送往处理、回收或处置的废切削油。不得将其与水基冷却液或其他废油合并。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：实测从切削液系统排出并转移出厂的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_fluid_records`
- 来源：`niosh-metalworking-fluids-1998`

###### 含钛酸性废水（`mf_acidic_titanium_wastewater`）

仅当钛酸蚀、酸洗或漂洗产生的水流离开前景过程并进入现场或场外处理时记录。必须声明酸种类、钛浓度、其他受控成分、pH 和处理去向。

- 选定流：含钛酸性废水
- 流属性/单位：Mass / kg
- 数量规则：在转移点计量废水质量，并采用代表性取样确定成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

##### 基本流

###### 现场燃料燃烧产生的化石源二氧化碳（`mf_fossil_co2`）

记录纳入的天然气燃烧直接排放的化石源二氧化碳。本前景行不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或由工厂计算并归属于纳入燃烧的直接化石源二氧化碳质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：

###### 排入空气的钛颗粒物（`mf_titanium_particulate`）

记录越过烟囱或无组织空气边界的受控含钛颗粒物。声明元素态或化合物形态、粒径基准、排放区室和减排捕集基准。

- 选定流：排入空气的钛颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或根据捕集粉尘与经核验的控制性能计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格钛板
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：`niosh-metalworking-fluids-1998`

### 过程：机械法镁粉生产与调质（`magnesium_powder_production`）

仅当镁粉为参考产品时使用本过程。声明实际运行的研磨、磨蚀、湿法或干法雾化、分级、干燥和粉尘回收步骤；把每项技术特定气体、化学品、捕集残余物和排放作为原子行加入。

#### 输入

##### 产品流

###### 镁锭原料（`mp_magnesium_ingot`）

记录进入机械制粉的金属镁锭或其他明确固态镁原料。

- 选定流：镁锭
- 流属性/单位：Mass / kg
- 数量规则：计量投入制粉过程的验收镁原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

###### 镁粉工序用电（`mp_electricity`）

记录实际纳入的研磨、磨蚀、雾化、分级、干燥、通风及所分配辅助系统的用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入镁粉过程可归属的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-nfmf-guidance-1989`

###### 镁粉加热或干燥用天然气（`mp_natural_gas`）

仅当纳入的原料加热、雾化或干燥设备燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：纳入粉末工序可归属的计量天然气体积；无燃烧时使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 湿法制粉用工艺水（`mp_process_water`）

仅对湿法研磨、湿法雾化、洗涤或其他与水接触的路线记录用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于镁粉生产的工艺用水；经核验的干法路线使用 `not_applicable`
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-epa-nfmf-guidance-1989`

##### 废物流

不预设废物投入。作为原料使用的外购镁残余物必须采用其准确废物或二次产品身份，并披露上游核算方法。

##### 基本流

不预设基本流投入。仅当资源开采在声明的前景边界内发生时加入实际资源流。

#### 输出

##### 产品流

###### 合格金属镁粉（`mp_magnesium_powder`）

仅记录满足所声明镁成分、水分、粒径分布、颗粒形貌和污染限值的粉末。

- 选定流：金属镁粉
- 流属性/单位：Mass / kg
- 数量规则：计量合格粉末净质量；将清单归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格金属镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`un-cpc-3-structure-2025`; `us-epa-nfmf-guidance-1989`

##### 废物流

跨越边界的分离不合格粉末、捕集粉尘、废液和处理残余物必须分别作为准确原子废物流加入。内部返工不属于输出，保留在过程质量平衡中。

##### 基本流

###### 镁粉热工序产生的化石源二氧化碳（`mp_fossil_co2`）

仅当纳入的制粉设备燃烧天然气时记录直接化石源二氧化碳。本行不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或由工厂计算并归属于纳入燃烧的直接化石源二氧化碳质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格镁粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线与公用工程 | 在考虑分配前，优先按单独计量的过程、批次、生产线或产品细分。不能建立因果分配基准的数据包必须披露该缺口，且不得声称完全符合本 PCR。 |  |
| `allocation_internal_recycle` | 内部金属废料、粉末、水和流体循环 | 将内部循环保留在前景系统内；过程控制可记录总循环量，但清单仅计入补加投入和跨边界输出。 |  |
| `allocation_recovered_scrap` | 离开边界的废料或不合格品 | 记录实测边界流和处理去向。除非另行声明下游建模约定，不得在前景清单内扣除避免生产信用。 |  |
| `allocation_joint_outputs` | 不可避免的联合生产 | 有记录时采用直接物理因果关系。若不存在可辩护的因果关系，在形成经审查的分配规则前，将全部负荷保留在所声明参考产品上，不得默认采用经济分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `metal_forming_fabrication`; `magnesium_powder_production` | 原料、合格产品、废料、内部循环和不合格品质量 | 秤量与生产记录 | 时间戳；批次；流身份；合金或牌号；毛重；皮重；净重；去向 | 使用校准秤，并与批次和仓库记录核对 | kg | 每批次或每次转移 | 至少一个有代表性的连续 12 个月；批次型生产则覆盖完整生产期 | 所有纳入生产线和仓储转移点 | 按准确流汇总边界净质量；内部循环单列；以合格产出归一化 | 校准证书；批次核对；期初与期末库存平衡 |
| `cp_energy_records` | `metal_forming_fabrication`; `magnesium_powder_production` | 电力与天然气 | 仪表、账单与设备日志 | 仪表编号；期初与期末读数；单位；燃料状态；参考条件；运行小时；停机；分配驱动 | 优先分表计量；与账单核对并排除无关负荷 | 仪表原生单位 | 每月及每个生产期 | 与产品产出同期 | 所有纳入设备和共用辅助系统 | 汇总纳入消耗，采用有记录的换算后除以合格产出质量 | 仪表校准；账单核对；分配工作表 |
| `cp_water_chemical_records` | `metal_forming_fabrication`; `magnesium_powder_production` | 工艺用水与氢氧化钠 | 水表、槽液配制、采购与库存记录 | 水表读数；化学品身份；浓度；交付质量；期初期末库存；槽液补加；排放 | 计量用水，并按库存平衡核对化学品消耗 | kg | 每次槽液配制及每月 | 与产品产出同期 | 纳入的冷却、清洗、蚀刻、漂洗与处理系统 | 产品或溶液质量与浓度、稀释水分开报告 | 仪表检查；供应商证书；槽液日志；库存核对 |
| `cp_cutting_fluid_records` | `metal_forming_fabrication` | 切削液补加与废切削油 | 流体系统与废物转移记录 | 配方；浓缩液质量；稀释水；油槽库存；更换质量；回收质量；去向 | 核对补加、留存、回收油和转移废物 | kg | 每次补加与更换 | 与产品产出同期 | 所有纳入加工和磨削系统 | 分别汇总新鲜产品和边界废物；不得合并油与水基冷却液 | 供应商 SDS；流体日志；废物联单；质量平衡检查 |
| `cp_gas_records` | `metal_forming_fabrication` | 工业氧气 | 钢瓶库存或校准流量计 | 气体身份；纯度；压力；温度；流量；钢瓶期初期末质量或体积；工序 | 在声明参考条件下计量流量或核对钢瓶库存 | m3 | 每个生产期或每月 | 与产品产出同期 | 纳入的热切割与加热设备 | 仅汇总准确气体并按合格产出归一化 | 仪表校准；供应商交付记录；钢瓶核对 |
| `cp_wastewater_records` | `metal_forming_fabrication` | 含钛酸性废水 | 流量计、槽罐转移与代表性样品 | 转移质量或体积；密度；pH；酸种类；钛浓度；其他成分；处理去向 | 计量每次转移，并按书面代表性方案取样 | kg | 每次转移；按代表性频率分析成分 | 与产品产出同期 | 每个纳入的蚀刻、酸洗、漂洗与处理排放点 | 必要时用实测密度换算体积；不同废水流保持分开 | 仪表校准；实验室报告；样品流转记录；处理联单 |
| `cp_direct_emissions_records` | `metal_forming_fabrication`; `magnesium_powder_production` | 直接化石源 CO2 与金属颗粒物 | CEMS、烟气测试、燃料排放计算或捕集粉尘平衡 | 排放源；期间；实测浓度或质量；烟气流量；燃料记录；排放区室；化学形态；粒径基准；控制效率；不确定性 | 优先直接测量；否则采用基于采集记录的书面工厂计算 | kg | 按适用情况连续、每次测试或每月计算 | 与产品产出同期 | 每个纳入的固定源和无组织排放点 | 按准确基本流和区室汇总；绝不计入上游发电排放 | 校准与烟气测试报告；计算工作簿；控制设备记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 期间边界数量 / 期间合格产品质量 | 准确流边界数量；合格产品质量 | 每 1 kg 参考产品的数量 |  |
| `calc_material_balance` | 金属或镁质量 | 核对验收原料 = 合格产品 + 边界废料或残余物 + 期末在制品 - 期初在制品 + 有记录的未计量损失；必须调查实质残差，不得将其隐藏 | 原料、产品、废料、残余物和在制品记录 | 批次及期间质量平衡残差 |  |
| `calc_energy_conversion` | 电力 | MJ = 实测 kWh × 3.6 | 实测 kWh | MJ 电力 |  |
| `calc_direct_emissions` | 直接化石源 CO2 与颗粒物 | 仅把有记录的工厂测量或计算方法应用于采集的排放源记录；报告方法、因子、不确定性和区室 | 燃料、CEMS、烟气测试、流量、浓度与控制记录 | 准确基本流的 kg 数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和所有含金属流 | 保留准确金属、合金或牌号、物理状态、产品形态和边界角色；不得使用笼统的重金属、金属粉末、废水或废料身份。 | 产品规格；供应商证书；Tiangong 直读身份；废物表征 |
| `dq_temporal` | 前景活动数据 | 使用时间匹配的投入与产出记录，至少覆盖一个有代表性的连续 12 个月；批次型生产则覆盖完整声明生产期。 | 带日期的仪表、批次、库存和生产记录 |
| `dq_completeness` | 所有纳入工序 | 核对材料、能源、水、化学品、废物和排放记录；披露缺失仪表、估算占比、排除工序和残差。 | 核对工作表；截断登记；质量平衡 |
| `dq_technology` | 路线相关工序 | 声明成形顺序、设备类型、热处理与表面处理、粉末路线、循环、减排和外包步骤。 | 工艺流程图；设备清单；运行日志；供应商记录 |
| `dq_geography` | 上游链接与直接排放 | 记录工厂位置、能源市场、供应商地域、水环境、废物去向和基本流区室。 | 数据集元数据；账单；许可证；转移联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 确认一种纳入范围的金属或镁粉、准确产品状态、质量属性和所有必需限定信息；拒绝把钛板 UUID 在语义上用于其他产品。 | `un-cpc-3-structure-2025` |
| `validate_route_boundary` | 过程图 | 确认只启用适用的锻轧或镁粉路线，且同址铸造、表面处理和制粉符合声明边界。 | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `validate_atomic_inventory` | 清单 | 确认每行是一个原子交换、每个实际技术特定流均已列出，且未以笼统公用工程、燃料、金属、废物、废水或排放替代准确身份。 |  |
| `validate_mass_balance` | 金属与产品质量 | 要求提供原料、产品、废料、残余物和在制品的书面核对；调查实质残差并披露未解决损失。 |  |
| `validate_energy_emissions` | 能源与直接排放 | 将电力和燃料与生产期间核对；直接排放行排除上游发电排放；核验每个基本流的化学形态和区室。 |  |
| `validate_foreground_quality` | 数据包 | 发布前确认时间、场址、技术、地理、计量、不确定性、分配和缺失数据披露。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种明确锻轧特种有色金属产品或金属镁粉的厂门前景产品数据集 |
| downstream_use | `secondary_dataset`; 经代表性审查后可作 `background_dataset` |
| allowed_use | 与所声明金属、牌号、形态、路线、地理、技术时期和厂门状态匹配的产品足迹、过程和生命周期模型研究 |
| excluded_use | 未经明确审查而代替其他金属、合金、产品形态、粉末化学组成、粒径等级、路线、地理或使用功能 |
| required_metadata | PCR id 与版本；准确产品身份和 UUID；牌号或成分；几何尺寸或粒径；状态；表面光洁度；工厂地理；技术与期间；过程图；纳入及外包工序；上游链接；再生含量方法；分配；数据质量；不确定性 |
| required_quality_disclosure | 计量与估算占比；质量平衡残差；时间和技术代表性；未解决 UUID 与范围；排除工序；废物与排放表征；分配和截断决定 |
| update_trigger | 主要金属或合金、牌号、产品形态、粉末路线、主要设备、热处理或表面处理、能源供应、减排、供应商组合、再生含量核算、分配或归一化清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-04 | CPC 41602 正式身份和产品范围文字 |
| `us-epa-nfmf-471` | `official_guidance` | 美国 EPA，Nonferrous Metals Forming and Metal Powders Effluent Guidelines，40 CFR Part 471 专题页，https://www.epa.gov/eg/nonferrous-metals-forming-and-metal-powders-effluent-guidelines，检索于 2026-09-04 | 类别和路线边界、机械法制粉、同址铸造、表面处理及废水范围 |
| `us-epa-nfmf-guidance-1989` | `official_guidance` | 美国 EPA，Aluminum, Copper, and Nonferrous Metals Forming and Metal Powders Pretreatment Standards: A Guidance Manual，EPA 800-B-89-001，1989-12，https://www.epa.gov/sites/default/files/2016-08/documents/aluminum-copper-nonferrous-forming_pretreat-guidance_1989.pdf，检索于 2026-09-04 | 过程分解、钛成形与蚀刻、制粉、润滑剂、水、废水和辅助工序 |
| `niosh-metalworking-fluids-1998` | `official_guidance` | NIOSH，Criteria for a Recommended Standard: Occupational Exposure to Metalworking Fluids，DHHS (NIOSH) Publication No. 98-102，1998，https://www.cdc.gov/niosh/media/pdfs/2026/06/98-102_1.pdf，检索于 2026-09-04 | 切削液投入、机械加工和磨削角色、切屑、流体气溶胶及废流体管理 |
