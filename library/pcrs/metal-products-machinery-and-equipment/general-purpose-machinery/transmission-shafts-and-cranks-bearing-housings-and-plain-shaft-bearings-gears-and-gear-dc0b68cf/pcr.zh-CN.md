---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.transmission-shafts-and-cranks-bearing-housings-and-plain-shaft-bearings-gears-and-gear-dc0b68cf
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 传动轴和曲柄；轴承座及滑动轴承；齿轮和齿轮传动装置；滚珠或滚柱丝杠、齿轮箱及其他变速装置；飞轮和滑轮；离合器及联轴器；铰接链

## 1. 范围与适用性

本 PCR 适用于所声明类别中新制机械动力传递与运动转换产品从摇篮到制造厂门的生产。范围包括传动轴和曲柄、轴承座和滑动轴承、齿轮和齿轮传动装置、滚珠或滚柱丝杠、齿轮箱及其他变速装置、飞轮和滑轮、离合器和联轴器以及铰接链。共同方法涵盖外购金属坯料或铸件、初步成形、机械加工或齿形加工、热处理、表面处理、装配、试验和放行（以实际发生为准）。

滚动轴承、非铰接链、受托制造服务、维修或再制造、外购材料的上游生产、包装、分销、使用、维护和生命末期均不在本 PCR 范围内。前景数据包应声明实际产品族、材料牌号、几何特征、制造路线、厂门状态以及各条件过程是否适用。为使参考流具体化，本 PCR 采用“装配完成的钢制单级斜齿工业齿轮箱”作为代表产品；其他范围内产品仅在明确声明自身产品身份和路线后，方可使用相同的质量归一化规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.transmission-shafts-and-cranks-bearing-housings-and-plain-shaft-bearings-gears-and-gear-dc0b68cf |
| classification_refs | CPC 3.0: 43320（`exact`） |
| covered_products | 新制成品传动轴、曲柄、轴承座、滑动轴承、齿轮、齿轮传动装置、滚珠或滚柱丝杠、齿轮箱、变速装置、飞轮、滑轮、离合器、联轴器和铰接链 |
| excluded_products | 滚动轴承；非铰接链；制造服务；维修和再制造；包装；分销；使用；维护；生命末期 |
| representative_product | 装配完成的钢制单级斜齿工业齿轮箱 |
| production_route | 所声明的坯料或铸件接收、初步成形、机械加工或齿形加工、热处理、表面处理、装配、试验和放行的组合 |
| market_state | 制造场址门口的新制、完工、未包装产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所声明产品族内传递或转换转矩和运动的机械成品 |
| How much | 所声明成品净质量 1 kg |
| How well | 满足所声明图样和验收规范，包括产品族、材料牌号、额定转矩或载荷、适用时的速比、适用时的效率或回程间隙以及表面状态 |
| How long or cycle | 仅提供厂门产品；不主张使用寿命和使用循环 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 成品净质量 1 kg |
| 参考产品流 | 装配完成的钢制单级斜齿工业齿轮箱 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品族和型号；材料牌号；产品净质量；主要尺寸；额定转矩或载荷；适用时的输入和输出转速或速比；适用时的效率或回程间隙规范；热处理状态；表面处理；所含附件；制造场址和地理范围；报告期；厂门状态 |

