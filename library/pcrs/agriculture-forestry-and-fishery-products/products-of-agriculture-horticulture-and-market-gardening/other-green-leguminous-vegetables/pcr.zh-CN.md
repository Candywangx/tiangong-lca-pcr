---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 其他绿色豆科蔬菜

## 1. 范围与适用性

本 PCR 指导归属于 CPC 01249 的鲜、完整、未成熟绿色豆科蔬菜前景数据包构建。涵盖露地或设施栽培的可销售豆荚或青嫩种子，包括声明分类和产品事实符合该 CPC 叶级类别时的鲜鹰嘴豆、扁豆和瓜尔豆。路线可采用单次采收或多次采摘，并可包括声明交接节点前的分选、清洗、冷却、初级包装及其他调理。

排除 CPC 01241 绿色菜豆、CPC 01242 青豌豆和 CPC 01243 绿色蚕豆及马豆，即使其生产路线相似。干燥或成熟豆类、种子生产、芽菜、加工、罐藏、冷冻、腌制、发酵、干燥、熟制、切分、预制、零售、消费者储存和使用不在默认范围内。苗圃生产、耐用基础设施、机械制造、土地利用变化及交接节点后运输，除非单独归属并披露，否则排除。次品、田间残余物、清洗水、废水、包装废物和其他损失须保留在前景核算中，直至记录去向或交接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables` |
| classification_refs | CPC 3.0 `01249`，其他绿色豆科蔬菜；映射关系：exact |
| covered_products | 归属于 CPC 01249 的鲜、完整、未成熟豆科蔬菜豆荚或青嫩种子，符合声明物种、成熟度、等级、水分和包装状态 |
| excluded_products | CPC 01241 绿色菜豆；CPC 01242 青豌豆；CPC 01243 绿色蚕豆和马豆；干燥或成熟豆类；种子、芽菜、加工、保藏、冷冻、干燥、熟制、切分、预制、零售和消费产品；资本品；土地利用变化；交接节点后服务 |
| representative_product | 符合声明物种或品种组、成熟度、尺寸、颜色、嫩度、缺陷容许限和等级的可销售鲜其他绿色豆科蔬菜 |
| production_route | 直播或移栽栽培、整畦、灌溉、养分或改良剂管理、植保、一次或多次未成熟期采收、可选分选、清洗、冷却、初级包装及声明节点交接 |
| market_state | 声明农场或包装场交接节点的鲜、完整、未加工绿色豆科蔬菜，采用散装或声明初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或包装场交接节点归属于 CPC 01249 的可销售鲜、完整、未成熟绿色豆科蔬菜 |
| How much | 1,000 kg |
| How well | 鲜、完整、可食用未成熟豆荚或青嫩种子，声明物种或品种组、生产地理位置、成熟度、尺寸、颜色、嫩度、等级、缺陷容许限、水分状态及包装状态 |
| How long or cycle | 声明的一个作物周期和完整采收生产周期；归一化前核对归属于同一次种植的全部采摘轮次 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 其他新鲜完整绿色豆科蔬菜，农场门或包装场门 `<>` |
| 参考流属性 | 质量 `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | 质量单位组 `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种组；CPC 归属及对绿色菜豆和青豌豆的排除核查；生产地理位置；露地或设施路线；直播或移栽路线；种植和采收日期；采摘轮次；成熟度、尺寸、颜色、嫩度、等级和缺陷标准；灌溉或雨养状态；实际施用的肥料或土壤改良剂产品及有记录的养分基准；植保方案；清洗、冷却和包装状态；残余物、次品、拒收物和废水去向；声明交接节点 |


在主代理核实兼容平台流之前，参考产品身份仍是待满足的语义要求。不得仅为填充身份字段而替换为相近的绿色菜豆或青豌豆流。必需参考属性为质量，参考单位为 kg；主代理在过程图完成后解析 UUID 支持对象。

构建前景数据包时，`Required qualifiers` 所列信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，该数据包的参考流定义不完整。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_legume_mass` | 可销售产品、降级产品、拒收物、残余物和损失 | 质量 | kg | 分别称量可销售、降级、拒收、田间损失、搬运损失及残余物流，并在换算至 1,000 kg 参考输出前核对。 |
| `crop_cycle_normalization` | 田间和设施栽培记录 | 面积和质量 | ha 和 kg | 按田块、种植畦或设施单元记录投入及采摘轮次，归一化至同一声明作物周期的可销售产出。 |
| `fertilizer_product_and_nutrient_basis` | 肥料和土壤改良剂投入 | 产品和养分质量 | kg 产品及声明养分单位 | 实际施用时记录产品名、产品质量、适用时的干物质，以及有记录的 N、P、K 或其他养分基准。不得要求未使用的产品类别，不得重复计算复合产品。 |
| `water_delivery_basis` | 灌溉、水肥一体化载水、清洗及水源取水 | 体积 | m3 | 分别记录作物灌溉、水肥一体化载水、采后清洗水和自然资源取水，披露计量或水量平衡基准。 |
| `area_time_basis` | 露地种植畦和设施单元 | 面积时间 | ha*a | 记录占用生产面积及作物占用期间；纳入耐用结构和设备时须单独归属。 |
| `harvest_grade_reconciliation` | 重复采收、分级和包装 | 质量和声明等级 | kg 和声明分数 | 保留各采摘轮次、总采收质量、合格质量、降级产品、拒收物和损失，以便重现声明等级及可销售产出。 |
| `postharvest_mass_change` | 清洗、冷却、分级和包装 | 质量和水分 | kg 和声明分数 | 将实测除土、吸水、冷却损失、皮重和包装损失与采收作物质量分开保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 为声明其他绿色豆科蔬菜作物周期接收种子或种植材料的已整备田畦或设施栽培单元，并披露先前土地用途及排除的基础设施工程 |
| starting_condition_role | 声明作物周期和前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01249`，其他绿色豆科蔬菜，至声明农场或包装场交接节点 |
| recursive_input_rule | 按接收交接状态记录种子、移栽苗或其他种植材料并链接上游数据集，不在本 PCR 内重新构建其自身生产。 |
| upstream_dataset_requirement | 种植材料、肥料和土壤改良剂、植保产品、供水、燃料、电力、包装、购买的运输及废物处理服务跨越边界时，使用相应上游数据集。 |
| disclosure | 声明物种或品种组、CPC 边界核查、地理位置、路线、种植密度、作物周期日期、灌溉水源和方法、肥料或土壤改良剂产品及养分基准、植保方案、采摘轮次、可销售和降级产出、残余物、清洗和冷却、包装、废物去向及声明交接节点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和栽培 | 纳入归属于声明作物周期的整畦、种植、作物管理、灌溉、肥料或土壤改良剂、植保及作物直接排放；披露先前土地用途，排除无关基础设施建设。 | `fao-good-agricultural-practices` |
| `boundary_cpc_exclusion` | 产品身份和参考流 | 确认所代表产品属于 CPC 01249，且不是 CPC 01241 绿色菜豆或 CPC 01242 青豌豆。通过产品事实和审查解决歧义，不得为消除歧义而改变产品边界。 | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `boundary_repeated_picking` | 采收轮次 | 将同一次种植的各采摘轮次归属于同一作物周期，归一化前核对可销售产品、降级产品、拒收物、田间损失和残余物。 | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `boundary_gate_conditioning` | 分选、清洗、冷却、包装及交接节点前运输 | 默认前景边界止于声明农场或包装场交接节点；调理及交接节点前运输仅在该节点之前发生时纳入。 | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `boundary_residue_fate` | 作物残余物、次品、废水和包装废物 | 对各流记录还田、堆肥、饲料利用、处理、运输、回收或处置。没有接收方、预期用途、质量及交接记录时，不得分配副产品抵扣。 | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | 纳入状态 | inclusion_condition | 建模角色 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 其他绿色豆科蔬菜作物建植 | required | 每次所代表播种、种植、种植畦或设施栽培单元 | 前景作物建植 | 种植面积、种植材料及作物周期日期 |
| `crop_management` | 其他绿色豆科蔬菜作物管理 | required | 每个所代表作物周期 | 前景受管理生物生产 | 管理面积、水、肥料或改良剂、植保及完整采收生产周期 |
| `harvest_and_field_sorting` | 采收和田间分选 | required | 每个所代表采收生产周期 | 前景采收和初次分级 | 1,000 kg 可销售鲜产出及经核对的采收流 |
| `conditioning_and_dispatch` | 调理和发货 | conditional | 声明交接节点之前发生清洗、冷却、包装、储存或运输时 | 前景调理和交接 | 1,000 kg 声明交接节点的可销售产品 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：其他绿色豆科蔬菜作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 建植灌溉水（`establishment_irrigation_water`）

按水源和生产单元记录整畦、出苗或移栽建植用水；除非水量平衡方法明确纳入，否则不记录降雨。

- 选定流：输送至作物的灌溉水
- 流属性/单位：体积 / m3
- 数量规则：汇总建植期计量或有水量平衡记录支持的供水，保留水源和施用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植灌溉筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：m3/ha
  - 基准：从播种或移栽至植株群体均匀建立的建植期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 绿色豆科蔬菜生产面积占用（`crop_land_occupation`）

记录声明种植生产周期内田畦或设施单元占用的生产面积和时间。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：用声明生产面积乘以作物占用时长，说明设施结构是排除还是单独归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_area_cycle_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：面积产出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.0
  - 单位：ha，每 1,000 kg 产出
  - 基准：声明作物面积及可销售作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：其他绿色豆科蔬菜作物管理（`crop_management`）

#### 输入

##### 产品流

###### 生产灌溉水（`production_irrigation_water`）

记录建植后输送的灌溉水和水肥一体化载水，区分水源、施用方法和循环水。

- 选定流：输送至作物的灌溉水
- 流属性/单位：体积 / m3
- 数量规则：汇总从建植至最终采摘的田块、种植畦或设施单元计量读数及有记录的水量平衡估计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：作物灌溉筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5,000
  - 单位：m3/ha
  - 基准：完整声明作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 尿素肥料（`crop_management_agricultural_nutrient_inputs_urea`）

**crop_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`crop_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`crop_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

###### 氯化钾肥料（`crop_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`crop_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`crop_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_nutrient_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`；`fao-organic-nutrients`

###### 柴油 (`mobile_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`mobile_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy_records`采集`crop_management`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_records`
- 来源：`route-energy-fao`

###### 灌溉和作物管理用电（`management_electricity_input`）

记录声明交接节点前抽水、水肥一体化、设施单元运行、照明和其他设备用电。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：汇总设备计量或发票，并按面积时间、运行时间、供水量或其他声明物理基准分配共用服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：管理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kWh，每 1,000 kg 产出
  - 基准：灌溉抽水及边界内作物管理设备
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 水资源取用（`water_resource_withdrawal`）

将灌溉或水肥一体化取用的天然水资源与供水分开记录，并报告水源及回流或耗水基准。

- 选定流：水资源取用
- 流属性/单位：体积 / m3
- 数量规则：将水源计量或许可记录与作物供水核对，披露回流水或耗水计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：7,000
  - 单位：m3/ha
  - 基准：作物周期天然水资源取用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流


###### 受管理生产的作物残余物（`crop_residue_management_output`）

记录最终采摘后的叶、茎、根、豆荚和其他残余物，分别记录还田、堆肥、饲料利用、处理或处置数量和去向。

- 选定流：绿色豆科蔬菜生产的作物残余物
- 流属性/单位：质量 / kg 湿残余物
- 数量规则：按田块或设施单元称量或计算残余物，记录接收去向；未收集田间残余物仍须作为声明残余物流保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：12,000
  - 单位：kg 湿残余物/ha
  - 基准：声明去向之前的作物周期残余物质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 基本流

###### 氧化亚氮排入空气（`nitrous_oxide_emission`）

记录或计算归属于有记录养分投入、改良剂和残余物路径的直接及间接氧化亚氮排放，保留方法和接收介质。

- 选定流：氧化亚氮排入环境空气
- 流属性/单位：质量 / kg N2O
- 数量规则：对养分投入、改良剂、残余物去向及环境因子应用一种声明排放方法，避免重复计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氧化亚氮筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg N2O/ha
  - 基准：进行养分管理的作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 氨排入空气（`ammonia_emission`）

声明方法及施用记录支持相应路径时，记录或计算肥料或有机改良剂施用产生的氨排放。

- 选定流：氨排入环境空气
- 流属性/单位：质量 / kg NH3
- 数量规则：对有记录的氮形态、施用时间及环境条件应用声明氮排放方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氨筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg NH3/ha
  - 基准：进行养分管理的作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 硝酸盐排入水体（`nitrate_to_water`）

养分投入、土壤、排水及接收介质信息支持相应路径时，记录或计算进入水体的硝酸盐损失。

- 选定流：硝酸盐排入水体
- 流属性/单位：质量 / kg 硝酸盐
- 数量规则：对养分投入及排水或淋溶证据应用声明氮损失方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg 硝酸盐/ha
  - 基准：进行养分管理的作物周期及有记录的排水路径
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 磷酸盐排入水体（`phosphate_to_water`）

养分施用、径流或排水、土壤条件及接收介质信息支持相应路径时，记录或计算进入水体的磷酸盐损失。

- 选定流：磷酸盐排入水体
- 流属性/单位：质量 / kg 磷酸盐
- 数量规则：对养分投入及有记录的径流、排水或侵蚀应用声明磷损失方法，不得赋予无证据支持的默认排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：磷酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg 磷酸盐/ha
  - 基准：进行磷管理的作物周期及有记录的径流或排水路径
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：采收和田间分选（`harvest_and_field_sorting`）

#### 输入

##### 产品流

###### 柴油 (`harvest_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_energy_records`采集`harvest_and_field_sorting`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_records`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采收和田间分选的可销售鲜产品（`marketable_product_output`）

