---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.sugar-confectionery-including-white-chocolate-not-containing-cocoa-vegetables-fruits-nu-b706a394
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 不含可可的糖果（包括白巧克力）；糖渍蔬菜、水果、坚果、果皮及植物其他部分

## 1. 范围与适用性

本 PCR 用于生产以下产品的工厂门前景数据包：不含可可固形物的糖果、白巧克力，以及以糖保存的可食用蔬菜、水果、坚果、果皮或植物其他部分。边界覆盖从配料和初级包装进厂到可销售包装产品出厂的批次或连续生产。

产品族包括硬糖和软糖、方登糖、糖霜夹心、焦糖、太妃糖、口香糖、凝胶糖、软糖锭、棉花糖、牛轧糖、杏仁糖、白巧克力，以及符合所声明类别边界的沥糖、糖衣、蜜饯或结晶植物制品。前景数据包必须选择并说明实际路线；除非采用有记录的产量加权汇总，否则不得平均会掩盖实质差异的路线。

本 PCR 不包括含可可固形物的巧克力及可可制品、面粉糖食和烘焙制品、餐桌果冻和饮料制剂、冰制糖果、药品、作为产品销售的精制糖，以及主要通过巴氏杀菌、冷冻、干燥、盐或酸而非糖保存的水果制品。农业生产、外购糖、糖浆、可可脂、乳配料、明胶、淀粉、水果或其他配料的生产、出厂后的分销、零售、消费和报废均在前景边界之外；纳入生命周期模型时需要链接相应的上下游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.sugar-confectionery-including-white-chocolate-not-containing-cocoa-vegetables-fruits-nu-b706a394 |
| classification_refs | CPC 3.0：23670（精确分类语境；本 PCR 不声明已接受的 mapping） |
| covered_products | 以糖为主要成分且不含可可固形物的硬糖、软糖、牛轧糖、杏仁糖、口香糖、凝胶糖、软糖锭、棉花糖、方登糖、糖霜夹心、焦糖和太妃糖；白巧克力；以沥糖、糖衣、蜜饯或结晶方式保存的植物部分。 |
| excluded_products | 含可可固形物的巧克力；可可制品；面粉糖食和烘焙制品；餐桌果冻、饮料制剂、冰制糖果和药品；作为产品销售的精制糖；主要通过热加工、冷冻、干燥、盐或酸而非糖保存的植物制品。 |
| representative_product | 来自一个已识别路线和配方族的可销售包装产品工厂门产量加权组合；当路线负荷存在实质差异时保留路线特定结果。 |
| production_route | 接收配料的准备，随后采用一种或有记录的路线组合：糖浆混合/熬煮/冷却/成型；植物材料糖液浸渍和干燥；或白巧克力混合、精磨/精炼、调温和成型；最后完成整饰、包装、清洗和场址服务。 |
| market_state | 制造工厂门处的成品食品，处于所声明的初级包装状态，可进入储存、分销或后续使用。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造工厂门提供可销售的糖果、白巧克力或糖渍植物制品。 |
| How much | 1 kg 可销售产品净质量，不含初级、二级和三级包装。 |
| How well | 符合所声明路线、配方/产品子类、产品状态、适用食品规范和质量放行标准。 |
| How long or cycle | 制造工厂门处一个完整的生产和放行周期；不表示使用阶段持续时间。 |
| reference_flow_link | 功能单位由下列 Tiangong 参考产品流的恰好 1 kg 实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Sugar confectionery (including white chocolate), not containing cocoa, vegetables, fruits, nuts, fruit-peel and other parts of plants, preserved by sugar `db6192c0-b83b-4376-95e2-df5c7ad09297` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品路线和配方族；产品子类和物理形态；不含可可固形物或声明的白巧克力身份；植物制品的糖保存状态；相关时的净水分或可溶性固形物控制；纳入的初级包装状态；制造地域；技术；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 可销售参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 可销售产品净质量；参考数量排除所有包装层，并将包装记录为单独投入。 |
| `saleable_output_mass` | 批次和生产活动输出 | Mass | kg | 使用剔除不合格品后且不含包装质量的已放行产品净质量；核对批次、返工、拒收和库存变化记录。 |
| `route_process_control` | 熬煮糖果和糖渍植物路线 | 视情况为温度、水分含量或可溶性固形物 | °C、质量 % 或 °Brix | 保留实测路线控制变量和方法。FAO 路线值是过程指导而非默认清单量：熬煮温度随糖果类型变化，糖渍水果采用分阶段提高糖液浓度并干燥；声明实际配方目标和测量基准。 |
| `white_chocolate_identity` | 声明为白巧克力的产品 | 干物质基准质量分数 | 质量 % | 声明适用市场规范。采用 CXS 87 时，核实干物质基准至少含 20% 可可脂和至少 14% 乳固体；不得推断“not containing cocoa”排除可可脂。 |
| `water_volume_to_mass` | 计量水或废水 | 体积和密度 | m3 和 kg | 保留实测体积；仅用已声明的实测或有依据密度换算质量，并保留原始水表记录。 |
| `energy_conversion` | 电力、燃料、蒸汽、热、冷却和压缩空气 | 能量 | kWh 或 MJ | 保留载能体特定记录。仅使用有记录的因子换算，不得将电力和热能合并为一个无区分数量。 |
| `packaging_mass` | 初级及其他包装 | Mass | kg | 分别记录各包装材料，且不得把包装质量计入 1 kg 产品参考流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配料、加工助剂、清洗材料、公用工程和包装以所声明的市场状态送达制造工厂门。 |
| starting_condition_role | 产品制造的前景门到门起始条件；上游负荷由链接的数据集提供。 |
| product_classification_scope | 第 2 节的语义产品边界；CPC 3.0 代码 23670 仅保留为分类语境。 |
| recursive_input_rule | 外购且已属于本类别的半成品作为同类别产品投入记录一次并链接合适上游数据集；不得在该上游数据集中递归重用本 PCR。 |
| upstream_dataset_requirement | 将外购配料、燃料、电力、水、包装和外包处理链接到在地域、技术和时间上具有代表性的上游数据集。 |
| disclosure | 声明制造路线、配方族、接收配料状态、纳入的包装、场址和报告期、分配、返工、截断或遗漏、外包、公用工程归属及数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate_to_gate` | 所有前景数据包 | 纳入接收和储存、配料准备、所有适用制造路线步骤、成型/整饰、包装、清洗、直接控制的公用工程、场内废物和废水处理，以及直至制造工厂门的直接排放。 | `fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016` |
| `sb_route_selection` | 路线特定制造 | 至少纳入一个已声明制造路线；当汇总会掩盖生产技术或配方差异时，保留单独路线记录。 | `fao-sugar-confectionery-1992`; `fao-candied-fruit-2004`; `codex-cxs-87-1981` |
| `sb_upstream_linking` | 外购投入和外包作业 | 保持外购投入可见并链接代表性上游数据集；不得将其上游生产吸收到不可追溯的场址总量中。 | `eu-pef-2021-2279` |
| `sb_no_double_counting` | 返工和同类别中间产品 | 跟踪内部返工和中间转移但不生成第二个产品投入；递归投入规则仅适用于外购或外部供应的同类别材料。 | `eu-pef-2021-2279` |
| `sb_no_implicit_cutoff` | 必需前景清单 | 首个前景数据包不得截断必需的材料、能源、水、废物、废水或直接排放行。下游方案允许的任何遗漏均应在前景数据包之外量化、说明并披露。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receipt` | 配料接收、储存和准备 | required | 始终纳入。 | 配料的前景接收、储存、称量、调理和投产放行。 | 投入路线过程的配料 kg |
| `sugar_confectionery_manufacture` | 糖果混合、熬煮和成型 | conditional | 硬/软糖、口香糖、凝胶糖、方登糖、糖霜夹心、焦糖、太妃糖、牛轧糖、杏仁糖、棉花糖或相当的不含可可糖果适用时纳入。 | 前景配方、加热、冷却、搅打、挤出、模制、熟化和整饰。 | 未包装合格路线输出 kg |
| `sugar_preserved_plant_manufacture` | 植物制品糖保存 | conditional | 沥糖、糖衣、蜜饯或结晶蔬菜、水果、坚果、果皮或植物其他部分适用时纳入。 | 前景准备、糖液浸渍、平衡、沥液、干燥和整饰。 | 未包装合格路线输出 kg |
| `white_chocolate_manufacture` | 白巧克力制造 | conditional | 声明为白巧克力或本类别内可可脂糖食的产品适用时纳入。 | 前景混合、适用时精磨/精炼、调温、成型和冷却。 | 未包装合格路线输出 kg |
| `packaging_and_site_services` | 包装、清洗和直接控制的场址服务 | required | 始终纳入；将共享服务分配给所声明产品族。 | 前景初级包装、产品放行、清洗、公用工程归属、制冷剂核算、废物和废水处理。 | 1 kg 可销售产品净质量参考流 |

