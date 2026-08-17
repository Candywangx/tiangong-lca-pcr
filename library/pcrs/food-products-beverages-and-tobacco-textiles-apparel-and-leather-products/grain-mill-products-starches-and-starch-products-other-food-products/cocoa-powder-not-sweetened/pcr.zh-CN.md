---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-not-sweetened
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 不加糖的可可粉

## 1. 范围与适用性

本 PCR 适用于由可可饼制成、作为低水分配料在可可粉制造商工厂门交付的不加糖可可粉，包括全脂、减脂和高度减脂可可粉。若声明起始条件，并为所有省略的上游操作提供数据，则一体化可可豆至可可粉、可可液块至可可粉以及外购可可饼至可可粉路线均在范围内。

本 PCR 不包括可可粉与糖或甜味剂的干混合物、巧克力粉、饮用巧克力混合物、巧克力成品、以可可液块或可可脂作为参考产品的产品，以及下游配送、零售、食品制备、消费和包装报废。仅当为所声明可可粉实施碱化时，才纳入可选碱化过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-not-sweetened |
| classification_refs | CPC 3.0：23630，Cocoa powder, not sweetened（exact） |
| covered_products | 由可可饼制得的不加糖可可粉；全脂、减脂或高度减脂可可粉；在明确声明时包括天然或碱化可可粉 |
| excluded_products | 加糖可可混合物；巧克力粉；饮用巧克力；巧克力成品；以可可液块或可可脂作为参考产品的产品；添加糖或甜味剂的产品 |
| representative_product | 采用所声明脂肪类别与碱化状态、以散装或工业包装供应的不加糖可可粉 |
| production_route | 已声明的一体化可可豆至可可粉、可可液块至可可粉或外购可可饼至可可粉路线；使用现场碱化时将其纳入 |
| market_state | 在可可粉制造商工厂门、采用所声明包装形式交付的干燥可流动粉末 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应作为低水分食品配料的不加糖可可粉 |
| How much | 在可可粉制造商工厂门按交付状态计 1 kg 可可粉 |
| How well | 不添加糖或甜味剂；声明可可脂/脂肪类别、水分、碱化状态、粒度规格和食品级符合性；适用 CXS 105-1981 时水分不得超过 7% m/m |
| How long or cycle | 在工厂门交付的一个生产批次；除非明确纳入，否则超过所声明现场暂存期的储存不属于参考服务 |
| reference_flow_link | rf_cocoa_powder_not_sweetened |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cocoa powder, not sweetened `2601a019-8ff4-4296-8773-24f0901f8419` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 可可脂/脂肪类别或实测脂肪含量；交付状态水分；天然或碱化状态及适用时的碱化剂；可可豆产地或混合组成；声明的起始物料与生产路线；粒度规格；包装形式与净质量；生产地域与参考期；可可脂共产品处理与分配方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考可可粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流按 1 kg 交付状态可可粉报告，并声明实测水分基准；不得静默转换为干物质。 |
| `dry_matter_conversion` | 以干物质基准报告的数值 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测水分结果及交付状态质量与干物质质量之间的换算公式；参考产出仍以交付状态计。 |
| `mass_inputs_outputs` | 可可物料、可可粉、可可脂、可可壳、废次品与包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按过程计量或计算净质量，并在统一湿基或干基上核对投入、产出、废物、直接排放和库存变化。 |
| `energy_conversion` | 电力、燃料、蒸汽与外购热力 | Energy | kWh 或 MJ | 保留原始能量单位以及低位或高位热值基准；归一化到参考流前记录每项换算。 |

## 5. 系统边界

