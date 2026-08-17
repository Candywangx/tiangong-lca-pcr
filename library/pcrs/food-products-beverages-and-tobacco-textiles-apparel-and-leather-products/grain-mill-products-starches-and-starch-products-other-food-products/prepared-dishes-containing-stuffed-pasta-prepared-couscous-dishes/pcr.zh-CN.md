---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.prepared-dishes-containing-stuffed-pasta-prepared-couscous-dishes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含馅面食及粗麦粉预制菜肴

## 1. 范围与适用性

本 PCR 适用于以含馅面食、面条或粗麦粉制品为主要谷物组成的完整预制菜肴的工厂生产。覆盖含馅面食预制菜肴、面条预制菜肴、作为完整菜肴供应的饺子类产品，以及粗麦粉预制菜肴；市场状态可为常温、冷藏或冷冻。

前景边界始于制造场址对配料、加工助剂、初级包装和公用工程服务的有记录接收，止于工厂门口的可销售包装产品。边界包括配料准备、场内进行的面团或粗麦粉准备、馅料准备、成型或菜肴组装、适用的烹饪或其他热处理、冷却、冷藏、冷冻或干燥、包装、场内成品储存、清洁消毒、可直接归属的公用工程用量、食品损耗、废水和直接排放。

不作为完整预制菜肴供应的未填馅或未组装意面、面条和粗麦粉制品不在范围内。餐饮或家庭烹制、工厂门外分销、零售、消费者复热或烹饪以及包装生命末期不纳入本前景数据集，但可由下游生命周期模型补充。具体数据包应说明产品为即食、仅需复热还是仍需进一步烹饪，并声明常温、冷藏或冷冻储存条件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.prepared-dishes-containing-stuffed-pasta-prepared-couscous-dishes |
| classification_refs | CPC 3.0: 23722（exact） |
| covered_products | 含馅面食完整预制菜肴；面条预制菜肴；作为完整菜肴制备并供应的饺子类产品；粗麦粉预制菜肴 |
| excluded_products | 经烹煮、填馅或其他加工但不作为完整菜肴供应的意面、面条、含馅面食或粗麦粉制品；作为配料销售的干粗麦粉制品；餐饮或家庭现制菜肴 |
| representative_product | 在工厂生产、含馅面食或粗麦粉制品、采用常温/冷藏/冷冻分销状态包装的一份可销售预制菜肴 |
| production_route | 配料接收与储存；配方准备；适用的面团/粗麦粉和馅料准备；成型或菜肴组装；适用的热调理；适用的冷却/冷藏/冷冻/干燥；包装；工厂门口储存 |
| market_state | 已制造成品、工厂生产混合；由数据生产者声明常温、冷藏或冷冻状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一份在所声明可销售状态下、含馅面食、面条、饺子或粗麦粉制品的完整预制菜肴 |
| How much | 工厂门口 1 kg 净重可销售预制菜肴 |
| How well | 符合所声明配方、食品安全控制、储存条件、包装形式和预期食用准备状态 |
| How long or cycle | 在标签储存条件下覆盖所声明保质期；下游储存损耗和使用阶段准备不属于本前景数据集 |
| reference_flow_link | `packaging_and_storage` 输出的 1 kg 净重可销售产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Prepared dishes containing stuffed pasta, prepared couscous dishes `6ff6840a-8860-4e91-be9a-40d993df7105` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 菜肴类别与产品名称；完整配方或物料清单及适用时的馅料占比；即食、仅复热或需进一步烹饪状态；常温/冷藏/冷冻储存状态及温度；产品净重与初级包装形式；保质期；制造地理位置与参考期；场内热处理和保藏路线 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在工厂门口报告恰好 1 kg 净重可销售食品，不含包装质量。 |
| `ingredient_mass_basis` | 配料、加工助剂、产品和食品损耗 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录接收或排出时的湿基质量；使用干物质或水分换算时应另行声明。同一质量平衡中不得混用湿基和干基。 |
| `packaging_mass_basis` | 跨越前景边界的初级和次级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料记录每 1 kg 净重产品对应的包装质量；包装质量不属于 1 kg 参考产品。 |
| `energy_units` | 外购电力、燃料、蒸汽、加热、冷却和制冷 | 适用的能量属性 | kWh 或 MJ | 保留计费或计量原始单位，记录换算系数并归一化到 1 kg 可销售产品；不得将电力与热能视为可互换。 |
| `temperature_time` | 烹饪、冷却、冷藏、冷冻、干燥和储存 | 温度与经过时间 | °C 与 min 或 h | 保留实测时间—温度曲线或经验证的路线设定点记录，用于核验产品状态和过程路线。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的配料、加工助剂、包装材料和公用工程服务，并声明供应商身份、数量、交付状态和上游数据集引用 |
| starting_condition_role | 由接收、采购、库存和供应商记录支持的门到门前景制造起点 |
| product_classification_scope | 含馅面食或粗麦粉预制完整菜肴；只要遵守既定排除项，不因配方、蛋白质馅料、酱汁、常温/冷藏/冷冻状态或包装形式而改变类别边界 |
| recursive_input_rule | 已属于本 PCR 类别的外购投入按上游产品投入记录并要求其独立合规数据集；不得在本前景数据集中递归重建其制造过程 |
| upstream_dataset_requirement | 每项实质性配料、包装投入、外购能源载体和外供公用工程均应连接到地理、时间和技术代表性适宜的上游数据集，否则声明为数据缺口 |
| disclosure | 声明配方类别、食用准备状态、储存状态、纳入与排除的操作、外包操作、分配、上游代理、截断、产品损耗、包装组成、保质期和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 制造前景 | 纳入从接收到可销售包装产品的全部场内操作，包括清洁消毒、可直接归属的公用工程、损耗、废水和直接排放。 | eu-commission-pef-2021; codex-cxc-1-1969-2022 |
| `boundary_upstream_links` | 外购材料与公用工程 | 使用上游数据集表示外购配料、包装、能源载体和外供公用工程，并披露任何代理或缺口。 | eu-commission-pef-2021 |
| `boundary_downstream_exclusion` | 分销、使用和生命末期 | 从本前景数据集中排除下游分销、零售、消费者准备和生命末期；披露该排除，以便下游生命周期模型一致补充。 | eu-commission-pef-2021 |
| `boundary_recursive_category_input` | 作为投入采购的同类别预制菜肴 | 在外购产品投入处终止递归，并要求该投入具有独立上游数据集。 | eu-commission-pef-2021 |
| `boundary_waste_and_coproducts` | 前景输出 | 在分配前识别并量化可销售产品、共产品、副产品、食品损耗、包装废物、废水和直接排放。 | eu-commission-pef-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 配料接收、储存、准备与配方投料 | required | 始终纳入 | 前景材料准备 | 转入组装的每 kg 已准备配方或组分 |
| `dish_assembly` | 面团/粗麦粉准备、填馅、成型、分份和菜肴组装 | required | 始终纳入；不适用的子步骤报告为未使用 | 前景产品成型 | 调理前每 kg 已组装菜肴 |
| `thermal_conditioning` | 烹饪、冷却、冷藏、冷冻或干燥 | conditional | 场内发生任何热处理或保藏操作时纳入 | 前景调理与保藏 | 转入包装的每 kg 已调理菜肴 |
| `packaging_and_storage` | 包装与工厂门口成品储存 | required | 始终纳入 | 最终化与定量参考生产 | 工厂门口 1 kg 净重可销售产品 |
| `sanitation_and_waste_management` | 清洁消毒、废水与可直接归属的场内废物管理 | required | 始终纳入 | 跨过程前景支持 | 分配到 1 kg 可销售产品的服务 |