### 过程：配料接收、储存和准备（`ingredient_receipt`）

#### 输入

##### 产品流

###### 接收的外购配料（`ingredients_received`）

以接收市场状态分别记录每种外购糖、糖浆、植物材料、可可脂、乳配料、脂肪、淀粉、明胶、胶体、酸、香料、色素、盐、加工助剂或其他配方配料。

- 选定流：路线和配料特定产品流；上游配料不得使用参考产品流
- 流属性/单位：Mass / kg
- 数量规则：报告期配料台账中验收的质量，并按期初和期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`fao-sugar-confectionery-1992`; `fao-candied-fruit-2004`; `codex-cxs-87-1981`
- 数量范围：暂定总配料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：2.5
  - 单位：kg/kg 可销售产品净质量
  - 基准：获得经审查类别数据之前的宽泛跨路线筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 投入制造的配料（`ingredients_released`）

将从储存区发往适用前景路线的材料作为内部转移跟踪；本行不再链接额外上游数据集。

- 选定流：内部路线特定配料转移
- 流属性/单位：Mass / kg
- 数量规则：来自批次单、秤、罐或库存控制记录的实测发料量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`uk-ea-pontefract-confectionery-2016`

##### 废物流

###### 拒收或损失的配料（`ingredient_rejects`）

