---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.float-glass-and-surface-ground-or-polished-glass-in-sheets
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 片状浮法玻璃及表面磨光或抛光玻璃

## 1. 范围与适用性

本 PCR 用于连续平板玻璃制造至工厂门口未加工片材交付的前景数据包。范围包括普通无色、低铁、本体着色或乳浊浮法玻璃，以及在适用时表面磨光或抛光的片材。热玻璃带阶段形成的在线涂层仅可作为已声明的条件过程和限定信息纳入。

数据包应声明玻璃种类、适用的磨光或抛光状态、公称与实测厚度、片材面积与质量、铁含量或适用的透光性能规范、在线涂层状态、按来源拆分的碎玻璃比例、熔窑技术与燃料/电力载体、锡槽成形、退火、切边/切割良率及交付片材状态。产品特定的光学或铁含量值必须来自检测记录或规范；本 PCR 不设通用性能阈值。

本类别不包括钢化或半钢化安全玻璃、夹层玻璃、中空玻璃单元、镜面玻璃、离线或下游镀膜、超出未加工片材尺寸切割的加工，也不等同于单一光伏盖板玻璃类别。此类下游操作需要单独的单元过程或更具体的 PCR，不得外推为整个类别的方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.float-glass-and-surface-ground-or-polished-glass-in-sheets` |
| classification_refs | CPC 3.0 `37113`，精确对应 |
| covered_products | 未加工的浮法玻璃及表面磨光或抛光玻璃片材；普通无色、低铁、本体着色或乳浊品种；仅在声明时包括在线涂层玻璃带 |
| excluded_products | 其他类别的铸造、轧制、拉制或吹制片玻璃；已加工片玻璃；钢化或夹层安全玻璃；中空玻璃单元；镜子；离线/下游镀膜或深加工玻璃产品 |
| representative_product | 工厂门口可销售且质量验收合格的片材净质量 |
| production_route | 配料、熔化澄清、熔锡浮法成形、退火、条件性的表面磨光/抛光或在线涂层、检验、切边切割、碎玻璃回炉和包装 |
| market_state | 按声明状态交付的未加工大片、巨片或定尺库存片；声明尺寸和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合所声明种类和交付状态的可销售浮法玻璃或适用的表面磨光/抛光玻璃片材 |
| How much | 所声明工厂门口 1,000 kg 验收合格产品净质量 |
| How well | 声明玻璃种类、加工状态、厚度、尺寸、密度依据、铁含量或光学规范、涂层状态、碎玻璃说明和质量验收依据 |
| How long or cycle | 代表连续生产的一个报告期，通常至少连续 12 个月 |
| reference_flow_link | Tiangong 过程身份候选 `d6c1bf92-3556-448b-92d3-b8485d4c8e89`；仅作身份核对，不继承其清单数值 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 浮法玻璃及表面经研磨或抛光的平板玻璃 `1b43024e-16ea-42d2-830d-329c4a2abc3d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | 玻璃种类：普通无色、低铁、着色或乳浊；浮法或表面磨光/抛光状态；公称与实测厚度；验收面积与净质量；实测密度或声明的换算依据；铁含量或适用的透光性能规范及试验方法；有/无在线涂层及有涂层时的化学组成/功能；内部、外部生产前和消费后碎玻璃比例；熔窑类型与燃料/电力载体；锡槽和退火路线；切割良率；交付片材尺寸与包装状态；地理范围；报告期；工厂门口 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 验收合格参考产品净质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换按切边和剔除后 1,000 kg 可销售验收合格片材归一化；不含包装质量。 |
| `area_mass_conversion` | 面积与质量换算 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 质量 = 验收面积 × 实测平均厚度 × 实测产品密度。钠钙硅玻璃缺少实测密度时，2,500 kg/m3 只能作为 EN 572-1 的约定计算值使用并披露；没有证据不得用于其他组成。 |
| `thickness_area_records` | 每个可销售产品组 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按产品组记录验收面积和厚度分布；混合厚度产出不得采用一个未声明的公称厚度换算。 |
| `cullet_fraction` | 配合料碎玻璃声明 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 配合料 | 按干基配合料投入质量分别计算内部、外部生产前和消费后碎玻璃；报告合计值，内部回用切边料不得计作外部再生含量。 |
| `cutting_yield` | 检验与切割 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 玻璃带投入 | 切割良率等于同一报告边界内验收片材不含包装净质量除以进入检验/切割的退火玻璃带质量。 |
| `optical_iron_declaration` | 产品身份与性能限定信息 | 所声明试验属性 | 所声明方法单位 | 声明实测总铁/氧化铁含量，或适用的透光性能规范及试验方法。低铁、着色和涂层品种不得继承普通无色玻璃性能。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_inputs` | 从摇篮到工厂门口前景数据包 | 纳入原生配料、分来源碎玻璃、燃料、电力、水、工艺气体、锡补充料、适用时的涂层或磨抛材料以及包装的接收和制备。 | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `boundary_core` | 必需制造过程 | 纳入配料、熔化澄清、熔锡浮法成形、退火、检验、切边、切割、内部碎玻璃回用、质量剔除和包装。 | `eu-jrc-glass-bref-2013`; `eurofloat-epd-2024`; `vitro-flat-glass-epd-2024` |
| `boundary_conditionals` | 路线特定制造 | 仅当在声明边界内实施时纳入在线涂层和表面磨光/抛光，并作为独立条件过程记录。 | `unsd-hs-7005`; `eu-jrc-glass-bref-2013` |
| `boundary_gate` | 交付状态 | 边界止于工厂门口按声明的大片、定尺库存片及包装状态交付的验收合格未加工片材。 | `nga-flat-glass-pcr-2020`; `eurofloat-epd-2024` |
| `boundary_exclusions` | 下游产品及使用/寿命终结 | 排除钢化、半钢化、夹层、中空单元装配、镀银/制镜、离线/下游涂层、安装、使用和寿命终结；如纳入任何上述操作，应单独建模且不得改称为类别通用浮法玻璃生产。 | `unsd-cpc-3-0-explanatory-notes-2025`; `unsd-hs-7005`; `nga-flat-glass-pcr-2020` |
| `boundary_cutoff` | 省略的流 | 应追求完整质量与能量平衡。任何截断均须披露并论证；预期具有环境相关性的流不因质量小而省略。 | `nga-flat-glass-pcr-2020` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | batch_materials_and_cullet_received_at_float_glass_site |
| starting_condition_role | purchased_or_transferred_inputs_to_continuous_flat_glass_manufacture |
| product_classification_scope | CPC 3.0 `37113`，未加工片状浮法或表面磨光/抛光玻璃 |
| recursive_input_rule | 同类别玻璃投入应作为购入或转移的碎玻璃/片材投入保持可见，不得静默并入参考产出 |
| upstream_dataset_requirement | 购入材料、燃料、电力、水、气体和包装应链接至地理和技术适当的上游数据集 |
| disclosure | 声明产品组合、玻璃种类、厚度组合、涂层/磨抛路线、碎玻璃来源、熔窑与能源载体、场址、时期、边界门和纳入的包装 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `batch_preparation` | 配料与碎玻璃制备 | required |  | foreground | 送往熔化的制备配合料 |
| `melting_refining` | 熔窑熔化与澄清 | required |  | foreground | 送往成形的熔融玻璃 |
| `float_forming` | 锡槽浮法成形 | required |  | foreground | 离开锡槽的玻璃带 |
| `annealing` | 退火窑 | required |  | foreground | 进入检验的退火玻璃带 |
| `surface_finishing` | 表面磨光或抛光 | conditional | 仅对声明为表面磨光或抛光的产品纳入 | foreground | 送往检验/切割的表面处理玻璃带 |
| `online_coating` | 在线热玻璃带涂层 | conditional | 仅在声明边界内存在在线涂层时纳入 | foreground | 在线涂层玻璃带 |
| `inspection_cutting_packing` | 检验、切边、切割与包装 | required |  | foreground | 1,000 kg 验收合格且不含包装的片材产品 |

### 过程：配料与碎玻璃制备（`batch_preparation`）

#### 输入

##### 产品流

###### 原生配料材料（`virgin_batch_materials`）

将硅砂、纯碱、石灰石、白云石及所有少量配料分别记录为场址选定的产品流；保留组成和水分记录，不使用未声明的通用配合料。

- 选定流：场址选定的原生玻璃配料材料流，在成品数据集中每种材料一行
- 流属性/单位：质量 / kg
- 数量规则：按组分计入的干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 验收合格片材产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials`
- 来源：`eu-jrc-glass-bref-2013`