前景边界始于所声明的发酵干可可豆、可可液块或可可饼接收入厂，止于合格不加糖可可粉完成包装并到达制造商工厂门。前景范围包括声明路线采用的全部现场步骤、公用工程、清洗、粉尘控制、转移前废水处理、转移前废物处理、返工、包装和直接排放。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂接收发酵干可可豆、可可液块或可可饼，并声明物料状态、供应商、产地或混合组成、水分及脂肪相关规格 |
| starting_condition_role | 前景路线的上游切入点；该点之后在报告工厂发生的全部操作均属于前景 |
| product_classification_scope | 本 PCR 语义范围所述的不加糖可可粉；CPC 3.0 代码 23630 仅作为分类参考保留 |
| recursive_input_rule | 同一工厂和生产期返回的内部可可粉返工料是内部循环，不作为新的上游产品投入；外购可可粉作为具有自身上游数据集的独立产品投入，不得递归重复当前前景路线 |
| upstream_dataset_requirement | 对外购可可豆、可可液块、可可饼、碱化剂、燃料、电力、水、包装和其他产品投入使用可追溯上游数据集；披露任何代理、地域不匹配、数据年龄或省略操作 |
| disclosure | 声明起始物料、纳入和省略的过程步骤、天然或碱化路线、分配方法、包装边界、现场处理、储存时长以及所有截断或代理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_completeness` | 已声明生产路线 | 纳入从所声明起始物料到包装可可粉之间的每个现场过程；仅当省略物料以具有文件记录的上游数据集进入时，路线才可省略上游可可豆、可可液块或压榨步骤。 | `icco-processing-cocoa` |
| `boundary_utilities_releases` | 前景操作 | 当过程电力、热能、水、清洗材料、碱化剂、包装、直接空气和水排放、废水、除尘残渣、可可壳、废次品及其他废物跨越前景边界时予以纳入。 | `icco-processing-cocoa` |
| `boundary_low_moisture_hygiene` | 可可粉精制与储存 | 对显著改变清单的清洁、污染控制和低水分食品处理进行建模；声明被排除的卫生操作，并保留支持性生产记录。 | `codex-cxs-105-1981` |
| `boundary_factory_gate` | 参考产品 | 默认系统止于制造商工厂门的净合格包装可可粉；除非研究明确扩展边界，否则排除下游配送、制备、使用和包装报废。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bean_to_liquor` | 可可豆预处理、焙炒、破碎去壳与可可仁研磨 | conditional | 当发酵干可可豆进入报告工厂时纳入 | 可可液块前景制备 | 离开过程的 kg 可可液块 |
| `alkalization` | 可选可可碱化 | conditional | 当可可仁、可可液块、可可饼或可可粉在现场采用碱性化合物处理时纳入 | 颜色与风味改性的前景过程 | 离开过程的 kg 碱化可可物料 |
| `liquor_pressing` | 可可液块压榨与共产品分离 | conditional | 当可可液块在现场压榨时纳入；仅当外购可可饼带有上游数据集时方可省略 | 生产可可饼和可可脂的前景过程 | 压榨的 kg 可可液块 |
| `powder_finishing` | 可可饼冷却、破碎、粉碎、调温、储存与包装 | required | 所声明可可粉制造工厂始终纳入 | 生产参考可可粉的前景过程 | 1 kg 合格包装可可粉 |

### 过程：可可豆预处理、焙炒、破碎去壳与可可仁研磨（`bean_to_liquor`）

#### 输入

##### 产品流

###### 发酵干可可豆（`cocoa_beans_input`）

记录生产批次使用的可可豆接收净质量，包括所声明产地或混合组成、水分、质量等级以及期初期末库存修正。

- 选定流：未解析的发酵干可可豆产品流
- 流属性/单位：Mass / kg
- 数量规则：分配到该批次或报告期的实测可可豆净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_to_liquor_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定可可豆投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：5
  - 单位：kg/kg 参考可可粉
  - 基准：在以水分一致的实测质量平衡替换前采用的宽泛路线筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 过程电力（`bean_route_electricity`）

记录清理、焙炒辅助设备、破碎、风选去壳、输送、通风和可可仁研磨使用的计量电力或经发票核对的电力。

- 选定流：未解析的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：可可豆至可可液块过程的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_to_liquor_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 参考可可粉
  - 基准：在取得前景计量证据前采用的宽泛首轮筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 焙炒热能（`roasting_thermal_energy`）

在前景数据包中分别记录每一种燃料、蒸汽或外购热载体，并保留其能量基准和燃烧地点。

