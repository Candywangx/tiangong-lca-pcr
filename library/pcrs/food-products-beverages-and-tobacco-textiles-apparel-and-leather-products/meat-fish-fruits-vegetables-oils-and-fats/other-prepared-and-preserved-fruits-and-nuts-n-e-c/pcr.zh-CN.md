---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-and-preserved-fruits-and-nuts-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的加工和保藏水果及坚果

## 1. 范围与适用性

具体产品只有通过以下纳入门后才适用本 PCR。产品应为可食用水果、坚果或其他可食用植物部位，并采用灭菌、渗透脱水、罐藏或其他气密包装、醋或乙酸，或 CPC 3.0 子类 21499 允许的其他保藏方法进行加工或保藏。可以加甜味剂，但以糖保藏不属于本子类。数据生产者应识别植物种类或混合物、产品形态、保藏路线、装填介质、参考质量口径、包装系统、储存条件和市场状态。

`n.e.c.` 剩余类标签不表示任何加工水果或坚果均可使用本 PCR。使用前，数据生产者应形成文件证明产品不是：其他方法加工或保藏的菠萝（21491）；其他方法加工或保藏的桃（21492）；未烹调或已烹调的冷冻水果或坚果（21493）；果酱、水果果冻、橘子酱、水果或坚果泥及水果或坚果酱（21494）；烘烤、盐渍或其他方法加工的未另分类坚果、花生或其他种子（21495）；非供即时消费的暂时保藏水果或坚果，包括规定的柑橘或甜瓜果皮路线（21496）；干制水果（2141）；果汁（2143）；糖渍产品（23670）；或归入其他类别的未加工/仅去壳坚果。任何排除测试不通过的产品均应使用其他 PCR 或进行人工分类审查。