###### 内部与外部碎玻璃（`cullet_inputs`）

将内部回用碎玻璃、外部生产前碎玻璃和消费后碎玻璃分开记录。外部比例须有供应商或场址分类证据。

- 选定流：按来源拆分的场址选定玻璃碎料产品流
- 流属性/单位：质量 / kg
- 数量规则：按碎玻璃来源计入的干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干基总配合料投入及每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cullet_inputs`
- 来源：`nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`
- 数量范围：总碎玻璃入炉量的行业筛查范围，不是默认值或合格阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：0.40
  - 单位：kg/kg 配合料总投入
  - 基准：浮法熔窑碎玻璃总投入除以配合料总投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 制备配合料（`prepared_batch`）

混合配合料产出将实测组分与碎玻璃质量传递至熔化过程。

- 选定流：平板玻璃制备配合料
- 流属性/单位：质量 / kg
- 数量规则：由计入组分、保留的水分修正和制备损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品送往熔化的配合料
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_materials`
- 来源：

### 过程：熔窑熔化与澄清（`melting_refining`）

#### 输入

##### 产品流

###### 熔窑燃料（`furnace_fuels`）

按低位热值和实物量记录各燃料；声明全氧燃烧、空气燃烧、电助熔或其他熔窑配置。

- 选定流：场址选定的天然气、燃料油或其他熔窑燃料流
- 流属性/单位：能量 / MJ 低位热值，并保留实物单位
- 数量规则：按载体计量的燃料消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每吨熔融玻璃及每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 来源：`eu-jrc-glass-bref-2013`
- 数量范围：欧洲行业跨能源载体熔化能耗筛查范围，不是燃料专属值或默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5.2
  - 上限：8.7
  - 单位：GJ/t 熔融玻璃
  - 基准：熔窑熔化报告的总熔化能量投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-glass-bref-2013`

###### 购入电力（`melting_electricity`）

将电力与燃料分开记录，包括分配至本过程的电助熔和熔窑辅机；采用研究框架要求的供应商或剩余/电网组合。

- 选定流：场址及市场适当的电力供应流
- 流属性/单位：能量 / kWh
- 数量规则：分配至熔化澄清的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨熔融玻璃及每 1,000 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 来源：`nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 熔融澄清玻璃（`molten_refined_glass`）

