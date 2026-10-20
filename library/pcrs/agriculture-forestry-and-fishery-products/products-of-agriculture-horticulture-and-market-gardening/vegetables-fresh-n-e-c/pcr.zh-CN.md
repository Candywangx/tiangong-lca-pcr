---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新鲜蔬菜，未另列明者

## 1. 范围与适用性

本 PCR 适用于在声明的农场交付、包装场交付或等效首次市场交接点以新鲜状态销售的整株蔬菜，且该蔬菜不属于 CPC 3.0 中更窄的具名蔬菜类别。这是一个剩余类别：具体数据包必须先依据物种、品种、食用部分和市场路线检查更窄的 CPC 类别，只有在均不适用时才使用本 PCR。

具体数据包应声明物种或品种、食用部分、生产系统、地理位置、作物周期、采收状态和声明的交接点。当路线被明确限定时，可以表示露地、保护地和混合路线生产。本 PCR 不规定单一作物技术或单一蔬菜物种。

本 PCR 排除加工、烹煮、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁或其他保藏蔬菜；种子、种植材料和育苗产品；动物饲料或废弃物产品；以及属于更窄具名 CPC 类别的蔬菜。除非另行声明，声明的首次市场交接点之后的配送不在默认边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c` |
| classification_refs | CPC 3.0:01290; exact residual category reference; mapping relation: exact |
| covered_products | 不属于更窄具名 CPC 蔬菜类别的整株新鲜蔬菜，未另列明者；必须声明物种、品种、食用部分、路线和市场状态 |
| excluded_products | 更窄 CPC 蔬菜类别；加工、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁、保藏、种子、种植材料、饲料和废弃物产品 |
| representative_product | 在声明的首次市场交接点交付的、属于剩余类别的具体物种或品种整株新鲜蔬菜 |
| production_route | 管理型作物生产及采收；在声明交接点之前发生时，可选纳入初步调理、分级或分选以及包装或展示 |
| market_state | 在声明的农场、包装场或等效首次市场交接点的新鲜、整株、可销售产品；纳入储存或配送时必须声明限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明的 CPC 01290 剩余类别中，声明首次市场交接点的 1 kg 可销售整株新鲜蔬菜 |
| How much | 声明首次市场交接点的 1 kg 净产品 |
| How well | 声明物种或品种、食用部分、等级或可销售状态、生产路线、地理位置、作物周期以及调理或包装状态 |
| How long or cycle | 一个完整作物周期及其相关采收期，并声明报告期间 |
| reference_flow_link | reference_fresh_vegetable |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明生产者交接门的新鲜蔬菜，实际物种和状态须声明 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种；食用部分；生产系统；生产地理位置；作物周期或采收期；声明交接点；新鲜且整株状态；等级或可销售性；是否纳入调理和包装；适用时的储存时间 |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

参考产品身份须覆盖本 PCR 声明的实际物种、未加工状态和生产者交接门。最终交换生成前须独立核实具体身份；不得将仅适用于某一种根菜或工业配料投入的记录用作本参考产品。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `rule_reference_mass_basis` | reference product and all normalized outputs | Mass | kg | 将参考产品报告为声明交接点的新鲜净质量。使用净参考数量推导时，应分别记录毛质量、包装质量以及田间或未分级质量。 |
| `rule_water_volume_conversion` | irrigation and conditioning water | Volume or Mass | m3 or kg | 保留源记录的计量单位；将水记录转换到所选质量或体积基准时，说明密度或仪表换算。 |
| `rule_nutrient_basis_declaration` | fertilizer or soil amendment input | Mass of product and declared nutrient basis | kg product and kg nutrient | 记录实际使用产品及其声明的 N、P、K 或有机养分基准；不得从剩余蔬菜类别推断产品类别。 |
| `rule_crop_cycle_time_index` | crop production inputs and outputs | Mass, energy, or substance amount | row-specific unit | 在按 1 kg 参考产品归一化前，将每条记录索引到同一作物周期和报告期间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 管理型作物生产从为该作物周期准备好的声明地块或生产单元开始，并包括进入该单元的外购或转移投入 |
| starting_condition_role | 剩余类别新鲜蔬菜的前景生产边界 |
| product_classification_scope | 仅在按物种、食用部分和路线排除更窄具名 CPC 蔬菜类别后适用 CPC 3.0:01290 |
| recursive_input_rule | 在前景单元之间转移的同类别蔬菜投入，作为产品输入记录其来源身份、数量、状态和转移边界；接收单元不在本 PCR 内递归重建其上游生产，除非明确作为链接数据集纳入 |
| upstream_dataset_requirement | 对于在前景边界之外的种子或种植材料、外购养分或改良剂、能源、水供应、包装以及转移产品投入，应在投入跨越边界处使用声明的上游数据集 |
| disclosure | 声明起始土地或生产单元状态、路线、物种或品种、作物周期、是否纳入调理和包装，以及为核对参考产品所需的所有转移、损失和输出去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `rule_residual_category_gate` | product identity and reference flow | 选择本 PCR 前确认没有更窄具名 CPC 蔬菜类别适用；在数据集元数据中保留物种、品种、食用部分和路线判定。 | `iso-14044-2006` |
| `rule_first_market_handoff` | system boundary | 默认前景边界在声明的新鲜整株产品首次市场交接点结束。仅当交接前发生且作为纳入过程记录时，才纳入采后调理或包装。 | `iso-14040-2006`; `fao-fresh-produce-hygiene-2003` |
| `rule_upstream_input_linkage` | purchased and transferred inputs | 在上游投入跨越前景边界的位置链接上游投入数据集；不得将上游产品系统隐藏在本地活动记录中。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_crop_production` | 管理型作物生产 | required | 声明作物周期始终纳入 | 生产在田作物，并记录作物管理投入和环境交换 | 每个作物周期，归一化到 1 kg 参考产品 |
| `p_harvest_capture` | 采收与田间收集 | required | 将声明产品从生产单元移出时始终纳入 | 将采收的新鲜蔬菜从在田作物中分离，并记录采收作业和田间损失 | 每个采收期，归一化到 1 kg 参考产品 |
| `p_primary_conditioning` | 初步调理 | conditional | 在交接前发生清洗、修整、冷却、清洁或其他首次调理并改变产品状态时纳入 | 将采收状态转换为声明的调理状态 | 每个调理批次，归一化到 1 kg 参考产品 |
| `p_grading_sorting` | 分级与分选 | conditional | 在交接前将产品分为两个或更多等级或去向时纳入 | 核对可销售、次级、拒收和损失状态 | 每个分级批次，归一化到 1 kg 参考产品 |
| `p_packaging_presentation` | 包装与展示 | conditional | 在交接前包装、贴标或展示处于声明边界内时纳入 | 将所选产品状态转换为包装或展示交接状态 | 每个包装批次，归一化到 1 kg 参考产品 |