记录确定等级后的可销售产品。声明交接节点为田间或农场时，该输出是作物周期归一化输出。

- 选定流：可销售其他绿色豆科蔬菜，鲜且完整
- 流属性/单位：质量 / kg

原参考状态单位注释：质量 / kg 鲜产品

原始输出测量与核对：确定等级后按采摘轮次称量合格产品，归一化前汇总整个采收生产周期数量。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：可销售产量筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：60,000
  - 单位：kg 可销售产品/ha
  - 基准：完整声明作物周期和采收生产周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流


###### 离开田间分选的作物残余物（`crop_residue_output`）

记录采收或田间分选中移除的叶、茎、根、豆荚及其他生物质，以及接收去向和任何有记录的用途。

- 选定流：采收和田间分选的作物残余物
- 流属性/单位：质量 / kg 湿残余物
- 数量规则：称量或计算移除残余物，并记录还田、堆肥、饲料利用、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：采收残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10,000
  - 单位：kg 湿残余物/ha
  - 基准：声明去向前的采收生产周期残余物质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：调理和发货（`conditioning_and_dispatch`）

#### 输入

##### 产品流

###### 清洗水（`washing_water_input`）

声明交接节点前进行清洗时，记录除土和去异物用水。与灌溉及水源取水分开，并披露循环和排放处理。

