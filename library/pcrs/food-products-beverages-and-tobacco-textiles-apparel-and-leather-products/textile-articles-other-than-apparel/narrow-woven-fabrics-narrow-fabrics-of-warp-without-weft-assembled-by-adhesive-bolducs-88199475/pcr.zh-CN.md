---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.narrow-woven-fabrics-narrow-fabrics-of-warp-without-weft-assembled-by-adhesive-bolducs-88199475
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 狭幅机织物、扎匹头带、纺织标签和徽章、编带、装饰镶边、流苏、绒球及类似制品

## 1. 范围与适用性

本 PCR 适用于 CPC 27911 产品族：狭幅机织物；以黏合剂组装的无纬经纱狭幅织物（扎匹头带）；未刺绣的纺织材料标签、徽章及类似制品；成幅编带；未刺绣且非针织或钩编的成幅装饰镶边；流苏、绒球及类似纺织制品。只要披露实际结构和状态，申报产品可以是坯态、染色、印花、经整理剂处理、热定型、裁切、卷装或其他可销售状态。

前景边界从制造场址接收规定的纺织纱线或长丝以及直接使用的黏合剂开始，包括适用的排纱、狭幅织造、编带、黏合组装、饰边成形、湿法加工、热整理、裁切、卷绕、检验和场内废水处理，直至工厂门口的合格可销售产品。