### 过程：管理型作物生产（`p_crop_production`）

#### 输入
##### 产品流

###### 灌溉水（`crop_irrigation_water`）

当灌溉水被取用或供应到作物生产单元用于声明周期时，记录灌溉水。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 数量规则：有计量或文件证明的灌溉施用量；若在边界内，还应包括声明的取水和输送损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-crop-production-guidance-2016`

###### 尿素肥料（`p_crop_production_agricultural_nutrient_inputs_urea`）

**p_crop_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`p_crop_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`p_crop_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-fertilizer-identities`

###### 氯化钾肥料（`p_crop_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`p_crop_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`p_crop_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_crop_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`；`fao-organic-nutrients`

###### 作物生产用电（`crop_electricity`）

当泵、保护地设备、照明、控制系统或其他作物生产设备位于边界内时，记录其用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：声明作物周期的电表记录或供应商账单分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`iso-14044-2006`

##### 废物流

##### 基本流

###### 土地占用（`crop_land_occupation`）

根据声明作物周期使用的面积和时间记录土地占用。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：声明占用面积乘以作物周期持续时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

#### 输出
##### 产品流

###### 在田作物交接（`standing_crop_output`）

在田作物输出是交给采收过程的声明作物状态，尚不是可销售参考流。

- 选定流：声明的剩余类别在田蔬菜作物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：采收损失和后续调理前的田间输出核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

##### 废物流


###### 未收集作物残余（`crop_residue_output`）

记录留在田间或从作物生产单元移出的作物残余，并在边界重要时说明去向和处理。

- 选定流：作物残余或生产损失废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：依据作物产量核对记录田间残余和未采收生物量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

###### 土壤磷损失（`crop_soil_phosphate_loss`）

