---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-ot-3fe2fc05
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非散装巧克力及其他含可可食品制品（加糖可可粉除外）

## 1. 范围与适用性

本 PCR 用于生产非散装成品巧克力及其他含可可食品制品的前景数据包。当可可原料界定产品类别时，覆盖黑巧克力、牛奶巧克力、白巧克力、夹心、涂层、模制、分份、片状、条丝状、果仁糖及类似成品。必须声明具体上市产品、配方类别、可可含量声明、物理形态、夹心或配料以及包装配置。产品识别与组成依据 Codex CXS 87-1981（`codex-cxs-87-1981`）解释。

默认前景边界起于制造场址接收可可原料、糖或甜味剂、乳制配料、脂肪、夹杂配料、添加剂和包装材料，止于 1 kg 净可食产品以所声明的非散装上市形态在工厂门交付。若场址接收的是干可可豆，而不是可可液块、可可脂、可可粉或其他中间体，则还必须纳入场内可可豆清理、烘焙、去壳、研磨以及适用的压榨或饼块粉碎。制造工序分解依据 Bianchi 等（`bianchi-2020-chocolate-lca`）报告的巧克力工艺。

排除加糖可可粉；作为中间材料出售的可可豆、可可液块/浆、可可脂、可可粉和散装巧克力；不含可可的糖果；配制好的可可饮料；以及下游配送、零售冷藏、消费者使用和寿命终结过程。所有采购材料与能源载体的上游生产不纳入前景过程清单，但在下游生命周期使用时必须连接有代表性的上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-ot-3fe2fc05 |
| classification_refs | CPC 3.0 `23660`，非散装巧克力及其他含可可食品制品（加糖可可粉除外） |
| covered_products | 以非散装单元或份量供应的成品巧克力及含可可食品制品，包括所声明的原味、牛奶、白巧克力、夹心、涂层、模制、片状、条丝状、果仁糖及含配料形态 |
| excluded_products | 加糖可可粉；可可豆；作为中间体出售的可可液块/浆、可可脂、可可粉和散装巧克力；不含可可的糖果；配制好的可可饮料 |
| representative_product | 采用所声明非散装上市形态包装的成品巧克力 |
| production_route | 接收可可原料及其他配料 -> 计量与配方 -> 精磨/精炼 -> 调温、成型、夹心或后加工 -> 冷却 -> 非散装包装；适用时增加场内可可豆加工 |
| market_state | 采用所声明固态或半固态非散装形态、已包装并在工厂门放行的净可食产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供采用所声明非散装上市形态的成品巧克力或其他含可可食品制品 |
| How much | 1 kg 净可食产品，不含包装质量 |
| How well | 声明产品子类、配方类别、可可含量、配料和过敏原、物理形态、夹心或夹杂物、质量规格及包装配置 |
| How long or cycle | 一个在工厂门放行的生产批次；不规定使用持续时间 |
| reference_flow_link | 1 kg 类别界定的 Chocolate 产品流，并声明必需产品限定信息 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净可食产品 |
| 参考产品流 | Chocolate `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；配方类别；总可可固形物或适用的可可含量声明；乳成分状态；夹心或夹杂物类型；物理形态；净可食质量；包装配置；起始可可原料状态；生产地域；参考年份；工厂门 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以工厂门净可食产品质量表示参考流；不得计入包装质量。 |
| `packaging_mass_separation` | 包装投入与产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将包装与可食产品分开计量，分别报告各材料类别，且不得将其加入参考产品质量。 |
| `ingredient_mass_basis` | 可可及其他配料投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录接收状态质量；当配方核对需要时保留干物质、水分、可可固形物或浓度数据。 |
| `rework_mass_tracking` | 不合格产品和内部返工料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录内部返工料的产生和重新投入；只有离开前景边界的材料才计为废物或共产品。 |
| `utility_unit_preservation` | 电力、热、冷却、燃料和水 | 活动特定属性 | 按计量记录采用 kWh、MJ、kg 或 m3 | 保留计量单位和换算系数；不得把电力、热能、冷却服务、燃料质量和水质量合并为一个不区分的数量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_default_gate` | 前景起点和终点 | 从场址接收可可原料、其他配料和包装开始，到放行的非散装产品及单独记录的包装在工厂门结束。采购投入必须连接上游数据集。 | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `boundary_on_site_cocoa_processing` | 接收干可可豆的场址 | 纳入清理与筛选、烘焙、去壳、研磨，以及用于生产可可液块、可可脂或可可粉的场内压榨或饼块粉碎。 | `bianchi-2020-chocolate-lca` |
| `boundary_environmental_inventory` | 所有前景过程 | 清查原料、水、能源、废水、废气、固体废物和相关直接排放；保留显示排放来源的过程流程图。 | `eu-fdm-bat-2019` |
| `boundary_downstream_separation` | 配送、使用和寿命终结 | 从本前景数据包中排除下游阶段，但使产品和包装产出能够连接到下游从摇篮到坟墓模型。 | `ec-pef-2021-2279` |
| `boundary_no_double_counting` | 共享公用工程和内部中间体 | 每项投入、排放、废物和中间体转移只计一次；将场址总量分配到过程时，不得重复加入同一分项计量数量。 | `ec-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | received_cocoa_materials_and_other_ingredients；声明可可进入时是干豆、液块/浆、可可脂、可可粉、巧克力还是其他可可制品 |
| starting_condition_role | 前景制造门，并决定是否纳入可可豆初级加工 |
| product_classification_scope | CPC 3.0 `23660`；非散装成品巧克力及其他含可可食品制品，加糖可可粉除外 |
| recursive_input_rule | 已属于本产品类别的采购投入（例如用于涂层或夹心的巧克力）应记录为具有独立上游数据集的产品投入，不得在同一前景数据包内递归展开。 |
| upstream_dataset_requirement | 每种可可衍生物、糖或甜味剂、乳制配料、脂肪、夹杂配料、添加剂、包装材料、燃料、电力组合、供水和外部废物处理服务都必须有代表性上游数据集。 |
| disclosure | 声明配方和可可含量基准、起始可可原料状态、纳入的单元操作、地域、参考年份、技术、批次范围、内部返工、共产品、包装配置、公用工程分配、截断和省略流。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| cocoa_bean_processing | 场内可可豆加工 | conditional | 当场址接收干可可豆并生产用于参考产品的可可液块、可可脂或可可粉时纳入。 | 前景可可中间体生产 | 转入配方过程的可可中间体 kg |
| ingredient_formulation | 配料接收、计量与配方 | required |  | 前景物料准备 | 配制巧克力混合物 kg |
| refining_conching | 精磨与精炼 | required |  | 前景粒径降低、混合、风味形成及水分/挥发物去除 | 精炼巧克力物料 kg |
| tempering_forming_finishing | 调温、成型、夹心、涂层与冷却 | required | 仅纳入所声明产品子类实际使用的后加工操作。 | 前景最终产品成型 | 包装前成品可食产品 kg |
| non_bulk_packaging | 非散装包装 | required |  | 前景包装与放行 | 净可食产品 kg，加单独计量的包装 |
| site_utilities_environmental_control | 场址公用工程、清洁与环境控制 | required |  | 共享前景支持和环境流核算 | 归一化到参考产品 kg 的场址公用工程和排放总量 |

### 过程：场内可可豆加工（`cocoa_bean_processing`）

#### 输入

##### 产品流

###### 为场内转化而接收的干可可豆（`cocoa_bean_input`）

仅当可可豆清理、烘焙、去壳、研磨、压榨或饼块粉碎在前景场址内发生时记录干可可豆。

- 选定流：Dried cocoa beans
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于参考产品的接收状态可可豆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_bean_inputs`
- 来源：
- 数量范围：暂定可可豆投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮筛选估计；应以批次质量平衡证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转入配方过程的可可中间体（`cocoa_intermediate_output`）