本 PCR 不包括刺绣品；针织或钩编的狭幅织物和镶边；宽幅机织物；花边和网眼织物；成衣；纤维和纱线生产（仅作为关联上游数据集）；工厂门外配送；使用及生命末期。具体数据包应识别一种实体产品和一种路线，不得把不同类型的制品作为无区分平均产品申报。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.narrow-woven-fabrics-narrow-fabrics-of-warp-without-weft-assembled-by-adhesive-bolducs-88199475 |
| classification_refs | CPC 3.0: 27911 |
| covered_products | 狭幅机织物；以黏合剂组装的无纬经纱狭幅织物（扎匹头带）；未刺绣的纺织标签和徽章；成幅编带；未刺绣且非针织或钩编的成幅装饰镶边；流苏、绒球及类似纺织制品。 |
| excluded_products | 刺绣制品；针织或钩编的狭幅织物或镶边；宽幅机织物；网眼织物；花边；作为产品销售的纱线；成衣及非纺织制品。 |
| representative_product | 工厂端生产混合：一种已申报且合格的 CPC 27911 狭幅纺织制品，具有规定的纤维组成、结构、尺寸、整理和交付形式。 |
| production_route | 接收规定的纱线或长丝；适用的狭幅织造、编带、饰边成形或无纬经纱黏合组装；有条件的湿法或热整理；裁切、卷绕和检验；有条件的场内废水处理。 |
| market_state | 制造工厂门口处于已申报坯态或整理状态、以已申报卷、件或单品形式交付的可销售干态狭幅纺织制品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已申报产品规范的可销售狭幅机织物、扎匹头带、未刺绣纺织标签或徽章、编带、装饰镶边、流苏、绒球或类似制品。 |
| How much | 制造工厂门口按已申报干质量或调湿质量基准计的 1 kg 合格可销售产品。 |
| How well | 符合已申报纤维组成、结构路线、宽度或尺寸、单位长度或面积质量、颜色、整理、拉伸或外观要求及验收等级。 |
| How long or cycle | 在工厂门口交付的一次完整生产批次或报告期生产混合；不赋予使用阶段寿命。 |
| reference_flow_link | 参考流是实现功能单位所需的合格可销售 CPC 27911 产品质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Narrow woven fabrics, narrow fabrics of warp without weft assembled by adhesive (bolducs), labels, badges and similar articles of textile materials, not embroidered, braids in the piece, ornamental trimmings in the piece, without embroidery, other than knitted or crocheted, tassels, pompons and similar articles `706a70f1-432b-41bc-b000-ddf409e94f3f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；每种组成材料的纤维类型和质量分数；狭幅织造、编带、黏合组装或其他已申报结构；坯态或整理状态；标称宽度或单品尺寸；单位长度或面积质量；颜色和着色路线；所施整理；使用时的黏合剂身份和固含量；干质量或调湿质量基准及参考含水率；卷、件或单品交付形式；制造地理；报告期；场内和外包工序 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和纺织材料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 说明质量为干质量或调湿质量，记录调湿方法或含水率，并在归一化前把纺织投入和产出换算到同一基准。 |
| `composition_balance` | 参考产品组成 | 质量分数 | kg/kg | 根据所代表批次的物料清单、规格或试验确定组成纤维和黏合剂分数；各分数之和应在已申报舍入容差内等于 1。 |
| `length_area_mass_conversion` | 按长度、面积或件数记录的数据 | 质量、长度、面积和件数 | kg, m, m2, item | 使用同一代表产品和批次的测量值换算质量，酌情包括宽度、长度、单位长度或面积质量和件数；保留原始记录和换算因子。 |
| `net_water_accounting` | 湿法加工和废水处理 | 体积 | m3 | 分别记录供水和场内回用水。报告净取水量时不得扣减排放废水，并按去向核算废水。 |
| `energy_carrier_separation` | 电力、天然气和外购蒸汽 | 能量、质量或体积 | kWh, MJ, kg 或 m3 | 外购电力、天然气和外购蒸汽应作为独立交换记录。保留实测载能体单位并记录每个换算因子。 |
| `normalization_to_reference` | 所有清单交换 | 交换特定属性 | 每 kg 的交换特定单位 | 在核算存量变化、返工、废品和中间转移后，把报告期数量归一化至 1 kg 合格可销售参考产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 狭幅纺织制造场址接收规定的纺织纱线或长丝，以及适用时接收水性丙烯酸黏合剂，并申报供应商、组成、纱线或长丝规格、含水基准和上游数据集引用。 |
| starting_condition_role | 门到门前景起点；纤维、聚合物和纱线生产采用关联上游数据集。 |
| product_classification_scope | CPC 3.0 代码 27911 范围内且符合本 PCR 纳入和排除规定的产品。 |
| recursive_input_rule | 若接收 CPC 27911 产品进行进一步整理或转化，应以其状态、数量和上游数据集作为一个独立投入记录，不得在同一前景过程中重复构建其早期生产。 |
| upstream_dataset_requirement | 对跨越边界的每种纱线或长丝、黏合剂、工艺化学品、供水、电力、天然气、蒸汽和场外处理服务，关联组成、技术和地理代表性相符的数据集。 |
| disclosure | 申报产品子类、路线、起始和销售状态、场内和外包工序、共享公用工程、内部循环、废水路线、直接排放、分配决策以及每项数据缺口或截断。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景生产 | 纳入把接收纱线、长丝或来料狭幅纺织物转化为已申报可销售产品的所有场内工序，以及材料、化学品、水、能源、废物、废水和直接排放交换。 | eu-textiles-bat-2022 |
| `boundary_rule_2` | 路线选择 | 仅在为已申报产品实施时纳入狭幅织造、编带、黏合组装、湿法加工、热整理和废水处理；披露每项排除或外包工序及其关联上游数据集。 | eu-textiles-bat-2022 |
| `boundary_rule_3` | 首个前景清单 | 建立所消耗纺织材料、化学品、水和能源以及所产生废水、废物和直接排放的过程级清单；将已识别但不可获得的交换披露为数据缺口，不得静默截断。 | eu-textiles-bat-2022; eu-pef-2021 |
| `boundary_rule_4` | 上游和下游阶段 | 纤维和纱线生产、场外处理、配送、使用及生命末期保持在工厂门口前景系统之外，除非研究明确扩展边界；扩展结果应保持可分离。 | eu-pef-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_assembly` | 狭幅成形与组装 | required | 纳入实际的狭幅织造、编带、饰边成形或无纬经纱黏合组装路线。 | 把规定纱线或长丝转化为未整理狭幅纺织制品。 | kg 未整理狭幅纺织物 |
| `wet_thermal_finishing` | 湿法与热整理 | conditional | 在场内实施洗涤、漂白、染色、印花、化学整理、干燥或热定型时纳入。 | 形成已申报的着色、洁净度、手感、尺寸或功能整理。 | kg 整理狭幅纺织物 |
| `conversion_inspection` | 裁切、卷绕、组装与检验 | required | 纳入适用的最终转化和验收工序。 | 交付合格可销售产品并分离废品或边角料。 | kg 合格可销售产品 |
| `wastewater_treatment` | 场内废水处理 | conditional | 场内处理已纳入湿法加工产生的废水时纳入。 | 在排放或场外转移前处理水性废物。 | m3 已处理废水 |