根据熔窑生产与质量平衡记录，记录由熔窑送往锡槽的熔融玻璃。

- 选定流：熔融澄清平板玻璃
- 流属性/单位：质量 / kg
- 数量规则：计算由熔窑送往成形的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_furnace_mass_balance`
- 来源：

##### 基本流

###### 熔窑直接排放（`direct_furnace_emissions`）

将燃料和碳酸盐分解的二氧化碳，以及受监测的氮氧化物、硫氧化物、颗粒物和其他许可相关排放分别记录为基本流。

- 选定流：每种排放物质和环境介质对应的场址选定基本流
- 流属性/单位：质量 / kg
- 数量规则：按物质监测或计算的年度排放，并声明方法
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-glass-bref-2013`

### 过程：锡槽浮法成形（`float_forming`）

#### 输入

##### 产品流

###### 锡槽气体与补锡（`tin_bath_operating_inputs`）

记录实际用于维持锡槽气氛和设备的氮气、氢气、二氧化硫和补锡，不得假定这些投入为零。

- 选定流：场址选定的锡、氮气、氢气和二氧化硫供应流，在成品数据集中每种材料一行
- 流属性/单位：质量 / kg，或按声明条件换算的气体体积
- 数量规则：计量、购入或库存平衡用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每吨离开锡槽的玻璃带及每 1,000 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_materials`
- 来源：`eu-jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 浮法玻璃带（`float_glass_ribbon`）

