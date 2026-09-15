---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.metal-goods-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另分类的金属制品

## 1. 范围与适用性

本 PCR 适用于属于 CPC 42999 剩余范围且未在其他类别中得到更具体分类的可销售金属制品。所涵盖的实例包括：铁或钢制锚、多爪锚及其零件，研磨机用磨球，铜丝网布或铜丝膨胀金属，铜弹簧，锌制建筑构件，贱金属制托架和帽架，贱金属制自动闭门器，贱金属制挠性管，贱金属制标示牌，钟铃和锣，除铸造、锻造或冲压外未进一步加工的铁、钢或铜制品，以及其他镍、铝、铅、锌或锡制品。

本 PCR 的前景范围从已声明的金属原料和辅助材料进入制造场址开始，经过适用的成形、加工、清洗、表面处理、涂装及精整，直至成品在工厂大门交付。外购金属、电力、燃料、水和化学品的上游生产采用供应商特定或在地域上具有代表性的上游数据集。

归入更具体 CPC 子类的产品、机械、电气设备、已有专门 PCR 的结构金属制品、家用金属制品、手工工具、容器、紧固件、钢丝绳、钢丝网布、焊接材料、锁具、保险箱、办公用品、装饰品、缝纫用品及船用螺旋桨均不在本 PCR 范围内。安装、使用、维护和寿命终止阶段默认在边界之外。由于 CPC 42999 异质性较高，只有在产品子类型、材料规范、性能、表面状态、服役条件及工厂大门边界相同的前提下才可进行比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.metal-goods-n-e-c |
| classification_refs | CPC 3.0：42999，未另分类的金属制品 |
| covered_products | CPC 42999 纳入且未归入更具体产品子类的剩余金属制品 |
| excluded_products | 分类更具体的金属制品；机械和电气设备；具有专门身份的结构金属制品；安装、使用、维护和寿命终止服务 |
| representative_product | 符合所声明图样、材料、尺寸、机械性能、表面状态和性能规范的制成并可销售的金属制品 |
| production_route | 切割或毛坯准备、成形或铸锻、机加工、连接、热处理、水系表面处理、有机涂装和精整等产品特定组合 |
| market_state | 制造工厂大门处的制成品；除非另行声明，否则不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所声明剩余产品子类型中的制成金属制品 |
| How much | 1 kg 合格成品净质量 |
| How well | 符合所声明图样、合金或牌号、尺寸和公差、机械性能、表面处理、涂层及验收规范 |
| How long or cycle | 工厂大门处的一次制造输出；不主张使用期限上的等效性 |
| reference_flow_link | reference_metal_good |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未另分类的制成金属制品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；材料及合金或牌号；供料形态；成品尺寸和净质量；制造路线；热处理；表面处理和涂层规范；报告再生含量时采用的声明及监管链依据；生产场址和地域；参考期；是否计入包装；工厂大门状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