构建前景数据包时，`必需限定信息` 中的每项信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。不得用语义范围更窄的风轮机变速箱候选项替代尚未解决的产品流 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在拆除临时搬运辅助物且包装前，确定厂门状态产品净质量；说明是否计入永久润滑剂和永久安装附件。 |
| `item_to_mass` | 以件数报告的生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测单件质量或有文件记录的同质批次平均值将件数换算为质量；不同型号、尺寸或材料牌号不得共用一个平均值。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按能量记录交付电力；原始记录为 kWh 时，采用精确换算 1 kWh = 3.6 MJ，并保留原始计量单位和换算过程。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留计量体积，并披露基准温度、压力以及仪表报告的是标准立方米还是实际立方米。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_1` | foreground_operations | 纳入现场接收和搬运、适用路线的成形、机械加工或齿形加工、热处理、表面准备或处理、装配、试验、内部物料搬运、现场废水处理以及直至厂门放行。 | `us-epa-metal-products-machinery-2003` |
| `boundary_2` | purchased_inputs | 在每种外购材料、化学品、燃料、电力、水和外制部件跨越制造场址边界时分别记录；其上游生产使用地理和技术上具有代表性的独立数据集建模。 | `us-epa-metal-products-machinery-2003` |
| `boundary_3` | exclusions | 除非所声明研究范围明确纳入并单独报告，否则排除资本品、建筑施工、员工出行、包装、分销、使用、维护和生命末期。 |  |
| `boundary_4` | direct_emissions | 前景基本流仅报告现场直接排放；不得重复计入外购电力、燃料、材料或处理数据集中已表示的上游排放。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购金属坯料、铸件、化学品、燃料、电力、水和外制部件到达制造场址接收点 |
| starting_condition_role | 从摇篮到厂门的前景制造起始条件 |
| product_classification_scope | 语义上属于 CPC 3.0 类别 43320 的成品；分类仅提供映射语境，不能替代产品身份 |
| recursive_input_rule | 对已属于本产品类别的外购输入，以原子产品输入及其上游数据集记录一次；不得在接收过程中递归重建其制造。 |
| upstream_dataset_requirement | 有供应商特定数据时优先使用；否则使用地理、技术、时间和材料上具有代表性的上游数据集，并披露替代。 |
| disclosure | 声明外购与厂内制造边界、材料牌号、净质量与毛质量处理、适用路线过程、共享资源分配、废料去向、废水去向、直接排放方法、排除项和上游代理。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_and_primary_shaping` | 材料接收与初步成形 | required | 所有数据包均包括接收；锻造、铸造、切割、拉拔或成形仅在现场实施时表示。 | 前景材料准备和近净成形 | 每 1 kg 成品净质量参考产品 |
| `machining_and_tooth_generation` | 机械加工与齿形加工 | conditional | 现场实施车削、铣削、钻削、拉削、磨削、珩磨、研磨、螺纹或齿形加工等减材工序时纳入。 | 前景尺寸与表面生成 | 每 1 kg 成品净质量参考产品 |
| `heat_treatment` | 热处理 | conditional | 现场实施退火、正火、渗碳、氮化、淬火、回火、感应处理或油淬时纳入。 | 前景冶金性能控制 | 每 1 kg 成品净质量参考产品 |
| `surface_treatment` | 表面处理与清洗 | conditional | 现场实施水基清洗、碱洗、转化膜、电镀、涂装或相关漂洗时纳入。 | 前景清洗、防腐和精整 | 每 1 kg 成品净质量参考产品 |
| `assembly_testing_and_release` | 装配、试验与放行 | required | 纳入适用的最终装配或连接、验收试验、最终检验和厂门放行。 | 前景最终产品放行 | 成品净质量参考产品恰为 1 kg |

### 过程：材料接收与初步成形（`material_receipt_and_primary_shaping`）

#### 输入

##### 产品流

###### 合金钢棒料（`alloy_steel_bar`）

记录为轴、曲柄、齿轮、丝杠、联轴器或相关部件制造而跨越场址边界的合金钢棒。所声明路线不使用该坯料时方可记录为零。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量减去有文件记录的供应商退货量，再按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 灰铸铁壳体铸件（`grey_cast_iron_housing_casting`）

记录跨越场址边界的外购灰铸铁轴承座或齿轮箱壳体铸件。该流不得与生铁、钢坯或其他通用铸件合并。

- 选定流：灰铸铁壳体铸件
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量减去有文件记录的供应商退货量，再按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 未锻轧铝合金（`aluminium_alloy`）

记录用于现场铸造铝合金壳体或滑轮的未锻轧铝合金。该合金铸造不在声明路线内时记录为零。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：实测投料质量扣除有文件记录的供应商退货量，再按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 低合金钢丝（`low_alloy_steel_wire`）

记录用于现场成形和连接铰接链的低合金钢丝。非链类产品或使用其他已声明钢丝身份的链制造路线记录为零。

- 选定流：低合金钢丝 `461d98b3-a825-41bb-9b16-056331873326`
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量减去有文件记录的供应商退货量，再按合格产品产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 成形用电（`forming_electricity`）