按材料和去向记录过期、损坏、洒落、污染或其他拒收配料；经核实退供应商或内部回收的数量从废物中扣除。

- 选定流：材料特定食品或配料废物流
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测的拒收及损失质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定配料拒收筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 可销售产品净质量
  - 基准：获得经审查类别数据之前的宽泛首轮拒收分数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：糖果混合、熬煮和成型（`sugar_confectionery_manufacture`）

#### 输入

##### 产品流

###### 已发放的糖果配料（`sugar_route_ingredients`）

记录所声明配方使用的内部配料转移，包括糖和糖浆以及路线特定的脂肪、乳材料、明胶、淀粉、胶体、酸、香料、色素和其他添加物。

- 选定流：来自 `ingredient_receipt` 的内部配料转移
- 流属性/单位：Mass / kg
- 数量规则：纳入糖果批次的配方发料合计，扣除实测退库量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装合格糖果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sugar_route_records`
- 来源：`fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016`
- 数量范围：暂定配方投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.8
  - 单位：kg/kg 未包装合格输出
  - 基准：获得经审查类别数据之前的宽泛首轮配方和得率范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 产品或加工所用过程水（`sugar_route_water`）

记录加入配方的水，以及接触冷却或其他路线操作中跨越过程边界的水；计量时将非接触冷却水分开。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：归属于纳入糖果批次的计量或批次记录水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 未包装合格糖果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sugar_route_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定过程用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：m3/1,000 kg 未包装合格输出
  - 基准：获得经审查类别数据之前的宽泛首轮用水范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力和热能（`sugar_route_energy`）

分别记录混合、熬煮、真空熬煮、冷却、搅打、挤出、模制、熟化和整饰所用电力及每种热能载体。

- 选定流：载能体特定的电力、燃料、蒸汽、热或冷却服务
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量使用量，或由运行时间、额定负荷和经核实负荷因子计算归属量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 未包装合格糖果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sugar_route_records`
- 来源：`fao-sugar-confectionery-1992`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定路线能耗筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh-equivalent/kg 未包装合格输出
  - 基准：数据集中仍按载能体分别保留的宽泛筛选包络
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 未包装合格糖果（`sugar_route_output`）

记录熬煮、冷却、成型、熟化和整饰后、初级包装前的已放行路线输出。

- 选定流：内部未包装糖果中间流
- 流属性/单位：Mass / kg
- 数量规则：转移至包装的实测合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化前每批次或生产活动
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sugar_route_records`
- 来源：`fao-sugar-confectionery-1992`; `uk-ea-pontefract-confectionery-2016`

##### 废物流

###### 不合格糖果和路线残余（`sugar_route_waste`）

按处理去向记录不可销售产品、未回收模粉、涂层、残余和其他路线废物；内部返工与废物分开。

- 选定流：路线特定食品加工废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实内部返工后的实测废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sugar_route_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定路线废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 未包装合格输出
  - 基准：获得经审查类别数据之前的宽泛首轮路线废物范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：植物制品糖保存（`sugar_preserved_plant_manufacture`）

#### 输入

##### 产品流

###### 已准备植物材料和糖（`fruit_route_materials`）

记录所声明沥糖、糖衣、蜜饯或结晶路线所用的验收蔬菜、水果、坚果、果皮或其他植物部分、糖和糖浆配料。

- 选定流：植物材料特定及糖/糖浆产品流
- 流属性/单位：Mass / kg
- 数量规则：纳入糖保存批次的配方和发料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装合格糖渍输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruit_route_records`
- 来源：`codex-gsfa-candied-fruit-2025`; `fao-candied-fruit-2004`
- 数量范围：暂定植物和糖投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：3.0
  - 单位：kg/kg 未包装合格输出
  - 基准：考虑脱水和糖浆管理的宽泛跨路线范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备、糖渍和干燥用水及能源（`fruit_route_utilities`）