尚未为该剩余类别的制成品确认完全匹配的 Tiangong 公开 state-100 产品流。保留可读的参考产品身份并将 UUID 标记为未解决；不得以泛称金属、原料、子组件或未具体说明的零件候选项代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所有纳入的精整完成后计量验收成品净质量；托盘、可周转运输物品及另行报告的包装不计入。 |
| `material_mass_basis` | 金属、化学品、涂料、废料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按收货状态记录质量，并另行保留解释该交换所需的组成、浓度、水分或固体分。 |
| `electricity_energy_basis` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表读数；按严格恒等式 1 kWh = 3.6 MJ 换算，并披露电表覆盖范围及任何分配。 |
| `gas_volume_basis` | 天然气和氧气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明的基准温度和压力报告计量体积；不得合并不同气体，也不得在未声明基准状态和换算依据时换算体积。 |
| `water_mass_basis` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用质量计量值，或以有文件记录的密度和温度将体积换算为质量；区分补充水和内部循环水。 |
| `mass_balance_check` | 成形与加工过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一期间内，使每种已声明金属投入与合格产品、单独记录的废料、在制品及实测库存变化相协调。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购金属原料和辅助材料进入制造场址，已声明供应商、材料牌号、供料形态、再生含量依据及进厂质量 |
| starting_condition_role | 前景工厂大门投入条件；上游生产仍由关联数据集表示 |
| product_classification_scope | 仅限所声明的 CPC 42999 剩余产品子类型；更具体的产品身份优先 |
| recursive_input_rule | 当外购组件本身也是 CPC 42999 金属制品时，将其作为一个带供应商数据集的上游产品投入记录，不在接收方前景过程中递归重建其生产 |
| upstream_dataset_requirement | 优先使用供应商特定数据集；否则为每项外购金属、能源载体、水和化学品使用在技术与地域上具有代表性的数据集 |
| disclosure | 声明产品子类型、合金或牌号、原料形态、路线步骤、处理和涂层、场址、参考期、上游数据集选择、截断、包装处理及任何同类别外购组件 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入为使合格产品在工厂大门交付所需的全部场内成形、加工、连接、热处理、清洗、表面处理、涂装、精整、返工、内部物料搬运、直接排放和废物。 | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `boundary_route_disclosure` | 异质产品路线 | 只有所声明产品确实发生该步骤时才纳入条件过程；仅可在图样、工艺路线或生产记录能够证明时报告为不适用。 | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_upstream_inputs` | 外购投入 | 为每项外购金属、电力、燃料、水和化学品关联供应商特定或具有代表性的上游数据集；不得把上游排放嵌入前景行。 |  |
| `boundary_exclusions` | 出厂后阶段 | 排除安装、出厂后的配送、使用、维护和寿命终止；若研究明确扩展边界，则应单独报告这些阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_and_fabrication` | 成形与加工 | `required` | 始终纳入；只记录所声明产品路线中实际发生的材料特定投入行 | 将进厂金属原料转化为成品或待精整制品的前景过程 | 1 kg 合格成品 |
| `aqueous_surface_treatment` | 水系表面处理 | `conditional` | 工艺路线包含水系清洗、酸洗、电镀、阳极氧化或其他电解/化学水系处理时纳入 | 前景清洗和无机表面改性 | 处理产品质量和处理表面积 |
| `organic_coating` | 溶剂型有机涂装 | `conditional` | 场内施涂、干燥或固化溶剂型涂料时纳入 | 前景涂装、固化和排放控制 | 涂装产品质量和涂装表面积 |

### 过程：成形与加工（`forming_and_fabrication`）

#### 输入

##### 产品流

###### 碳素钢原料（`carbon_steel_input`）

仅针对已声明的铁或钢路线记录碳素钢；牌号和供料形态必须与进厂记录一致。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态碳素钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 铜线材原料（`copper_wire_input`）

仅针对铜丝网布、网、膨胀金属、弹簧或其他已声明的铜线材路线记录铜线材。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态铜线材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 铝板材原料（`aluminium_sheet_input`）

仅在铝制品路线将板材明确声明为进厂形态时记录铝板材。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态铝板材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 锌板原料（`zinc_sheet_input`）

仅针对锌制建筑构件或进厂记录明确为板材的其他路线记录锌板。

- 选定流：锌板
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态锌板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 镍板原料（`nickel_sheet_input`）

仅针对已声明的镍制品路线记录镍板形态；保留合金和厚度信息。

- 选定流：镍板、镍薄板、镍带条及镍箔 `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态镍板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 铅板原料（`lead_sheet_input`）

仅在所声明产品路线和进厂材质证明能够确认供料形态时记录铅板。

- 选定流：铅板
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态铅板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 锡板原料（`tin_sheet_input`）

仅在所声明产品路线和进厂材质证明能够确认供料形态时记录锡板。

- 选定流：锡板
- 流属性/单位：Mass / kg
- 数量规则：按产品工艺路线领用的实测收货状态锡板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

###### 成形与加工用电力（`forming_electricity`）

记录切割、成形、机加工、连接、搬运、抽排及其他纳入的加工设备所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所声明产品工艺路线的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`eu-jrc-sf-bref-2024`

###### 直接加热用天然气（`forming_natural_gas`）

仅当场内为原料加热、热处理或其他纳入的成形操作燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明基准状态下分配至所声明产品工艺路线的计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_inputs`
- 来源：`eu-jrc-sf-bref-2024`

###### 氧燃操作用工业氧气（`forming_oxygen`）