记录切割、锻造、铸造、拉拔、弯曲、成形、除尘及本过程直接相关设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采用分表计量能量；无专用分表时，采用有文件记录的设备级场址总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 成形用天然气（`forming_natural_gas`）

记录适用路线中现场锻造或铸造炉燃烧的气态天然气；前景直接排放不得包含天然气上游供应排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量并分配至本过程的标准或实际体积，同时披露基准条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

#### 输出

##### 废物流

###### 分类收集的工业后钢废料（`forming_steel_scrap`）

记录作为分类废物流离开过程的清洁铁质边角料、飞边、切头和钢制不合格件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：称量外运质量加经核实的内部废料库存变化；不得从前景数量中净扣再生信用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 基本流

###### 成形炉直接排放的化石二氧化碳（`forming_fossil_co2`）

记录成形炉现场燃烧天然气产生的化石二氧化碳，不计上游燃料或电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 `calc_direct_fossil_co2` 使用采集的燃料碳和氧化记录计算；有经核实的直接测量时可用烟气实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_records`
- 来源：

### 过程：机械加工与齿形加工（`machining_and_tooth_generation`）

#### 输入

##### 产品流

###### 机械加工用电（`machining_electricity`）

记录所声明机械加工路线中机床、冷却液循环、切屑处理、局部抽排和过程检验所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量能量，或依据机时对场址电表进行有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 机械加工工艺用水（`machining_process_water`）

记录作为产品输入跨越本过程边界、用于配制冷却液、湿磨或过程清洗的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或按配方确定供水质量，扣除单独计量且未跨越边界的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 切削液（`cutting_fluid`）

记录加入机械加工系统的新切削液浓缩液或纯油型切削液；过程内循环使用的液体不得重复计入。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：采购补加量加期初库存，减期末库存和有文件记录的转出量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

#### 输出

##### 废物流

###### 钢制机械加工切屑（`steel_chips`）

记录机械加工产生并离开过程的分类钢屑；仅在废物称量无法分离附着切削液时计入该附着质量，并披露限制。

- 选定流：钢屑 `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- 流属性/单位：Mass / kg
- 数量规则：称量外运质量加经核实的库存变化，并记录附着液体的处理方式
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 废切削油（`waste_cutting_oil`）

记录退出使用并送往处理、回收或处置的废油基切削液，不得与水性废水合并。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：称量转移量，或用有文件记录的密度将体积换算为质量，并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_machining_records`
- 来源：`us-epa-metal-products-machinery-2003`

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用电（`heat_treatment_electricity`）

记录所声明热处理路线中电炉、感应设备、控制系统、淬火循环和相关抽排使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量能量，或依据批次装载率和循环记录进行有文件记录的炉次分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 热处理用天然气（`heat_treatment_natural_gas`）

记录热处理炉现场燃烧的气态天然气；全电力声明路线记录为零。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按炉次分配计量体积，并披露基准条件和分配依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 淬火油（`quenching_oil`）

记录加入现场油淬系统的新淬火油；采用空气、水、聚合物、盐浴或其他已声明淬火介质时记录为零。

- 选定流：淬火油 `02f62137-e204-46e6-8e72-e88b450fbdc4`
- 流属性/单位：Mass / kg
- 数量规则：采购补加量加期初库存，减期末库存和有文件记录的转出量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

#### 输出

##### 废物流

###### 废淬火油（`spent_quench_oil`）

记录退出使用并送往处理、回收或处置的淬火油。

- 选定流：废淬火油 `0f997fd8-26b1-432f-a8b8-e2703616b018`
- 流属性/单位：Mass / kg
- 数量规则：称量转移量，或用有文件记录的密度将体积换算为质量，并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`us-epa-metal-products-machinery-2003`

##### 基本流

###### 热处理直接排放的化石二氧化碳（`heat_treatment_fossil_co2`）

记录热处理炉现场燃烧天然气产生的化石二氧化碳，不计上游燃料或电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 `calc_direct_fossil_co2` 使用采集的燃料碳和氧化记录计算；有经核实的直接测量时可用烟气实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

### 过程：表面处理与清洗（`surface_treatment`）

#### 输入

##### 产品流

###### 表面处理用电（`surface_electricity`）

记录所声明表面处理路线中清洗、槽液加热、泵送、抽排、整流、干燥及直接相关废水处理使用的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量能量，或依据生产线时间对场址电表进行有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 表面处理工艺用水（`surface_process_water`）

记录供应给该路线水基清洗、槽液配制、漂洗和现场处理的工艺用水，扣除未跨越过程边界的内部回用量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量输入质量，或使用有文件记录的密度和基准条件将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 氢氧化钠清洗剂（`sodium_hydroxide`）

记录外购碱性清洗剂中所含或直接加入现场清洗槽的氢氧化钠；报告活性氢氧化钠质量，不报告溶液总质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：外购溶液质量乘以供应商浓度，加直接固体投加量，并按库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-metal-products-machinery-2003`