按实际物料身份和转移质量分别记录可可液块、可可脂、可可粉或其他可可中间体。

- 选定流：适用的 Cocoa liquor, cocoa butter, or cocoa powder
- 流属性/单位：Mass / kg
- 数量规则：按可可中间体类型计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_intermediate_outputs`
- 来源：

##### 废物流

###### 离开场址的可可壳、筛出物和拒收豆（`cocoa_processing_residues`）

分别记录每种残余物流向；内部再利用是内部转移，不得计为避免产品。

- 选定流：Cocoa processing residues
- 流属性/单位：Mass / kg
- 数量规则：按去向计量残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

### 过程：配料接收、计量与配方（`ingredient_formulation`）

#### 输入

##### 产品流

###### 配方中使用的可可衍生物（`cocoa_material_inputs`）

分别记录每种采购或内部转移的可可液块、可可脂、可可粉、巧克力或其他可可制品。

- 选定流：Declared cocoa-derived material
- 流属性/单位：Mass / kg
- 数量规则：按配料和批号计量批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_inputs`
- 来源：
- 数量范围：暂定可可原料投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.2
  - 单位：kg/kg 净可食产品
  - 基准：宽泛产品族筛选估计；应以配方和质量平衡证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 糖、乳制配料、脂肪、夹杂配料、添加剂及其他配料（`other_ingredient_inputs`）