仅当所声明工艺路线包含氧燃切割、加热或其他氧助操作时记录氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在声明基准状态下分配至所声明产品工艺路线的计量氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_inputs`
- 来源：`eu-jrc-sf-bref-2024`

##### 废物流

基准路线不规定废物投入。场址若以外购废料作为原料，应依据其真实身份和处理边界另列为具体外购产品流或废物流。

##### 基本流

基准路线不规定基本流投入。

#### 输出

##### 产品流

###### 合格制成金属制品（`reference_metal_good`）

记录所声明路线包含的全部过程完成后验收的成品输出。

- 选定流：未另分类的制成金属制品
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格成品的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 送往回收的钢铁废碎料（`steel_scrap_for_recycling`）

仅针对已声明的钢制品路线，记录离开场址送往回收的分类钢制边角料、切屑或不合格钢件。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界送往回收的分类钢废料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_output`
- 来源：`eu-jrc-sf-bref-2024`

##### 基本流

###### 成形加热产生的化石源二氧化碳（`forming_fossil_co2`）

仅记录本过程中场内燃烧天然气直接排放的化石源二氧化碳；不计上游燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一参考期内分配至成形与加工的场址报告直接化石源 CO2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-sf-bref-2024`

### 过程：水系表面处理（`aqueous_surface_treatment`）

#### 输入

##### 产品流

###### 水系处理用工艺用水（`surface_treatment_water`）

记录跨越场址边界的补充水和漂洗水；不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入所纳入水系处理线的计量工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品，并保留处理表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_inputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 碱性处理用氢氧化钠（`surface_treatment_sodium_hydroxide`）

仅当纳入的碱洗、蚀刻、剥离或 pH 调节步骤使用氢氧化钠时记录；保留供货浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据采购和槽液加料记录得到的收货状态氢氧化钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留溶液浓度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_inputs`
- 来源：`eu-jrc-stm-bref-2006`

###### 水系处理用电力（`surface_treatment_electricity`）

记录计量至所纳入处理线的电化学反应、泵送、抽排、加热和干燥用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所纳入水系处理线的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留处理表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`eu-jrc-stm-bref-2006`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

不规定单独可销售的产品输出；处理后的工件留在前景路线内，并在成品质量平衡中协调。

##### 废物流

###### 废碱性处理液（`spent_alkaline_liquor`）

当废碱性槽液离开前景处理线进入场内或场外处理时记录；保留组成和去向。

- 选定流：废碱液 `ca310225-50c8-4d41-8353-4338b41e19a1`
- 流属性/单位：Mass / kg
- 数量规则：转移至处理的废槽液称重质量或由体积和密度计算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留槽液组成
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_wastes`
- 来源：`eu-jrc-stm-bref-2006`

###### 含金属表面处理废水（`metal_bearing_wastewater`）

记录离开处理线或场址边界的废水，并声明金属种类、浓度基准、处理状态和去向。

- 选定流：含金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：分配至所纳入处理路线的计量排放质量，或以有文件记录的密度将计量体积换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留处理表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_wastes`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

不规定泛称的水环境基本流排放。当处理后水体直接排入环境时，应将每种实测排放物质分别添加为独立基本流交换，不得以废水废物流代替。

### 过程：溶剂型有机涂装（`organic_coating`）

#### 输入

##### 产品流

###### 溶剂型涂料（`solvent_based_paint`）

记录施涂于所声明金属制品的收货状态配制溶剂型涂料；保留固体分和挥发分。

- 选定流：涂料（溶剂型） `d8cbeec3-56d9-4b41-a5f6-6a754958182c`
- 流属性/单位：Mass / kg
- 数量规则：领用至所纳入涂装线的收货状态涂料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品，并保留涂装表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-jrc-sts-bref-2020`

###### 涂装线用电力（`coating_electricity`）

记录分配至涂装线的施涂、通风、治理、搬运和固化设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至所纳入溶剂型涂装线的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留涂装表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`eu-jrc-sts-bref-2020`

###### 涂层固化用天然气（`coating_natural_gas`）

仅在场内为溶剂型涂层干燥或固化燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明基准状态下分配至涂层干燥或固化的计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留涂装表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_inputs`
- 来源：`eu-jrc-sts-bref-2020`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

不规定单独可销售的产品输出；固化后的涂装工件留在前景路线内，并在成品质量平衡中协调。

##### 废物流

###### 废涂料残渣（`waste_paint`）