玻璃带产出记录浮法成形后的实际质量和厚度分布。

- 选定流：浮法玻璃带
- 流属性/单位：质量 / kg
- 数量规则：计算或实测送往退火窑的玻璃带质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_ribbon_output`
- 来源：

### 过程：退火窑（`annealing`）

#### 输入

##### 产品流

###### 退火窑燃料与电力（`annealing_energy`）

按载体分别记录退火窑燃料和电力，使用仪表或共享公用工程的书面分配。

- 选定流：场址选定的退火窑燃料与电力供应流
- 流属性/单位：能量 / MJ 和 kWh
- 数量规则：按载体计量或书面分配的共享公用工程用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨退火玻璃带及每 1,000 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_carriers`
- 来源：`eu-jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 退火玻璃带（`annealed_ribbon`）

记录进入表面处理或检验的玻璃带质量，并保留厚度/产品组关联。

- 选定流：退火平板玻璃带
- 流属性/单位：质量 / kg
- 数量规则：计算或实测离开退火窑的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_ribbon_output`
- 来源：

### 过程：表面磨光或抛光（`surface_finishing`）

#### 输入

##### 产品流

###### 表面处理材料与公用工程（`surface_finishing_inputs`）

路线适用时，分别记录磨料、水、电力等消耗品，并声明处理表面和去除厚度。

- 选定流：场址选定的磨料、水和电力流
- 流属性/单位：质量 / kg，水 / m3，能量 / kWh
- 数量规则：归属于表面磨光或抛光的实测消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 表面处理产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditional_process_inputs`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

#### 输出

##### 产品流

###### 表面处理玻璃带（`surface_finished_ribbon`）

记录验收合格的磨光或抛光玻璃质量并送往检验/切割；声明单面或双面处理。

- 选定流：表面磨光或抛光玻璃带
- 流属性/单位：质量 / kg
- 数量规则：实测验收合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 表面处理参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditional_process_outputs`
- 来源：

### 过程：在线热玻璃带涂层（`online_coating`）

#### 输入

##### 产品流

###### 在线涂层前驱体与公用工程（`online_coating_inputs`）

存在在线涂层时，在本过程中记录前驱体化学组成、载气和能源。离线或后续涂层不在本 PCR 边界内。

- 选定流：场址选定的涂层前驱体、载气和公用工程流
- 流属性/单位：质量 / kg，能量 / kWh 或 MJ
- 数量规则：在线涂层的计量或平衡消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 在线涂层产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditional_process_inputs`
- 来源：`unsd-hs-7005`; `eu-jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 在线涂层玻璃带（`online_coated_ribbon`）

记录涂层玻璃带质量，并声明涂层化学组成/功能、涂覆面和质量验收；不得应用于未涂层生产。

- 选定流：在线涂层浮法玻璃带
- 流属性/单位：质量 / kg
- 数量规则：实测验收合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 在线涂层参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditional_process_outputs`
- 来源：

### 过程：检验、切边、切割与包装（`inspection_cutting_packing`）

#### 输入

##### 产品流

###### 包装材料与后处理电力（`packing_and_cutting_inputs`）

记录检验/切割电力及每种包装材料。包装作为投入保留，但不计入参考产品净质量。

- 选定流：场址选定的电力和包装材料流，在成品数据集中每种投入一行
- 流属性/单位：能量 / kWh，质量 / kg
- 数量规则：计量电力以及购入/领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_packing_inputs`
- 来源：`nga-flat-glass-pcr-2020`; `eurofloat-epd-2024`

#### 输出

##### 产品流

###### 验收合格片玻璃（`accepted_sheet_glass`）

这是检验和切割后的参考产品产出，不含包装质量。

- 选定流：浮法玻璃及表面经研磨或抛光的平板玻璃 `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- 流属性/单位：质量 / kg
- 数量规则：按声明尺寸和厚度汇总验收片材质量并归一化至 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 验收合格且不含包装的片材净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_accepted_sheet_output`
- 来源：

##### 废物流