按物料身份分别记录配料质量；当配方核对需要时保留浓度或干物质信息。

- 选定流：Declared non-cocoa ingredient
- 流属性/单位：Mass / kg
- 数量规则：按配料和批号计量批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_inputs`
- 来源：
- 数量范围：暂定非可可配料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.2
  - 单位：kg/kg 净可食产品
  - 基准：宽泛产品族筛选估计；应以配方和质量平衡证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转入精磨的配制巧克力混合物（`formulated_mix_output`）

记录转入精磨/精炼阶段的配制混合物核对质量。

- 选定流：Formulated chocolate mix
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或以配料合计扣除实测损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulation_inputs`
- 来源：

### 过程：精磨与精炼（`refining_conching`）

#### 输入

##### 产品流

###### 供给精磨与精炼的配制混合物（`formulated_mix_input`）

记录从配方过程转移的质量，不得为同一内部中间体再次创建上游负荷。

- 选定流：Formulated chocolate mix
- 流属性/单位：Mass / kg
- 数量规则：计量内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfers`
- 来源：

#### 输出

##### 产品流

###### 精磨并精炼的巧克力物料（`refined_chocolate_mass`）

记录离开所声明精磨/精炼工序的质量。Bianchi 等将精磨与精炼识别为巧克力制造的核心操作（`bianchi-2020-chocolate-lca`）。

- 选定流：Refined chocolate mass
- 流属性/单位：Mass / kg
- 数量规则：精磨/精炼后计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfers`
- 来源：`bianchi-2020-chocolate-lca`
- 数量范围：暂定精炼物料产率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.2
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮质量平衡筛选估计；应以批次证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未在内部返工的不合格巧克力（`off_spec_chocolate`）

仅记录以废物或单独上市共产品离开前景系统的材料；内部返工应作为内部循环追踪。

- 选定流：Off-spec chocolate
- 流属性/单位：Mass / kg
- 数量规则：按处置方式计量不合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：
- 数量范围：暂定不合格产出筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮筛选估计；应以处置记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：调温、成型、夹心、涂层与冷却（`tempering_forming_finishing`）

#### 输入

##### 产品流

###### 精炼巧克力及所声明夹心或夹杂物（`finishing_material_inputs`）

记录内部精炼巧克力转移，以及配方过程尚未捕获的单独采购或生产的夹心、涂层或夹杂物。

- 选定流：适用的 Refined chocolate, filling, coating, or inclusion
- 流属性/单位：Mass / kg
- 数量规则：计量转移或批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_transfers`
- 来源：

#### 输出

##### 产品流

###### 包装前成品可食产品（`finished_unpacked_product`）

记录调温、成型、夹心或涂层和冷却后的合格产品质量。

- 选定流：Finished unpacked chocolate or cocoa-containing preparation
- 流属性/单位：Mass / kg
- 数量规则：计量合格未包装产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_mass`
- 来源：

### 过程：非散装包装（`non_bulk_packaging`）

#### 输入

##### 产品流

###### 初级与次级包装材料（`packaging_material_inputs`）

按实际质量和材料分别记录每种包裹物、薄膜、箔、纸、纸板、托盘、纸盒、标签、黏合剂及其他包装材料。