下列 Codex 和 UNECE 文本仅为有条件的路线或产品证据。CXC 2-1969 仅适用于装入气密容器并在装填前后进行热加工的果蔬产品。CXS 242-2003 仅适用于其点名的水果种类和罐藏路线；在本 PCR 中不得将其用于桃，因为 CPC 21492 已被排除。UNECE 干燥和干制农产品标准只有在确切的点名产品及标准范围均匹配时才适用；这些标准不能推翻 CPC 21499 对简单干燥的排除，也不能产生适用于整类的水分、等级或缺陷限值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-and-preserved-fruits-and-nuts-n-e-c |
| classification_refs | CPC 3.0：21499，其他未另分类的加工和保藏水果及坚果 |
| covered_products | 通过第 1 节纳入门，且采用灭菌、渗透脱水、气密罐藏/包装、醋或乙酸，或 CPC 21499 允许的其他方法保藏的可食用水果、坚果或其他可食用植物部位；CPC 示例包括符合条件的苹果、杏、香蕉、樱桃、柑橘类水果、水果混合物、棕榈心、梨、葡萄干、草莓、规定的果核/仁/籽及花粉。 |
| excluded_products | CPC 21491–21496 产品；糖渍产品；简单干制水果；果汁；未加工或仅去壳坚果；以及产品身份、路线或市场状态不能证明符合 CPC 21499 的产品。 |
| representative_product | 一个已声明、通过纳入门的适销加工或保藏水果/植物部位产品；不存在能够代表整个剩余子类的单一配方或路线。 |
| production_route | 收货分选、预处理、已声明的保藏转化、包装/稳定化以及适用的储存/出厂环节组成的路线特定序列；不适用的路线模块应省略并披露。 |
| market_state | 位于制造厂门、满足销售要求的产品，已声明净重/沥干质量口径、包装、储存条件及保质期或耐久性说明。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供通过 CPC 21499 纳入/排除门的、可食用且适销的加工或保藏水果、坚果或其他可食用植物部位产品。 |
| How much | 制造厂门处 1 kg 已声明的参考产品。 |
| How well | 符合已声明的配方、可食部分或沥干质量口径、保藏路线、适用产品规范、包装完整性和适销质量准则。 |
| How long or cycle | 一个生产批次直至制造厂门；记录已声明的保质期和储存条件，仅当研究范围扩展到制造厂门之后时才对下游损失建模。 |
| reference_flow_link | 参考流是实现所定义 1 kg 功能所需的合格适销产品质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他配制和腌制水果及坚果，未另分类 `661926c0-3215-431a-934f-ea41ced73059` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物种类和配料组成；纳入/排除门决定；保藏路线；产品形态及相关时的粒径；装填介质；净重、可食质量或沥干质量口径；包装系统；储存条件；保质期/耐久性；制造地域、基准期和技术；适用的路线/产品标准或明确无适用标准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，将所有报告数量归一化到制造厂门处 1 kg 合格适销产品。 |
| `mass_convention` | 含装填介质或不可食部分的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明参考量采用产品净重、沥干可食产品质量还是其他依法/按技术定义的质量；相关时同时记录净重和沥干质量，不得混用口径。 |
| `route_parameter_basis` | 保藏操作 | 路线特定的实测属性 | 已声明的 SI 单位 | 只有在已声明路线实际使用或要求时，才记录时间、温度、压力/真空度、浓度、pH/酸度、水分或水分活度；保留原始单位并记录换算。不得从路线特定标准推导整类限值。 |
| `energy_conversion` | 电力和热能 | Energy | kWh 和 MJ | 电力和热能分开记录。采用有记录的物理换算因子换算仪表单位，并保留原始仪表记录。 |
| `packaging_mass` | 跨越边界的一次、二次和三次包装 | Mass | kg | 按每批实测采购或领用质量分别记录每种包装材料，并分别归一化到参考流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配料和包装进入前景制造场址时，具有供应商身份、来源、质量、状态及上游数据集引用或已记录的数据缺口。 |
| starting_condition_role | 工厂门前景生产起点；农业生产、配料制造、包装制造和进厂运输由链接的上游数据集表示，除非已声明研究将其扩展为前景过程。 |
| product_classification_scope | 仅限通过第 1 节 CPC 3.0 子类 21499 纳入/排除门的产品。 |
| recursive_input_rule | 购入的投入若本身属于本 PCR 类别，应作为一个产品投入流记录并链接独立上游数据集；不得在消费该投入的批次内递归重建其制造清单。 |
| upstream_dataset_requirement | 在可获得时为每个材料或能源产品投入链接上游数据集；披露地域、技术、时间错配、代理使用和上游数据缺失。 |
| disclosure | 声明产品身份、保藏路线、装填介质、参考质量口径、包装、场址、期间、储存条件、保质期、排除项、截断、代理、分配选择和全部暂定估算。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | 产品资格 | 在生产清单前执行第 1 节完整纳入/排除门。对于含任何可能属于 21491–21496 的模糊或重叠产品，应进行人工分类审查，不得自动分配给本 PCR。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground` | 工厂门前景系统 | 纳入收货/分选、预处理、实际采用的每项保藏操作、包装/稳定化、场内储存、可归属于生产的清洗/CIP、公用工程、拒收物、共产品、废物、废水及直至制造厂门的直接基本流。 | `eu-pef-recommendation-2021-2279` |
| `boundary_route_modules` | 路线特定操作 | 仅纳入批记录证明实际执行的操作。气密热加工、渗透脱水、醋/乙酸保藏或其他允许路线应各自保留实测参数；仅在精确匹配范围后才使用产品特定的 Codex 或 UNECE 标准。 | `unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxc-2-1969`; `codex-cxs-242-2003`; `unece-ddp-standards-2025` |
| `boundary_cutoff` | 排除和数据缺口 | 避免截断。若数据集明确声称符合 PEF 方法，任何排除均应满足 PEF 累计 3.0% 的材料/能源和环境显著性规则，得到论证并披露；否则应用已声明的项目规则，并将每项遗漏报告为数据缺口。 | `eu-pef-recommendation-2021-2279` |
| `boundary_downstream` | 分销、使用和生命末期 | 默认数据集止于制造厂门。分销、零售、消费者储存/使用、产品损失和包装生命末期不属于前景数据集，除非已声明目标扩展边界；边界扩展应保留保质期和包装影响。 | `eu-pef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_sorting` | 配料接收、检验、分选和初始处理 | required | 所有数据集 | 确定验收配料质量和进料损失 | kg 验收配料 |
| `preparation` | 清洗、修整、去皮、去核、切分和路线预处理 | required | 纳入实际执行的每项操作；未使用的操作报告为不适用 | 为保藏准备可食材料 | kg 预处理材料 |
| `preservation_and_formulation` | 已声明的保藏转化和配制 | required | 应声明一种或多种 CPC 21499 允许的保藏路线；路线参数取决于产品 | 生产稳定的加工/保藏产品 | kg 保藏散装产品 |
| `packaging_and_stabilization` | 灌装、封口、包装后处理、冷却、打码和装箱 | required | 纳入实际包装以及放行前实际执行的热处理或冷却操作 | 生产合格适销包装产品 | kg 适销参考产品 |
| `storage_and_dispatch` | 场内受控储存和出厂 | conditional | 产品在场内停留或跨制造厂门前需要温湿度控制时纳入 | 保持已声明市场状态直至厂门 | kg 出厂产品和储存时长 |

### 过程：配料接收、检验、分选和初始处理（`receipt_and_sorting`）

#### 输入

##### 产品流

###### 接收的水果、坚果或其他可食植物部位（`received_plant_material`）

按植物种类和供应商批次分别记录。属于同一类别的外购加工配料遵循递归投入规则。

- 选定流：由前景选择的配料流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按种类、等级、来源和批次实测接收毛质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：
- 数量范围：暂定接收材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：10
  - 单位：kg/kg 适销参考产品
  - 基准：每 1 kg 适销产品的宽泛剩余类别筛选范围；以路线和场址特定产率证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 验收植物材料（`accepted_plant_material`）

验收材料按接收质量减去实测接收拒收量和库存变化计算。

- 选定流：由前景选择的验收材料中间流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次计算的验收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收材料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`mass-balance-identity`

##### 废物流

###### 接收拒收物和异物（`receiving_rejects`）

按去向分别记录拒收生物材料、泥土/异物和包装污染物。

- 选定流：由前景选择的废物流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收植物材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent`
- 来源：
- 数量范围：暂定接收拒收比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.9
  - 单位：kg/kg 接收植物材料
  - 基准：刻意设置的宽泛拒收比例；以称量批次证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洗、修整、去皮、去核、切分和路线预处理（`preparation`）