### 过程：配料接收、储存、准备与配方投料（`ingredient_preparation`）

#### 输入

##### 产品流

###### 配方配料与加工助剂（`ingredient_input`）

按供应商、批次、接收状态和配方作用记录每项配料与加工助剂。配料分组不得掩盖实质不同的谷物、馅料、酱汁、油脂、蔬菜、肉类、乳制品、蛋、调味料或添加剂。

- 选定流：产品特定配料或加工助剂流；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据批次领料记录和物料清单计算，并扣除退回的未开封材料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：eu-commission-pef-2021; codex-cxc-1-1969-2022
- 数量范围：暂定配料总投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.5
  - 单位：kg/kg 净重可销售产品
  - 基准：计入加工损耗或吸水前，每 1 kg 净重可销售产品的湿基配料总投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方用水或直接接触产品的工艺用水（`process_water`）

将加入配方或直接接触产品的饮用级水与清洁消毒用水分开记录。

- 选定流：饮用级工艺用水；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据经校准的批次加水记录计量或计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：codex-cxc-1-1969-2022
- 数量范围：暂定直接工艺用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 净重可销售产品
  - 基准：每 1 kg 净重可销售产品对应的配方水和直接接触用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 被拒收配料与准备残余（`preparation_loss`）

按去向记录过期、破损、洒落、修整、筛除或以其他方式被拒收的配料物质。