- 选定流：Declared packaging material
- 流属性/单位：Mass / kg
- 数量规则：计量包装消耗，或以采购和库存核对计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：
- 数量范围：暂定包装质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 净可食产品
  - 基准：宽泛非散装包装筛选估计；应以物料清单和领用记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 放行的已包装参考产品（`reference_product_output`）

可食部分是定量参考；包装单独连接，不计入 1 kg 参考数量。

- 选定流：Chocolate `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3`
- 流属性/单位：Mass / kg
- 数量规则：放行核对后 1 kg 实测净可食产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装边角料和拒用包装（`packaging_waste`）

按材料和实际处理或回收去向记录包装边角料。

- 选定流：Packaging waste by material
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：
- 数量范围：暂定包装废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮筛选估计；应以废物记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：场址公用工程、清洁与环境控制（`site_utilities_environmental_control`）

#### 输入

##### 产品流

###### 前景生产使用的场址电力（`site_electricity`）

有条件时使用过程分项计量；否则采用所披露规则把完整场址电力平衡分配给产品。

- 选定流：Electricity, declared grid or supplier mix
- 流属性/单位：Energy / kWh
- 数量规则：计量归属于前景生产期间的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定电力筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 净可食产品
  - 基准：宽泛首轮场址电力估计；应以分项计量或发票核对替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 前景生产使用的场址热能或燃料（`site_thermal_energy`）

分别记录采购热力和每种直接燃料；不得重复计算燃料能量和采购热力。

- 选定流：Declared fuel or purchased thermal energy
- 流属性/单位：Energy or mass / MJ or kg
- 数量规则：计量采购热力或核对燃料消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_utilities`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定热能筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 净可食产品
  - 基准：宽泛首轮热能估计；应以仪表或燃料记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 前景生产使用的冷却能或服务（`site_cooling_energy`）

记录冷却用电或采购冷却服务，并说明其是否已包含在场址电力中。

- 选定流：Cooling electricity or cooling service
- 流属性/单位：Energy / kWh
- 数量规则：分项计量或工程分配的冷却能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_utilities`
- 来源：
- 数量范围：暂定冷却能筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 净可食产品
  - 基准：宽泛首轮冷却估计；应以分项计量或设备计算替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁和过程支持用水（`cleaning_water`）

按来源和用途记录水；采用零用水干式清洁时必须明确记录，不得直接省略。

- 选定流：Water supply by source
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量或核对归属于前景生产的用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮清洁和支持用水估计；应以水平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 送往处理的过程和清洁废水（`process_wastewater`）

记录废水数量、处理去向和相关监测特征；允许有文件证明的零排放路线。

- 选定流：Wastewater to declared treatment
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量或由水平衡计算的废水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净可食产品
  - 基准：宽泛首轮废水估计；应以流量监测或水平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 场内操作对空气和水的直接排放（`direct_site_emissions`）

记录燃烧、烘焙、除尘、制冷剂损失、废水排放及其他前景源的实测或计算直接排放。不得重复计算已由采购能源或场外处理数据集表示的排放。