### 过程：狭幅成形与组装（`forming_assembly`）

#### 输入

##### 产品流

###### 棉纱（`cotton_yarn_input`）

棉纱实际发放给已申报产品路线时跨越前景边界。只记录可归属于代表批次的质量。

- 选定流：Cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：实测发放质量，并对退回纱线和存量变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 聚酯长丝纱（`polyester_filament_yarn_input`）

已申报产品物料清单规定聚酯长丝纱时，该纱线跨越边界。其记录应与其他所有纤维投入分开。

- 选定流：Polyester filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测发放质量，并对退回纱线和存量变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 聚酰胺长丝纱（`polyamide_filament_yarn_input`）

代表产品消耗聚酰胺长丝纱时记录该纱线。其质量不得与聚酯或氨纶合并。

- 选定流：Polyamide filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测发放质量，并对退回纱线和存量变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 黏胶长丝纱（`viscose_filament_yarn_input`）

使用黏胶长丝纱时，将其作为一个独立材料交换记录。

- 选定流：Viscose filament yarn
- 流属性/单位：Mass / kg
- 数量规则：实测发放质量，并对退回纱线和存量变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 氨纶纱（`elastane_yarn_input`）

通过该组成提供弹性时记录氨纶纱，其发放质量应与结构纱线分开。

- 选定流：Elastane yarn
- 流属性/单位：Mass / kg
- 数量规则：实测发放质量，并对退回纱线和存量变化进行调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 水性丙烯酸黏合剂（`acrylic_adhesive_input`）

仅当路线以黏合剂组装经纱或施用这一准确黏合剂配方时，水性丙烯酸黏合剂才跨越边界。原始记录应分别保留供货产品质量和留存固体。

- 选定流：Water-based acrylic adhesive
- 流属性/单位：Mass / kg
- 数量规则：实测黏合剂发放质量减去退回的未用黏合剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

###### 成形电力（`forming_electricity_input`）

外购电力用于织机、编带机、黏合组装设备、驱动、压缩空气系统和可归属的车间空气调节。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：实测或采用物理依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未整理狭幅纺织物（`unfinished_narrow_textile_output`）

未整理狭幅纺织物是转移至整理或最终转化的实测产出，其子类和结构应与代表路线相符。

- 选定流：Unfinished narrow woven polyester tape
- 流属性/单位：Mass / kg
- 数量规则：实测未整理狭幅纺织物转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`

##### 废物流

###### 成形纺织废物（`forming_textile_waste_output`）

作为废物离开过程的不合格聚酯带、断头和边料按去向称量；返回成形工序的返工料仍为内部转移。

- 选定流：Waste polyester textile tape
- 流属性/单位：Mass / kg
- 数量规则：送至已申报回收或处置去向的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 成形粉尘排入空气（`forming_dust_output`）

仅当成形区域的直接空气排放在经过捕集系统后跨越场址边界时，才记录颗粒物。

- 选定流：Particulate matter, unspecified, to air
- 流属性/单位：Mass / kg
- 数量规则：实测出口质量或有记录的场址排放计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_material_energy`
- 来源：`eu-textiles-bat-2022`