#### 输入

##### 产品流

###### 预处理和清洗用水（`preparation_water`）

记录用于清洗、焯烫准备、设备清洗和可归属于该批次 CIP 的计量或分配用水；重要时分开记录水源。

- 选定流：由前景选择的水产品流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：计量或计算的可归属用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：
- 数量范围：暂定预处理用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 预处理材料
  - 基准：宽泛的首轮用水筛选；以校准仪表或可归属 CIP 记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定预处理助剂（`preparation_aids`）

仅记录跨越前景边界的助剂，如防褐变剂、硬化剂或去皮剂，并记录其配方和去向。

- 选定流：由前景选择的预处理助剂流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，或按浓度和溶液质量计算的剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_aids`
- 来源：

#### 输出

##### 产品流

###### 预处理可食材料（`prepared_edible_material`）

记录转入保藏工序的质量，并注明种类、形态和批次。

- 选定流：由前景选择的预处理材料中间流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：

##### 废物流

###### 果皮、果核、修整物和预处理拒收物（`preparation_residues`）

依据实际法律/市场状态，将每种残余物分别记录为废物或共产品，并记录实测质量、去向以及在可能需要分配时的收入。

- 选定流：由前景选择的残余物流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收植物材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent`
- 来源：
- 数量范围：暂定预处理残余物比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg 验收植物材料
  - 基准：刻意设置的宽泛剩余类别筛选范围；以称量的产品和切分方式特定记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：已声明的保藏转化和配制（`preservation_and_formulation`）

#### 输入

##### 产品流

###### 配方配料和装填介质（`formulation_inputs`）

按配方和批次分别记录水、盐水、醋/乙酸、不构成被排除糖渍路线的甜味剂、香辛料和其他配方材料。

- 选定流：由前景选择的配料流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，并与配方和退库量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredients_and_aids`
- 来源：

###### 保藏用电（`preservation_electricity`）

记录泵、真空、混合、渗透脱水设备、热力系统和可归属辅助设备的计量用电。

- 选定流：由前景选择的电力产品流；本 PCR 不声明 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表用电，或根据设备功率和运行时间形成文件的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：
- 数量范围：暂定保藏用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 保藏散装产品
  - 基准：宽泛的路线无关筛选；以路线特定计量或经验证的设备计算替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏用热能（`preservation_thermal_energy`）

记录用于加热、灭菌、蒸发、可归属于保藏的焯烫及热水制备的输入燃料或热能；保留燃料身份和直接燃烧排放。

- 选定流：由前景选择的燃料或热产品流；本 PCR 不声明 UUID
- 流属性/单位：Energy / MJ
- 数量规则：计量的输入能量，或根据实测燃料用量和有记录的热值计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：
- 数量范围：暂定保藏热能筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 保藏散装产品
  - 基准：宽泛的多路线筛选；以燃料/热量仪表和路线特定运行证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 保藏散装产品（`preserved_bulk_product`）

记录已声明保藏操作后的质量，并附配方、保藏参数和过程内质量处置。

- 选定流：由前景选择的保藏散装中间流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：转移至灌装/包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_operations`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 废保藏液和过程损失（`preservation_losses`）