当选定方法识别出作物养分管理的损失途径时，记录释放到土壤的磷。

- 选定流：土壤磷排放
- 流属性/单位: Mass / kg PO4
- 数量规则：将采集的 P 投入和保留记录代入声明的养分损失方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

最终交换质量为 kg PO4；按 P 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 P 质量乘 95/31，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 直接土壤氧化亚氮（`crop_direct_n2o`）

根据适用的养分投入方法和声明的管理记录，计算直接土壤氧化亚氮。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：Mass / kg N2O
- 数量规则：对声明的 N 投入应用选定的直接排放因子，并记录因子选择
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

### 过程：采收与田间收集（`p_harvest_capture`）

#### 输入
##### 产品流

###### 待采收在田作物（`harvest_standing_crop_input`）

在田作物以管理型作物生产的输出状态进入采收过程。
- 选定流：进入收获的田间鲜蔬菜作物，物种已声明
- 流属性/单位：Mass / kg fresh matter
- 数量规则：作物生产输出与采收记录的核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

沿有记录的路线，将这一实际物理批次链接到其供给前景产出，匹配物种、状态、质量及交接点。不同时实例化所有备选来源，不将内部转移再次作为采购，也不假定未知加工状态。按实际批次解析兼容流UUID，或明确保留未解析身份。

###### 柴油 (`harvest_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_harvest_operations`采集`p_harvest_capture`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_operations`
- 来源：`route-energy-fao`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 采收新鲜蔬菜（`harvested_fresh_vegetable`）

采收的整株新鲜蔬菜交给下一个纳入过程；若没有后续调理，则直接交给声明交接点。

- 选定流：采收的剩余类别新鲜蔬菜；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：田间损失后的称重或核对采收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operations`
- 来源：`fao-crop-production-guidance-2016`

##### 废物流


###### 采收损伤和田间损失（`harvest_field_loss`）

当产品未转移到下一个纳入过程时，记录采收损伤和田间损失。

- 选定流：采收损失废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：可用在田作物与采收交接量之差，并按去向分类
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operations`
- 来源：`fao-food-loss-waste-2019`


##### 基本流

### 过程：初步调理（`p_primary_conditioning`）

#### 输入
##### 产品流

###### 待调理采收产品（`conditioning_harvested_input`）

当交接前发生清洗、修整、冷却或等效首次准备时，采收产品进入调理过程。
- 选定流：进入初步整理的已收获鲜蔬菜，物种已声明
- 流属性/单位：Mass / kg fresh matter
- 数量规则：与采收输出核对的批次称重进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

沿有记录的路线，将这一实际物理批次链接到其供给前景产出，匹配物种、状态、质量及交接点。不同时实例化所有备选来源，不将内部转移再次作为采购，也不假定未知加工状态。按实际批次解析兼容流UUID，或明确保留未解析身份。

###### 调理用水（`conditioning_water`）

当水为声明边界内的新鲜蔬菜清洗、冷却或清洁而跨越边界时纳入。

- 选定流：过程水
- 流属性/单位：Volume / m3
- 数量规则：按计量或批次记录的用水量，并声明循环使用和排放基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

###### 调理用电（`conditioning_electricity`）

纳入调理步骤时，记录泵、冷却、清洗、修整或控制设备的用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：调理批次的计量或分摊用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`iso-14044-2006`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 调理后的新鲜蔬菜（`conditioned_fresh_vegetable`）

调理后的新鲜蔬菜是可选首次调理步骤之后、分级、包装或交接之前的输出状态。

- 选定流：调理后的剩余类别新鲜蔬菜；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：扣除调理拒收物和损失后的批次输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

##### 废物流



###### 调理拒收物和修整物（`conditioning_rejects`）

记录调理后离开的修整物、损坏部分和拒收物，并说明去向。