- 选定流：产品特定食品准备废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量废物容器净质量或通过批次闭合质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：mass-balance-identity

##### 基本流

#### 输出

##### 产品流

###### 转入组装的已准备配方组分（`prepared_components`）

记录转入菜肴组装的面团、粗麦粉基料、馅料、酱汁和其他已准备组分的实测湿基质量。

- 选定流：内部已准备组分
- 流属性/单位：Mass / kg
- 数量规则：按组分计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净重可销售预制菜肴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：mass-balance-identity

##### 废物流

##### 基本流

### 过程：面团/粗麦粉准备、填馅、成型、分份和菜肴组装（`dish_assembly`）

#### 输入

##### 产品流

###### 接收用于组装的已准备组分（`assembly_components`）

记录生产批次所用内部已准备组分，并保留组分身份以及馅料或酱汁占比。

- 选定流：内部已准备组分
- 流属性/单位：Mass / kg
- 数量规则：计量进入组装过程的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净重可销售预制菜肴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：mass-balance-identity

###### 准备与成型用电（`electricity_input`）

使用分表数据或有记录的场址总表分配，记录混合、和面、成型、分份、泵送及生产线辅助设备的电力。

- 选定流：匹配场址地理位置和电压等级的电力供应；Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：实测分表用电，或根据设备运行时间和额定负荷计算分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_runtime`
- 来源：eu-commission-pef-2021
- 数量范围：暂定用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 净重可销售产品
  - 基准：在路线特定复核前，每 1 kg 净重可销售产品的制造总用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 成型与组装废次品（`assembly_rejects`）

按回收或处置路线记录不合格份、开线物料、洒落物和换线残余。

- 选定流：产品特定食品制造废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量废次品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`
- 来源：mass-balance-identity

##### 基本流

#### 输出

##### 产品流

###### 调理前已组装菜肴（`assembled_dish`）

记录转入所声明调理路线的已成型或已组装产品质量。

- 选定流：内部已组装预制菜肴
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净重可销售预制菜肴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_material_balance`
- 来源：mass-balance-identity

##### 废物流

##### 基本流

### 过程：烹饪、冷却、冷藏、冷冻或干燥（`thermal_conditioning`）

#### 输入

##### 产品流

###### 热能或燃料（`thermal_energy_input`）

记录用于烹饪、焯烫、干燥、热水制备或其他路线特定调理操作的燃料、蒸汽或外购热量。仅当所声明路线不使用热能载体时才记录零。

- 选定流：路线特定燃料、蒸汽或热量供应；Tiangong UUID 未解析
- 流属性/单位：Energy / MJ
- 数量规则：实测计量表或账单用量，或根据设备特定运行时间与效率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_runtime`
- 来源：eu-commission-pef-2021
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg 净重可销售产品
  - 基准：在技术特定复核前，每 1 kg 净重可销售产品的直接热能总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入包装的已调理菜肴（`conditioned_dish`）

记录转入包装的已烹饪、冷却、冷藏、冷冻或干燥菜肴的质量及所声明温度或水分状态。

- 选定流：内部已调理预制菜肴
- 流属性/单位：Mass / kg
- 数量规则：记录实测转移质量及相应时间—温度或水分记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次及每 1 kg 净重可销售预制菜肴
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temperature_and_storage`
- 来源：codex-cxc-1-1969-2022

##### 废物流

###### 烹饪、冷却或调理损耗（`conditioning_loss`）

记录食品固形物、作为废物收集的冷凝物、不合格产品及其他可测路线损耗；不得将蒸发水重复计作废物流。

- 选定流：产品特定调理废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据实测投入、输出、单独计量的废物和水分变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_batch_material_balance`
- 来源：mass-balance-identity