分别记录清洗、适用时漂烫、糖浆制备、分阶段浸渍、平衡、沥液和干燥所用水及各能源载体。

- 选定流：过程水和载能体特定能源流
- 流属性/单位：Volume and energy / m3、kWh 或 MJ
- 数量规则：计量使用量或对纳入批次有记录的设备归属量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 未包装合格糖渍输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fruit_route_records`
- 来源：`fao-candied-fruit-2004`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定合并公用工程筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：每 1,000 kg 输出分别报告 m3 水或 MWh 能源
  - 基准：宽泛首轮包络；水和能源仍为单独清单流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 未包装合格糖渍植物制品（`fruit_route_output`）

记录达到所声明糖保存和干燥/平衡终点后、包装前的沥糖、糖衣、蜜饯或结晶产品。

- 选定流：内部未包装糖渍植物中间流
- 流属性/单位：Mass / kg
- 数量规则：转移至包装的实测合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化前每批次或生产活动
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruit_route_records`
- 来源：`codex-gsfa-candied-fruit-2025`; `fao-candied-fruit-2004`

##### 废物流

###### 植物拒收物、废糖浆和路线废水（`fruit_route_wastewater`）

按质量或体积及去向分别记录固体植物拒收物、不再作为产品投入复用的糖浆和废水。

- 选定流：材料特定有机废物、废糖浆和废水流
- 流属性/单位：Mass or volume / kg 或 m3
- 数量规则：扣除经核实复用量后的实测处置、处理或排放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 未包装合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruit_route_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定废物和废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 t 输出分别报告 t 固体废物或 m3 废水
  - 基准：宽泛首轮包络；固体废物和废水仍为单独清单流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：白巧克力制造（`white_chocolate_manufacture`）

#### 输入

##### 产品流

###### 白巧克力配方配料（`white_route_materials`）

分别记录糖、可可脂、乳固体和其他各配方配料；从所声明产品边界排除可可液块、可可粉和其他无脂可可固形物。

- 选定流：配料特定产品流
- 流属性/单位：Mass / kg
- 数量规则：纳入白巧克力批次的配方和发料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未包装合格白巧克力输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_white_route_records`
- 来源：`codex-cxs-87-1981`
- 数量范围：暂定配方投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.9
  - 上限：1.3
  - 单位：kg/kg 未包装合格输出
  - 基准：获得经审查类别数据之前的宽泛首轮配方和损失范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 白巧克力加工电力和热能（`white_route_energy`）

分别记录混合、适用时精磨/精炼、调温、成型和冷却所用电力、热和冷却。

- 选定流：载能体特定的电力、热和冷却服务
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分表计量使用量，或对纳入批次有记录的设备归属量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 未包装合格白巧克力输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_white_route_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定白巧克力路线能耗筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：3
  - 单位：kWh-equivalent/kg 未包装合格输出
  - 基准：数据集中仍按载能体分别保留的宽泛筛选包络
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 未包装合格白巧克力（`white_route_output`）

记录调温、成型和冷却后、初级包装前的已放行白巧克力输出。

- 选定流：内部未包装白巧克力中间流
- 流属性/单位：Mass / kg
- 数量规则：转移至包装的实测合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化前每批次或生产活动
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_white_route_records`
- 来源：`codex-cxs-87-1981`

##### 废物流

###### 不合格白巧克力和残余（`white_route_waste`）

按去向记录不合格产品、过滤残余和未回收管线残余；有记录的内部返工与废物分开。

- 选定流：白巧克力过程废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实内部返工后的实测废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未包装合格输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_white_route_records`
- 来源：`eu-fdm-bat-2019-2031`
- 数量范围：暂定白巧克力路线废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 未包装合格输出
  - 基准：获得经审查类别数据之前的宽泛首轮路线废物范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装、清洗和直接控制的场址服务（`packaging_and_site_services`）

#### 输入

##### 产品流

###### 从路线过程接收的未包装合格产品（`bulk_product_to_packaging`）

记录从所选路线或产量加权路线组合转移的内部未包装产品。

- 选定流：内部路线输出
- 流属性/单位：Mass / kg
- 数量规则：与路线输出、包装拒收和可销售输出核对的实测转移质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`