### 过程：湿法与热整理（`wet_thermal_finishing`）

#### 输入

##### 产品流

###### 进入整理的未整理狭幅纺织物（`finishing_textile_input`）

仅当代表路线包括场内湿法或热整理时，实测未整理狭幅纺织物才进入本过程。

- 选定流：Unfinished narrow woven polyester tape
- 流属性/单位：Mass / kg
- 数量规则：按统一纺织质量基准计的实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`

###### 工艺水（`finishing_water_input`）

洗涤、漂白、染色、漂洗、化学整理和设备清洗的供水应计量，并与内部回用水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：已纳入整理工序的实测供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 氢氧化钠（`sodium_hydroxide_input`）

已申报清洗、精练或 pH 控制配方消耗氢氧化钠时，将其作为一个化学品交换记录。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：可归属于代表批次的实测供货产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 过氧化氢（`hydrogen_peroxide_input`）

代表路线将过氧化氢用于漂白或其他已申报处理时，应独立记录。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：可归属于代表批次的实测供货产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 氯化钠（`sodium_chloride_input`）

已申报染色配方添加氯化钠时，将其作为一项独立工艺化学品记录。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：可归属于代表批次的实测盐供应质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 活性蓝 19 染料（`reactive_blue_19_input`）

仅当代表配色方案消耗该准确染料时记录活性蓝 19；它不是其他着色剂的占位流。

- 选定流：Reactive Blue 19
- 流属性/单位：Mass / kg
- 数量规则：可归属于代表批次的实测染料产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 乙酸（`acetic_acid_input`）

乙酸用于 pH 调节、中和或已申报整理配方时，应独立记录。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：可归属于代表批次的实测乙酸供应质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 整理电力（`finishing_electricity_input`）

外购电力用于整理设备、泵、加料、通风、干燥驱动和控制。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：实测或采用物理依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 天然气（`natural_gas_input`）

场内燃烧天然气为已纳入整理路线直接或间接供热时，应与其他载能体分开记录。

- 选定流：Natural gas
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测天然气消耗量，并采用有记录的低位热值换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

###### 外购蒸汽（`purchased_steam_input`）

跨越场址边界的外购蒸汽应独立于场内天然气和电力记录。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ
- 数量规则：实测蒸汽能量，或依据记录的压力、温度和焓把实测质量换算为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理狭幅纺织物（`finished_narrow_textile_output`）

整理狭幅纺织物在已申报湿法和热处理之后、最终转化和检验之前称量。

- 选定流：Finished dyed narrow woven polyester tape
- 流属性/单位：Mass / kg
- 数量规则：整理工序实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`

##### 废物流

###### 纺织整理废水（`finishing_wastewater_output`）

整理过程排出的废水在处理、回用或场外转移之前按实测体积和去向记录。

- 选定流：Textile finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：离开已纳入整理工序的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 化石二氧化碳排入空气（`fossil_co2_output`）

已纳入场内整理热源燃烧天然气且排放跨越场址边界时，记录化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或基于实测天然气的有记录场址计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理狭幅纺织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_energy_water`
- 来源：`eu-textiles-bat-2022`

### 过程：裁切、卷绕、组装与检验（`conversion_inspection`）

#### 输入

##### 产品流

###### 直接转化用未整理狭幅纺织物（`conversion_unfinished_input`）

仅当可销售产品为坯态且未表示湿法或热整理步骤时，未整理狭幅聚酯机织带才进入最终转化。

- 选定流：Unfinished narrow woven polyester tape
- 流属性/单位：Mass / kg
- 数量规则：进入最终转化的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_inspection`

###### 转化用整理狭幅纺织物（`conversion_finished_input`）

仅当代表路线包括整理时，整理染色狭幅聚酯机织带才进入最终转化。