##### 基本流

### 过程：包装与工厂门口成品储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 初级包装及分配的次级包装（`packaging_input`）

记录每种包装材料和组件，包括托盘、袋、膜、纸盒、标签、封口、吸水垫或使用的气调包装气体。

- 选定流：材料特定包装流；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：组件质量乘以净消耗件数，并计入实测生产线损耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：codex-cxc-1-1969-2022
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.30
  - 单位：kg/kg 净重可销售产品
  - 基准：每 1 kg 净重可销售产品的初级包装及分配的次级包装总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口可销售预制菜肴（`reference_product`）

本项为定量参考输出。净食品质量与包装质量应分开记录，并保留所声明食用准备状态和储存状态。

- 选定流：Prepared dishes containing stuffed pasta, prepared couscous dishes `6ff6840a-8860-4e91-be9a-40d993df7105`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定定量参考为 1 kg 净重可销售食品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装线废物与不可销售产品（`food_loss_output`）

将包装边角料与不可销售食品分开记录，并识别回收、资源化、处理或处置去向。

- 选定流：材料特定包装废物或产品特定食品废物；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按材料、批次和去向计量废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`
- 来源：mass-balance-identity
- 数量范围：暂定食品总损耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg 食品损耗/kg 净重可销售产品
  - 基准：整个前景系统每 1 kg 净重可销售产品对应的不可销售食品总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洁消毒、废水与可直接归属的场内废物管理（`sanitation_and_waste_management`）

#### 输入

##### 产品流

###### 清洁消毒用水（`sanitation_water`）

将原位清洗、开放式清洗、换线及其他清洁消毒活动用水与配方用水分开记录。

- 选定流：适合场址的供水；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测清洁消毒分表用水，或根据场址用水记录进行有文件依据的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：codex-cxc-1-1969-2022
- 数量范围：暂定清洁消毒用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg/kg 净重可销售产品
  - 基准：分配到每 1 kg 净重可销售产品的清洁消毒用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗剂与消毒剂（`cleaning_agent_input`）

按产品、浓度和领用质量记录配制清洗剂与消毒剂；除非换算有记录，不得只报告有效成分质量。

- 选定流：产品特定清洗剂或消毒剂；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量领用的配制剂质量，或根据浓度与溶液体积计算用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：codex-cxc-1-1969-2022
- 数量范围：暂定清洗剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 配制剂/kg 净重可销售产品
  - 基准：分配到每 1 kg 净重可销售产品的配制清洗剂和消毒剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

##### 废物流

###### 工艺及清洁消毒废水（`wastewater_output`）

记录离开场址或进入场内处理的废水，包括实测数量和所声明处理路线。避免重复计算已进入产品的水或另行记录的蒸发水。

- 选定流：进入所声明处理路线的废水；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排水体积乘以实测或有依据的密度，或通过水量平衡核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_wastewater`
- 来源：mass-balance-identity
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净重可销售产品
  - 基准：每 1 kg 净重可销售产品对应的前景边界排出废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 前景制冷系统释放的制冷剂（`refrigerant_emission`）

场内运行制冷、冷藏或冷冻设备时，按制冷剂种类，根据经核验的库存变化、补充、回收和设备记录计算直接制冷剂释放。

- 选定流：制冷剂特定大气排放；Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据服务于前景路线的设备制冷剂损失计算并分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重可销售预制菜肴
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：eu-commission-pef-2021
- 数量范围：暂定制冷剂损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg 净重可销售产品
  - 基准：分配到每 1 kg 净重可销售产品的直接制冷剂损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用生产线、公用工程、清洁消毒和储存 | 优先利用产品特定计量表、批次记录、设备运行时间、配方记录和专用储存数据进行细分；只有在明确附加功能和报告范围时才使用系统扩展。 | eu-commission-pef-2021 |