###### 初级包装材料（`primary_packaging`）

分别记录每种薄膜、包裹材料、箔、托盘、罐、盖、标签、纸盒或其他初级包装材料，包括实测生产线损失。

- 选定流：材料特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：采购或发放包装量，并按库存变化、退料和单独计量废物调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_site_records`
- 来源：`fao-sugar-confectionery-1992`; `eu-pef-2021-2279`
- 数量范围：暂定初级包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.30
  - 单位：kg/kg 可销售产品净质量
  - 基准：获得经审查类别数据之前的宽泛包装形式包络
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗水、化学品和共享公用工程（`site_service_inputs`）

记录清洗水、化学品和归属于纳入生产的每种共享公用工程载体；电力、燃料、蒸汽、热、冷却和压缩空气保持为单独流。

- 选定流：材料和载能体特定场址服务投入
- 流属性/单位：Mass, volume or energy / kg、m3、kWh 或 MJ
- 数量规则：通过分表、运行时间、质量吞吐量或其他有记录的因果驱动因子归属的计量总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定场址服务筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：每 1,000 kg 可销售产品净质量分别报告 m3、kg 或 MWh
  - 基准：宽泛首轮包络；各载体仍为单独清单流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可销售包装参考产品（`reference_product_output`）

将已放行食品产品净质量与包装质量分开记录，并按此输出归一化完整前景数据包。

- 选定流：Sugar confectionery (including white chocolate), not containing cocoa, vegetables, fruits, nuts, fruit-peel and other parts of plants, preserved by sugar `db6192c0-b83b-4376-95e2-df5c7ad09297`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 可销售产品净质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装废物和不合格已包装产品（`packaging_waste`）

按材料和处理去向分别记录包装边角料、损坏包装和已包装产品拒收物；将回收的可销售产品与处置量分开。

- 选定流：材料特定包装或已包装食品废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实复用或产品回收后的实测废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定包装废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 可销售产品净质量
  - 基准：获得经审查类别数据之前的宽泛首轮包装废物范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 过程和清洗废水（`site_wastewater`）

记录送往下水道、场内处理、场外处理或复用的废水；可能时将非接触冷却水分开。

- 选定流：去向特定废水流
- 流属性/单位：Volume / m3
- 数量规则：归属于纳入生产的计量排放或收集体积，并记录去向和处理路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3/1,000 kg 可销售产品净质量
  - 基准：获得经审查类别数据之前的宽泛首轮废水范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接燃料燃烧排放（`direct_combustion_emissions`）

根据实测燃料使用量和有记录因子计算直接化石二氧化碳及其他相关锅炉或加热器排放；不得重复上游燃料生产排放。

- 选定流：污染物特定向空气基本流
- 流属性/单位：Mass / kg
- 数量规则：实测燃料使用量乘以有记录的污染物特定排放因子，并分开生物源和化石碳。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定直接二氧化碳筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg fossil CO2/kg 可销售产品净质量
  - 基准：审查路线特定因子之前的宽泛首轮直接燃烧包络
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向空气泄漏制冷剂（`refrigerant_leakage`）

利用库存核对和维护记录，分别记录服务于纳入生产的冷却、冷藏、空调和冷冻设备所用每种制冷剂。

- 选定流：制冷剂物质特定向空气基本流
- 流属性/单位：Mass / kg
- 数量规则：期初库存加补充量减期末库存、回收量和有记录转移量，再归属于纳入生产。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_site_records`
- 来源：`uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031`
- 数量范围：暂定制冷剂损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg refrigerant/kg 可销售产品净质量
  - 基准：获得经审查场址数据之前刻意保持宽泛的首轮泄漏包络
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 可独立计量的产品、路线和批次 | 记录允许时，通过细分生产线、批次、路线过程和直接计量公用工程避免分配。 | `eu-pef-2021-2279` |
| `alloc_physical_relationship` | 不可分的多输出作业 | 无法细分或合理扩展系统时，按有记录的因果物理关系分配，例如配方质量、实测加工时间、能源需求或其他能代表共享作业的参数。 | `eu-pef-2021-2279` |
| `alloc_other_relationship` | 缺少可辩护物理关系的作业 | 仅在说明细分、扩展和物理分配不具代表性的原因后，才使用其他关系，包括共生产点相对经济价值；披露价格、期间和敏感性。 | `eu-pef-2021-2279` |
| `alloc_internal_rework` | 返工、回用糖浆、回收淀粉和内部残余 | 将经核实内部回收作为内部转移：从废物中扣除，且不生成共产品抵扣或重复上游负荷。 | `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031` |
| `alloc_waste_and_coproduct_status` | 离开前景系统的残余流 | 按实际去向和经济/功能状态将流分类为废物、可回收残余或共产品；记录下游建模方案采用的任何负荷或抵扣。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `alloc_shared_site_services` | 清洗、锅炉、冷却、压缩空气和共用公用工程 | 优先使用分表；否则采用有记录的因果驱动因子，并排除无关产品族、非生产建筑和报告范围外期间。 | `eu-fdm-bat-2019-2031` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_records` | `ingredient_receipt` | 外购配料、内部发料和拒收 | 采购、库存、秤、罐和批次发料记录 | material_id; supplier; received_state; opening_stock; receipts; closing_stock; returns; issued_mass; reject_mass; destination | 按材料和批次核对经校准秤、罐液位和库存记录。 | kg | 每次接收和每批次；每月核对 | 完整声明报告期 | 服务于纳入产品的所有接收和储存区域 | opening + receipts - closing - returns = issues + rejects + unexplained difference；按可销售输出归一化 | 校准记录；批次追溯；库存核对；拒收票据 |
| `cp_sugar_route_records` | `sugar_confectionery_manufacture` | 配方投入、水、能源、输出、返工和废物 | 批次单、仪表、设备日志和质量放行记录 | batch_id; recipe_id; ingredient_mass; water_volume; energy_by_carrier; temperature; time; output_mass; rework_mass; waste_mass; destination | 按批次或同质生产活动采集并与路线输出核对。 | kg; m3; kWh; MJ; °C; h | 每批次或生产活动 | 包含产品组合的代表性完整报告期 | 所有纳入糖果生产线 | 按路线和产品族分别汇总，再按放行净质量产量加权 | 仪表/校准状态；签批批次单；放行测试；废物票据 |
| `cp_fruit_route_records` | `sugar_preserved_plant_manufacture` | 植物投入、糖浆、水、能源、可溶性固形物/水分、输出和废物 | 批次、折光仪、水分、仪表和废物记录 | batch_id; plant_mass; sugar_mass; syrup_mass; water_volume; energy_by_carrier; Brix; moisture; soak_time; output_mass; spent_syrup; solid_waste; wastewater | 采集每个浸渍/干燥批次并保留分阶段糖液和终点记录。 | kg; m3; kWh; MJ; °Brix; mass %; h | 每批次 | 完整声明生产季或报告期 | 所有纳入糖保存生产线 | 核对植物、糖、糖浆、移除水分、留存产品、复用和废物；按合格输出归一化 | 仪器校准；批次追溯；终点测试；废物和废水记录 |
| `cp_white_route_records` | `white_chocolate_manufacture` | 配方、能源、输出、返工和废物 | 配方、批次、仪表、组成和放行记录 | batch_id; ingredient_mass; cocoa_butter_fraction; milk_solids_fraction; energy_by_carrier; process_time; output_mass; rework_mass; waste_mass | 采集每批次或同质生产活动并核实声明的白巧克力规范。 | kg; kWh; MJ; mass %; h | 每批次或生产活动 | 完整声明报告期 | 所有纳入白巧克力生产线 | 按配方族汇总、核对质量并按合格输出归一化 | 配方批准；组成证据；仪表状态；放行记录 |
| `cp_packaging_site_records` | `packaging_and_site_services` | 包装、可销售输出、清洗、共享公用工程、废水、排放和制冷剂 | 包装发料、生产放行、公用工程仪表、清洗、废物、废水、燃料和制冷剂记录 | product_mass; packaging_material_mass; packaging_waste; water_volume; chemical_mass; energy_by_carrier; fuel_use; wastewater_volume; treatment_destination; refrigerant_stock; additions; recovery; emission_factor | 结合生产线记录和经校准场址/分表及有记录分配驱动因子；保留载体和去向细节。 | kg; m3; kWh; MJ | 输出和包装按批次或班次；公用工程按仪表间隔；每次服务事件 | 完整声明报告期 | 可归属于纳入产品的所有直接控制场址服务 | 核对净输出和包装；按因果关系分配共享服务；计算直接排放并按 1 kg 可销售产品净质量归一化 | 仪表/校准证书；发票；放行记录；清洗日志；废物联单；制冷剂服务日志 |

### 计算规则

| rule_id | 适用对象 | 规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期归属于纳入产品的数量 / 报告期纳入产品可销售净质量 | attributable row amount; net saleable output mass | 每 1 kg 参考产品的数量 | `eu-fdm-bat-2019-2031` |
| `calc_route_mass_balance` | 每个制造路线 | 投入质量 + 期初在制品 = 合格输出 + 废物 + 向水/空气材料排放 + 期末在制品 + 有记录差异；解释材料不平衡 | ingredient, water-in-product, output, rework, waste, inventory and release records | 路线质量平衡说明及未解释差异 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_energy_by_carrier` | 路线和场址能源 | 保留实测载体单位；需要归属时，归属能源 = 计量总量 × 有记录因果份额；记录换算因子和来源 | meter totals; carrier; operating driver; conversion factor | 每参考流的载体特定 kWh 或 MJ | `eu-fdm-bat-2019-2031` |
| `calc_water_effluent_balance` | 过程水和废水 | 核对进水表量与产品留存水、蒸发、单独排放非接触水、废水和有记录差异 | water meters; product moisture; evaporation estimate; wastewater meters | 每参考流用水和废水数量 | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | 冷却和制冷 | 损失 = 期初库存 + 补充量 - 期末库存 - 回收量 - 有记录转移量；将负数或未解释平衡报告为发现 | refrigerant stock and service records | 每参考流各制冷剂物质损失 kg | `eu-fdm-bat-2019-2031` |
| `calc_allocation_share` | 共享多产品过程 | 由直接归属记录或选定物理/经济驱动因子计算声明分配份额；各输出份额在声明舍入容差内合计为 1 | process totals; product-specific records; allocation driver | 按产品族归属的清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和路线 | 使用指定产品流 UUID、Mass 属性和 kg 单位；声明路线、配方/产品子类、包装状态和制造地域。 | Tiangong 身份回读；产品主数据；批准配方；放行规范 |
| `dq_completeness` | 前景过程图 | 覆盖两个 required 过程和每个适用 conditional 路线；按适合过程的监测层级记录原材料、水、能源、残余、废水和直接向空气排放。 | `eu-fdm-bat-2019-2031`；过程流程图；清单核对 |
| `dq_representativeness` | 一手和二手数据 | 披露技术、地域和时间代表性、精度及完整性；说明代理和路线汇总。 | `eu-pef-2021-2279`；数据集元数据；代理登记 |
| `dq_temporal_coverage` | 前景记录 | 覆盖声明报告期和代表性产品/季节组合；披露停机、试产、异常事件和缺失区间。 | 有日期的仪表、批次、库存和生产记录 |
| `dq_measurement` | 仪表、秤和分析控制 | 保留质量、水、能源、温度、可溶性固形物和水分测量的校准/核查状态、方法、单位及换算因子。 | 校准证书；仪器日志；实验室或在线测试记录 |
| `dq_mass_and_water_balance` | 路线和场址核对 | 量化并解释不平衡而不是强制闭合；识别库存变化、蒸发、废水和未回收损失。 | 质量平衡和水平衡计算；审查签批 |
| `dq_effluent_and_emissions` | 相关废水和废气流 | 在适当频率和位置记录流量及相关特征；保留处理去向和任何计算污染物流的依据。 | `eu-fdm-bat-2019-2031`；仪表、采样、实验室和处理记录 |
| `dq_provisional_ranges` | 所有推理估算范围 | 将每个 `reasoned_estimate` 范围作为可替换筛选校验值，不得当作实测值或发布关键允许范围。 | manifest 审查元数据；前景记录；未来经审查类别证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认准确的 Tiangong 产品 UUID、Mass 属性 UUID、质量单位组 UUID、kg 单位，以及排除包装的恰好 1 kg 产品净质量。 |  |
| `val_category_and_route` | 产品身份 | 确认产品属于覆盖的语义边界、声明所有必需限定信息并纳入至少一个适用路线；拒绝未声明混合实质不同路线。 | `codex-gsfa-confectionery-2025`; `codex-gsfa-candied-fruit-2025`; `codex-cxs-87-1981` |
| `val_process_coverage` | 前景清单 | 确认两个 required 过程和每个适用 conditional 过程均有详细清单记录、采集协议和计算链接。 | `eu-fdm-bat-2019-2031` |
| `val_mass_water_energy` | 定量清单 | 重新计算路线质量平衡、水/废水核对和载能体特定能源归一化；标记未解释不平衡、混合载体或换算证据缺失。 | `eu-fdm-bat-2019-2031` |
| `val_rework_waste_and_emissions` | 输出分类 | 确认内部返工未计作废物或新投入、废物去向已声明，且直接燃烧和制冷剂排放未与上游数据集重复。 | `uk-ea-pontefract-confectionery-2016`; `eu-fdm-bat-2019-2031` |
| `val_allocation` | 多产品和共享服务 | 确认遵循分配层级、份额在声明舍入范围内合计为 1、因果驱动因子和排除项有记录，且经济分配包含价格期间和敏感性。 | `eu-pef-2021-2279` |
| `val_cutoff_and_sources` | 完整性和证据 | 拒绝必需前景行的隐式截断；披露下游方案遗漏，核实每个外部 source id 均解析到第 11 节，且推理估算不带虚构来源。 | `eu-pef-2021-2279` |
| `val_data_quality` | 数据集就绪性 | 确认报告期覆盖、校准和追溯证据、路线/地域/技术代表性、代理披露，以及对暂定范围和未解决数据缺口的显式处理。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明糖果、糖渍植物或白巧克力路线，或有记录产量加权路线组合的前景工厂门生产数据集。 |
| downstream_use | `secondary_dataset`；经消费系统要求的审查和发布控制后可作 `background_dataset`。 |
| allowed_use | 构建与声明语义范围、路线、地域、技术、报告期和包装状态匹配的 process 或 lifecyclemodel 清单；在披露限制的前提下开展热点和改进分析。 |
| excluded_use | 无限定替代含可可巧克力、烘焙或面粉糖食、原糖、非糖保存水果制品、农业生产、分销、零售、使用或报废；未经适用核查用于公开比较性声明。 |
| required_metadata | 消费数据包使用的 PCR id 和版本；参考 UUID 和单位；产品子类；配方/路线；产品状态；包装边界；场址地域；技术；报告期；路线组合；分配；返工；截断/遗漏；链接数据集；source ids；代理和不确定性披露。 |
| required_quality_disclosure | 一手数据覆盖和缺口；仪表和校准状态；质量/水/能源核对；代表性；分配驱动因子；废物/废水去向；排放计算；所有暂定推理估算；审查和核查状态。 |
| update_trigger | 配方、路线、设备、能源供应、冷却/制冷剂系统、包装、废物或废水处理、分配、生产组合或地域的实质变化；代表性到期；新经审查类别证据；UUID 或分类范围修正。 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-gsfa-confectionery-2025` | official_guidance | FAO/WHO Codex Alimentarius，GSFA Online Food Category 05.2，更新至第 48 届会议（2025），https://www.fao.org/gsfaonline/foods/details.html?id=93&print=true（检索于 2026-08-11） | 糖果产品族边界和示例。 |
| `codex-gsfa-candied-fruit-2025` | official_guidance | FAO/WHO Codex Alimentarius，GSFA Online Food Category 04.1.2.7 Candied fruit，更新至第 48 届会议（2025），https://www.fao.org/gsfaonline/foods/details.html?id=66&print=true（检索于 2026-08-11） | 糖衣、蜜饯和结晶水果身份及糖保存路线区分。 |
| `codex-cxs-87-1981` | standard | FAO/WHO Codex Alimentarius，CXS 87-1981，Standard for Chocolate and Chocolate Products，Rev. 1-2003，https://www.fao.org/input/download/standards/67/CXS_087e.pdf（检索于 2026-08-11） | 白巧克力身份、组成限定信息及无脂可可固形物排除。 |
| `fao-sugar-confectionery-1992` | handbook | Intermediate Technology Publications，Small-scale Food Processing: A Guide for Appropriate Equipment，第 6 章 Sugar Confectionery，1992，https://www.fao.org/4/x5434e/x5434e0a.htm（检索于 2026-08-11） | 通用配方准备、混合、熬煮、冷却、成型、包装和路线过程控制指导。 |
| `fao-candied-fruit-2004` | extension_guidance | International Centre for Underutilised Crops，Fruits for the Future 1: Revised Edition，Technical Note 16 Processing of Candies and Preserves，2004，https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf（检索于 2026-08-11） | 分阶段糖液浸渍、可溶性固形物测量、沥液、干燥、保存机制和路线数据字段。 |
| `uk-ea-pontefract-confectionery-2016` | official_guidance | UK Environment Agency，Decision Document EPR/LP3232EG/A001，Pontefract Confectionery Production，2016-12-07 发布，https://assets.publishing.service.gov.uk/media/5a7f8fb3ed915d74e33f7310/Decision_document.pdf（检索于 2026-08-11） | 真实凝胶糖、甘草糖和糖霜夹心工厂过程分解；储存、锅炉、冷却、清洗、淀粉回收、废物、废水和空气排放候选。 |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳品工业 BAT 结论，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031（检索于 2026-08-11） | 资源和排放清单、监测、水和清洗实践、能源、制冷剂、残余、废水和数据质量要求。 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279，Product Environmental Footprint method，Annex I，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 生命周期边界、分配层级、截断披露、代表产品概念、数据质量和核查逻辑。 |