- 选定流：Finished dyed narrow woven polyester tape
- 流属性/单位：Mass / kg
- 数量规则：进入最终转化的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_inspection`

###### 转化电力（`conversion_electricity_input`）

外购电力用于裁切、卷绕、组装、检验、测试和可归属的物料搬运设备。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：实测或采用物理依据分配的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_inspection`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 27911 产品（`reference_product_output`）

验收合格的干态或调湿态可销售产出是定量参考，并应携带所有必需产品限定信息。

- 选定流：Narrow woven fabrics, narrow fabrics of warp without weft assembled by adhesive (bolducs), labels, badges and similar articles of textile materials, not embroidered, braids in the piece, ornamental trimmings in the piece, without embroidery, other than knitted or crocheted, tassels, pompons and similar articles `706a70f1-432b-41bc-b000-ddf409e94f3f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测验收产出质量，归一化至 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_inspection`

##### 废物流

###### 转化纺织边角料（`conversion_textile_waste_output`）

作为废物离开最终转化的不合格聚酯带边角料和整理件按回收或处置去向称量。

- 选定流：Waste polyester textile tape
- 流属性/单位：Mass / kg
- 数量规则：送至已申报去向的实测废品和边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_inspection`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：场内废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 进入处理的纺织整理废水（`treatment_wastewater_input`）

已纳入整理路线产生的废水作为一项实测转移进入场内处理系统。

- 选定流：Textile finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：进入场内处理的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-textiles-bat-2022`

###### 废水处理电力（`treatment_electricity_input`）

外购电力用于可归属于已处理纺织废水的泵、曝气、加药和污泥处理设备。

- 选定流：Electricity, supplied
- 流属性/单位：Energy / kWh
- 数量规则：实测或采用物理依据分配的处理用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`wastewater_sludge_output`）

离开场内处理的污泥按已申报湿基或干固体基称量，并分配至实际去向。

- 选定流：Textile wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：实测污泥质量，并记录含水率或干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 处理水排放（`treated_water_output`）

跨越场址边界的处理水在排放点计量，并与内部回用水分开。