- 选定流：鲜农产品清洗工艺用水
- 流属性/单位：体积 / m3
- 数量规则：汇总清洗水计量或批次记录，披露循环、处理及排放管理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- 数量范围：清洗水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3，每 1,000 kg 产出
  - 基准：鲜完整绿色豆科蔬菜交接节点前清洗
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 冷却和包装用电（`postharvest_electricity_input`）

声明交接节点前发生时，记录冷却、冷库、分选线、照明和包装设备用电。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：汇总设备计量或发票，并按处理量、冷库占用时间、面积时间或其他声明物理基准分配共用服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`fao-fresh-produce-handling`
- 数量范围：调理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh，每 1,000 kg 产出
  - 基准：声明的交接节点前冷却、分选和包装路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录声明交接节点前实际使用的初级包装、标签、内衬及其他材料。产品类别不规定包装类型；根据实际记录识别材料及可重复使用容器的周转次数。
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-produce-hygiene`；`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-produce-hygiene`；`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-produce-hygiene`；`fao-package-identities`

###### 交接节点前公路货运（`pre_gate_road_transport`）

生产单元或田间收集点至包装场或交接节点的运输位于声明边界之前时，记录该运输及距离、载荷、车辆和分配基准。

- 选定流：公路货运服务
- 流属性/单位：运输功 / tkm
- 数量规则：根据质量、距离、车辆或服务记录及声明分配基准计算运输功；不纳入交接节点后运输。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`fao-fresh-produce-handling`
- 数量范围：交接节点前运输筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：tkm，每 1,000 kg 产出
  - 基准：声明的生产至交接节点路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接节点的可销售产品（`marketable_gate_output`）

记录在纳入的调理和包装之后，于声明农场或包装场交接的最终可销售鲜产品。未纳入调理时，将该数量与 `marketable_product_output` 核对。

- 选定流：声明交接节点的可销售其他绿色豆科蔬菜，鲜且完整
- 流属性/单位：质量 / kg

原参考状态单位注释：质量 / kg 鲜产品

原始输出测量与核对：在声明交接节点称量最终合格产出，并与总采收、田间分选、调理损失和包装皮重核对。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：交接输出质量核对区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,000
  - 单位：kg 可销售产品，每 1,000 kg 参考输出
  - 基准：纳入调理后的声明交接输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流




###### 清洗水和调理废水（`conditioning_wastewater_output`）

记录离开交接节点前过程的清洗水及调理废水，包括处理、排放去向及任何循环回路。

- 选定流：鲜农产品调理废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：核对进水、循环、蒸发、保留水分、处理及排放记录；只有证据支持时才使用特定接收介质的基本流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：调理废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：m3，每 1,000 kg 产出
  - 基准：声明的交接节点前清洗和调理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：其他鲜食绿色豆类蔬菜，完整，农场门或包装场门
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：其他鲜食绿色豆类蔬菜，完整，农场门或包装场门
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_field_services` | 共用田间、灌溉、设施单元和包装服务 | 按面积时间、运行时间、供水量、处理量或其他有记录的物理关系，在产品类别或作物周期间分配共用服务。仅在物理关系无法代表共用服务时使用经济分配，并披露价格基准。 | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | 可销售产品、降级产品、拒收物和残余物 | 可销售产品作为参考输出。降级产品、次品、残余物和废物按实际去向分别记录。没有接收方、预期用途、质量及交接记录时，不得对饲料、堆肥、回收或其他用途给予抵扣。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_reusable_containers` | 可重复使用的周转箱、箱筐、托盘和内衬 | 按有记录的周转次数或服务质量分配可重复使用容器的制造和更换，再将清洗、损失及寿命终结记录归属于实际路线。 | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_input_specific_input` | `cp_crop_protection_records` | 作业 crop_management：记录每种施用的植保产品，保留产品名、有效成分、配方、施用率、方法、日期和处理面积。综合病虫害管理记录可证明未进行处理。 原数量方法：对完整作物周期核对施用日志、产品标签、库存变动和处理面积。 |
| `mobile_machinery_fuel_specific_input` | `cp_energy_records` | 作业 crop_management：记录耕作、喷施、灌溉支持和作物管理作业所用柴油、汽油或其他燃料。 原数量方法：汇总归属于作物周期的燃料收据、油罐记录或机械小时计算。 |
| `harvest_machinery_fuel_specific_input` | `cp_energy_records` | 作业 harvest_and_field_sorting：记录初次分选或声明交接节点之前采收机械和田间运输使用的燃料。 原数量方法：汇总分配至采收生产周期的燃料收据、油罐记录或机械小时计算。 |