将未使用的已混合涂料、过喷捕集残渣和涂料清理残渣作为一项已声明的废涂料流记录；不包含排放的溶剂质量。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass / kg
- 数量规则：转移至所声明处理去向的废涂料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品，并保留废物组成
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_wastes`
- 来源：`eu-jrc-sts-bref-2020`

##### 基本流

###### 排入空气的非甲烷挥发性有机化合物（`coating_nmvoc`）

记录涂装、闪蒸、干燥、固化和溶剂清洗经捕集与治理后直接排入空气的非甲烷 VOC；不计上游排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一生产期间内的实测有组织和无组织 NMVOC，或场址批准的涂料质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品，并保留涂装表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-sts-bref-2020`

###### 涂层固化产生的化石源二氧化碳（`coating_fossil_co2`）

仅记录为干燥或固化燃烧天然气直接排放的化石源二氧化碳；不计上游燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：同一参考期内分配至涂层干燥或固化的场址报告直接化石源 CO2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品，并保留涂装表面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-sts-bref-2020`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享加工、处理和涂装操作 | 尽可能通过单独计量或工程核算产品特定工艺路线、机器时间、处理面积、批次负载和材料领用，以避免分配。 |  |
| `allocation_physical_fallback` | 无法避免的共享公用工程和共同操作 | 无法细分时，以机器时间、批次时间、处理表面积或产品质量等最接近因果关系的物理动因分配电力、燃料、水和共同耗材；披露动因并进行敏感性说明。 |  |
| `allocation_scrap_no_avoided_burden` | 可回收金属废料 | 将废料质量和去向作为单独输出报告。除非下游研究一致地采用并披露单独的回收方法，否则不得在前景清单内计入避免原生金属生产的抵扣。 |  |
| `allocation_no_hidden_netting` | 返工、内部循环和废物 | 在总投入和能源记录中保留内部循环和返工；不得将废物、回收材料或直接排放与参考产品相抵。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `forming_and_fabrication` | 金属原料 | 收货、库存领用和材质证明记录 | 材料身份；合金或牌号；供料形态；供应商；批次；领用总质量；退料；期初和期末库存 | 按产品工艺路线协调采购、仓储和生产领用记录 | kg | 每次收货和领用；按月汇总 | 至少 12 个具有代表性的月份，或针对批次生产覆盖完整生产活动 | 每个纳入的生产场址和产品路线 | 净领用质量 = 领用量减有记录的退料量，并按验收输出归一化 | 材质证明、校准秤记录和库存协调 |
| `cp_energy_inputs` | 所有适用过程 | 电力 | 分表和生产记录 | 电表编号；起止读数；过程覆盖；停机；产品数量；分配动因 | 有条件时读取专用电表，并与场址电力平衡协调 | kWh 和 MJ | 连续或逐批；按月汇总 | 与产品输出相同期间 | 每个纳入场址和生产线 | 将 kWh 换算为 MJ；共享电表只按声明的因果动因分配 | 电表校准、公用工程账单协调和分配核查 |
| `cp_gas_inputs` | `forming_and_fabrication`; `organic_coating` | 天然气和氧气 | 流量计、气瓶、储罐和批次记录 | 气体身份；仪表或容器编号；体积；基准温度；基准压力；过程；批次；产品数量 | 读取过程仪表，或协调容器交付与库存变化 | m3 | 逐批或连续；按月汇总 | 与产品输出相同期间 | 每个纳入的燃烧或氧助操作 | 按实测过程用量分配；共享用量必须采用时间或热负荷动因 | 仪表校准、供应商声明和基准状态记录 |
| `cp_product_output` | `forming_and_fabrication` | 合格成品 | 生产和质量放行记录 | 产品子类型；图样；牌号；表面状态；验收质量；不合格质量；批次；放行状态 | 称重，或由经核实的单件质量和验收数量计算 | kg | 每批 | 与全部投入和输出相同期间 | 每个纳入场址和产品子类型 | 只汇总已验收放行质量 | 校准秤、单件质量验证和质量放行记录 |
| `cp_scrap_output` | `forming_and_fabrication` | 钢废料 | 废料箱、地磅和回收商记录 | 材料类别；质量；污染；去向；回收路线；批次或期间 | 转移时称量分类废料，并与回收商票据协调 | kg | 每次转移；按月汇总 | 与产品输出相同期间 | 每个纳入钢制品路线 | 汇总外运分类钢废料，排除内部循环 | 地磅票、回收商收据和材料平衡 |
| `cp_aqueous_inputs` | `aqueous_surface_treatment` | 水和氢氧化钠 | 水表、采购、配槽和实验室记录 | 水质量或体积；密度；氢氧化钠质量；浓度；槽编号；处理质量；处理面积 | 计量用水，并用采购和槽液记录协调化学品添加 | kg 和 m2 | 逐批或每日；按月汇总 | 与处理输出相同期间 | 每个纳入水系处理线 | 只汇总外部补充量；按成品质量归一化并保留处理面积 | 仪表校准、采购记录、槽液日志和浓度测试 |
| `cp_aqueous_wastes` | `aqueous_surface_treatment` | 废槽液和含金属废水 | 储罐、排放、联单和实验室记录 | 流身份；质量或体积；密度；金属种类；浓度；pH；处理状态；去向 | 计量转移或排放，并按场址监测计划采样 | kg、m3 和浓度单位 | 每次转移或监测间隔；按月汇总 | 与处理输出相同期间 | 每个纳入处理线和排放点 | 废槽液和废水分开记录；只有具备密度记录时才换算体积 | 废物联单、仪表校准、样品监管链和实验室结果 |
| `cp_coating_materials` | `organic_coating` | 溶剂型涂料 | 采购、领用、退料和配方记录 | 产品名称；批次；领用质量；退料质量；固体分；挥发分；涂装质量；涂装面积 | 协调仓储领退料记录和涂装批次 | kg 和 m2 | 每批；按月汇总 | 与涂装输出相同期间 | 每个纳入涂装线 | 净涂料投入 = 领用量减有记录的未污染退料量 | 供应商技术资料、秤校准和批次协调 |
| `cp_coating_wastes` | `organic_coating` | 废涂料 | 废物容器和联单记录 | 废物身份；质量；组成；危险属性；去向；批次或期间 | 转移时称量密闭废物容器 | kg | 每次转移；按月汇总 | 与涂装输出相同期间 | 每个纳入涂装线 | 废涂料与排放溶剂和可复用退料分开汇总 | 秤记录、废物联单和处理收据 |
| `cp_air_emissions` | `forming_and_fabrication`; `organic_coating` | 直接化石源 CO2 和 NMVOC | 烟道测试、连续监测、批准的排放报告和涂料质量平衡 | 污染物；排放源；实测浓度和流量或批准的质量平衡字段；捕集；治理；运行小时；产品数量 | 采用法规认可或质量受控的场址方法，并协调排放源覆盖 | kg | 按监测计划；汇总至生产期间 | 与相关燃料或涂料使用及产品输出相同期间 | 每个纳入排放点及有记录的无组织源 | 只汇总场内直接排放；共享排放源按声明动因分配 | 方法、校准、实验室资质、质量平衡闭合和排放报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化量 = 同一期间归属产品路线的交换量除以合格成品质量 | 可归属交换量；验收输出质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_material_balance` | 每条已声明金属路线 | 闭合差 = 金属投入减合格输出、单列废料及库存增加；数据集放行前调查其符号和大小 | 金属净领用量；验收输出；废料；在制品变化 | 金属平衡闭合差及解释 |  |
| `calc_volume_to_mass` | 仅计量体积的水和液体废物 | 质量 = 实测体积乘以声明温度下有文件记录的密度；组成会产生重大影响时不得假设密度 | 体积；密度；温度；组成 | kg 交换量 |  |
| `calc_kwh_to_mj` | 电力 | 电力（MJ）= 电表读数（kWh）乘以 3.6 | 电表读数（kWh） | MJ 电力 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料身份 | 对每条表示的路线保留产品子类型、图样或规范、合金或牌号、供料形态、处理和涂层。 | 放行图样、物料清单、材质证明和工艺卡 |
| `dq_temporal` | 全部前景交换 | 投入、输出、废物和排放采用同一代表性生产期间；短于 12 个月的期间或批次覆盖必须说明理由。 | 期间协调和代表性说明 |
| `dq_completeness` | 过程和仪表覆盖 | 证明每个纳入场址、生产线、条件过程和材料类别均得到表示，并说明排除项及数据缺口。 | 工艺流程图、仪表图、废物流图和完整性核查 |
| `dq_measurement` | 实测数量 | 使用经校准的仪器或经协调的商业记录，并保留换算、基准状态、检出限和分配动因。 | 校准、账单协调、实验室质控和计算记录 |
| `dq_mass_balance` | 金属路线 | 数据集放行前解决材料平衡差异；不得通过净额处理隐藏返工、在制品或内部循环。 | 签署的平衡表和差异调查 |
| `dq_upstream` | 关联数据集 | 尽可能匹配上游金属形态、合金或牌号、生产技术、再生含量依据、地域以及电力或燃料供应；披露代理。 | 供应商数据集、选择理由和代理披露 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 参考流 | 若缺少产品子类型、材料或牌号、供料形态、路线、表面状态、成品净质量、场址、期间或工厂大门状态，则失败；若以泛称 Tiangong 产品 UUID 替代未解决的参考产品，也失败。 | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_route_coverage` | 过程图 | 若工艺卡或生产记录所示操作在无证据的情况下被遗漏，或纳入条件过程却未填写其过程特定行，则失败。 | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `validate_atomic_exchanges` | 清单 | 若将多种金属、燃料、化学品、废物或排放合并为一个选定流，或用废水代替其中排入环境的基本流物质，则失败。 |  |
| `validate_uuid_semantics` | 带 UUID 的行 | 若公开状态、中英文基本名称、流类型、分类、属性或单位组与选定交换不一致，则失败；未解决行必须保持 UUID 为空。 |  |
| `validate_period_and_balance` | 归一化数量 | 若交换期间与验收输出不一致，电力换算不是 3.6 MJ/kWh，气体基准状态缺失，或材料平衡差异未经调查，则失败。 |  |
| `validate_no_range_substitution` | 重要流 | 若以暂定范围或外部范围作为前景结果，则失败。本候选 PCR 未采用外部范围；应使用采集值，并保留清单中的证据需求供后续审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个已声明 CPC 42999 产品子类型和路线的前景工厂大门生产数据集 |
| downstream_use | `secondary_dataset`；在方法审查和关联代表性上游数据集后可作为 `background_dataset` |
| allowed_use | 需要针对相同产品子类型、材料、性能、表面状态、路线、地域和期间的质量归一化工厂大门数据集的产品足迹及生命周期模型 |
| excluded_use | 跨产品子类型比较；不同金属制品之间的功能等效；替代更具体 PCR；使用阶段或寿命终止声明；未经代表性审查的通用全球平均 |
| required_metadata | 规范 PCR id；产品子类型；图样/规范；合金或牌号；供料形态；净质量；过程路线；处理和涂层；场址和地域；参考期；上游数据集；分配；截断；包装处理；未解决身份 |
| required_quality_disclosure | 实测与分配占比；仪表和秤覆盖；材料平衡闭合；处理/涂装表面积；气体基准状态；化学品浓度；废物去向；排放方法；数据缺口；代理和不确定性 |
| update_trigger | 产品子类型、材料或牌号、供料形态、质量、路线、处理/涂层、场址、供应商技术、能源供应、分配方法、排放控制、参考期发生变化，或未解决 Tiangong UUID 得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，《CPC Ver. 3.0 Explanatory Notes》，2025 年 6 月 30 日更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-09-05） | 官方剩余产品边界、纳入产品实例及按分类优先原则确定的排除项 |
| `un-cpc-1-1-chinese-2008` | official_guidance | 联合国统计司，《产品总分类版本1.1》，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于 2026-09-05） | 产品类别标题和纳入实例的专业中文术语核查 |
| `eu-jrc-sf-bref-2024` | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Smitheries and Foundries Industry》，2024，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf（检索于 2026-09-05） | 条件加热、锻造、机加工、冷却、精整、热处理和铸造过程分解 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会，《Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics》，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-05） | 水系表面处理边界以及水、能源、化学品、废水、废槽液和排放采集需求 |
| `eu-jrc-sts-bref-2020` | official_guidance | 欧盟委员会联合研究中心，《Surface Treatment Using Organic Solvents including Wood and Wood Products Preservation with Chemicals》，2020 年 12 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation（检索于 2026-09-05） | 条件溶剂型涂装、涂覆、脱脂、固化、废物和直接空气排放清单需求 |