- 选定流：未解析的热能或燃料产品流
- 流属性/单位：Energy / MJ
- 数量规则：在所声明热值基准上换算的实测燃料或热量消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_to_liquor_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定热能 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 参考可可粉
  - 基准：在取得前景实测证据前采用的宽泛路线筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可可液块中间产品（`cocoa_liquor_output`）

记录转移至碱化或压榨的可可液块实测质量，并确保水分和库存变化与可可豆投入采用同一基准。

- 选定流：未解析的可可液块产品流
- 流属性/单位：Mass / kg
- 数量规则：本过程的可可液块实测产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_to_liquor_records`
- 来源：`icco-processing-cocoa`

##### 废物流

###### 可可壳与清理废次品（`cocoa_shells_rejects`）

分别记录作为副产品出售的物料和废物；未经明确研究情景，不得赋予避免负担。

- 选定流：未解析的可可壳或清理残渣废物流
- 流属性/单位：Mass / kg
- 数量规则：可可壳、异物和不合格可可豆的实测净产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_to_liquor_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定固体残渣 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 接收可可豆
  - 基准：在取得前景实测证据前采用的宽泛物理筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 焙炒直接排放与粉尘排放（`bean_route_air_releases`）

按单项物质报告实测或许可要求下的烟道与无组织直接排放；发布数据集不得把该汇总候选项作为一个基本流使用。

- 选定流：未解析的各单项空气基本流
- 流属性/单位：Mass / kg
- 数量规则：控制后按物质计的实测或计算直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定直接排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考可可粉（对每项报告物质）
  - 基准：特意设置的宽泛筛查区间；须用物质特定监测或经接受的因子证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：可选可可碱化（`alkalization`）

#### 输入

##### 产品流

###### 待碱化可可物料（`alkalization_cocoa_input`）

记录进入碱化的是可可仁、可可液块、可可饼还是可可粉，并将数量关联到相应上游或内部过程产出。

- 选定流：未解析的可可仁、可可液块、可可饼或可可粉产品流
- 流属性/单位：Mass / kg
- 数量规则：进入碱化容器的可可物料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alkalization_records`
- 来源：`icco-processing-cocoa`

###### 碱化剂（`alkalizing_agent_input`）

按商业产品质量与活性含量分别记录每一种碱性化合物；发布流中不得合并不同化合物。

- 选定流：未解析的碳酸钾、碳酸钙、氢氧化钠或其他已声明碱化剂产品流
- 流属性/单位：Mass / kg
- 数量规则：实测商业产品投入与所声明活性浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 碱化可可物料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alkalization_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定碱化剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 碱化可可物料产出
  - 基准：在取得配方与批次记录前采用的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碱化用水（`alkalization_water`）

记录加入碱性水溶液的水以及任何直接计量的过程用水。

- 选定流：未解析的过程水产品流
- 流属性/单位：Mass / kg
- 数量规则：碱化过程的实测用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 碱化可可物料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alkalization_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 碱化可可物料产出
  - 基准：在取得前景计量证据前采用的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 碱化可可物料（`alkalized_cocoa_output`）

记录转移到下一过程的物料状态、pH 或过程规格、水分和净质量。