在各采集协议中保留场址、批次、周期和阶段的原始数量及分母。先核对库存、损失、水分及副产品归属，再归一化：归一化交换量 = 应归属原始交换量 × 声明参考数量 / 同一边界和计量基准的合格交接产品数量。归一化前先完成多年生建植和共用作业归属。不得将内部转移量设为最终参考数量。“每声明的参考流”指第 3 节的数量、单位和产品状态；数据包必须声明实际路线及交接节点。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | 种植材料和建植 | 种子或移栽苗批次记录 | 物种或品种；供应商批次；数量；活力或植株数量；田块或设施单元；种植日期；种植面积 | 供应商记录加田间日志；原始汇总与归属：按作物周期求和，归一化至可销售产出 | kg、数量、ha | 每次种植 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 批次记录、种植日志、面积记录 |
| `cp_area_cycle_records` | `crop_establishment` | 占用面积和作物周期 | 田块或设施单元登记 | 面积；单元；先前土地用途披露；占用日期；基础设施分配说明 | 田块登记和地图或设施单元记录；原始汇总与归属：按单元计算面积时间，并与产出核对 | ha、日期 | 每个作物周期 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 受控面积记录 |
| `cp_irrigation_records` | `crop_establishment` 和 `crop_management` | 灌溉、水肥一体化和取水 | 计量、许可或水量平衡记录 | 水源；计量起止读数；方法；作物阶段；循环；回流水 | 计量读数或有记录的水量平衡；原始汇总与归属：按水源和作物阶段求和，再归一化 | m3 | 每次事件或月度 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 计量控制、许可或平衡核查 |
| `cp_nutrient_records` | `crop_management` | 肥料、改良剂和养分损失计算 | 施用和产品记录 | 产品；批次；质量；干物质；养分组成；日期；方法；处理面积；土壤或养分计划；损失方法输入 | 发票、施用日志、规格和计划；原始汇总与归属：按实际产品和养分基准汇总，不得重复计入 | kg 产品、kg 养分、ha | 每次施用 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 规格、施用日志、计划、方法核查 |
| `cp_crop_protection_records` | `crop_management` | 植保产品 | 处理日志 | 产品；有效成分；配方；剂量；日期；方法；处理面积；采前安全间隔 | 处理日志和产品记录；原始汇总与归属：按有效成分和路线汇总 `crop_protection_input_specific_input`: 作业 crop_management：记录每种施用的植保产品，保留产品名、有效成分、配方、施用率、方法、日期和处理面积。综合病虫害管理记录可证明未进行处理。 原数量方法：对完整作物周期核对施用日志、产品标签、库存变动和处理面积。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg 产品、ha、日期 | 每次处理 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 标签、日志、操作人员或合规记录 |
| `cp_energy_records` | `crop_management` 和 `harvest_and_field_sorting` | 燃料和管理用电 | 燃料、机械小时、计量或发票记录 | 燃料类型；数量；设备；小时；田块或单元；电表；分配基准 | 收据、油罐记录、机械日志或计量表；原始汇总与归属：按声明物理基准分配共用服务 `mobile_machinery_fuel_specific_input`: 作业 crop_management：记录耕作、喷施、灌溉支持和作物管理作业所用柴油、汽油或其他燃料。 原数量方法：汇总归属于作物周期的燃料收据、油罐记录或机械小时计算。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `harvest_machinery_fuel_specific_input`: 作业 harvest_and_field_sorting：记录初次分选或声明交接节点之前采收机械和田间运输使用的燃料。 原数量方法：汇总分配至采收生产周期的燃料收据、油罐记录或机械小时计算。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | MJ、kg、kWh | 每次交易或月度 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 收据、计量表、机械日志、分配核查 |
| `cp_residue_fate_records` | `crop_management` 和 `harvest_and_field_sorting` | 作物残余物和次品去向 | 残余物或接收方记录 | 流；质量；湿基或干基；收集点；接收方；用途；运输；处理或处置 | 称量、抽样及接收方记录；原始汇总与归属：按去向求和，未收集田间残余物单独保留 | kg、日期 | 每次采收或去向事件 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 称重单、接收方或处理记录 |
| `cp_harvest_grade_records` | `harvest_and_field_sorting` | 总采收、等级、损失及可销售产出 | 采摘和分级记录 | 采摘日期；总质量；合格质量；降级质量；拒收质量；损失估计；等级标准；水分或温度 | 称量记录和等级日志；原始汇总与归属：归一化前核对全部采摘轮次 | kg、日期、声明分数 | 每轮采摘 | 完整采收生产周期 | 每个所代表生产单元 | 每声明的参考流 | 校准秤、等级表、批次记录 |
| `cp_harvest_handling_records` | `harvest_and_field_sorting` | 箱筐、周转箱和田间材料 | 容器领用和返还记录 | 材料；皮重；件数；重复使用周转次数；损失；清洗；分配质量 | 库存和返还日志；原始汇总与归属：按周转次数或质量分配重复使用服务 `harvest_container_input_specific_input`: 记录采收使用的可重复或一次性箱筐、周转箱、内衬和其他搬运材料，保留重复使用次数及更换记录。 记录材料类型、皮重、使用次数、更换数量及对作物生产周期的分配。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、数量、周转次数 | 每个生产周期 | 完整采收生产周期 | 每个所代表生产单元 | 每声明的参考流 | 库存日志、清洗记录、更换发票 |
| `cp_postharvest_records` | `conditioning_and_dispatch` | 清洗和废水 | 清洗批次、计量或处理记录 | 进水；循环；批次；土壤负荷；处理；排放；保留水分 | 计量表、批次日志和处理记录；原始汇总与归属：核对投入、回用、处理和排放 | m3、kg、日期 | 每批次 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 计量表、水质或处理记录 |
| `cp_postharvest_energy_records` | `conditioning_and_dispatch` | 冷却、冷藏、分选和包装用电 | 计量或设备记录 | 设备；时间；温度路线；kWh；处理量；分配基准 | 计量或发票加设备日志；原始汇总与归属：按处理量、时间或物理基准分配共用能源 | kWh、h、kg | 每批次或月度 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 计量表、温度日志、处理量记录 |
| `cp_packaging_records` | `conditioning_and_dispatch` | 包装和包装废物 | 包装领用、返还和废物记录 | 材料；质量；再生含量；重复使用周转次数；受损数量；处置或回收去向 | 发票、物料平衡和废物记录；原始汇总与归属：核对领用、保留、返还及废弃包装 | kg、数量 | 每批次或月度 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 发票、库存记录、废物转移单 |
| `cp_transport_records` | `conditioning_and_dispatch` | 交接节点前运输 | 货运或路线记录 | 起点；终点；距离；载荷；车辆；服务；返程；交接节点 | 货运记录、路线日志或承运方记录；原始汇总与归属：计算运输功，并按质量分配共用运输 | tkm、kg、km | 每次运输 | 完整声明交接期间 | 每条所代表路线 | 每声明的参考流 | 运单、路线记录、承运方声明 |
| `cp_postharvest_grade_records` | `conditioning_and_dispatch` | 最终合格产出和调理拒收物 | 包装场批次和分级记录 | 接收质量；清洗后质量；冷却后质量；包装后质量；合格质量；拒收质量；皮重；温度；等级 | 称量及批次或等级记录；原始汇总与归属：核对接收和最终交接质量 | kg、日期、温度 | 每批次 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 校准秤、批次记录、等级日志 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 每 1,000 kg 数量 = 记录数量 * 1,000 / 最终可销售交接总质量 kg | 记录数量；最终可销售交接质量 | 归一化行数量 | `mass-balance-identity` |
| `calc_nutrient_equivalent` | 肥料和土壤改良剂投入 | 养分质量 = 产品质量 * 有记录的养分分数；分别保留产品质量及各声明养分基准 | 产品质量；供应商规格、计划或实验室结果 | 按实际产品角色记录的养分质量 | `fao-good-agricultural-practices` |
| `calc_area_time` | 占用生产面积 | 面积时间 = 声明面积 ha * 占用时间（年） | 面积；占用日期 | ha*a | `fao-good-agricultural-practices` |
| `calc_water_withdrawal` | 资源取用 | 核对水源取水、供水、回流水及有记录的耗水 | 水源计量；输送水；回流水 | 取水及披露的耗水 | `fao-crop-evapotranspiration-56` |
| `calc_direct_and_indirect_n2o` | 氧化亚氮排入空气 | 对养分投入、改良剂、残余物去向及路径因子应用一种声明的 IPCC 兼容方法；不得组合重叠方法 | 养分记录；残余物记录；方法因子 | 按接收介质记录的 kg N2O | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_work` | 交接节点前公路货运 | 运输功 tkm = 载荷（吨） * 声明路线 km；按有记录的质量基准分配共用运输 | 载荷；距离；服务记录；分配基准 | tkm | `fao-fresh-produce-handling` |
| `calc_reusable_container_service` | 可重复使用的采收和包装材料 | 按有记录的周转次数或服务质量分配制造和更换，再加上清洗及损失记录 | 容器质量；周转次数；服务质量；清洗和损失 | 分配后的包装投入和废物 | `iso-14044-2006` |
| `calc_mass_reconciliation` | 采收、调理和交接输出 | 在测量不确定度内，总采收 = 可销售 + 降级 + 拒收 + 田间损失 + 过程损失 + 留存或移除残余物；调查未解释差额 | 采摘；等级；损失；残余物记录 | 核对后的作物周期质量平衡 | `mass-balance-identity`; `iso-14044-2006` |
| `harvest_field_loss_identity_and_fate` | `harvest_and_field_sorting` | 按实测干湿基和实际去向核对作物残余物、收获损失和生物量。留田或还田生物量是支持分解与养分路径计算的内部残余物台账，不是外购资源或虚构的生物量基本交换。单独收集的材料须有实际产品／废物身份及去向；环境释放须识别物质与接收环境。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_harvest_grade_records` | 按身份区分的交换和对账活动记录 | `iso-14044-2006` |
| `packaging_waste_output_identity_and_fate` | `conditioning_and_dispatch` | 识别每项实际独立材料物流、组成、状态和接收者。废保藏剂、盐水、动植物材料、包装、排液和有意共产品在独立处理时分别记录，仅建立本作业有证据的物流。物理混合物流只有在组成和相容处理有据时才可采用一个身份，不得再把组分作为额外输出重复计量。区分销售产出、内部返工、废物转移、外购处理和基本排放，不重复处理负荷。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_packaging_records` | 按身份区分的交换和对账活动记录 | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `planting_material_input_identity_and_fate` | `crop_establishment` | 对于本作业原有 planting_material_input 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_establishment_records` | 按身份区分的交换和对账活动记录 | `fao-good-agricultural-practices` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrient_records`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |
| `downgraded_product_output_identity_and_fate` | `harvest_and_field_sorting` | 原作业产生相关物料时，downgraded_product_output 的采集职责必须履行。每种物理上独立的物流须分别记录实际材料、组成、状态、实测质量与去向。粉尘、糠壳、籽粒、包装及产品拒收物不能仅因在同一作业产生而共用交换；真实混合物流仅在组成和处理边界有据时可单列一张卡。降级农产品须区分具有接收者和用途证据的预期可销售联产品与实际送处理的废物；等级较低本身不决定废物属性或分配。场内返工／回用和留田生物量保留在对账的内部台账，不作为外运废物。完整性通过前须按实际属性建立具体产品或废物卡，使用相容的已核验 UUID 或明确未解析身份；保留可归属负荷，不作无据替代抵扣，各物流不得双计。实测量仅按原有合格参考产出归一化一次。身份、数量或去向缺失时不得宣称完整，不推定聚合默认量或数值界限。 | `cp_harvest_grade_records` | 按身份区分的交换和对账活动记录 | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `conditioning_reject_output_identity_and_fate` | `conditioning_and_dispatch` | 原作业产生相关物料时，conditioning_reject_output 的采集职责必须履行。每种物理上独立的物流须分别记录实际材料、组成、状态、实测质量与去向。粉尘、糠壳、籽粒、包装及产品拒收物不能仅因在同一作业产生而共用交换；真实混合物流仅在组成和处理边界有据时可单列一张卡。降级农产品须区分具有接收者和用途证据的预期可销售联产品与实际送处理的废物；等级较低本身不决定废物属性或分配。场内返工／回用和留田生物量保留在对账的内部台账，不作为外运废物。完整性通过前须按实际属性建立具体产品或废物卡，使用相容的已核验 UUID 或明确未解析身份；保留可归属负荷，不作无据替代抵扣，各物流不得双计。实测量仅按原有合格参考产出归一化一次。身份、数量或去向缺失时不得宣称完整，不推定聚合默认量或数值界限。 | `cp_postharvest_grade_records` | 按身份区分的交换和对账活动记录 | `codex-fresh-produce-hygiene`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | 参考产品及全部产品流 | 核实物种或品种组、CPC 01249 归属、成熟度、产品状态及对 CPC 01241 和 01242 的排除核查。 | 产品规格、分类审查及批次记录 |
| `quality_scale_and_meter` | 质量、水、能源和包装行 | 使用受控秤和计量表，记录读数日期；无法直接测量时保留估计基准。 | 校准或控制记录、计量日志、发票或有记录的估计 |
| `quality_temporal_coverage` | 全部作物周期行 | 覆盖完整声明种植和采收生产周期，披露缺失期间、异常天气及路线条件变化。 | 田间日志、采摘记录及缺口说明 |
| `quality_completeness_reconciliation` | 投入、产品、废物、残余物和损失 | 核对作物周期投入及全部采收和交接输出，解释任何重要未解释差额。 | 质量平衡工作表及审查签署 |
| `quality_emission_method` | 环境排放 | 说明选定方法、因子、接收介质和假设；避免直接、间接及残余物路径重复计入。 | 计算表和方法引用 |
| `quality_fate_and_disclosure` | 残余物、次品、废水、包装和运输 | 为每个非可销售流或废物流保留接收方、去向、处理、用途及交接证据。 | 接收方声明、转移单、处理记录或声明田间去向 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | PCR 身份和数据集元数据 | 确认产品属于 CPC 01249，且不是 CPC 01241 绿色菜豆或 CPC 01242 青豌豆；保留物种或品种及产品状态证据。 | `iso-14044-2006` |
| `validate_reference_mass` | 参考流和输出 | 要求以质量属性和 kg 单位表示 1,000 kg 可销售产出，并完整声明作物周期和交接节点。 | `mass-balance-identity` |
| `validate_crop_cycle_completeness` | 过程图和清单 | 每个所代表作物周期须包含建植、管理和采收过程；声明交接节点包含调理及发货活动时，须纳入相应过程。 | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validate_nutrient_product_basis` | 肥料和土壤改良剂投入 | 要求实际产品身份、产品质量、养分或改良剂基准及施用日期齐全，复合产品不得重复计入。 | `fao-good-agricultural-practices` |
| `validate_water_and_energy_separation` | 灌溉、取水、清洗、冷却、燃料和电力 | 将供水、自然资源取水、清洗水、燃料和电力作为独立行保留，并声明计量或计算基准。 | `fao-crop-evapotranspiration-56`; `fao-fresh-produce-handling` |
| `validate_output_reconciliation` | 可销售、降级、拒收、残余物、废水和包装行 | 核对采摘轮次、田间分选、调理及最终交接输出；调查未解释差额，披露全部声明去向。 | `mass-balance-identity`; `iso-14044-2006` |
| `validate_emission_pathway` | 直接和间接排放 | 将排放行视为计算值之前，须有接收介质、计算方法、有记录的养分或残余物投入及路径证据。 | `ipcc-2019-managed-soils-n2o` |
| `validate_gate_and_transport` | 调理和交接节点前运输 | 确认数据集纳入的清洗、冷却、包装、储存和运输发生于声明交接节点前，排除交接节点后服务。 | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `validate_qualifiers` | 参考流和数据集元数据 | 参考流表中须包含全部类别限定信息，包括物种或品种、成熟度、等级、路线、日期、水、养分、植保、去向及交接节点信息。 | `codex-fresh-produce-hygiene` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归属于 CPC 01249 的鲜、完整、未成熟绿色豆科蔬菜前景农业生产数据集 |
| downstream_use | 声明交接节点及限定信息匹配时，可用作农业产品系统的次级数据集，以及与背景数据链接的前景节点。 |
| allowed_use | 用于鲜 CPC 01249 产品的比较建模，披露物种或品种、路线、作物周期、采收生产周期、交接节点、投入、输出等级及残余物或废物去向。 |
| excluded_use | 绿色菜豆或青豌豆、干豆类、加工或保藏产品、未明确的混合豆类类别、零售或消费者生命周期声明，以及质量平衡或交接条件存在证据缺口的数据集。 |
| required_metadata | CPC 归属；物种或品种组；地理位置；田间或设施路线；种植和采收日期；采摘轮次；参考交接节点；产品状态和等级；灌溉和水源；实际肥料或改良剂产品及养分基准；植保；能源；包装和运输；最终质量核对；全部废物或残余物去向。 |
| required_quality_disclosure | 时间覆盖、场址范围、实测或估计状态、计量表和秤控制、分配基准、排放方法、缺失数据、不确定性，以及每项重要投入和输出的证据。 |
| update_trigger | CPC 边界解释、产品状态、生产路线、交接节点、作物管理实践、包装路线或排放方法变化，或影响重要投入、输出、分配或校验规则的证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, CXC 53-2003, Code of Hygienic Practice for Fresh Fruits and Vegetables, FAO/WHO: https://workspace.fao.org/sites/codex/Standards/CXC%2B53-2003/CXC_053e.pdf | 鲜农产品卫生、采收、清洗、包装及数据披露 |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables: https://www.fao.org/family-farming/detail/en/c/1682483/ | 作物建植、作物管理、养分记录及边界披露 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉、水量平衡及取水测量 |
| `fao-fresh-produce-handling` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables: https://www.fao.org/4/y4893e/y4893e0a.htm | 调理、冷却、包装、运输及采后记录 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, N2O Emissions from Managed Soils and CO2 Emissions from Lime and Urea Application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 直接和间接农业排放计算 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配、副产品处理、完整性及校验原则 |
| `mass-balance-identity` | method_factor | Conservation and reconciliation of declared mass inputs, outputs, losses, and residues | 归一化和质量平衡检查 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