###### 切边料、剔除品与破损（`cutting_cullet_and_rejects`）

计量切边、余料、质量剔除和破损。将内部回炉比例与外运碎玻璃及最终废物处理分开记录。

- 选定流：按去向选定的场址玻璃碎料或废物流
- 流属性/单位：质量 / kg
- 数量规则：按原因和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入检验/切割的玻璃带及每 1,000 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_yield`
- 来源：`nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013`
- 数量范围：可替换的宽幅切割良率临时筛查值，应由经评审的产品/场址证据替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.00
  - 单位：kg 验收片材/kg 退火玻璃带投入
  - 基准：验收合格不含包装片材除以进入检验/切割的玻璃带
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
  - 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 产品组、生产线和条件过程 | 首先通过仪表分离、生产线/生产期细分，以及在线涂层或表面处理的独立建模避免分配。 | `nga-flat-glass-pcr-2020` |
| `allocation_recycled_glass` | 内部与外部碎玻璃 | 场址内回用的内部切边和剔除料延续系统内已有负荷，不获得再生含量抵扣。外部碎玻璃采用所声明研究框架要求的再生材料约定，并披露来源及收集/处理负荷。 | `nga-flat-glass-pcr-2020` |
| `allocation_shared_energy` | 共用熔窑、公用工程与退火窑 | 用尽细分后，按反映因果关系的质量、能量需求或运行时间等书面物理关系分配共用质量/能源负荷。 | `nga-flat-glass-pcr-2020` |
| `allocation_coproducts` | 可销售共产品 | 若仍有具实质经济价值的共产品且无法建立物理因果关系，采用同期价格进行经济分配并披露敏感性结果。 | `nga-flat-glass-pcr-2020` |
| `allocation_no_avoided_burden` | 外运碎玻璃、热或副产品 | 除非所声明 LCA 框架明确要求系统扩展，不得在核心产品清单内扣除避免负荷；外运量和方法应单独报告。 | `nga-flat-glass-pcr-2020` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | batch_preparation | 原生配料与制备配合料 | 配料单和库存平衡 | 材料 id；供应商；湿质量；水分；干质量；配方；批次 id | 校准秤与库存平衡 | kg 干基 | 每批及每月平衡 | 代表性报告期，通常 12 个月 | 每条纳入的浮法线/场址 | 汇总各组分干质量并按验收产出归一化 | 秤校准；配料单；采购/库存记录 |
| `cp_cullet_inputs` | batch_preparation | 内外部碎玻璃 | 碎玻璃投料与来源记录 | 质量；内/外部；生产前/消费后；污染；供应商；批次 | 校准秤与来源文件 | kg 干基 | 每次投料或每批 | 与产出同期 | 每个纳入场址 | 按来源汇总并以干基总配合料计算比例 | 秤校准；供应商声明；内部回用台账 |
| `cp_energy_carriers` | melting_refining; annealing | 燃料与电力 | 仪表、账单和低位热值记录 | 载体；实物量；能量；仪表 id；过程归属；供应商/电网组合 | 校准仪表；账单平衡；共享仪表书面分配 | MJ LHV；kWh | 连续/每月 | 与产出同期 | 每座熔窑及纳入的公用工程 | 按载体汇总，细分后再分配 | 仪表校准；账单；分配工作表 |
| `cp_furnace_mass_balance` | melting_refining | 熔融澄清玻璃 | 熔窑生产平衡 | 配合料投入；碎玻璃；挥发估计；拉引量；转移质量；时期 | 生产控制与质量投入产出平衡 | kg | 班/日，每月平衡 | 与产出同期 | 每座熔窑 | 将熔窑拉引量与下游玻璃带及损失平衡 | 控制系统导出；签署的平衡表 |
| `cp_direct_emissions` | melting_refining | 熔窑直接排放 | 烟气监测和计算记录 | 物质；介质；浓度；烟气量；燃料/碳酸盐投入；方法；不确定度 | 连续/定期监测或书面质量/排放计算 | kg | 许可要求频率，按月汇总 | 与产出同期 | 每个纳入排口 | 按物质计算并按验收产出归一化 | 监测 QA/QC；实验室报告；计算文件 |
| `cp_process_materials` | float_forming | 锡槽运行投入 | 仪表和库存记录 | 材料；采购；期初/期末库存；补充；气体条件 | 仪表或库存平衡 | kg；注明条件的 Nm3 | 连续/每月 | 与产出同期 | 每个锡槽 | 按声明条件换算气体体积并按流汇总 | 仪表校准；库存平衡 |
| `cp_ribbon_output` | float_forming; annealing | 玻璃带产出 | 生产线记录 | 时间；宽度；长度；厚度；密度依据；质量；产品组 | 生产线传感器与地磅/产品记录平衡 | m2；mm；kg | 连续 | 与产出同期 | 每条纳入生产线 | 按组计算质量，并与验收产出和碎玻璃平衡 | 传感器校准；生产报表 |
| `cp_conditional_process_inputs` | surface_finishing; online_coating | 条件过程投入 | 仪表、配方和领料记录 | 产品组；材料；化学组成；数量；仪表；处理面积/质量 | 过程仪表和领料平衡 | kg；m3；kWh；MJ | 每生产期/每月 | 与条件产出同期 | 每个适用过程 | 仅汇总接受该操作的产品 | 配方；仪表校准；领料记录 |
| `cp_conditional_process_outputs` | surface_finishing; online_coating | 条件过程产出 | 生产与质量记录 | 投入质量；验收产出；剔除；处理面；去除厚度或涂层规范 | 生产系统和质量检验 | kg；m2；mm | 每批/生产期 | 与产出同期 | 每个适用过程 | 按所声明处理汇总验收产出 | 检验/试验报告；生产记录 |
| `cp_cutting_packing_inputs` | inspection_cutting_packing | 切割电力与包装 | 仪表和领料记录 | 电力；材料 id；领用质量；退库；产品组 | 分表或书面分配加库存平衡 | kWh；kg | 每月 | 与产出同期 | 每个切割/包装区 | 按投入汇总并按验收产出归一化 | 仪表数据；采购/库存平衡 |
| `cp_cutting_yield` | inspection_cutting_packing | 切边、剔除与破损 | 切割和剔除记录 | 玻璃带投入质量；验收质量；切边；剔除原因；破损；内部回用；外部去向 | 生产线质量/面积记录和校准秤 | kg | 班/批，每月平衡 | 与产出同期 | 每条纳入生产线 | 良率 = 验收质量/玻璃带投入；按去向平衡全部残差 | 秤/传感器校准；剔除与转移记录 |
| `cp_accepted_sheet_output` | inspection_cutting_packing | 验收参考产品 | 出货、包装与质量记录 | 产品组；玻璃种类；状态；厚度；尺寸；面积；净质量；包装质量；涂层；光学/铁结果 | 校准秤或与验收关联的经验证面积-厚度-密度计算 | kg；m2；mm | 每包/批 | 与投入同期 | 每个纳入的切割与包装区 | 按产品组汇总验收净质量；排除包装质量 | 校准；计算复核；试验证书；出货记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_mass` | 由几何量计算片材质量 | mass_kg = accepted_area_m2 × mean_thickness_m × density_kg_per_m3；中间值不提前取整 | cp_ribbon_output; cp_accepted_sheet_output | kg 片玻璃 | `en-572-1-2012` |
| `calc_cullet_fraction` | 碎玻璃含量 | 分来源碎玻璃比例 = 该来源干碎玻璃质量 / 干基配合料总投入；总碎玻璃为各来源比例之和 | cp_batch_materials; cp_cullet_inputs | kg/kg 干基配合料投入 | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `calc_cutting_yield` | 检验/切割良率 | 切割良率 = 验收合格不含包装片材净质量 / 进入检验切割的退火玻璃带质量 | cp_ribbon_output; cp_cutting_yield; cp_accepted_sheet_output | kg/kg 玻璃带投入 |  |
| `calc_reference_normalization` | 所有清单交换 | 归一化交换 = 报告期交换 × 1,000 kg / 报告期参考产品验收净质量 | 所有适用采集协议 | 每 1,000 kg 参考产品的交换 |  |
| `calc_mass_balance` | 各过程及完整前景系统 | 投入质量 = 产品产出 + 内部转移碎玻璃 + 外运废物 + 排放 + 书面库存变化；解释非实测残差 | 配料、熔窑、玻璃带、切割和产出记录 | 平衡后的质量账及残差 | `eu-jrc-glass-bref-2013` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_representativeness` | 前景时期和产品组合 | 使用代表稳定连续运行的时期，通常至少连续 12 个月；披露停产、窑炉重建、异常生产期及产品组合加权。 | 带日期的生产与运行记录 |
| `dq_primary_data` | 受控前景过程 | 对运行控制下的全部纳入过程使用场址一次数据，并按质量和能量报告覆盖率。 | 仪表、配料、生产记录及覆盖率计算 |
| `dq_identity` | 每个声明产品组 | 将普通/低铁/着色状态、磨光/抛光状态、涂层状态、厚度、尺寸和光学/铁证据链接至产出组。 | 规范、试验证书和生产主数据 |
| `dq_energy` | 熔窑、退火窑及辅机 | 燃料与电力分开，声明热值依据、电力组合和共享仪表分配；不得从行业总量推断燃料/电力拆分。 | 仪表/账单平衡及分配工作表 |
| `dq_mass_balance` | 配料至可销售片材 | 平衡干配料、碎玻璃、熔融/玻璃带转移、验收产出、内部回用、外运废物、排放与库存变化；调查实质残差。 | 签署的质量平衡工作表 |
| `dq_secondary_data` | 上游数据集 | 选择时间、地理和技术上有代表性的数据集，并记录替代项和数据年龄。 | 数据集登记表和数据质量评价 |
| `dq_reasoned_estimate` | 临时切割良率 QA 范围 | 0.80–1.00 范围仅作为可替换的作者筛查值；不是默认清单值，也不是性能、法律或合格阈值。 | 明确的估计标签及替换评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 产品应对应 CPC 3.0 37113，并声明玻璃种类、适用表面状态、厚度、尺寸、交付状态及在线涂层状态。 | `unsd-cpc-3-0-explanatory-notes-2025`; `unsd-hs-7005` |
| `validate_reference_flow` | 参考流 | 验收合格不含包装净产出等于 1,000 kg，并使用产品流 `1b43024e-16ea-42d2-830d-329c4a2abc3d`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200b9a66` 和 kg。 |  |
| `validate_area_mass` | 几何换算 | 每次面积到质量换算均声明面积、厚度和密度；2,500 kg/m3 仅限作为已披露的 EN 572-1 钠钙硅玻璃约定计算值。 | `en-572-1-2012` |
| `validate_optical_iron` | 产品限定信息 | 铁含量或适用的透光性能证据应为产品组特定，并声明试验/规范方法；不得推断类别通用值。 | `en-572-1-2012` |
| `validate_cullet` | 碎玻璃声明 | 内部、外部生产前和消费后碎玻璃质量及比例应分开报告，并与干基配合料总投入平衡。 | `nga-flat-glass-pcr-2020`; `eu-jrc-glass-bref-2013` |
| `validate_processes` | 过程图 | 应包含熔化/燃料/电力、锡槽、退火和检验/切割；表面处理和在线涂层仅在适用时纳入并保持独立可见。 | `eu-jrc-glass-bref-2013` |
| `validate_yield` | 切割与质量平衡 | 玻璃带投入、验收产出、内部回用、外运废物和库存变化应平衡并报告切割良率；超出推理估计筛查范围只触发复核，不自动判定不合格。 |  |
| `validate_exclusions` | 范围保护 | 钢化、夹层、中空单元装配、镜面、离线涂层和下游加工应排除或作为明确独立的下游过程建模；不得将光伏盖板玻璃外推至整个类别。 | `unsd-hs-7005`; `nga-flat-glass-pcr-2020` |
| `validate_sources` | 证据与估计 | 每个来源 ID 均应在数据源表中解析，场址测量应保留质量证据，任何推理估计均应标为临时且可替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_unit_process_or_aggregated_cradle_to_gate_process |
| downstream_use | 当产品限定信息匹配时，可作为光伏组件盖板、建筑围护及汽车玻璃研究的上游材料数据集 |
| allowed_use | 与玻璃种类、厚度、光学/铁规范、在线涂层状态、地理、技术、时期和工厂门口相匹配的 CPC 37113 未加工片玻璃 |
| excluded_use | 在没有新增特定过程与证据时，直接代表钢化、夹层、中空、镜面、离线涂层、深加工或单一用途光伏玻璃 |
| required_metadata | 参考 UUID；CPC 代码；玻璃种类；表面状态；厚度/面积/质量依据；密度依据；铁或光学规范；在线涂层；按来源碎玻璃比例；熔窑与能源载体；锡槽；退火；切割良率；交付与包装状态；地理；时期；分配；边界 |
| required_quality_disclosure | 一次数据覆盖；仪表/校准证据；质量与能量平衡；产品组合加权；上游数据集选择；截断；分配；估计替代；数据质量评价 |
| update_trigger | 熔窑重建或燃料切换；电力组合实质变化；配方或碎玻璃来源变化；涂层/磨抛路线变化；产品组合或厚度变化；边界/分配变化；报告数据超出所声明有效期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问于 2026-08-08） | CPC 37113 权威身份及其与相邻玻璃产品子类的区分 |
| `unsd-hs-7005` | official_guidance | 联合国统计司，HS 2017 品目 7005 详情，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2089/7005（访问于 2026-08-08） | 未加工片材范围及条件性的吸收、反射或非反射层背景 |
| `nga-flat-glass-pcr-2020` | standard | National Glass Association 与 NSF International，Product Category Rule for Environmental Product Declarations: NGA PCR for Flat Glass，Version 2.0，2020-09，https://www.glass.org/sites/default/files/2021-10/pcr_flat_glass_2020.pdf（访问于 2026-08-08；已于 2025-09-30 失效） | 声明质量、边界、截断、分配、碎玻璃和一次数据规则的历史类别方法证据；不作为现行合格声明依据 |
| `environdec-cpcr-009-flat-glass` | official_guidance | International EPD System，c-PCR-009 Flat glass products，有效至 2030-04-07，https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-009（访问于 2026-08-08） | 当前平板玻璃 PCR 格局，以及 EPD 声明应采用适用且更具体的方案规则 |
| `eu-jrc-glass-bref-2013` | official_guidance | European Commission JRC/EIPPCB，Best Available Techniques Reference Document for the Manufacture of Glass，2013，https://op.europa.eu/en/publication-detail/-/publication/ff8a3955-d0d0-46f5-8a15-4b638896cb56（访问于 2026-08-08） | 浮法过程分解、材料、碎玻璃、能源、排放、锡槽、退火及行业 QA 范围 |
| `en-572-1-2012` | standard | EN 572-1:2012，Glass in building — Basic soda lime silicate glass products — Part 1，公开预览 https://cdn.standards.iteh.ai/samples/37400/fe7c33b74a5747198946b44e88108b42/SIST-EN-572-1-2012.pdf（访问于 2026-08-08） | 浮法玻璃定义、2,500 kg/m3 约定计算密度及光学性能试验背景 |
| `eurofloat-epd-2024` | dataset | Glas Trösch / IBU，Environmental Product Declaration: Float glass in construction EUROFLOAT，2024，https://www.euroglas.com/fileadmin/user_upload/Service/Nachweise_und_Zertifikate/Umwelt_und_Qualitaetszertifikate/Float_glass_in_construction_EUROFLOAT.pdf（访问于 2026-08-08） | 配料—熔窑—锡槽—退火—检验/切割路线和交付状态的制造商特定佐证；不提供类别通用默认值 |
| `vitro-flat-glass-epd-2024` | dataset | Vitro Architectural Glass，Environmental Product Declaration: Flat Glass Products，2024，https://www.vitroglazings.com/media/nf0nm25r/vitro-epd-flat-glass-products.pdf（访问于 2026-08-08） | 无色、低铁和着色品种及过程顺序的制造商特定佐证；不提供类别通用默认值 |