- 选定流：未解析的碱化可可中间产品流
- 流属性/单位：Mass / kg
- 数量规则：库存修正后的碱化物料实测产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alkalization_records`
- 来源：`icco-processing-cocoa`

##### 废物流

###### 碱化废水与残渣（`alkalization_wastewater`）

将转移的废水记录为废物流，并在现场处理后分别报告直接水体排放。

- 选定流：未解析的废水废物流
- 流属性/单位：Mass / kg
- 数量规则：碱化过程转移的计量或由质量平衡计算的废水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 碱化可可物料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alkalization_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 碱化可可物料产出
  - 基准：在取得计量或核对后的前景证据前采用的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：可可液块压榨与共产品分离（`liquor_pressing`）

#### 输入

##### 产品流

###### 压榨用可可液块（`pressing_liquor_input`）

按质量、脂肪含量、水分和批次记录热可可液块投入，并关联至内部可可液块产出或外购可可液块上游数据集。

- 选定流：未解析的可可液块产品流
- 流属性/单位：Mass / kg
- 数量规则：进入压榨机的可可液块实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定可可液块投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：5
  - 单位：kg/kg 参考可可粉
  - 基准：在取得脂肪与水分基准一致的前景质量平衡前采用的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 压榨电力与液压能（`pressing_energy`）

分别记录电力和其他能源载体；保留计量记录及其向压榨过程的分配。

- 选定流：未解析的电力或液压能产品流
- 流属性/单位：Energy / kWh
- 数量规则：压榨过程的计量或设备分表能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定压榨能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 参考可可粉
  - 基准：在取得前景计量证据前采用的宽泛首轮筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可可压榨饼（`cocoa_cake_output`）

记录可可饼产出质量、水分、残余脂肪类别以及向可可粉精制过程的转移。

- 选定流：未解析的可可饼产品流
- 流属性/单位：Mass / kg
- 数量规则：压榨过程的可可饼实测产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`icco-processing-cocoa`; `codex-cxs-105-1981`

###### 可可脂共产品（`cocoa_butter_coproduct`）

只要可可脂具有产品去向，即将其记录为独立产品产出；保留其用于分配的实测质量和质量状态。

- 选定流：未解析的可可脂产品流
- 流属性/单位：Mass / kg
- 数量规则：压榨过程的可可脂实测产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 压榨可可液块
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`icco-processing-cocoa`; `mass-balance-identity`
- 数量范围：物理共产品质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 压榨可可液块
  - 基准：在一致质量基准上，可可脂产出不得超过可可液块投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

### 过程：可可饼冷却、破碎、粉碎、调温、储存与包装（`powder_finishing`）

#### 输入

##### 产品流

###### 可可饼投入（`cocoa_cake_input`）

记录来自现场压榨或上游供应商的可可饼，包括残余脂肪类别、水分、碱化状态和净质量。

- 选定流：未解析的可可饼产品流
- 流属性/单位：Mass / kg
- 数量规则：库存修正后进入精制过程的可可饼实测投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_finishing_records`
- 来源：`icco-processing-cocoa`; `codex-cxs-105-1981`
- 数量范围：暂定可可饼投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.9
  - 上限：2
  - 单位：kg/kg 参考可可粉
  - 基准：在取得损失与水分基准一致的实测质量平衡前采用的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精制电力（`finishing_electricity`）

记录可可饼冷却、破碎、粉碎、分级、输送、粉尘控制、调温、储存环境控制与包装的计量电力。

- 选定流：未解析的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：可可粉精制过程的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_finishing_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定精制电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 参考可可粉
  - 基准：在取得前景计量证据前采用的宽泛首轮筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`packaging_input`）

按材料和净质量分别记录每种袋、内衬、纸箱、桶、托盘和缠绕膜；仅在具有文件记录的重复使用模型时排除可重复使用运输包装。

- 选定流：未解析的材料特定包装产品流
- 流属性/单位：Mass / kg
- 数量规则：可归属于包装参考产品的外购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_finishing_records`
- 来源：
- 数量范围：暂定包装 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 包装参考可可粉
  - 基准：在取得包装物料清单记录前采用的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格不加糖可可粉（`reference_powder_output`）

在所声明门槛处准确记录合格可可粉净质量；保留脂肪类别、水分、碱化状态、粒度、包装和批次身份。

- 选定流：Cocoa powder, not sweetened `2601a019-8ff4-4296-8773-24f0901f8419`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格包装可可粉的固定参考产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-105-1981`

##### 废物流

###### 不合格可可粉与收集粉尘（`offspec_powder_waste`）

将送往废物处理的物料与内部返工可可粉分开记录；内部返工仍为内部循环。

- 选定流：未解析的可可粉废物流
- 流属性/单位：Mass / kg
- 数量规则：作为废物离开的不合格可可粉与收集粉尘实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_finishing_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定可可粉损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考可可粉
  - 基准：在取得核对后的前景证据前采用的宽泛筛查区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集可可粉尘向空气排放（`powder_dust_air`）