按处理或回收去向分别记录废盐水、糖浆/溶液、醋介质、洒漏物、不合格材料和残余物。

- 选定流：由前景选择的废物流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测或由质量平衡计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保藏散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`mass-balance-identity`

##### 基本流

###### 直接燃烧和过程排放（`direct_process_emissions`）

记录现场燃料燃烧和保藏化学过程产生的实测或计算的直接向空气、水体和土壤排放；不得用购入能源的上游排放替代直接基本流。

- 选定流：由前景选择的基本流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据采集的燃料/过程数据和有引用的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：

### 过程：灌装、封口、包装后处理、冷却、打码和装箱（`packaging_and_stabilization`）

#### 输入

##### 产品流

###### 一次、二次和三次包装（`packaging_materials`）

分别记录每种材料和部件，包括容器、盖、密封件、标签、托盘、薄膜、纸箱、托盘分摊和损失。

- 选定流：由前景选择的包装产品流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，或部件数量乘经验证的部件质量，再减退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：
- 数量范围：暂定包装质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：2
  - 单位：kg/kg 适销参考产品
  - 基准：宽泛的多包装形式筛选；以物料清单和部件质量证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装和稳定化公用工程（`packaging_utilities`）

记录可归属于灌装、封口、装填后处理、冷却和装箱的电力、热力、冷却水、压缩空气及制冷剂补充量。

- 选定流：由前景选择的公用工程流；本 PCR 不声明 UUID
- 流属性/单位：Energy 或 Mass / 按适用情况使用 kWh、MJ 或 kg
- 数量规则：按公用工程计量，或形成文件的设备运行时间分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

#### 输出

##### 产品流

###### 合格适销参考产品（`saleable_reference_product`）

这是唯一的参考产品输出。其身份和参考对象应与第 3 节一致。

- 选定流：其他配制和腌制水果及坚果，未另分类 `661926c0-3215-431a-934f-ea41ced73059`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测合格适销产出，归一化为恰好 1 kg 参考流
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装拒收物和不合格包装产品（`packaging_rejects`）

将食品损失、可回收包装和混合废物分开，并记录实测去向和返工回路。

- 选定流：由前景选择的废物流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按材料、原因和去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent`
- 来源：

##### 基本流

### 过程：场内受控储存和出厂（`storage_and_dispatch`）

#### 输入

##### 产品流

###### 储存用电和制冷剂补充量（`storage_resources`）

若产品跨越厂门前发生储存，使用实际储存时长、吞吐量和温度条件记录分配电力及实测制冷剂补充量。

- 选定流：由前景选择的电力和制冷剂流；本 PCR 不声明 UUID
- 流属性/单位：Energy 或 Mass / 按适用情况使用 kWh 或 kg
- 数量规则：按有记录的容量-时间或质量-时间动因分配仓库计量用量；制冷剂来自维修记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 出厂产品及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch`
- 来源：

#### 输出

##### 产品流

###### 跨越制造厂门的出厂产品（`dispatched_product`）

记录出厂质量、储存时长、储存条件和损失。不得增加第二个参考产品输出。