- 选定流：调理拒收物或有机废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：与调理进料和输出核对的称重拒收流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-food-loss-waste-2019`


##### 基本流

### 过程：分级与分选（`p_grading_sorting`）

#### 输入
##### 产品流

###### 待分级的调理或采收蔬菜（`grading_product_input`）

当交接前形成两个或更多质量或去向状态时，产品进入分级。
- 选定流：进入分级的鲜蔬菜，实际物种及进入状态已声明
- 流属性/单位：Mass / kg fresh matter
- 数量规则：批次称重进料量及声明的分级前状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

沿有记录的路线，将这一实际物理批次链接到其供给前景产出，匹配物种、状态、质量及交接点。不同时实例化所有备选来源，不将内部转移再次作为采购，也不假定未知加工状态。按实际批次解析兼容流UUID，或明确保留未解析身份。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 可销售等级输出（`marketable_grade_output`）

选定的可销售等级输出进入包装；若不纳入包装，则成为参考流。

- 选定流：可销售新鲜蔬菜等级；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：称重的合格等级输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

###### 次级等级或副产品输出（`secondary_grade_output`）

当次级等级或副产品被有意销售或转移到一个有明确声明去向时，记录该输出。

- 选定流：次级新鲜蔬菜等级或副产品；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：带有去向和市场状态的称重次级输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

##### 废物流

###### 分级拒收物（`grading_rejects`）

未作为产品转移的拒收物，按去向和处理路线记录为废物。

- 选定流：分级拒收物或有机废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：分级进料与所有声明产品输出之差，并按去向核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

### 过程：包装与展示（`p_packaging_presentation`）

#### 输入
##### 产品流

###### 待包装可销售蔬菜（`packaging_product_input`）

当包装或展示处于声明边界内时，可销售输出进入包装过程。
- 选定流：进入包装的合格鲜蔬菜，实际物种及进入状态已声明
- 流属性/单位：Mass / kg fresh matter
- 数量规则：包装批次称重进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-fresh-produce-hygiene-2003`

沿有记录的路线，将这一实际物理批次链接到其供给前景产出，匹配物种、状态、质量及交接点。不同时实例化所有备选来源，不将内部转移再次作为采购，也不假定未知加工状态。按实际批次解析兼容流UUID，或明确保留未解析身份。

###### 木制板条箱（`packaging_material_wood_crate`）

**packaging_material 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

只有当包装处于声明产品边界内时，才记录包装材料。
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 瓦楞纸板箱（`packaging_material_corrugated_box`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 聚乙烯包装薄膜（`packaging_material_pe_film`）

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
- 来源：`iso-14044-2006`；`fao-package-identities`

###### 包装用电（`packaging_electricity`）

当纳入包装时，记录包装、贴标或展示设备的用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：包装批次的计量或分摊用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 参考新鲜蔬菜（`reference_fresh_vegetable`）

这是声明首次市场交接点的新鲜整株可销售蔬菜最终输出。若不纳入包装，则最后一个纳入过程提供同一参考流角色而不包含包装步骤。

- 选定流：声明生产者交接门的新鲜蔬菜，实际物种和状态须声明
- 流属性/单位：质量 / kg

原参考状态单位说明：Mass / kg fresh matter

原始产出计量与核对要求：声明交接点的可销售净质量，不包括包装质量

- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：1 kg 参考新鲜蔬菜.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