- 选定流：按物质和环境介质选择 Relevant elementary flow
- 流属性/单位：Mass / kg
- 数量规则：按源采用浓度与流量实测、质量平衡损失或燃料因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可食参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019`
- 数量范围：暂定直接排放筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 物质/kg 净可食产品
  - 基准：针对各报告物质的刻意宽泛首轮筛选；应以监测或因子证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 前景负荷 | 通过过程细分、单元操作单独计量以及追踪内部中间体和返工料避免分配。 | `ec-pef-2021-2279` |
| `allocation_internal_rework` | 内部返工料 | 将返回同一前景系统的返工料视为内部循环；不得将其计为避免产品，除非其离开边界，否则不得计为废物。 |  |
| `allocation_physical_relation` | 不可避免的共产品分配 | 使用能够反映投入和产出如何随数量变化的可证明物理关系；披露关系、因子和受影响流。 | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `allocation_fallback_sensitivity` | 可可液块、可可脂、可可粉或其他联合产出 | 若没有更有代表性的物理关系，暂以干质量为分配基准；结果重要时检验能量含量或经济替代方案。 | `bianchi-2020-chocolate-lca` |
| `allocation_shared_utilities` | 未直接计量到产品的场址总量 | 使用设备能耗、运行时间、吞吐量或生产质量等有文件记录的因果驱动；将分配总量与场址记录核对并防止重复计算。 | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoa_bean_inputs` | cocoa_bean_processing | 干可可豆 | 接收和批次领用记录 | 批号；供应商；产地；质量；水分；接收日期；生产批次 | 校准秤或地磅，并与库存核对 | kg | 每批来料和生产批次 | 有代表性的生产期间，通常至少连续 12 个月 | 为覆盖产品接收可可豆的全部生产线 | 汇总可归属豆质量并以放行净产品归一化 | 秤校准；批次追溯；库存核对 |
| `cp_cocoa_intermediate_outputs` | cocoa_bean_processing | 可可液块、可可脂、可可粉和残余物 | 转移和产率记录 | 批次；中间体身份；投入质量；产出质量；水分或固形物；去向 | 校准秤加批次质量平衡 | kg | 每生产批次 | 与参考产品相同期间 | 所有场内可可豆加工线 | 按身份汇总产出，并与豆投入和残余物核对 | 秤校准；批次产率报告；核对记录 |
| `cp_formulation_inputs` | ingredient_formulation | 可可和非可可配方投入 | 配方、批次领用和库存记录 | 产品代码；批次；配料；批号；领用质量；退回质量；水分或浓度 | 校准配料系统和库存核对 | kg | 每生产批次 | 与参考产品相同期间 | 覆盖产品的全部配方线 | 各配料净领用质量除以放行净产品 | 配方版本；配料校准；批号和库存核对 |
| `cp_process_transfers` | refining_conching | 内部配制和精炼巧克力转移 | 批次转移记录 | 批次；来源过程；去向过程；物料身份；毛重；皮重；时间戳 | 校准容器、称重传感器或质量平衡转移记录 | kg | 每次转移或生产批次 | 与参考产品相同期间 | 所有覆盖的精磨、精炼和后加工线 | 核对转入和转出，不重复加入上游负荷 | 设备校准；批次谱系；转移核对 |
| `cp_finished_product_mass` | tempering_forming_finishing | 合格成品可食产品 | 生产和放行记录 | 产品代码；批次；毛重；包装皮重；净可食质量；拒品；放行状态 | 校准检重秤或经核对的生产秤 | kg | 每生产批次和包装批次 | 与参考产品相同期间 | 所有覆盖的成型和后加工线 | 汇总放行净可食质量；排除包装和未放行拒品 | 秤校准；放行记录；净含量核对 |
| `cp_packaging_materials` | non_bulk_packaging | 包装消耗 | 物料清单、领用、退回和库存记录 | 包装材料；组成；领用质量；退回质量；包装单元数；边角料 | 实测领用/退回，或以抽样称重验证供应商质量 | kg | 每包装批次和每月核对 | 与参考产品相同期间 | 所有非散装包装线 | 各材料净消耗包装质量除以放行净产品 | 物料清单版本；库存核对；抽样称重 |
| `cp_waste_outputs` | non_bulk_packaging | 食品和包装废物 | 废物台账和转移文件 | 废物类型；来源过程；质量；日期；去向；处理路线；返工状态 | 校准废物秤和承包商记录 | kg | 每次收集和每月核对 | 与参考产品相同期间 | 所有前景过程 | 按类型和路线仅汇总跨越场址边界的废物 | 秤校准；转移单；返工核对 |
| `cp_site_utilities` | site_utilities_environmental_control | 电力、热、燃料和冷却 | 仪表、发票、燃料收据和生产日志 | 仪表；起止读数；燃料数量；热值；生产期间；生产线运行时数 | 结算仪表、分项仪表或经核对的工程分配 | 原始仪表单位、kWh、MJ 或 kg | 连续或每张发票；按月汇总 | 有代表性的生产期间，通常至少连续 12 个月 | 完整场址和全部覆盖生产线 | 扣除排除用途，以所披露驱动分配，并与场址总量核对 | 仪表校准；发票；分配工作表；场址总量核对 |
| `cp_water_wastewater` | site_utilities_environmental_control | 水和废水 | 供排水仪表、水平衡和监测记录 | 来源；流入；用水区域；排放路线；流量；pH；温度；监测污染物负荷 | 仪表和有文件记录的水平衡；适用时采用认可实验室分析 | kg、m3 和物质特定单位 | 连续或每月流量；按许可和源采取适当监测频率 | 与参考产品相同期间 | 完整场址水系统 | 核对流入、消耗、进入产品、蒸发和排放 | 仪表校准；水平衡闭合；实验室报告 |
| `cp_direct_emissions` | site_utilities_environmental_control | 直接空气和水排放 | 烟气、无组织、制冷剂、废水和燃料记录 | 排放源；物质；浓度；流量；运行时间；燃料用量；因子；制冷剂补充；环境介质 | 直接监测，或以采集活动数据透明计算 | kg 物质及排放源特定测量单位 | 按监测计划和每次物料事件 | 与参考产品相同期间 | 所有前景排放源 | 浓度 x 流量 x 时间，或采集活动 x 有文件因子，再归一化 | 校准；实验室报告；因子引文；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单行 | 归一化数量 = 期间可归属数量 / 放行净可食产品 kg | 协议特定可归属数量；`cp_finished_product_mass` | 每 1 kg 净可食参考产品的数量 |  |
| `calc_formulation_balance` | 配料 | 配料净投入 = 领用质量 - 未使用退回质量；将净投入合计与内部转移、实测损失和废物核对 | `cp_formulation_inputs`; `cp_process_transfers`; `cp_waste_outputs` | 每参考流各配料核对质量 kg | `codex-cxs-87-1981` |
| `calc_packaging_consumption` | 包装 | 包装净消耗 = 领用质量 - 未使用退回质量；与包装单元数和包装边角料核对 | `cp_packaging_materials`; `cp_waste_outputs` | 每参考流各包装材料 kg |  |
| `calc_utility_allocation` | 共享场址公用工程 | 可归属公用工程 = 完整场址总量 - 排除用途，再乘以所披露因果分配份额；份额合计必须等于可分配总量 | `cp_site_utilities`; 运行时数；吞吐量；分项仪表数据 | 每参考流的 kWh、MJ 或 kg 公用工程 | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `calc_water_balance` | 水和废水 | 在所披露不确定度内，水投入 = 进入产品 + 蒸发 + 废水 + 其他实测损失 | `cp_water_wastewater` | 每参考流核对的水投入和废水 | `eu-fdm-bat-2019` |
| `calc_direct_emissions` | 直接排放 | 排放质量 = 实测浓度 x 标准化体积流量 x 运行时间，或采集活动 x 引用的排放因子 | `cp_direct_emissions` | 每参考流按环境介质区分的物质 kg | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品代码、子类、配方版本、可可含量声明、物理形态、夹心或夹杂物、包装配置、批次和放行状态。 | 产品规格；配方；放行记录；`codex-cxs-87-1981` |
| `dq_mass_measurement` | 所有物料投入和产出 | 使用校准称量系统，对同一生产总体的配料、中间体、产品、返工料、废物和包装质量进行核对。 | 校准记录；批次和期间质量平衡 |
| `dq_temporal_coverage` | 前景活动数据 | 使用有代表性的连续期间，通常至少 12 个月；否则披露季节性、生产周期、开停机和其他偏离。 | 带日期原始记录；覆盖声明 |
| `dq_geography_technology` | 场址和上游连接 | 声明场址地域、生产技术、起始可可原料状态、能源供应、废水处理和上游数据集代表性。 | 场址说明；供应商和数据集元数据 |
| `dq_environmental_completeness` | 公用工程、废物、废水和排放 | 保持水、能源、原料、废水、废气、固体废物和相关直接排放的完整清单，并说明零值和省略项。 | 过程流程图；清单和监测计划；`eu-fdm-bat-2019` |
| `dq_allocation` | 共享过程和共产品 | 保留过程细分尝试、分配驱动、因子、核对和重要分配选择的敏感性结果。 | 分配工作表；仪表核对；敏感性结果 |
| `dq_estimate_replacement` | 暂定推理估算范围 | 把每个 `reasoned_estimate` 范围作为可替换的 QA 筛选，而非发布默认值；方法学激活前替换或明确评审。 | 评审记录及有来源或前景范围证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 Chocolate UUID `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3`、Product flow 类型、Mass 参考属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。 |  |
| `validate_scope` | 产品身份 | 要求非散装成品含可可制品；拒绝加糖可可粉、散装可可/巧克力中间体、不含可可的糖果及配制饮料。 | `codex-cxs-87-1981` |
| `validate_qualifiers` | 参考产品元数据 | 缺少第 3 节任一必需限定信息时判定完整性失败。 | `codex-cxs-87-1981` |
| `validate_starting_condition` | 系统边界 | 要求明确入厂可可原料状态以及是否纳入场内可可豆加工，并与过程清单一致。 | `bianchi-2020-chocolate-lca` |
| `validate_process_coverage` | 过程图和清单 | 要求纳入配方、精磨/精炼、所声明后加工、非散装包装和场址公用工程；可可豆入厂时要求纳入可可豆加工。 | `bianchi-2020-chocolate-lca`; `eu-fdm-bat-2019` |
| `validate_mass_balance` | 物料清单 | 在所披露不确定度内，将配料和内部转移与放行可食产品、包装、废物、排放和库存变化核对。 |  |
| `validate_environmental_inventory` | 场址公用工程和排放 | 要求完整的水、能源、原料、废水、废气、固体废物和相关直接排放记录，并说明零值和省略项。 | `eu-fdm-bat-2019` |
| `validate_allocation` | 共享公用工程和共产品 | 要求分配避免证据、所披露因果驱动或后备基准、完整总量核对，并且公用工程或中间体负荷不重复。 | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `validate_reasoned_estimates` | QA 范围 | 将每个 `reasoned_estimate` 标记为暂定；若发布关键允许范围仍依赖未评审推理证据，则激活失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 非散装成品巧克力及含可可食品制品的前景单元过程数据包 |
| downstream_use | secondary_dataset; background_dataset; process 和 lifecyclemodel 投影 |
| allowed_use | 与 CPC 3.0 `23660` 及所声明配方、物理形态、起始条件、地域、技术、包装和工厂门边界相匹配的产品 |
| excluded_use | 加糖可可粉；散装可可/巧克力中间体；不含可可的糖果；配制饮料；起始条件或单元操作实质不同的产品；未单独证明功能等效性的消费者比较声明 |
| required_metadata | 规范 PCR id；参考 UUID 和质量基准；产品子类；配方和可可含量；乳成分、夹心和夹杂物状态；物理形态；起始可可原料；场址地域；参考年份；技术；过程覆盖；包装清单；分配；截断；上游数据集身份 |
| required_quality_disclosure | 原始记录覆盖；校准；质量、水和公用工程核对；数据缺口；估算份额；推理估算替换；分配和敏感性；废水和直接排放监测；上游代表性 |
| update_trigger | 配方或可可含量重大变化；新的起始可可原料；过程路线、设备、能源组合、包装、地域、分配、环境控制、法规要求或数据期间变化；替换重大暂定估算 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-87-1981` | standard | Codex Alimentarius，CXS 87-1981，Standard for Chocolate and Chocolate Products，2025 年修订并含 2026 年勘误，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B87-1981%2FCXS_087e.pdf（检索日期 2026-08-10） | 产品范围、巧克力类型、组成和可可含量限定、身份校验 |
| `ec-pef-2021-2279` | official_guidance | European Commission，Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，Annexes I-II，https://environment.ec.europa.eu/publications/recommendation-use-environmental-footprint-methods_en（检索日期 2026-08-10） | 功能单位和参考流框架、生命周期边界、清单完整性、分配层级、数据质量和稳健性 |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-10） | 过程流程图及水、能源、原料、废水、废气、固体废物和排放清单；监测与质量证据 |
| `bianchi-2020-chocolate-lca` | literature | Bianchi, F. R. 等（2020），Environmental analysis along the supply chain of dark, milk and white chocolate: a life cycle comparison，The International Journal of Life Cycle Assessment，https://doi.org/10.1007/s11367-020-01817-6 | 巧克力制造过程分解、配料和包装相关性、能源/冷却背景、共产品分配敏感性 |