- 选定流：其他配制和腌制水果及坚果，未另分类 `661926c0-3215-431a-934f-ea41ced73059`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测出厂质量，并链接到已经生产的参考输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch`
- 来源：

##### 废物流

###### 场内储存损失（`storage_losses`）

记录制造厂门前发生的破损、泄漏、过期、质量拒收和销毁产品。

- 选定流：由前景选择的废物流；本 PCR 不声明 UUID
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入储存的产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 产生适销共产品、可回收果仁/果核、饲料、提取物或能源的过程 | 首先通过分别计量并细分可归属操作来避免分配；只有在附加功能和被替代系统可证明时才研究系统扩展。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_second` | 无法细分或扩展的多功能过程 | 使用与各输出功能相关的可量化物理关系，记录其因果代表性依据，并保留每项输出的质量和所选物理属性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_other_last` | 不存在可辩护物理关系的过程 | 只有在记录拒绝细分/系统扩展和物理分配的原因后，才使用经济价值等其他关系；记录价格、基准期、币种、分配份额和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_status` | 残余物、废液、废水和拒收产品 | 分配前，根据实际法律和市场证据将每项输出分类为产品、共产品、可回收材料或废物。不得仅为避免负担而赋予共产品状态，并分别报告处理投入和输出。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receipt_and_sorting`; `preparation`; `packaging_and_stabilization` | 接收、验收、转移和适销质量 | 地磅、秤、批次和库存记录 | 批号；种类；供应商；毛重/皮重/净重；期初/期末库存；转移质量；适销产出 | 校准秤或经核对的库存记录 | kg | 每个批次和进货批 | 代表性连续 12 个月，或有理由的较短生产活动中的全部批次 | 每个纳入场址和生产线 | 按批次和种类求和；核对库存变化；按合格适销产出归一化 | 校准证书；批次核对；库存签核 |
| `cp_ingredients_and_aids` | `preparation`; `preservation_and_formulation` | 配方配料、装填介质和工艺助剂 | 配方、领用、退库和采购记录 | 材料 id；供应商；浓度；领用质量；退库质量；批号；溶液组成 | 校准配料系统或库存领用核对 | kg | 每批 | 与参考生产相同期间 | 范围内每个配方和生产线 | 净领用质量除以适销产出；各材料分开 | 批准配方；秤校准；供应商规范 |
| `cp_route_operations` | `preservation_and_formulation` | 保藏散装产品和路线参数 | 批次控制和实验室记录 | 路线；时间；温度；压力/真空；pH/酸度；可溶性固形物；水分；水分活度；进/出质量；处置 | 校准过程传感器和适用于路线的批准测试方法 | 已声明 SI 单位 | 每批或经验证的连续记录 | 与参考生产相同期间 | 每条已声明保藏路线和生产线 | 保留批次分布；仅对同质产品-路线层进行质量加权平均 | 传感器校准；方法 id；标准适用记录；放行处置 |
| `cp_utilities` | `preparation`; `preservation_and_formulation`; `packaging_and_stabilization` | 水、电力、燃料、热力、冷却和直接排放 | 仪表、账单、燃料票据、设备日志、排放测试 | 仪表起/止值；燃料量；热值；运行时间；生产质量；排放测试或因子 id | 优先分表；否则采用有记录的因果分配 | kg、kWh、MJ 及排放特定单位 | 连续或每批；每月账单核对 | 至少代表性 12 个月，有理由的季节性生产活动除外 | 每个场址；可行时分开主要生产线/公用工程系统 | 扣除非生产用途；按因果动因分配；归一化到过程输出和参考流 | 仪表校准；账单核对；运行日志；因子引用 |
| `cp_packaging` | `packaging_and_stabilization` | 包装材料和拒收物 | 物料清单、部件质量、领用/退库和拒收记录 | 部件 id；材料；数量；样品质量；领用/退回/拒收数量；再生含量 | 经验证的部件称量和库存核对 | kg 和件数 | 每种包装规格和批次 | 与参考生产相同期间 | 每种包装配置 | 数量乘经验证部件质量，并与领用质量核对；按适销产出归一化 | 批准 BOM；秤校准；供应商规范 |
| `cp_waste_and_effluent` | 所有前景过程 | 拒收物、残余物、废水、废液、包装废物和储存损失 | 秤、槽罐/流量计、联单、实验室结果和去向记录 | 废物 id；质量/体积；相关时的干物质；组成；批次；去向；法律状态；收入；处理 | 直接称量/计量；只有无法直接测量且已披露时才使用质量平衡 | kg、m3 及组成特定单位 | 每批或每次废物运输；废水连续计量 | 与参考生产相同期间 | 每个场址和排放口 | 各流和去向分开；用实测密度换算体积；按参考流归一化 | 秤/流量计校准；废物联单；实验室方法；接收设施记录 |
| `cp_storage_dispatch` | `storage_and_dispatch` | 储存资源、时长、出厂质量、制冷剂和损失 | 仓库仪表、库存移动、出厂单和维修日志 | 进/出时间；质量；温度；电力；占用容量；补充制冷剂；损失质量/原因 | 仓库仪表加质量-时间或容量-时间分配；出厂秤 | kg、h 或 day、kWh、kg 制冷剂 | 每次库存移动；每月公用工程核对 | 与参考生产相同期间 | 范围内每个场内仓库 | 按有记录的质量-时间/容量-时间分配；按出厂质量归一化 | 仪表核对；出厂记录；制冷剂维修证书 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景清单数量 | 归一化数量 = 可归属批次数量 / 合格适销批次产出（kg） | 可归属流数量；适销产出质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_mass_balance` | 每个过程和批次 | 实测投入总量 + 期初库存 = 产品输出 + 共产品 + 废物 + 实测直接质量排放 + 期末库存 + 已记录的核对差异 | 全部批次质量和库存变化 | 质量平衡残差及残差百分比 | `mass-balance-identity` |
| `calc_mass_convention` | 含装填介质的产品 | 按已声明测试方法计算并保留净含量和沥干可食质量；只选择一种作为参考口径并报告换算比 | 毛重/皮重/净重和沥干质量记录 | 已声明参考质量和净重-沥干质量比 | 仅当范围匹配时使用 `codex-cxs-242-2003` |
| `calc_utility_allocation` | 共用公用工程系统 | 扣除已记录的非生产用途，并以运行时间、计量吞吐量、热负荷或处理质量等实测因果动因分配余量 | 公用工程总量；非生产用途；动因值 | 按过程归属的公用工程量 | `eu-pef-recommendation-2021-2279` |
| `calc_allocation_share` | 无法避免的多功能过程 | 分配份额 = 所选输出动因 / 所有共产品同一动因之和；经济分配采用共生产点同期净值 | 输出数量；物理动因或价格；基准期 | 总和为 1 的分配份额 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_gate` | 产品和参考流 | 保留已签署的分类门、种类/配方、路线、装填介质、质量口径、包装、保质期、市场状态及精确参考 UUID 对象。 | 产品规范；批次主数据；分类决定；流身份记录 |
| `dq_temporal` | 前景活动数据 | 连续生产时使用代表性连续 12 个月；较短的季节性/生产活动期间应覆盖完整活动并说明代表性。 | 带日期记录；生产日历；覆盖率计算 |
| `dq_completeness` | 所有前景过程 | 清查所有环境相关材料、能源、废物和直接基本流；量化覆盖率并列出遗漏、代理和截断。 | 流检查表；质量/能量核对；PEF 完整性评价 |
| `dq_measurement` | 仪表、秤、传感器和实验室测试 | 使用校准仪器并保留方法、相关时的检出限、换算、采样和校准证据。 | 校准证书；实验室方法；原始读数和换算记录 |
| `dq_route_representativeness` | 异质产品和技术 | 在分层结果证明平均值有代表性之前，不得跨差异显著的种类、保藏路线、装填介质、包装形式或储存条件求平均。 | 产品-路线分层；产量份额；变异分析 |
| `dq_source_applicability` | Codex/UNECE 或其他产品标准 | 记录准确标题、版本、产品种类/形态、路线和条款适用性。仅涵盖点名罐藏或干制产品的标准不得支持整个剩余类别。 | 适用性检查表；产品规范；标准引用 |
| `dq_provisional_estimates` | 每个 `reasoned_estimate` 范围 | 仅标记为暂定 QA 指导。当获得路线特定计量数据、供应商记录、经审查数据集或来源支持证据时，应在方法学激活或作为允许值/默认值使用前替换，并保留替换决定。 | 未关闭证据缺口；替换来源；审查人决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求产品流 UUID `661926c0-3215-431a-934f-ea41ced73059`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 |  |
| `validation_scope_gate` | 产品资格 | 已签署的门缺失、第 1 节任一排除项适用，或证据不能将产品与 CPC 21491–21496 及其他明确排除类别区分开时，校验失败。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validation_required_qualifiers` | 数据集元数据 | 第 3 节任一必需限定信息缺失，或净重/沥干/可食质量口径不一致时，校验失败。 | `eu-pef-recommendation-2021-2279` |
| `validation_route_trace` | 过程图和清单 | 要求实际执行的每项保藏、包装、稳定化、清洗和储存操作恰好出现一次；拒绝把未使用的路线特定操作作为实际数据。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validation_mass_balance` | 每个过程和批次汇总 | 计算第 8 节质量平衡残差，披露其数值和处理方式；任何超过生产者形成文件的测量不确定性准则且无法解释的残差均导致失败。 | `mass-balance-identity` |
| `validation_inventory_completeness` | 前景系统 | 要求主要配料、水、电力、热能、包装、产品输出、残余物、废水、直接排放以及适用时场内储存均有记录或明确说明理由的数据缺口。 | `eu-pef-recommendation-2021-2279` |
| `validation_allocation` | 多功能过程 | 要求采用 PEF 决策层级，份额总和为 1，所选动因具有来源数据，任何非物理关系具有理由和敏感性分析。 | `eu-pef-recommendation-2021-2279` |
| `validation_standard_scope` | 路线/产品标准 | 拒绝超出准确产品、保藏路线和版本范围使用 Codex 或 UNECE 要求；在本 PCR 中不得使用 CXS 242-2003 纳入或建模桃。 | `codex-cxc-2-1969`; `codex-cxs-242-2003`; `unece-ddp-standards-2025` |
| `validation_estimate_status` | 暂定范围 | 要求每个 `reasoned_estimate` 保持标记为不具约束力的 QA 筛选范围并带替换触发条件；不得将其视为观测典型范围或允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对已声明且符合 CPC 21499 的产品-路线-包装组合的工厂门前景生产数据集。 |
| downstream_use | `secondary_dataset`；经代表性和上游链接审查后可作为 `background_dataset` |
| allowed_use | 为已声明产品、路线、场址/地域、期间、质量口径、包装和制造厂门边界构建产品、过程和生命周期模型；只有经证明具有代表性的分层方可汇总。 |
| excluded_use | 自动代表整个 CPC 21499 剩余类别；用于任何 CPC 21491–21496 或其他排除产品；在功能单位、边界、分配、数据质量和审查未统一时进行比较或比较声明；将暂定估算用作已批准默认值。 |
| required_metadata | 所用 PCR id/版本；产品和参考 UUID；分类门；种类/配方；路线；过程图；质量口径；包装；保质期；储存；场址/地域；基准期；技术；上游数据集/代理；截断；分配；标准及版本；数据质量；不确定性；暂定估算。 |
| required_quality_disclosure | 每个过程和流类别的覆盖；仪表/秤/实验室质量；质量平衡残差；时间、地域和技术代表性；缺失数据和代理；分配敏感性；路线标准适用性；估算替换状态。 |
| update_trigger | 产品身份/分类、配方、保藏路线、包装或质量口径变化；重要技术/场址/供应商组合变化；出现新增或修订的适用标准；取得新的来源支持范围；前景数据超出现有代表性；UUID 纠正；或方法学审查发现。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，《Central Product Classification (CPC) Version 3.0 Explanatory Notes》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 子类 21499 的准确纳入路线、示例和排除项；21491–21496 及其他类别的非重叠门。 |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods，Annex I，合并 ELI https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-08-11） | 功能单位/参考流、系统边界、相关流完整性、截断披露、企业特定数据质量和多功能决策层级。 |
| `codex-cxc-2-1969` | standard | Codex Alimentarius，CXC 2-1969，Code of Hygienic Practice for Canned Fruit and Vegetable Products，官方文本 https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B2-1969%252FCXC_002e.pdf（检索日期 2026-08-11） | 仅用于气密密封、热加工产品的条件定义和工艺路线适用性。 |
| `codex-cxs-242-2003` | standard | Codex Alimentarius，CXS 242-2003，Standard for Canned Stone Fruits，官方文本 https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B242-2003%252FCXS_242e.pdf（检索日期 2026-08-11） | 适用罐藏核果的条件路线/产品规范及净重/沥干质量记录；不适用于整类，在本 PCR 中不适用于桃。 |
| `unece-ddp-standards-2025` | standard | UNECE，Dry and Dried Produce Standards and Standard Layout，2025 版，https://unece.org/trade/wp7/DDP-Standards 和 https://unece.org/trade/documents/2025/12/standard-layout-unece-standards-dry-and-dried-produce-2025（检索日期 2026-08-11） | 仅作为有条件的点名产品质量/测量参考；防止将干燥/干制产品限值外推到 CPC 21499，且不推翻简单干燥排除项。 |
| `mass-balance-identity` | method_factor | 用于批次清单核对的质量守恒恒等式；确定性方法规则，不含外部定量范围。 | 过程质量平衡、归一化数量和残差校验。 |