- 选定流：Water, treated, to surface water
- 流属性/单位：Volume / m3
- 数量规则：场址边界处的实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 已处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多产品设备和共享公用工程 | 首先按过程和产品路线分表计量或细分。无法细分时，采用反映因果关系的有记录物理驱动因素，例如机器时间、纺织物吞吐量、浴液体积或实测能源需求。 | eu-pef-2021 |
| `allocation_rule_2` | 回收纺织材料和废水污泥 | 记录实测产出和实际去向。除非选定下游方法明确要求并记录，否则不得在工厂门口前景清单内给予避免产品信用。 | eu-pef-2021 |
| `allocation_rule_3` | 不可避免的剩余多功能性 | 仅在证明细分和因果物理分配不可行后使用经济分配；披露价格、参考期、敏感性和分配给参考产品的份额。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_material_energy` | `forming_assembly` | 纱线、黏合剂、电力、未整理产出、废物和粉尘 | 发料记录、BOM、库存台账、仪表、生产日志、废物票据和排放记录 | 产品代码；批次；组成身份；供应商；期初库存；发料；退料；期末库存；仪表读数；产出质量；废物质量和去向；粉尘测量或计算 | 按批次采集，并把材料和能源记录核对到成形产线 | kg, kWh | 每批次，并按月核对 | 有代表性的连续 12 个月或有记录的生产活动期 | 可归属于成形的所有设备和共享服务 | 汇总验收记录，扣除退料和库存增加，采用有记录物理驱动因素分配共享仪表量，再除以未整理产出 | 经校准秤和仪表；BOM 批准；库存核对；废物票据；排放方法和控制装置状态 |
| `cp_finishing_material_energy_water` | `wet_thermal_finishing` | 来料纺织物、每项列明化学品、水、能源、整理产出、废水和直接排放 | 批次单、化学品发料、水和能源仪表、生产日志、排放仪表和排放记录 | 进出纺织物质量；供货化学品身份和浓度；化学品发料质量；供水和回用水；电力；天然气；蒸汽；废水体积；直接排放结果 | 按配方和批次采集，并进行过程级年度核对 | kg, m3, kWh, MJ | 每批次，并按月和年度核对 | 有代表性的连续 12 个月或有记录的生产活动期 | 所有已纳入湿法和热整理设备 | 按配方汇总实测投入和产出，保留每种化学品和载能体，再除以整理产出 | 经校准仪表；配方批准；供应商规格；实验室记录；排放记录；过程变更日志 |
| `cp_conversion_inspection` | `conversion_inspection` | 纺织物投入、电力、验收产品和边角料 | 转移票、仪表、检验日志、秤和废物票据 | 来料状态和质量；电力；验收产品子类和质量；废品质量；边角料质量；返工；去向 | 逐生产批次采集直至最终验收 | kg, kWh | 每批次 | 有代表性的连续 12 个月或有记录的生产活动期 | 所有最终转化和检验工序 | 核对来料纺织物与验收产出、返工、库存变化和废物，再按验收产出归一化 | 秤校准；验收规格；检验记录；废物票据；返工日志 |
| `cp_wastewater_treatment` | `wastewater_treatment` | 废水投入、电力、处理排水和污泥 | 进出口仪表、电表、实验室报告和污泥票据 | 入口体积；出口体积；回用体积；电力；排放点；污泥质量；含水率或干固体；去向；监测参数 | 在处理入口、最终出口和污泥转移点监测 | m3, kWh, kg | 连续或逐批次，并按月和年度核对 | 与所代表整理生产相同的期间 | 可归属于已纳入工序的完整场内废水处理系统 | 核对入口、回用、排放和滞留水；共享处理按实测污染负荷或体积分配并说明理由 | 仪表校准；采样计划；实验室资质；许可报告；污泥转移文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 报告期归一化 | 归一化交换 = 可归属实测交换 / 统一质量基准上的合格可销售产品质量 | 可归属交换；验收产品质量；含水率或调湿换算 | 每 1 kg 参考产品的交换 | eu-pef-2021 |
| `calc_rule_2` | 纺织材料平衡 | 纱线 + 黏合剂固体 + 来料中间品 + 期初库存 = 验收产品 + 废物 + 排放 + 期末库存 + 有记录含水变化，差异应在已申报测量不确定度内 | 材料发放和退回；库存；产品；废物；黏合剂固体；含水率 | 经核对的纺织物和黏合剂质量平衡 | eu-textiles-bat-2022 |
| `calc_rule_3` | 长度、面积或件数换算 | 质量 = 实测长度 × 实测可用宽度 × 实测单位面积质量，或件数 × 实测平均单件质量，且采用代表批次的数值 | 长度；宽度；面密度；件数；抽样单件质量 | 参考质量基准上的 kg | eu-pef-2021 |
| `calc_rule_4` | 共享公用工程分配 | 可归属公用工程量 = 共享仪表量 × 产品路线的有记录因果驱动因素 / 所有服务路线同一驱动因素之和 | 共享仪表；机器时间、吞吐量、浴液体积或实测需求 | 分配后的公用工程量 | eu-pef-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_requirement_1` | 产品身份 | 保留证明 CPC 27911 范围、子类、组成、结构、尺寸、颜色、整理和销售状态的规格、物料清单及路线记录。 | 批准产品规格；BOM；批次流转单；验收报告 |
| `dq_requirement_2` | 时间和技术代表性 | 可获得时采用连续 12 个月；否则记录生产活动期、季节性、停机、技术、产能利用率及较短期间代表申报产品的理由。 | 生产日历；设备清单；变更日志；覆盖率计算 |
| `dq_requirement_3` | 完整性 | 核对过程级纺织材料、化学品、水、能源、废水、废物和直接排放记录，并把每项已识别缺失交换列为数据缺口。 | 平衡表；仪表登记；化学品台账；废物和排放记录；数据缺口登记 |
| `dq_requirement_4` | 测量和换算 | 对每个实测或换算字段保留仪器身份、校准状态、原始单位、换算因子、采样方法和不确定度或已知限制。 | 校准证书；原始导出；实验室方法；换算工作表 |
| `dq_requirement_5` | 来源和上游数据 | 上游数据集应与组成身份、供应商或地理、生产技术和时间期间匹配；披露每项代理及其预期影响。 | 供应商声明；数据集元数据；代理评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流 | 若参考产品未使用 UUID `706a70f1-432b-41bc-b000-ddf409e94f3f`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位 kg，或缺失任何必需限定信息，则拒绝数据包。 | un-cpc-3-2025 |
| `validation_rule_2` | 路线一致性 | 过程行与已申报路线矛盾时拒绝数据包：已实施工序缺失、未实施的条件工序存在非零交换，或外包工序缺少关联上游数据集。 | eu-textiles-bat-2022 |
| `validation_rule_3` | 原子交换身份 | 过程清单在一个交换中合并多种纱线、化学品、载能体、废物或排放时拒绝；每项被表示交换应指明一个物理或化学流并使用一个行。 | eu-textiles-bat-2022 |
| `validation_rule_4` | 质量和库存核对 | 要求核对来料纺织物和黏合剂固体与验收产品、废物、排放、库存变化及含水变化；超过已申报测量不确定度的差异应调查并披露。 | eu-textiles-bat-2022 |
| `validation_rule_5` | 湿法过程清单 | 纳入湿法加工时，要求供水和回用水、每项消耗化学品、电力、每种热能载体、按去向废水、废物及直接排放的过程级记录。 | eu-textiles-bat-2022 |
| `validation_rule_6` | 分配和数据质量 | 存在无记录分配、静默截断、没有因子的单位换算，或未披露代表性的代理上游数据集时拒绝。 | eu-pef-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已申报 CPC 27911 狭幅纺织产品的前景生产数据集，或结构和过程路线等同的有记录产品生产混合。 |
| downstream_use | 在审查产品和路线代表性后，可作为服装、包装、家居、工业纺织或其他系统的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 采用相同子类、组成、结构、整理、地理、时间期间和纳入工序的工厂端产品比较或下游模型。 |
| excluded_use | 未限定地作为所有 CPC 27911 制品的平均值；替代刺绣、针织、钩编、花边、网眼织物、宽幅织物或服装数据集；提出数据集未建模的使用阶段或生命末期声明。 |
| required_metadata | PCR id 和版本；CPC 引用；产品子类；组成质量分数；结构；尺寸或宽度；单位长度或面积质量；颜色和整理；质量基准；产品交付形式；地理；报告期；技术；场内和外包工序；分配；上游数据集清单。 |
| required_quality_disclosure | 原始数据覆盖；仪表和秤覆盖；校准；材料和水量平衡；化学品完整性；废水和废物去向；直接排放方法；分配驱动因素；代理；截断；不确定度和未解决身份引用。 |
| update_trigger | 产品身份、组成、结构、黏合剂、着色或整理改变；材料技术或供应商改变；能源或水系统改变；废水路线改变；分配方法改变；场址地理改变；或发生重要过程或清单变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `standard` | 联合国统计司，《Central Product Classification (CPC) Version 3.0 Explanatory Notes》，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-13）。 | CPC 27911 官方产品范围和排除项。 |
| `eu-textiles-bat-2022` | `official_guidance` | 欧盟委员会，Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry，2022，https://eur-lex.europa.eu/eli/dec_impl/2022/2508（检索日期 2026-08-13）。 | 过程分解；材料、化学品、水、能源、废水、废物和排放的过程级监测；湿法加工和处理边界。 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，附件 I Product Environmental Footprint Method，2021，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-13）。 | 功能单位和参考流、系统边界、分配层级、归一化、截断披露、数据质量和代表性。 |