#### 输出

##### 废物流

###### 金属精整废水（`metal_finishing_wastewater`）

记录表面清洗或处理产生并送往现场或场外处理的水性废水流，不得与废油或污泥合并。

- 选定流：金属精整废水
- 流属性/单位：Mass / kg
- 数量规则：在跨越边界转移处理前计量排放质量，或用有文件记录的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 含金属表面处理污泥（`metal_bearing_sludge`）

记录表面工艺废水处理所产生并移出的脱水含金属污泥；如产生油泥和废涂料，应另设原子流行。

- 选定流：含金属表面处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量湿质量，并在前景记录中保留干固体分数和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-metal-products-machinery-2003`

### 过程：装配、试验与放行（`assembly_testing_and_release`）

#### 输入

##### 产品流

###### 装配和试验用电（`assembly_electricity`）

记录装配工具、连接设备、试验台、最终检验和直接相关搬运使用的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量能量，或依据设备时间对场址电表进行有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`us-epa-metal-products-machinery-2003`

###### 永久润滑脂（`lubricating_grease`）

记录厂门状态下留存在代表产品内的润滑脂，不得与工艺切削油或淬火油合并。

- 选定流：润滑脂
- 流属性/单位：Mass / kg
- 数量规则：实测合格放行产品的加注质量，或采用加注容器质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

#### 输出

##### 产品流

###### 参考产品（`reference_product`）

该输出是 PCR 参考流所采用的具体代表产品。现有风轮机变速箱身份并非精确语义匹配，因此产品流 UUID 保持未解决。

- 选定流：装配完成的钢制单级斜齿工业齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：厂门状态成品净质量恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_1` | product_and_process_assignment | 在可行时，通过分别计量并记录产品特定的材料、机床、炉次、生产线和试验活动来避免分配。 |  |
| `allocation_2` | shared_resources | 无法直接计量时，仅可使用机时、炉膛占用与循环、处理表面积或试验台时间等有文件记录的因果工程参数分配共享资源；仅当产品采用实质可比的工序时方可按质量分配。 |  |
| `allocation_3` | metal_scrap | 报告金属毛投入和外运废料，不得在前景过程中减去再生信用；披露废料去向，并仅在下游 LCA 方法中应用一次替代法或再生含量约定。 |  |
| `allocation_4` | nonconforming_product | 将返工和不合格品负荷分配给产生该负荷的生产批次；回收材料作为明确废物或产品输出记录，并说明库存变化。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `material_receipt_and_primary_shaping` | 外购金属、电力、天然气、废料和直接燃烧排放 | 磅单、接收与库存记录、公用工程仪表、炉次日志、废物联单 | 产品代码；材料牌号；期初和期末库存；接收和退货质量；电力；天然气体积和基准条件；合格产出；废料质量；化石碳数据 | 按产品路线核对经校准秤具、发票、分表、炉次和废物转移 | kg；MJ；m3 | 按每次接收、批次、仪表周期和废物转移采集，按月汇总 | 至少连续 12 个代表性月份；间歇生产则覆盖完整生产期 | 所有范围内现场成形设备及直接相关控制和抽排 | 汇总跨边界数量，调整库存变化，按因果关系分配共享活动，再除以合格成品净质量 | 校准记录、发票、批次日志、分配工作表、废物联单和异常审查 |
| `cp_machining_records` | `machining_and_tooth_generation` | 电力、水、切削液、切屑和废切削油 | 分表、机床日志、采购和库存记录、水表、废物联单 | 机床编号；产品代码；运行时间；电力；水；液体补加；期初和期末液体库存；切屑质量；废油质量；合格产出 | 将机床和液体系统记录与边界仪表及外运废物核对 | kg；MJ | 按批次和仪表周期采集，按月汇总 | 至少连续 12 个代表性月份；间歇生产则覆盖完整生产期 | 所有范围内现场机械加工和齿形加工设备 | 分别汇总并调整各原子流库存，按有文件记录的机床活动分配，再除以合格成品净质量 | 仪表校准、采购记录、生产日志、废物票据和核对工作表 |
| `cp_heat_treatment_records` | `heat_treatment` | 电力、天然气、淬火油、废油和直接燃烧排放 | 炉体仪表和批次日志、油品库存、废物联单、燃料碳信息 | 炉号；循环；装炉量；电力；天然气体积和基准条件；油品补加；油品库存；废油；合格产出；化石碳数据 | 核对各炉次，并按炉膛占用和循环分配共享批次 | kg；MJ；m3 | 按炉次和废物转移采集，按月汇总 | 至少连续 12 个代表性月份；间歇生产则覆盖完整生产期 | 所有范围内现场热处理设备 | 汇总能源和油品平衡，适用时计算直接化石 CO2，再除以合格成品净质量 | 仪表校准、炉次日志、供应商数据、废物票据和批次核对 |
| `cp_surface_records` | `surface_treatment` | 电力、水、氢氧化钠、废水和污泥 | 生产线仪表、槽液补加日志、化学品发票、浓度证明、排放仪表、污泥票据 | 生产线编号；产品代码；处理质量或面积；电力；水；清洗剂溶液质量；NaOH 分数；槽液库存；废水；污泥湿质量；干固体；合格产出 | 核对槽液补加、漂洗、处理输出和生产线记录 | kg；MJ | 按每次槽液补加、批次、仪表周期和废物转移采集，按月汇总 | 至少连续 12 个代表性月份；间歇生产则覆盖完整生产期 | 所有范围内现场表面处理和直接相关废水处理设备 | 计算活性 NaOH，调整库存，按因果关系分配共享生产线活动，再除以合格成品净质量 | 仪表校准、化学品证明、槽液日志、排放记录、实验室结果和废物联单 |
| `cp_assembly_records` | `assembly_testing_and_release` | 电力、永久润滑脂和放行产品 | 分表、工具或试验台日志、润滑脂领用或加注记录、经校准产品秤 | 产品型号；序列号或批号；电力；试验时间；润滑脂领用和退回；加注质量；产品净质量；放行数量 | 核对合格单元的放行产品、润滑脂质量平衡和设备活动 | kg；MJ | 按批次和仪表周期采集，按月汇总 | 至少连续 12 个代表性月份；间歇生产则覆盖完整生产期 | 所有范围内现场装配、试验、检验和放行设备 | 汇总各项投入，按因果关系分配共享活动，再除以放行成品净质量 | 秤具和仪表校准、试验记录、物料清单、润滑脂加注记录和放行证书 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 所有清单行 | 归一化数量 = 分配给合格产品并经库存调整的数量 / 合格成品净质量 | 跨边界数量；期初和期末库存；退货或转移；因果分配；合格产品净质量 | 每 1 kg 参考产品的数量 |  |
| `calc_active_naoh` | `sodium_hydroxide` | 活性 NaOH 质量 = 清洗剂溶液质量 × 供应商或实测 NaOH 质量分数 + 直接固体 NaOH 投加量，并按期初和期末库存调整 | 溶液质量；NaOH 分数；固体投加量；库存变化 | 每 1 kg 参考产品的氢氧化钠 kg 数 |  |
| `calc_direct_fossil_co2` | `forming_fossil_co2`；`heat_treatment_fossil_co2` | 化石 CO2 质量 = 已氧化化石碳质量 × 44 / 12；使用经核实的场址或供应商特定碳和氧化记录，并将成形与热处理燃料分开 | 分配燃料量；化石碳含量；氧化分数 | 每 1 kg 参考产品的直接化石 CO2 kg 数 |  |
| `calc_mass_balance` | 含金属过程 | 核对期初库存 + 金属投入与期末库存 + 合格产品 + 金属输出和有文件记录的损失；调查差异，不得强行平衡 | 金属接收；库存；产品质量；废料和切屑质量；有文件记录的转移 | 过程质量平衡差异及说明 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料投入 | 为每个代表批次保留产品型号、图样或规范、材料牌号、产品族、热处理状态、表面处理和厂门状态。 | 放行证书、物料清单、图样、材料证明和批次追溯记录 |
| `dq_measurement` | 秤具、仪表和分析值 | 使用经校准或依法检定的设备；保留单位、校准状态、测量边界、基准条件和换算因子。 | 校准证书、仪表台账、实验室方法和换算工作表 |
| `dq_temporal` | 前景活动 | 覆盖至少连续 12 个代表性月份或完整生产期；披露停机、启动、异常批次和替代。 | 有日期的生产、采购、仪表、库存和废物记录 |
| `dq_completeness` | 清单 | 按采购、仪表、生产、库存和废物控制总量核对每个过程，并说明排除项和记录为零的数值。 | 核对工作簿、差异审查和责任人批准 |
| `dq_allocation` | 共享过程 | 说明选定因果参数为何代表资源使用，并保留共享活动总量和分配至产品的活动量。 | 仪表总量、机床或炉次日志、分配工作表和敏感性检查 |
| `dq_waste` | 废料、切屑、油、废水和污泥 | 保留物理状态、适用时的污染或干固体信息、测量依据、去向以及现场或场外处理边界。 | 废物联单、磅单、实验室结果、排放记录和承包商收据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_1` | reference_flow | 确认清单归一化为成品净质量恰好 1 kg，且所声明产品和必需限定信息完整。 |  |
| `validation_2` | inventory_identity | 确认每张清单卡仅含一个原子交换，并具有经核实的 TianGong UUID 或与 manifest 中记录相同的明确未解决行号。 |  |
| `validation_3` | process_route | 确认所有纳入过程与所声明制造路线一致，并确认记录为零的每个条件过程和路线特定行确实不存在。 | `us-epa-metal-products-machinery-2003` |
| `validation_4` | metal_mass_balance | 对每个适用含金属过程核对金属投入、库存变化、成品、废料、切屑和有文件记录的损失；放行前调查材料差异。 |  |
| `validation_5` | energy_and_emissions | 将过程电力和燃料与场址仪表总量核对，并确认直接化石 CO2 不含电力和燃料供应的上游排放。 |  |
| `validation_6` | wastewater_and_sludge | 核对表面工艺用水与回用、废水、实测蒸发、产品带出和污泥水分；披露所有未测量项。 | `us-epa-metal-products-machinery-2003` |
| `validation_7` | evidence_and_ranges | 外部推断范围只有在至少两个相互独立的原始来源具有相容的边界、功能单位和产品状态时才可接受；未解决范围需求应保留为前景采集要求，不得虚构数值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定的从摇篮到制造厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；当所声明产品和路线对消费模型具有代表性时可作 `background_dataset` |
| allowed_use | 消耗所声明传动或动力传递产品的产品与系统 LCA；制造改进；功能和边界对齐后的供应商与路线比较 |
| excluded_use | 未对齐额定功能和使用寿命的不同产品族比较；使用阶段声明；维修或再制造声明；未经代表性审查的通用区域市场建模 |
| required_metadata | PCR id 和版本；产品型号和产品族；材料牌号；净质量；额定载荷或转矩；适用时的速比；适用时的效率或回程间隙；路线；场址和地理范围；报告期；分配；废料和废物去向；上游数据集引用；未解决身份 |
| required_quality_disclosure | 时间和场址覆盖；测量和校准状态；数据完整性；分配和质量平衡结果；路线排除；代理数据集；直接排放方法；废水和污泥依据；未解决 UUID 和范围证据需求 |
| update_trigger | 产品设计、物料清单、路线、热处理或表面处理、场址能源供应、分配、废物去向发生实质变化；数据超过适用代表性期限；或已记录的身份或证据缺口得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | 正式分类身份和类别边界种子 |
| `us-epa-metal-products-machinery-2003` | official_guidance | 美国环境保护署，《金属制品与机械点源类别最终排放限值指南和标准制定文件》，2003 年，https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf（检索日期：2026-09-05） | 过程分解、工序顺序、机械加工、热处理、清洗、表面精整、装配及相关废水证据 |