##### 废物流


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `rule_single_output_crop_allocation` | crop production with one declared marketable output | 当没有有意报告的副产品或次级销售输出时，将作物周期全部库存分配给声明参考产品。 | `iso-14044-2006` |
| `rule_grade_output_allocation` | grading, sorting, and multiple marketed grades | 报告每个有意销售的等级或副产品。当输出具有可比的新鲜材料功能时，默认采用物理质量分配；只有在质量不能代表相关因果关系时，才使用有明确理由的替代方法。 | `iso-14044-2006`; `fao-food-loss-waste-2019` |
| `rule_residue_not_coproduct` | field residue, rejects, and non-marketed losses | 除非残余物和拒收物被有意销售或作为具有独立交接点的声明副产品转移，否则将其作为废物或按去向区分的材料处理。 | `fao-food-loss-waste-2019` |
| `rule_shared_input_allocation` | shared machinery, infrastructure, or utilities | 使用有记录的面积、时间、质量或活动驱动因子将共享记录分配至声明作物周期和输出集合，并保留驱动因子和参与输出。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `harvest_fuel_input_specific_input` | `cp_harvest_operations` | 作业 p_harvest_capture：当机械或承包作业将产品从田间移出时，燃料或声明的采收服务跨越边界。 原数量方法：按采收作业燃料或服务记录分摊至采收期 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_area_yield` | `p_crop_production` | area, crop-cycle output, and residue | field and harvest records | area; crop dates; cultivar; harvested mass; field residue; destination | farm records, weighbridge, calibrated measurement, and grower interview；原始汇总与分配：aggregate by field and crop cycle, then reconcile to reported output | ha, kg, date | every crop cycle | full declared crop cycle | each contributing field or production unit | 每声明的参考流 | field map, weighbridge record, and crop-cycle log |
| `cp_crop_inputs` | `p_crop_production` | seed, water, nutrient, energy, fuel, and calculated emissions; 必须完成的具体排放识别与计算 | input and utility records | product identity; amount; nutrient basis; water meter; electricity; fuel; application date; source; 物质名称；接收环境；报告单位及元素或化合物基准；方法和因子来源；实际活动量；期间；数量不确定性；相关既有交换 | invoices, application logs, meters, supplier declarations, and method calculation；原始汇总与分配：allocate shared records by documented crop-cycle driver `crop_fuel_specific_input`: 当拖拉机、泵、加热设备或其他边界内移动或固定作物生产设备使用燃料时，记录燃料。 按燃料领用、计量或账单记录分摊至声明作物周期 这是必需的具体投入采集要求，不是选定交换。按原始记录识别每种实际配方产品、载能体或独立供应服务，保留物理身份、状态、原生数量及供应商规格。完成数据集前，每种实际投入须单独建立具体卡片，核验兼容UUID或明确保留未解析身份。产品质量与所含有效成分质量是不同台账，仅凭有记录的组成换算，不将两者重复作为两次采购。成品饲料和另加组分不得重复核算成品配方。区分燃料采购、外购电力或热量及包含用能的机械服务，各按实际边界仅计一次。保留原作业、期间、归属及最终产出归一化规则。身份或记录缺失不等于零用量，不提供通用组分范围或编造配方。 `iso-14044-2006` `crop_input_packaging_waste_specific_output`: 当作物投入的包装作为单独管理的废物流跨越前景边界时记录。 称重废物或供应商包装核对量 这是必需的具体产出采集要求，不是选定交换。保留本作业全部实际废物、残余物、拒收物及联产品的核算责任。完成数据集前，物理上不同的物流须分别成卡，记录实际材料、组成或状态、数量、接收路线及产品或废物角色，并核验兼容UUID或明确保留未解析身份。真正混合的物流可按有组成记录支持的一条物理混合物流记录，不编造分离，也不重复计入组分。液体与固体处理数量分别记录。保留原期间、产出平衡、参考流归一化和分配规则，缺失记录不等于零数量或可排除。 `fao-food-loss-waste-2019`; crop_soil_nitrogen_loss_specific_emission: 对实际蔬菜作物核对作物周期养分投入、作物带走、土壤留存及方法支持的氮损失路径。氮平衡残差或土壤留存 N 不自动构成向土壤排放的基本流。创建排放前明确实际物质与接收介质，保留原作物归属及最终鲜蔬菜归一化。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | kg, m3, kWh, MJ, kg nutrient; kg 具体物质与 kg N 分开记录 | each application or meter period | full declared crop cycle | each contributing field or production unit | 每声明的参考流 | invoice, meter, application record, and factor-selection note |
| `cp_harvest_operations` | `p_harvest_capture` | harvested output, harvest fuel, and losses | harvest campaign records | operation date; machinery or contractor; fuel or service; harvested mass; damage; field destination | harvest log, fuel issue, contractor record, and weighbridge；原始汇总与分配：reconcile standing crop, harvested output, and loss destinations `harvest_fuel_input_specific_input`: 作业 p_harvest_capture：当机械或承包作业将产品从田间移出时，燃料或声明的采收服务跨越边界。 原数量方法：按采收作业燃料或服务记录分摊至采收期 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg, L, MJ, date | each harvest event | full harvest campaign | each harvest block or campaign | 每声明的参考流 | harvest log, scale record, and contractor invoice |
| `cp_conditioning_records` | `p_primary_conditioning` | conditioning input, water, electricity, rejects, wastewater, and output | batch and utility records | batch id; input mass; water; electricity; reject mass; wastewater; output mass; treatment route | batch sheet, meters, scale, and wastewater record；原始汇总与分配：reconcile input to output, rejects, and wastewater by batch | kg, m3, kWh | each batch | all included conditioning batches | each conditioning line or site | 每声明的参考流 | batch sheet, scale calibration, meter record, and treatment receipt |
| `cp_grading_reconciliation` | `p_grading_sorting` | grade outputs, rejects, and grading input | grading and sales records | batch id; input; accepted grade; secondary grade; reject; destination; sale status | grading log, scale, sales record, and destination record；原始汇总与分配：reconcile input to all product outputs and rejects | kg, date | each grading batch | all included grading batches | each grading line or site | 每声明的参考流 | grade log, scale record, and destination evidence |
| `cp_packaging_records` | `p_packaging_presentation` | product input, packaging, electricity, rejects, and reference output | packaging and dispatch records | batch id; product input; material and mass; reuse status; electricity; reject; net output; hand-off; 每股物流的材料或产品身份；组成及污染状态；原生数量与单位；件重或密度换算依据；批次；产品与包装净质量；复用或返工；接收方；处理路线；匹配参考产出 | packaging bill of materials, scale, meter, and dispatch record；原始汇总与分配：report net product separately from packaging mass and reconcile rejects; packaging_rejects_specific_output: 对每个蔬菜包装批次，按实际材料称量或核对废弃包装，并与被拒收蔬菜的净质量分开。保留物种、产品状态、组成、包装皮重、实际去向及复用状态。包装内产品拒收物只有在实际作为一股有记录的复合物流交付，且产品与包装比例有依据时，才可保留为一项交换；不得再将这些组分重复计为独立外运废物。按相同批次范围核对投入、合格净产品、拒收物及库存。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | kg, kWh, date; 每股物流的 kg 分别记录；液体原生体积另列；件数与质量分开 | each packaged batch | all included packaging batches | each packaging line or site | 每声明的参考流 | packaging specification, scale calibration, utility record, and dispatch record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `rule_normalize_to_reference_flow` | all inventory rows | `normalized_amount = recorded_or_calculated_amount / net_marketable_reference_mass` | row amount; net marketable reference mass | amount per 1 kg reference fresh vegetable | `iso-14044-2006` |
| `rule_calculate_crop_yield_reconciliation` | crop production and harvest | `standing_crop = harvested_output + field_loss + residue + other_declared_destinations` | field output; harvested mass; losses; residues; destinations | reconciled crop-cycle output set | `fao-crop-production-guidance-2016`; `fao-food-loss-waste-2019` |
| `rule_calculate_nutrient_basis` | fertilizer or soil amendment input | 对各声明养分基准：养分量＝产品质量×声明养分分数。 | product mass; supplier or laboratory nutrient fraction | kg N, P, K, or organic nutrient | `fao-fertilizer-code-of-conduct-2019` |
| `rule_calculate_crop_emissions` | crop elementary outputs | 将所选 IPCC 兼容因子或实测值用于声明养分投入、土壤、气候及管理记录，记录因子优先级及单位。 | nutrient input; management records; selected factor; measured emissions where available | normalized substance-specific elementary flows | `ipcc-2019-refinement-agriculture` |
| `rule_reconcile_grade_outputs` | grading and sorting | 分级进料＝商品等级＋次级等级＋拒收物＋未核算损失；未核算损失须调查或披露。 | grading input; all declared outputs; reject; loss | complete grade-output reconciliation | `fao-food-loss-waste-2019` |
| `rule_reconcile_packaged_output` | packaging and presentation | 产品进料＝净参考产出＋包装过程产品损失＋其他声明产品去向；包装质量另行报告。 | product input; net output; losses; package material | net reference flow and package inventory | `iso-14044-2006` |
| `crop_soil_nitrogen_loss_specific_emission` | `p_crop_production` | 对实际蔬菜作物核对作物周期养分投入、作物带走、土壤留存及方法支持的氮损失路径。氮平衡残差或土壤留存 N 不自动构成向土壤排放的基本流。创建排放前明确实际物质与接收介质，保留原作物归属及最终鲜蔬菜归一化。 这是必须落实的身份识别与计算要求，不是一项交换。完成数据集前，应按每个实际物质和接收环境建立具体基本流卡。kg 物质与 kg 元素 N 分开保留，只能依据已识别物种的有据组成或化学计量分数，将方法报告的基准换算为目标基准。不得把所有氮等同于某种化合物，也不得将元素 N 和对应化合物质量重复作为两项排放。保留原活动量、因子单位、期间、不确定性、边界与归一化；已有匹配卡时建立关联而不重复计数。确认兼容 UUID，或明确登记具体未解析身份。身份、方法或活动证据缺失不能表示零，也不能据此省略排放。 | `cp_crop_inputs` | 逐物质和介质的排放交换及独立元素台账 | `ipcc-2019-refinement-agriculture` |
| `packaging_rejects_specific_output` | `p_packaging_presentation` | 对每个蔬菜包装批次，按实际材料称量或核对废弃包装，并与被拒收蔬菜的净质量分开。保留物种、产品状态、组成、包装皮重、实际去向及复用状态。包装内产品拒收物只有在实际作为一股有记录的复合物流交付，且产品与包装比例有依据时，才可保留为一项交换；不得再将这些组分重复计为独立外运废物。按相同批次范围核对投入、合格净产品、拒收物及库存。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | `cp_packaging_records` | 逐实际物流的交换、去向及无重复质量平衡 | `fao-food-loss-waste-2019` |
| `crop_reactive_n_emissions_specific_exchanges` | `p_crop_production` | 按接收环境分别识别和计算实际氨及各氮氧化物，在数据集完成前为每种物质和接收环境建立一张基本流卡。保留方法报告的 NOx 口径，不得把混合 NOx 或总氮数量改名为单一物种。仅在适用化学计量关系明确时，将该物种的元素氮质量转为化合物质量；已经是化合物质量时不再转换。 保留相连采集协议和实际过程归属，按原始阶段基准恢复各自可归属的原始分子量，再按匹配的合格参考产出归一化一次。缺少身份、数量、单位或去向会阻止数据集完整性通过；确认不存在必须有依据，不得默认零值。 | `cp_crop_inputs` | 逐项独立交换；完成前必须补齐 | `ipcc-2019-refinement-agriculture` |
| `conditioning_wastewater_specific_exchanges` | `p_primary_conditioning` | 将蔬菜处理废水、其处理服务及实际环境释放分别枚举为实际物流。逐流计量，保留各自组成、状态、原生单位、批次／期间及去向；每个具体物流和边界角色建立一张独立卡。区分废物转移、外购处理服务及具体物质排放，不得把处理服务作为废水本身，也不得重复处理负荷。分别保留库存、返工、销售降级品及弃置废物；物理混合物流只计一次，不得再将其组分作为额外输出重复计入。 保留相连采集协议和实际过程归属，按原始阶段基准恢复各自可归属的原始分子量，再按匹配的合格参考产出归一化一次。缺少身份、数量、单位或去向会阻止数据集完整性通过；确认不存在必须有依据，不得默认零值。 | `cp_conditioning_records` | 逐项独立交换；完成前必须补齐 | `fao-fresh-produce-hygiene-2003` |
| `crop_seed_or_propagule_identity_and_fate` | `p_crop_production` | 对于本作业原有 crop_seed_or_propagule 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_crop_inputs` | 按身份区分的交换和对账活动记录 | `fao-crop-production-guidance-2016` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_crop_inputs`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `req_identity_qualifiers` | all datasets | 声明物种或品种、食用部分、生产路线、地理位置、作物周期、新鲜状态、等级或可销售性和首次市场交接点；记录剩余类别判定。 | 数据集元数据、作物记录和分类复核 |
| `req_measurement_traceability` | all quantitative rows | 优先使用经校准的秤和仪表、账单、施用日志和供应商记录；保留换算因子和分配驱动因子。 | 计量记录、校准证据和供应商文件 |
| `req_temporal_coverage` | crop production and harvest | 覆盖一个完整作物周期和采收期；说明缺失事件、异常天气或非季节作业。 | 作物日历、田间日志和报告期间声明 |
| `req_mass_balance_completeness` | crop, conditioning, grading, and packaging | 核对投入、产品输出、副产品、残余物、拒收物、废水和声明损失；调查未解释差异。 | 批次、分级、地磅和发运核对记录 |
| `req_emission_method_disclosure` | calculated elementary flows | 说明因子或测量方法、养分基准、单位、地理位置、气候或土壤假设以及不确定性或替换计划。 | 计算表、因子来源和方法说明 |
| `req_route_and_scope_disclosure` | conditional processes | 说明是否纳入调理、分级、包装、储存和配送，并确定首次市场交接点。 | 过程图、场址说明和交接记录 |
| `req_data_update_trigger` | published datasets | 当品种、生产技术、养分制度、灌溉制度、调理线、包装形式、地理位置或适用排放方法发生变化时重新评估数据集。 | 变更日志和定期复核记录 |

## 9. 校验规则

以下检查对所有使用本 PCR 的前景数据包具有规范性：

- `rule_validate_residual_category`: 当更窄具名 CPC 蔬菜类别适用，或缺少物种或品种及食用部分时，拒绝数据包。
- `rule_validate_fresh_whole_state`: 拒绝加工、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁、保藏、种子、种植材料、饲料或废弃物产品。
- `rule_validate_reference_qualifiers`: 要求全部 `Required qualifiers`，且参考数量必须为声明交接点的 1 kg 新鲜净产品。
- `rule_validate_process_completeness`: 要求 `p_crop_production` 和 `p_harvest_capture`；条件成立时要求相应条件过程，并且不能把省略的条件过程当作未解释缺口。
- `rule_validate_nutrient_disclosure`: 存在 `crop_nutrient_or_amendment` 时，要求实际产品身份、施用质量、声明养分基准、施用时间以及上游数据集或证据引用。
- `rule_validate_mass_reconciliation`: 要求作物、调理、分级和包装平衡在声明的计量容差内闭合；调查未核对质量。
- `rule_validate_allocation`: 要求每个有意销售的等级或副产品只列一次，并披露所选分配驱动因子和输出集合。
- `rule_validate_emission_calculation`: 每条计算基本流都必须有物质特定单位、因子或测量方法、养分基准和来源证据。
- `rule_validate_protocol_coverage`: 每条采集或计算行都必须引用已声明的采集协议，并且每个协议都要确定时间范围和场址范围。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 剩余类别新鲜蔬菜产品类别的前景农业生产数据集；可作为 `secondary_dataset` 发布，并链接背景供应数据集 |
| downstream_use | 当满足剩余类别门槛时，为 CPC 01290 的整株新鲜蔬菜构建产品、过程和生命周期模型投影 |
| allowed_use | 在披露物种或品种、路线、地理位置、作物周期、交接点、库存基准和数据质量时，用于比较型或归因型 LCA |
| excluded_use | 加工或保藏蔬菜；种子或种植材料；饲料或废弃物产品；无明确证据的替代声明；跨未限定物种、路线、地理位置或市场状态的外推 |
| required_metadata | CPC 3.0:01290；规范 PCR id；物种或品种；食用部分；路线；地理位置；作物周期；交接点；纳入过程；参考数量；参考流身份；养分和灌溉基准；等级和损失去向；包装和储存范围 |
| required_quality_disclosure | 数据来源和期间；场址或地块覆盖；计量和分配方法；质量平衡状态；排放因子或测量方法；排除项；不确定性或暂定范围 |
| update_trigger | 新的更窄分类覆盖；品种或生产路线变化；养分、灌溉、能源、调理、分级或包装实践的重大变化；排放方法修订；重大的数据质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html | PCR 边界框架和生命周期清单原则 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 分配、清单归一化、数据质量和校验规则 |
| `fao-crop-production-guidance-2016` | official_guidance | FAO, Save and Grow in practice: maize, rice, wheat, 2016, https://www.fao.org/3/i4009e/i4009e.pdf | 作物周期记录、田间投入、产量和生产单元证据 |
| `fao-fertilizer-code-of-conduct-2019` | official_guidance | FAO, International Code of Conduct for the Sustainable Use and Management of Fertilizers, 2019, https://openknowledge.fao.org/3/ca5253en/ca5253en.pdf | 养分基准声明和肥料记录要求 |
| `ipcc-2019-refinement-agriculture` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 养分相关农业排放计算方法和因子披露 |
| `fao-food-loss-waste-2019` | official_guidance | FAO, The State of Food and Agriculture 2019: Moving forward on food loss and waste reduction, https://www.fao.org/3/ca6030en/ca6030en.pdf | 损失、拒收物、残余物、去向和核对规则 |
| `fao-fresh-produce-hygiene-2003` | official_guidance | FAO and WHO, Assuring Food Safety and Quality: Guidelines for Strengthening National Food Control Systems, 2003, https://www.fao.org/3/y8705e/y8705e.pdf | 新鲜产品调理、用水、交接和卫生相关记录要求 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