仅报告控制后按物质计的未捕集排放；作为废物转移的收集粉尘归入上述废物流。

- 选定流：未解析的可可粉尘空气基本流
- 流属性/单位：Mass / kg
- 数量规则：控制后未捕集可可粉尘的实测或计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考可可粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_release_records`
- 来源：`icco-processing-cocoa`
- 数量范围：暂定粉尘排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 参考可可粉
  - 基准：特意设置的宽泛筛查区间；须用实测排放或经接受的控制因子证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享且可分割的前景操作 | 首先采用过程细分和直接计量，将负担归属于可可豆预处理、碱化、压榨与可可粉精制；保留未分配总量用于核对。 | `mass-balance-identity` |
| `allocation_pressing_coproducts` | 压榨共同产生的可可饼与可可脂 | 当细分无法分离共同压榨负担时，采用能够反映过程的、有文件依据的物理关系在可可饼和可可脂间分配；若未证明可辩护的物理关系，则采用经济分配，并报告价格、币种、地域、平均期和计算过程。 | `icco-processing-cocoa`; `mass-balance-identity` |
| `allocation_sensitivity` | 重要共产品分配 | 当所选方法显著改变可可粉结果时，报告替代的质量分配或经济分配敏感性；除非研究明确扩展情景并予以披露，否则不得采用避免负担替代。 |  |
| `allocation_waste_rework` | 可可壳、废次品、收集粉尘、废水和内部返工 | 将内部返工作为内部循环；依据有文件记录的去向和经济状态，将外出物料归类为产品、共产品、残渣或废物，默认不得赋予负负担。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bean_to_liquor_records` | `bean_to_liquor` | 可可豆、可可液块、可可壳/废次品、电力与焙炒能源数量 | 地磅、秤、仪表、燃料发票、批次和库存记录 | 批次 id；产地/混合组成；投入/产出质量；水分；库存变化；电力；燃料/热量及基准；可可壳/废次品质量；运行时间 | 经校准的秤和仪表，并与采购、生产和库存记录核对 | kg；kWh；MJ；燃料原始单位 | 每批次或每个仪表读数间隔，汇总至所声明参考期 | 包含相关生产变化的代表性已声明运行期 | 报告工厂及纳入设备 | 修正库存变化，透明换算单位，再以合格可可粉产出归一化净量 | 校准或核查记录；仪表覆盖；发票；批次追溯；核对日志 |
| `cp_alkalization_records` | `alkalization` | 可可物料、碱性化合物、水、产出与废水 | 配方、批次、秤、水表、实验室和转移记录 | 物料状态；投入/产出质量；化合物身份；商业产品质量；活性浓度；水；适用时的温度/压力；水分；pH 或规格；废水 | 批次级记录，使用经校准秤或仪表并关联实验室结果 | kg；浓度单位；pH；过程条件单位 | 每个碱化批次 | 所声明参考期内全部纳入批次 | 报告工厂及纳入碱化设备 | 汇总各化合物和水的记录但不合并身份；核对投入、产出、废水、排放与库存变化 | 配方授权；证书；校准；实验室方法/结果；批次核对 |
| `cp_pressing_records` | `liquor_pressing` | 可可液块、可可饼、可可脂与压榨能耗 | 批次、秤、压榨机、仪表、实验室和库存记录 | 可可液块/可可饼/可可脂质量；脂肪含量；水分；批次 id；能源；库存变化；去向 | 直接质量测量、实验室表征以及分表或分配能源 | kg；kWh；MJ；百分比 | 每次压榨生产期或核对后的报告间隔 | 所声明参考期内全部纳入生产期 | 报告工厂及纳入压榨机 | 在分配前，以一致基准核对可可液块投入与可可饼、可可脂、残渣、排放和库存变化 | 秤与仪表核查；实验室结果；去向证据；质量平衡核对 |
| `cp_powder_finishing_records` | `powder_finishing` | 可可饼、电力、包装、合格可可粉、返工与废物 | 批次、秤、仪表、包装领用、质量放行与库存记录 | 可可饼质量/规格；电力；包装材料/质量；可可粉产出；水分；脂肪类别；碱化状态；粒度；返工；废物；库存变化 | 与批次放行和包装物料清单关联的直接测量 | kg；kWh；规格单位 | 每批次或每个仪表读数间隔，汇总至所声明参考期 | 所声明参考期内所有合格与不合格生产 | 报告工厂及纳入精制/包装设备 | 区分合格产出、内部返工、废物和库存变化；将投入归一化到净合格包装可可粉 | 校准；包装清单；批次追溯；实验室放行；库存核对 |
| `cp_direct_release_records` | `bean_to_liquor`; `powder_finishing` | 直接空气和水排放 | 烟道/无组织监测、控制装置记录、许可证、排放测量和经接受的计算记录 | 物质；位置；实测浓度/数量；流量；时长；控制效率；计算因子/来源；检出限 | 由采集活动数据进行按物质计的测量或有文件记录的计算 | 物质特定质量与测量单位 | 按适用控制计划要求的监测频次，并覆盖各重要运行状态 | 覆盖正常运行及相关异常事件的已声明时期 | 所有纳入前景排放点 | 分别计算每项排放，仅扣除有文件记录的捕集物料，并归一化到合格可可粉产出 | 实验室报告；仪器校准；许可证记录；因子引用；控制装置日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 可归属于声明路线的净过程数量 / 净合格包装可可粉产出 | 修正后的过程数量；适用时的分配结果；合格可可粉质量 | 每 1 kg 参考可可粉的数量 | `mass-balance-identity` |
| `calc_dry_matter` | 可可物料换算 | 干质量 = 交付状态质量 ×（1 − 实测水分质量分数）；保留原始值与换算值 | 交付状态质量；实测水分 | 干质量与换算记录 | `codex-cxs-105-1981`; `mass-balance-identity` |
| `calc_process_mass_balance` | 每个纳入过程 | 核对残差 = 修正投入 − 产品 − 废物 − 直接质量排放 − 期末库存 + 期初库存；调查并披露重要残差 | 投入/产出/废物/排放质量；库存变化；一致水分基准 | 过程残差与核对状态 | `mass-balance-identity` |
| `calc_energy_conversion` | 能源载体 | 仅使用有文件记录的单位和热值约定进行换算；保留原始数量、因子和结果 | 原始能源或燃料数量；换算因子；热值基准 | kWh 或 MJ 及可追溯换算 |  |
| `calc_allocation_factor` | 联合压榨负担 | 分配因子 = 某一共产品所选物理关系量或经济价值 / 所有共产品同一基准量之和 | 实测共产品数量与属性或有文件记录的价格 | 合计为一的分配因子 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考可可粉与可可中间产品 | 保留与批次关联的产品名称、不添加糖/甜味剂声明、脂肪类别或结果、水分、碱化状态、起始物料、产地/混合组成、粒度规格和包装身份。 | 质量放行记录、证书或规格、实验室结果及批次追溯 |
| `dq_route_completeness` | 过程边界 | 将所声明起始物料及每个纳入或省略的 ICCO 过程步骤与过程图和上游数据集清单核对。 | 签署的路线图、供应商数据集引用以及省略/代理披露 |
| `dq_measurement` | 质量、能源、水与排放 | 可用时采用经校准或以其他方式核查的测量系统；披露估算、分配、缺失覆盖、检出限与换算因子。 | 校准/核查、仪表图、发票、计算工作簿和监测报告 |
| `dq_temporal_representativeness` | 前景报告期 | 使用覆盖相关生产变化、异常事件、废次品、返工、停机和库存变化的已声明代表期；解释排除内容。 | 生产日历、批次登记、停机日志和期间核对 |
| `dq_mass_balance` | 可可豆、可可液块、可可饼、可可脂、可可粉、残渣与库存 | 按纳入过程在一致水分基准上核对质量，并在放行前调查重要残差。 | 过程质量平衡表与纠正措施说明 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 范围仅用作 QA 筛查；发布前须以现场测量或经引用的评审证据替换，或记录明确的评审接受决定。 | 替代来源或前景范围分析以及方法学评审记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 当参考数量不是 1 kg、参考流 UUID 不同、Mass 属性/单位组身份缺失或必需产品限定信息缺失时，校验失败。 | `codex-cxs-105-1981` |
| `validate_unsweetened_scope` | 产品身份 | 当添加糖或甜味剂、产品为可可-糖干混合物或巧克力粉，或可可饼并非所声明可可粉前体时，校验失败。 | `codex-cxs-105-1981` |
| `validate_moisture` | 参考可可粉 | 适用 CXS 105-1981 时，实测水分超过 7% m/m 或缺失水分结果及其基准，校验失败。 | `codex-cxs-105-1981` |
| `validate_route_boundary` | 过程图与上游数据集 | 当现场路线步骤被省略，或上游起始物料缺少可追溯数据集及省略披露时，校验失败。 | `icco-processing-cocoa` |
| `validate_inventory_identity` | 清单流 | 评审或发布前，要求每个选定产品流、废物流和基本流解析到经回读确认的 Tiangong UUID；发布数据集不得采用汇总基本流候选项。 |  |
| `validate_mass_balance` | 每个纳入过程 | 要求水分基准一致的质量平衡结果并调查/披露重要残差；核验可可脂在同一基准上不超过可可液块投入。 | `mass-balance-identity` |
| `validate_allocation` | 压榨共产品 | 要求共产品分类、可可饼与可可脂实测产出、所选分配基准、合计为一的因子，并在分配影响重要时披露敏感性。 | `icco-processing-cocoa`; `mass-balance-identity` |
| `validate_reasoned_estimates` | 暂定 QA 范围 | 将超出暂定范围的数值作为评审标记而非自动不符合；发布要求替代证据或明确的方法学评审接受。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 不加糖可可粉制造商工厂门前景生产数据集 |
| downstream_use | 在完成方法学评审、UUID 解析并按所声明地域、技术、路线与时期完成适当证据替换后，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 当产品限定信息、系统边界、分配、地域、技术和时间相容时，用于需要不加糖可可粉的产品碳足迹或 LCA 模型 |
| excluded_use | 加糖可可混合物、巧克力粉、巧克力成品、以可可脂为参考产品、未说明的路线替代，或把未经评审的暂定估算作为权威数值使用 |
| required_metadata | PCR id/版本；参考流 UUID；产品名称与限定信息；CPC 参考；工厂地域；参考期；起始物料；路线与技术；天然/碱化状态；脂肪类别/结果；水分；包装；上游数据集；分配方法；截断；数据所有者与评审状态 |
| required_quality_disclosure | 前景与二手数据份额；仪表和批次覆盖；缺失数据与估算；质量平衡残差；分配因子与敏感性；保留的暂定范围；未解析 UUID；上游代理地域/时间/技术；实验室与监测方法 |
| update_trigger | 起始物料、脂肪类别、碱化化学品、焙炒/压榨/粉碎技术、能源系统、包装、共产品去向或价格、分配方法、供应商构成、法规/规格或证据发生足以显著改变清单或代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-105-1981` | standard | Codex Alimentarius，CXS 105-1981，Standard for Cocoa Powders (Cocoas) and Dry Mixtures of Cocoa and Sugars，2025 年修订，https://openknowledge.fao.org/handle/20.500.14283/cd8968en（检索日期 2026-08-11） | 产品范围与名称；由可可饼制得可可粉；脂肪类别声明；最高水分；低水分食品卫生语境；校验 |
| `icco-processing-cocoa` | official_guidance | International Cocoa Organization，Processing Cocoa，https://www.icco.org/processing-cocoa/（检索日期 2026-08-11） | 过程分解；清理、焙炒、破碎去壳、研磨、可选碱化、可可液块压榨、可可饼与可可脂产出、可可饼冷却/粉碎/调温/储存 |
| `mass-balance-identity` | method_factor | 对过程投入、产品、废物、直接排放与库存变化应用质量守恒恒等式 | 过程核对、物理 QA 边界、归一化与共产品分配计算 |