| `allocation_physical` | 无法避免的共用投入与排放 | 无法细分时，使用有记录的因果物理关系分配，例如计量能耗、设备时间、冷藏体积—时间或清洁表面积—时间；不得自动默认按产品质量分配。 | eu-commission-pef-2021 |
| `allocation_mass_fallback` | 缺少更优物理驱动因素的共线生产 | 仅当可销售产品净质量能够合理代表共用负荷的物理成因时使用质量分配；披露分母、期间、所含产品及对替代驱动因素的敏感性。 | eu-commission-pef-2021 |
| `allocation_economic_fallback` | 功能不同且无可辩护物理关系的共产品 | 只有在说明无法进行细分、系统扩展和物理分配后才使用经济分配；采用代表性期间的不含税收入并披露价格波动。 | eu-commission-pef-2021 |
| `allocation_waste_status` | 食品残余与包装边角料 | 根据有记录的去向和经济状态，将每项输出分类为可销售共产品、可回收副产品或废物；除非所选下游方法明确要求，不在前景数据集中赋予避免负荷。 | eu-commission-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_material_balance` | ingredient_preparation; dish_assembly; thermal_conditioning | 配料、内部转移、配方水、产品与损耗 | 批次生产、称量、BOM、接收与库存记录 | batch_id; product_code; ingredient_id; supplier_lot; opening_mass; issued_mass; returned_mass; transfer_mass; product_mass; reject_mass; moisture_basis | 经校准的秤及已核对的批次记录 | kg | 每批次 | 至少连续 12 个有代表性的月份；季节性生产采用完整生产季 | 场址内生产所声明产品的全部生产线 | 汇总口径一致的湿基质量记录，逐批核对后除以净重可销售产品质量 | 秤校准；签署批次表；BOM 版本；供应商与批次追溯；核对残差 |
| `cp_energy_and_runtime` | dish_assembly; thermal_conditioning; packaging_and_storage | 电力、燃料、蒸汽、热量、冷却和压缩空气 | 分表、公用工程账单、燃料库存与设备运行记录 | meter_id; opening_reading; closing_reading; fuel_quantity; steam_quantity; runtime; rated_load; product_code; output_mass | 优先分表；否则按有记录的因果驱动因素分配 | kWh; MJ; kg fuel; h | 批次、班次或月度计量期 | 至少连续 12 个有代表性的月份或完整生产季 | 模型纳入的全部前景设备与共用公用工程 | 读数相减，应用有记录的换算，分配共用量后除以可销售输出 | 仪表校准或账单；换算系数来源；分配驱动记录；完整性核对 |
| `cp_temperature_and_storage` | thermal_conditioning; packaging_and_storage | 产品调理状态与冷藏或常温储存 | 经验证路线、记录仪、生产线控制和仓库记录 | batch_id; step; set_point; measured_temperature; start_time; end_time; storage_temperature; shelf_life; deviation | 经校准传感器及保留的路线记录 | °C; min; h; day | 每批次或经验证的连续监测间隔 | 代表性参考期；适用时覆盖季节极端条件 | 服务于产品的全部调理与储存区域 | 保留批次曲线并根据时间戳计算停留时间 | 传感器校准；路线验证；偏差与纠正措施记录 |
| `cp_packaging_records` | packaging_and_storage | 包装材料与生产线损耗 | 包装规格、采购、领用、计数和边角料记录 | component_id; material; unit_mass; units_issued; units_returned; scrap_mass; product_units; net_content | 组件称量、领用数量和边角料核对 | kg; item | 每批次或包装生产期 | 至少连续 12 个有代表性的月份或完整生产季 | 产品使用的全部初级包装与分配的次级包装 | 组件质量 × 净消耗件数加实测边角料，再除以产品净质量 | 批准的包装规格；秤校准；采购与边角料核对 |
| `cp_water_and_cleaning` | sanitation_and_waste_management | 清洁消毒用水和清洗剂 | 水表、加药记录、清洁计划和化学品领用记录 | meter_id; water_volume; agent_id; formulation_mass; solution_volume; concentration; cleaned_line; start_time; end_time | 分表与受控加药记录 | kg; m3; L; % | 每次清洁事件或计量期 | 至少连续 12 个有代表性的月份或完整生产季 | 可归属于所纳入生产线的全部清洁消毒活动 | 使用实测或有依据的密度换算体积，按因果驱动分配共用活动后除以产品质量 | 仪表校准；加药校准；清洁消毒记录；化学品库存核对 |
| `cp_waste_and_wastewater` | all foreground processes | 食品损耗、包装废物、废水和处理路线 | 废物联单、容器称量、排水计量和处置记录 | waste_id; material; gross_mass; tare_mass; destination; effluent_volume; density; treatment_route; batch_or_period | 称量与流量计量并核对去向 | kg; m3 | 批次、收运事件或计量期 | 至少连续 12 个有代表性的月份或完整生产季 | 全部前景废物与排水点 | 毛重减皮重，或体积乘密度，按有记录驱动分配后除以产品质量 | 秤或仪表校准；承运方联单；处理接收记录；质量与水量平衡 |
| `cp_refrigerant_inventory` | thermal_conditioning; packaging_and_storage | 直接制冷剂释放 | 设备台账、充注、补充、回收和维护记录 | equipment_id; refrigerant_species; opening_charge; additions; recovered_mass; closing_charge; service_date; served_product_or_zone | 按制冷剂种类进行年度或生产季库存平衡 | kg | 每次维护及年度闭合 | 至少连续 12 个有代表性的月份 | 服务于产品路线的制冷设备 | 期初充注 + 补充 - 回收量 - 期末充注，并按有记录制冷服务驱动分配 | 合格维护记录；钢瓶称量；设备台账；非负平衡复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 可归属前景数量 / 同期净重可销售产品质量 | 可归属数量；同一期间净重可销售产品质量 | 每 1 kg 参考产品的数量 | eu-commission-pef-2021 |
| `calc_batch_mass_balance` | 每个生产批次 | 材料总投入 = 可销售产品 + 内部期末库存变化 + 实测食品损耗 + 废水携带产品固形物 + 实测留样 + 未解释残差；蒸发或吸收的水分单独报告 | 湿基配料、水、转移、产品、废物、固形物和库存记录 | 已核对的批次质量平衡与残差 | mass-balance-identity |
| `calc_energy_allocation` | 共用能源服务 | 可归属能源 = 实测总能源 × 有记录的因果驱动因素份额；只有符合 `allocation_mass_fallback` 时才可采用质量份额 | 计量能源；设备时间、分项计量负荷、体积—时间或批准的后备驱动因素 | 产品可归属 kWh 或 MJ | eu-commission-pef-2021 |
| `calc_packaging_mass` | 包装 | 包装质量 = Σ（组件单位质量 × 净消耗组件数）+ 分配的实测包装边角料 | 组件规格；领用与退回数量；边角料 | 每 kg 净重产品对应的 kg 包装 | mass-balance-identity |
| `calc_refrigerant_loss` | 制冷设备 | 制冷剂损失 = 期初充注 + 补充 - 回收量 - 期末充注；负值要求纠正记录，不得报告为排放 | 按制冷剂种类的充注与维护库存 | 分配到产品的 kg 制冷剂排放 | mass-balance-identity |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与批次 | 保留产品编码、菜肴类别、配方/BOM 版本、食用准备状态、储存状态、包装形式、净含量、保质期、制造场址和参考期。 | 批准的产品规格与批次追溯记录；codex-cxc-1-1969-2022 |
| `dq_temporal_coverage` | 前景活动数据 | 至少采用连续 12 个有代表性的月份；若完整生产季更短则采用完整生产季。披露停产、新品爬坡、异常批次和季节覆盖。 | 带日期的生产、计量、采购和废物记录；eu-commission-pef-2021 |
| `dq_measurement` | 质量、能源、水、温度和时间 | 保留仪器校准或核验证据，并记录每项单位换算、密度和分配驱动因素。 | 校准证书、仪表检查、换算记录；codex-cxc-1-1969-2022 |
| `dq_completeness` | 过程图与清单 | 将 BOM、材料、能源、水、包装、废物、废水和直接排放记录与纳入的过程图核对；量化缺失覆盖，不得将其隐藏为零。 | 完整性清单、批次质量平衡、公用工程核对；eu-commission-pef-2021 |
| `dq_representativeness` | 前景与上游数据集 | 评估技术、地理和时间代表性以及精度；识别代理数据集与实质性不匹配。 | 数据质量评估与代理登记表；eu-commission-pef-2021 |
| `dq_food_route_records` | 烹饪、冷却、冷藏、冷冻、干燥、储存和包装 | 针对所声明产品状态，保留路线特定的时间—温度、水分（适用时）、包装、过敏原、偏差与纠正措施证据。 | 经验证的路线与批次记录；codex-cxc-1-1969-2022 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID 应为 `6ff6840a-8860-4e91-be9a-40d993df7105`，参考流属性应为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组应为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位应为 kg。 |  |
| `validate_reference_amount` | 参考输出 | 净重可销售食品应等于 1 kg；包装质量应单独报告且不得计入参考质量。 | eu-commission-pef-2021 |
| `validate_required_qualifiers` | 数据集元数据 | 第 3 节每项必需限定信息均应存在，并与产品规格和过程路线内部一致。 | codex-cxc-1-1969-2022 |
| `validate_process_route` | 过程图 | 每个 required 过程均应具有清单覆盖；`thermal_conditioning` 应被纳入，或结合所声明即食/复热/进一步烹饪以及常温/冷藏/冷冻路线明确标记为不适用。 | codex-cxc-1-1969-2022 |
| `validate_mass_balance` | 批次与年度前景清单 | 投入、产品、实测损耗、水分变化、废水携带的产品物质及库存变化应核对；报告残差并调查实质性未解释残差，不得强制闭合。 | mass-balance-identity |
| `validate_energy_water_waste_coverage` | 前景清单 | 电力、热能、直接接触水、清洁消毒水、包装、食品损耗、包装废物、废水和直接制冷剂释放均应量化，或明确记录为不适用。 | eu-commission-pef-2021; codex-cxc-1-1969-2022 |
| `validate_allocation` | 共用过程与共产品 | 分配应遵循第 7 节有序规则，并披露驱动因素、分母、期间、共产品、废物分类及任何敏感性检验。 | eu-commission-pef-2021 |
| `validate_data_quality` | 前景与上游数据 | 报告时间、技术、地理、精度、完整性、计量和代理证据；缺失数据应披露为缺口，不得填零。 | eu-commission-pef-2021 |
| `validate_temporary_ranges` | 全部 `reasoned_estimate` 范围 | 每项暂定范围仅作为 QA 初筛；前景值超出范围需要复核和说明，处于范围内也不证明正确。用于出版关键约束前，应以经评审、有来源支持的证据替换这些范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对所声明含馅面食、面条、饺子或粗麦粉预制菜肴的工厂生产前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 需要工厂门口制造数据且产品与所声明配方、食用准备状态、储存状态、地理、期间和包装形式匹配的产品碳足迹或 LCA 模型 |
| excluded_use | 未连接上游数据集的农业或配料生产；通用餐饮菜肴；消费者烹饪或复热；未另行补充的分销、零售、工厂门后食品损耗或包装生命末期；营养或食品安全认证 |
| required_metadata | PCR id 及发布后的版本；产品流 UUID；产品编码；配方/BOM 版本；菜肴类别；适用时的馅料占比；食用准备状态；常温/冷藏/冷冻状态及温度；净质量；包装组成；保质期；场址地理；参考期；技术路线；分配；上游数据集版本 |
| required_quality_disclosure | 前景覆盖；时间、地理与技术代表性；精度；完整性；仪器校准；质量平衡残差；分配驱动因素；代理；截断；数据缺口；临时估算；评审状态 |
| update_trigger | 配方或馅料变化；烹饪、冷却、冷冻、干燥、包装、清洁消毒或储存技术变化；新场址或地理；能源或供水实质变化；保质期或产品状态变化；分配变化；数据超过所声明代表性期间；以经评审证据替换临时估算 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-commission-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索于 2026-08-11） | 功能单位与参考流；系统边界逻辑；企业特定前景制造数据；分配层级；数据质量与代理披露 |
| `codex-cxs-202-1995` | standard | Codex Alimentarius, CXS 202-1995, Standard for Couscous. https://www.fao.org/input/download/standards/65/CXS_202e.pdf（检索于 2026-08-11） | 粗麦粉制品身份、加工状态、水分/包装背景，以及与完整粗麦粉预制菜肴的区分 |
| `codex-cxc-1-1969-2022` | official_guidance | Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, revision current in the official 2022 Codex listing. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+1-1969%2FCXC_001e.pdf（检索于 2026-08-11） | 来料记录；时间—温度控制；包装和用水控制；批次追溯；过程路线记录；校准与文档要求 |
| `mass-balance-identity` | method_factor | 用于批次与期间清单核对的质量守恒恒等式 | 批次质量平衡、包装计算、废水核对和制冷剂库存平衡 |
