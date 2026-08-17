---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-more-than-200-g-m2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含棉 85% 及以上且克重超过 200 g/m² 的棉机织物

## 1. 范围与适用性

本 PCR 适用于纺织纤维组成中棉的质量分数不低于 85%，且声明单位面积质量大于 200 g/m² 的机织物。坯布、漂白、染色、印花、丝光、涂层或其他整理品种，仅在棉含量和单位面积质量仍满足本产品类别边界且明确披露加工路线时纳入。

前景边界从接收富棉纱线开始，到可销售机织物离开制造工厂为止。纳入纱线准备、使用时的经纱上浆、织造、检验和包装；对于声明产品实际实施的退浆、精练、漂白、丝光、染色、印花、整理、热处理和场内废水处理也必须纳入。棉花种植、轧花、纺纱、外购化学品和能源载体生产、进出厂运输、成衣制造、使用及寿命终结位于前景边界之外，相关时应由独立上下游数据集表示。

不包括棉含量低于 85% 的织物、单位面积质量不超过 200 g/m² 的织物、针织物或簇绒织物、窄幅织物、由其他产品类别管辖的毛圈或起绒织物、非织造材料、纱线和成衣。数据集必须声明市场状态为坯布还是湿法整理品；如无有据可查的产量加权生产组合，不得把两条路线平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-more-than-200-g-m2 |
| classification_refs | CPC 3.0：26620（精确范围参考） |
| covered_products | 棉质量分数不低于 85% 且单位面积质量大于 200 g/m² 的棉或富棉机织物，包括已声明的坯布和整理品种 |
| excluded_products | 棉含量低于 85% 的织物；单位面积质量不超过 200 g/m² 的织物；针织、簇绒、非织造、窄幅、毛圈或起绒织物；纱线和成衣 |
| representative_product | 工厂生产混合的可销售重型富棉机织物，并声明棉含量、单位面积质量、织物组织、幅宽和整理状态 |
| production_route | 接收纱线的准备与可选上浆；织造；条件性湿法前处理、着色与整理；检验与包装 |
| market_state | 制造工厂门口的坯布或整理织物；必须声明路线和处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造工厂门口交付的富棉重型机织物 |
| How much | 1 kg 净可销售织物 |
| How well | 棉质量分数不低于 85%、单位面积质量大于 200 g/m²，并声明织物组织、幅宽、颜色和整理状态 |
| How long or cycle | 工厂门口的一个制造批次；该中间产品不规定使用寿命 |
| reference_flow_link | ref_woven_cotton_fabric |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing more than 200 g/m2 `75725731-1147-4cf5-9d98-b66c539076dc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉质量分数；单位为 g/m² 的单位面积质量；织物组织；可用幅宽；坯布/漂白/染色/印花/整理状态；浆料化学品及回收状态；湿法加工路线；水分或调湿状态；如有再生棉则声明其份额；场址和生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的调湿或含水状态报告 1 kg 净可销售织物；参考数量不包括托盘和运输包装。 |
| `areal_density_threshold` | 产品类别识别 | 单位面积质量 | g/m2 | 使用有代表性的调湿试样或等效的受控工厂方法测定单位面积质量并保留试验记录；批次平均值必须大于 200 g/m²。 |
| `cotton_content_threshold` | 产品类别识别 | 棉质量分数 | 质量百分比 | 使用供应商成分证据并以有代表性的定量纤维分析支持；纺织纤维中棉的质量分数必须不低于 85%。记录方法、取样基础、结果和适用公差。 |
| `area_conversion` | 补充面积结果 | 质量和单位面积质量 | m2 | 对声明克重 G（g/m²），每 kg 参考流所代表面积按 1000/G m² 计算。不得用面积替代质量参考流。 |
| `normalization_consistency` | 所有清单行 | 行特定属性 | 行特定单位 | 使用相同的净可销售产出质量和生产期，把每个采集量换算到 1 kg 参考流；披露水分修正，不得暗中混用湿基与干基质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的富棉经纱和纬纱；对于仅整理场址，也可为已披露的同类别坯布投入；必须记录质量、棉含量、水分状态、来源和上浆状态 |
| starting_condition_role | 前景制造投入；上游棉花种植、轧花、纺纱和外购物生产由链接的上游数据集表示 |
| product_classification_scope | 棉质量分数不低于 85% 且单位面积质量大于 200 g/m² 的机织物；不同路线的坯布和整理品种继续分别声明 |
| recursive_input_rule | 当同类别织物作为整理投入时，把它记录为带上游数据集的产品投入，不在当前前景数据包中递归重建已完成的织造阶段 |
| upstream_dataset_requirement | 为接收的纱线或织物、电力、燃料或蒸汽、供水、工艺化学品、包装、范围内运输和场外废物或废水处理链接有代表性的数据集 |
| disclosure | 声明场址边界、纳入工序、坯布或整理市场状态、湿法加工和废水处理路线、外包工序、分配选择、截断与数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_process_inclusion` | 前景制造 | 纳入纱线准备、使用时的上浆、织造、检验和包装；对于声明产品实际执行的前处理、着色、整理、热处理和场内废水处理也必须纳入。 | `eu-textiles-bat-2022` |
| `boundary_same_category_input` | 仅整理或受托加工场址 | 把接收的同类别坯布作为已披露且带上游数据集的产品投入；不得重复计算上游织造。 | `eu-pef-method-2021` |
| `boundary_cutoff` | 物料、能源、废物和排放流 | 避免截断。任何排除都必须量化、论证并披露，不得隐藏危险化学品、受监管排放或决定路线的工序；PEF 的累计 3% 上限是最高限制，不是自动排除规则。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_sizing` | 纱线准备与经纱上浆 | required | 仅在实施上浆时记录浆料投入及相关用水或残余物 | 前景准备 | 每 kg 转入织造的准备纱线，并归一到 1 kg 可销售织物 |
| `weaving` | 织造 | required | 始终纳入 | 前景织物成形 | 每 kg 坯机织物，并归一到 1 kg 可销售织物 |
| `wet_processing_and_finishing` | 湿法前处理、着色、整理与热处理 | conditional | 纳入声明市场状态实际实施的各工序；只有有据可查的坯布路线才可省略 | 前景湿法和热法加工 | 每 kg 受处理纺织物，并归一到 1 kg 可销售织物 |
| `inspection_and_packaging` | 检验、修剪与包装 | required | 始终纳入 | 前景最终处理 | 每 1 kg 净可销售织物 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 废水在报告场址内处理时纳入 | 前景处理 | 每 m³ 处理废水，并归一到 1 kg 可销售织物 |

### 过程：纱线准备与经纱上浆（`yarn_preparation_and_sizing`）

#### 输入

##### 产品流

###### 接收的富棉经纱和纬纱（`received_cotton_rich_yarn`）

记录跨入纱线准备过程的外购或内部转移纱线。供应商和批次记录必须识别纤维组成、纱支、质量、水分状态和上游数据集。

- 选定流：棉含量不低于 85% 的棉或富棉纱线
- 流属性/单位：Mass / kg
- 数量规则：发放到生产批次的实测纱线量，扣除退回的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：
- 数量范围：暂定纱线投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.30
  - 单位：kg/kg 可销售织物
  - 基准：每 1 kg 净可销售机织物的接收纱线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 上浆配方（`sizing_formulations`）

实施经纱上浆时，记录每种淀粉、聚合物、润滑剂、润湿剂及其他浆料，并保留产品身份和安全信息。

- 选定流：经纱上浆化学品
- 流属性/单位：Mass / kg
- 数量规则：批次发料量减去有记录的退回或回收浆料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 上浆经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定浆料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 上浆经纱
  - 基准：每 kg 上浆经纱施加的配方总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纱线准备和上浆用电（`preparation_sizing_electricity`）

记录络筒、整经、上浆、通风和可直接归属辅助设备的计量或有分配依据的电力。

- 选定流：场址供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或按设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转入织造的准备纱线
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定准备工序能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.50
  - 单位：kWh/kg 准备纱线
  - 基准：每 kg 转入织造的准备纱线用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 浆液配制补水（`sizing_water`）

实施上浆时记录可归属于浆液配制和清洗的用水，并扣除返回同一工序的内部循环水。

- 选定流：工艺用水
- 流属性/单位：Volume / m3
- 数量规则：计量进水减去经验证返回同一工序的内部回用水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 上浆经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定上浆用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg 上浆经纱
  - 基准：每 1,000 kg 上浆经纱的净补水和清洗水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入织造的准备经纬纱（`prepared_yarn_output`）

记录转入织造的实测质量，并与接收纱线、添加浆料固体、退料、残余物和损失核对。

- 选定流：准备经纱和纬纱
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`mass-balance-identity`
- 数量范围：准备纱线质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.35
  - 单位：kg/kg 可销售织物
  - 基准：每 kg 净可销售织物转移的准备纱线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 上浆残余物与上浆废水（`sizing_residues_wastewater`）

记录离开上浆过程的残余浆料、清洗液和废水；记录允许时按去向分开。

- 选定流：上浆残余物或上浆废水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：实测排放，或按处理去向计算的水与固体平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 上浆经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-textiles-bat-2022`; `mass-balance-identity`
- 数量范围：暂定上浆残余物和废水校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg 上浆经纱
  - 基准：每 1,000 kg 上浆经纱的液体当量排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 准备经纱和纬纱（`weaving_yarn_input`）

记录进入织机的准备纱线，并与坯布、可复用退料、纱线废物、粉尘和库存变化核对。

- 选定流：准备经纱和纬纱
- 流属性/单位：Mass / kg
- 数量规则：织机发料实测量，按退纱和在制品变化修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 坯机织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`mass-balance-identity`
- 数量范围：暂定织造纱线筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.98
  - 上限：1.20
  - 单位：kg/kg 坯布
  - 基准：每 kg 坯机织物产出的准备纱线消耗
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 织造和压缩空气发电用电（`weaving_electricity`）

记录织机及可归属的压缩空气、调湿、通风和物料搬运用电。必须披露喷气压力和织机类型。

- 选定流：场址供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量电量或计算的设备份额，使用压缩空气时包括其发电用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 坯机织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定织造能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：3.00
  - 单位：kWh/kg 坯布
  - 基准：每 kg 坯机织物的电力，含可归属压缩空气发电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯机织物（`greige_fabric_output`）

记录转入整理或最终检验时坯布的质量、长度、幅宽、单位面积质量、织物组织和水分状态。

- 选定流：克重大于 200 g/m² 的富棉坯机织物
- 流属性/单位：Mass / kg
- 数量规则：实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specification`
- 来源：`mass-balance-identity`
- 数量范围：暂定坯布转移范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.20
  - 单位：kg/kg 可销售织物
  - 基准：每 kg 最终可销售织物转移的坯布
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 织造纱线和织物次品（`weaving_rejects`）

按回收或处置去向记录织机废料、布边、开机料、断纱废物和不合格坯布。

- 选定流：富棉纺织生产废物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物，扣除有记录的内部复用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 坯机织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`mass-balance-identity`
- 数量范围：暂定织造次品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 坯布
  - 基准：每 kg 坯机织物的织造次品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 经治理后释放的织造粉尘（`weaving_dust_emission`）

织物粉尘跨越场址到空气边界时记录其释放量；收集的粉尘另作为废物记录。

- 选定流：排入空气的纺织粉尘
- 流属性/单位：Mass / kg
- 数量规则：排气测量，或按有记录的收集效率计算治理后释放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 坯机织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定释放粉尘筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 坯布
  - 基准：每 kg 坯机织物产出的释放纺织粉尘
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：湿法前处理、着色、整理与热处理（`wet_processing_and_finishing`）

#### 输入

##### 产品流

###### 送入湿法加工的坯布（`greige_fabric_wet_input`）

记录进入每条湿法或整理路线的织物质量和处理状态。有据可查的坯布市场产品不纳入本过程。

- 选定流：克重大于 200 g/m² 的富棉坯机织物
- 流属性/单位：Mass / kg
- 数量规则：按路线和批次实测受处理纺织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-textiles-bat-2022`

###### 退浆、精练与漂白联合前处理用水（`pretreatment_water`）

分别记录新鲜水和回用水，并报告纤维素材料联合前处理路线的净比用水量。

- 选定流：工艺用水
- 流属性/单位：Volume / m3
- 数量规则：工艺、洗涤、漂洗和设备清洗进水减去经验证返回该工序的回用或循环水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 联合前处理纺织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-textiles-bat-2022`
- 数量范围：BAT 联合前处理指示用水范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：9
  - 上限：20
  - 单位：m3/1,000 kg 受处理纺织物
  - 基准：纤维素材料的漂白、精练和退浆联合工序
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`

###### 织物染色用水（`dyeing_water`）

按间歇或连续路线记录染色、洗涤、漂洗和清洗用水，扣除经验证的回用或循环水。场内不染色时省略。

- 选定流：工艺用水
- 流属性/单位：Volume / m3
- 数量规则：工艺进水减去经验证返回染色工序的回用或循环水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 染色织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-textiles-bat-2022`
- 数量范围：连续与间歇路线的 BAT 织物染色指示用水跨度
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：150
  - 单位：m3/1,000 kg 染色织物
  - 基准：每 1,000 kg 染色织物的路线特定净用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`

###### 湿法加工和整理化学品（`wet_process_chemicals`）

记录每种退浆、精练、漂白、丝光、染色、印花、涂层、柔软或整理配方，并记录适用的危险物质分类和留着固体。

- 选定流：纺织湿法加工和整理化学品
- 流属性/单位：Mass / kg
- 数量规则：批次发料量减去有记录的退回、回收和复用量，按配方分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经适用工序处理的纺织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_inventory`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定化学品总投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 受处理纺织物
  - 基准：每 kg 受处理纺织物使用的原配方总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法与热法加工的热量和电力（`wet_thermal_energy`）

分别记录外购燃料、蒸汽、热量和电力。对于热处理，按所引 BAT 指标一致的方式把回收热记录为独立内部流或透明扣减项。

- 选定流：场址特定的热量、蒸汽、燃料和电力供应
- 流属性/单位：Energy / kWh
- 数量规则：按工序计量或有分配依据的净能量，并保留能源载体和回收信息
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经热处理的纺织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：BAT 热处理指示能耗范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：4.4
  - 单位：kWh/kg 热处理纺织物
  - 基准：每 kg 受处理纺织物的热处理净热量和电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后的富棉机织物（`finished_fabric_output`）

记录转入检验时的质量、长度、幅宽、单位面积质量、棉含量、水分状态、颜色和整理。

- 选定流：克重大于 200 g/m² 的整理富棉机织物
- 流属性/单位：Mass / kg
- 数量规则：声明湿法和热法路线后的实测合格产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_specification`
- 来源：`mass-balance-identity`

##### 废物流

###### 湿法工艺废水和废液（`wet_process_wastewater`）

按工序和处理去向分别记录废水与浓缩废液。适用时保留水量、COD 或 TOC、有关氮磷、金属、盐和危险物质记录。

- 选定流：纺织工艺废水或废液
- 流属性/单位：Volume / m3
- 数量规则：计量排水量，并按库存变化、织物留水、蒸发、回用和外运浓缩液修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`; `mass-balance-identity`
- 数量范围：暂定联合湿法路线废水校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：170
  - 单位：m3/1,000 kg 可销售织物
  - 基准：处理前的联合前处理和染色排水，按回用和留着修正
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法工艺残余物和不合格织物（`wet_process_residues`）

按去向分别记录回收浆料、过滤残余物、带残留的化学品容器、过程内产生的污泥和不合格织物。

- 选定流：纺织湿法工艺残余物
- 流属性/单位：Mass / kg
- 数量规则：实测废物外运量或按废物类型和去向核实的内部质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定湿法工艺残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 可销售织物
  - 基准：每 kg 可销售织物的湿法固体残余物和不合格织物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 烧毛、干燥、热定形和整理的直接大气排放（`wet_process_air_emissions`）

对适用工序记录经治理后每种污染物的释放质量，包括粉尘和有机物。不得把不同污染物合并为一个清单量。

- 选定流：排入空气的各污染物
- 流属性/单位：Mass / kg
- 数量规则：每种污染物的实测质量流，或排放因子乘活动量并扣除有记录的治理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经排放工序处理的纺织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定污染物特定大气排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 污染物/kg 受处理纺织物
  - 基准：治理后每种污染物分别按每 kg 受处理纺织物报告
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：检验、修剪与包装（`inspection_and_packaging`）

#### 输入

##### 产品流

###### 进入最终检验的织物（`fabric_inspection_input`）

记录进入最终检验的坯布或整理织物质量和路线状态。

- 选定流：最终检验前克重大于 200 g/m² 的富棉机织物
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量，并按在制品变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`mass-balance-identity`

###### 初级和运输包装（`packaging_input`）

按材料和复用状态分别记录卷芯、包覆物、标签、捆扎带、纸箱和托盘。

- 选定流：按类型区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：可销售生产发放的包装，扣除留在系统内并有记录的可复用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 可销售织物
  - 基准：每 kg 净可销售织物发放的不可复用包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 检验和包装用电（`inspection_packaging_electricity`）

记录可直接归属于验布机、修剪、打卷、包装和场内搬运的电力。

- 选定流：场址供电组合
- 流属性/单位：Energy / kWh
- 数量规则：计量电量或设备功率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定最终处理能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kWh/kg 可销售织物
  - 基准：每 kg 净可销售织物的检验和包装用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售富棉机织物参考产品（`saleable_fabric_reference_output`）

这是最终质量检查后的定量参考产出。记录不含托盘和运输包装的净织物质量。

- 选定流：Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing more than 200 g/m2 `75725731-1147-4cf5-9d98-b66c539076dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明调湿状态计的 1 kg 净可销售织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：一个 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 修剪料、边角料和最终次品（`inspection_rejects`）

按内部复用、回收、能量回收、处理或处置去向分别记录边角料和不合格卷或片。

- 选定流：富棉织物生产废物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测次品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`mass-balance-identity`
- 数量范围：暂定检验次品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 可销售织物
  - 基准：每 kg 净可销售机织物的最终次品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理化学品和电力（`wastewater_treatment_inputs`）

把处理化学品和电力与湿法加工投入分开记录，并通过处理废水体积归一。

- 选定流：按类型区分的废水处理化学品和电力
- 流属性/单位：Mass or energy / kg or kWh
- 数量规则：可归属于纺织废水处理的计量或发放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理的纺织废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定处理投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/m3 处理废水
  - 基准：能量当量筛选值；实际化学品和电力仍为独立流
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 进入场内处理的纺织废水（`wastewater_treatment_influent`）

按来源工序记录进水体积和污染物负荷，并与湿法工艺废水产出核对。

- 选定流：纺织工艺废水
- 流属性/单位：Volume / m3
- 数量规则：计量进水体积及每种污染物进水负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

记录污泥干湿质量、含水率、危险分类和处理去向。

- 选定流：纺织废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：实测污泥外运量，转换到已声明的干固体或湿质量基准且不混用两者
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：暂定废水污泥筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg 干固体/kg 可销售织物
  - 基准：每 kg 净可销售织物的废水处理污泥干固体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理后废水和残余污染物排放（`treated_wastewater_release`）

记录受纳环境、出水体积及各污染物质量排放。不得用废水体积替代污染物负荷。

- 选定流：排入水体的水和各污染物
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：实测出水体积，以及污染物浓度乘以匹配的排水体积和时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售机织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-textiles-bat-2022`; `mass-balance-identity`
- 数量范围：水量质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.2
  - 单位：m3/m3 废水进水
  - 基准：每 m3 废水进水的处理后出水体积；污染物负荷另行校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享过程和设施 | 首先通过分项避免分配，使用计量表、批次记录、机器小时、处理质量和可归属于产品路线的污染物负荷；只有附加功能和模型明确时才可使用系统扩展。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法分项的共享投入和产出 | 使用相关物理关系：工艺公用工程优先用受处理纺织物质量，能源系统用计量能量，废水处理用水量和污染物负荷；只有占用时间能表示资源使用时才使用时间。 | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | 缺乏合理物理关系的可销售共产品 | 只有在记录分项、系统扩展和物理分配均不可行后才使用经济分配；使用共产品产生点的价格，并披露期间、币种和敏感性。 | `eu-pef-method-2021` |
| `allocation_waste_recovery` | 纺织边角料、回收浆料、污泥和回收材料 | 记录处理或回收路线及收入；除非声明独立且一致建模的替代或循环方法，否则本门到门数据集不计避免负荷。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | yarn preparation, weaving, wet processing, inspection | 纱线、织物、残余物和次品 | 地磅、台秤、仓库发料、生产和废物记录 | 批次 id；投入质量；产出质量；退料质量；废物质量；水分状态；去向 | 经校准称量与核对后的生产记录 | kg | 每批次或班次；每月核对 | 至少连续 12 个代表性月份，较短活动使用完整生产期 | 所有纳入的生产线和外包前景工序 | 按产品路线求和，修正库存变化，再除以净可销售织物质量 | 校准记录；签字核对；无法解释的质量平衡差异 |
| `cp_energy_records` | all foreground processes | 电力、燃料、蒸汽、热量和压缩空气 | 公用工程表计、发票、燃料交付和设备记录 | 表计 id；期初期末读数；燃料质量或体积；蒸汽或热量；运行时间；分配因子；回收热 | 优先专用表计，否则用设备功率和运行时间计算并分配共享服务 | 按载体使用 kWh、MJ、kg 或 m3 | 连续或每结算期；每月分配 | 至少连续 12 个代表性月份或完整生产期 | 所有纳入设备及可归属公用工程 | 保留能源载体，只扣除经验证的外送或回收能量，并按匹配产出归一 | 表计校准；发票；设备日志；分配工作表 |
| `cp_water_balance` | sizing and wet processing | 进水、回用、循环、留水和排水 | 水表和批次记录 | 表计读数；批次体积；回用水；冷凝水；蒸发估计；清洗水；处理质量 | 带路线批次记录的计量工艺水衡算 | m3 | 可得时每批次；至少每月平衡 | 至少连续 12 个代表性月份或完整生产期 | 所有纳入用水工序 | 新鲜进水减去经验证的同工序回用，按受处理纺织物质量归一 | 表计检查；流程图；水量平衡闭合 |
| `cp_chemical_inventory` | sizing and wet processing | 浆料、染料、助剂和整理配方 | 仓库发料、配方、SDS 和批次记录 | 产品 id；供应商；批次；发料质量；退回质量；浓度；活性含量；危险分类；回收 | 仓库发料记录与配方和批次单核对 | 原配方 kg，适用时为活性物 kg | 每批次 | 至少连续 12 个代表性月份或完整生产期 | 所有纳入化学品使用工序 | 每种配方净发料量除以匹配的纺织物质量 | 采购记录；SDS；配方；批次签字 |
| `cp_product_specification` | weaving, wet processing, inspection | 织物身份和参考产出 | 实验室试验、生产和放行记录 | 批次 id；棉含量；试验方法；单位面积质量；幅宽；长度；组织；颜色；整理；水分状态；净质量 | 有代表性的实验室或受控工厂试验与经校准最终称量 | %、g/m2、m、kg | 每批次或有统计依据的批组 | 完整声明生产期 | 数据集中所有参考产品变体 | 按产量质量加权；平均前保留路线特定结果 | 试验报告；取样方案；仪器校准；放行证书 |
| `cp_packaging_records` | inspection and packaging | 按材料和复用状态区分的包装 | 仓库发料、退回和部件质量记录 | 材料类型；发放质量；退回可复用件；包装产品质量 | 仓库发退料记录及代表性部件称量 | kg | 每批次或每月核对 | 至少连续 12 个代表性月份或完整生产期 | 参考产品发运包装 | 不可复用包装净量除以净织物质量 | 物料清单；称量记录；复用台账 |
| `cp_wastewater_records` | wet processing and on-site treatment | 废水、进水、出水、污泥和处理投入 | 流量计、实验室、处理和外运记录 | 体积；取样时间；pH；温度；COD 或 TOC；TSS；氮；磷；金属；相关物质；污泥质量和含水率；去向 | 适用时流量比例混合取样、经校准流量计和外运记录 | m3、mg/L、kg、固体百分比 | 连续流量；按许可或风险确定取样频次 | 与产品清单相同期间 | 所有纳入排水口和处理单元 | 浓度与匹配的排水量和时间相乘，计算污染物负荷并按产品质量归一 | 实验室资质；样品流转；表计校准；许可报告 |
| `cp_direct_emissions` | weaving, wet processing, wastewater treatment | 释放粉尘、有机物、燃烧和水污染物 | 废气或废水试验、监测和运行记录 | 排放源 id；流量或排气量；浓度；取样时长；治理状态；运行时间；排水量 | 优先直接测量，无法测量时才使用有记录的因子计算 | kg、mg/Nm3、mg/L、Nm3/h、m3 | 按许可、BAT 或风险频次 | 与产品清单相同期间 | 纳入工序的每个重要排放点 | 每种污染物质量流乘匹配运行时间或排水量 | 有资质试验；方法；检出限；治理日志；计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景量 | 归一化量 = 匹配期间流量 / 匹配期间净可销售织物质量 | 流量；净可销售织物质量；库存变化 | 每 1 kg 参考流的数量 | `mass-balance-identity` |
| `calc_area_from_mass` | 补充织物面积 | 面积 m2/kg = 1000 / 单位面积质量 g/m2 | 调湿后的批次平均单位面积质量 | 1 kg 参考流代表的 m2 | `un-cpc-3-0-26620` |
| `calc_material_balance` | 纱线、织物、化学品和废物 | 核对投入 + 期初库存 = 产出 + 期末库存 + 废物 + 实测排放；披露无法解释的差异 | 批次和库存质量 | 路线质量平衡闭合 | `mass-balance-identity` |
| `calc_net_water` | 上浆和湿法加工 | 净工艺水 = 进水 + 外部带入工艺水 - 外送水或经验证返回同一工序的回用/循环水 | 水表；回用和循环记录 | 每 1,000 kg 受处理纺织物及每 kg 参考流的 m3 | `eu-textiles-bat-2022` |
| `calc_pollutant_load` | 废水和废气排放 | 污染物负荷 = 匹配浓度 × 匹配流量体积，并记录单位换算和取样代表性 | 浓度；体积或气体流量；运行时间 | 每 kg 参考流的污染物 kg | `eu-textiles-bat-2022` |
| `calc_shared_utility` | 共享能源和公用工程 | 直接计量后只对剩余共享量分配，并使用能表示因果关系的已披露物理因子 | 共享总量；直接计量量；各产品路线因子 | 每 kg 参考流的分配公用工程量 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 每个纳入批次必须证明棉含量不低于 85%、单位面积质量大于 200 g/m²，并声明路线、幅宽、组织、水分状态和整理。 | 供应商成分记录；代表性纤维分析报告；克重试验；放行证书 |
| `dq_temporal` | 前景活动数据 | 连续生产至少使用有代表性的连续 12 个月；季节性或批次生产使用完整活动期；解释异常停机和产品组合变化。 | 带日期表计、生产日志、发票和生产期记录 |
| `dq_completeness` | 清单 | 核对物料、水、能源、废物、废水和直接排放记录；披露缺失表计、排除工序、外包阶段和所有截断。 | 平衡表；边界图；数据缺口登记；截断论证 |
| `dq_representativeness` | 技术和地理 | 描述织机技术、上浆路线、湿法设备、废水处理、能源供应、场址位置和生产组合；未经复核不得将数据集用于实质不同路线。 | 设备清单；路线份额；场址元数据；上游数据集选择记录 |
| `dq_precision` | 测量和计算 | 保留校准、取样、检出限、水分修正和分配记录；量化物料流和重要公用工程的变异或不确定性。 | 校准证书；取样方案；实验室报告；计算工作表 |
| `dq_source_traceability` | 外部和次级数据 | 记录来源身份、版本或发布日期、网页来源检索日期、用途和代理限制。 | 来源登记及链接的清单行或规则 id |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | 参考产品 | 棉含量低于 85%、单位面积质量不大于 200 g/m²、流 UUID 与声明参考产品不同，或缺少必需路线和状态限定信息时校验失败。 | `un-cpc-3-0-26620`; `eu-textile-fibre-regulation-1007-2011` |
| `validate_reference_unit` | 参考流 | 必须使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；拒绝仅面积参考量。 | `eu-pef-method-2021` |
| `validate_route_boundary` | 过程覆盖 | 必须纳入纱线准备、织造、检验和包装；必须纳入实际实施的每个湿法、热法和场内处理步骤；拒绝未披露地平均坯布和湿法整理路线。 | `eu-textiles-bat-2022` |
| `validate_mass_balance` | 物料流 | 必须按路线核对纱线、织物、添加固体、废物和库存变化；无法解释的差异须报告和复核，不得强制归零。 | `mass-balance-identity` |
| `validate_water_energy` | 重要公用工程 | 必须提供与路线匹配的水和能源记录。超出引用或暂定 QA 范围时触发复核，不自动替换；BAT 范围只能与匹配的工序和基准比较。 | `eu-textiles-bat-2022` |
| `validate_emissions` | 废水和直接排放 | 对重要释放必须提供每种污染物负荷、受纳环境、取样或因子方法、治理状态和匹配的流量或运行时间。 | `eu-textiles-bat-2022` |
| `validate_allocation_cutoff` | 共享过程和排除 | 必须遵循分配层级并披露所有截断；拒绝无依据的经济分配、未披露的外包阶段以及隐藏危险或受监管流的截断。 | `eu-pef-method-2021` |
| `validate_reasoned_estimates` | 暂定范围 | 确认每个 `reasoned_estimate` 只用于筛选或 QA，不替代前景数据，并在发布关键使用前明确标记为待替换或复核。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 重型富棉机织物的前景门到门制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`（完成方法学和数据质量复核后） |
| allowed_use | 当技术、地理、期间和处理路线具有代表性时，用于建模棉含量不低于 85%、单位面积质量大于 200 g/m² 的声明坯布或整理机织物 |
| excluded_use | 棉花种植、轧花、纺纱、针织或非织造织物、成衣、使用、洗涤和寿命终结；超出成分或克重阈值的织物；未披露的路线替代 |
| required_metadata | 参考 UUID；CPC 参考；棉含量；g/m²；织物组织；幅宽；水分状态；坯布/整理状态；上浆和湿法路线；废水路线；技术；场址地理；期间；生产组合；分配；截断；上游数据集 |
| required_quality_disclosure | 前景覆盖和完整性；表计和取样覆盖；平衡闭合；路线份额；变异；暂定范围；次级数据质量和代理；未解决 UUID；排除与不确定性 |
| update_trigger | 产品成分或克重阈值、织机或湿法技术、能源或水系统、化学品、废水处理、场址或生产组合、分配基础、来源规则发生变化，或新证据实质改变 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26620` | dataset | 联合国统计司《Central Product Classification Version 3.0》，代码 26620，`https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv`（检索于 2026-08-11） | 产品类别名称、棉含量边界和单位面积质量边界 |
| `eu-textiles-bat-2022` | official_guidance | 欧盟委员会实施决定 (EU) 2022/2508，纺织工业 BAT 结论，CELEX 32022D2508，`https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508`（检索于 2026-08-11） | 纺织工序分解；上浆、织造、前处理、染色、整理、水和能源核算；有来源的用水与热处理能耗范围；排放和化学品清单规则 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件 I《Product Environmental Footprint Method》，CELEX 32021H2279，`https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279`（检索于 2026-08-11） | 功能单位、前景边界、分配层级、截断披露、次级数据层级和数据质量要求 |
| `eu-textile-fibre-regulation-1007-2011` | official_guidance | 欧盟法规 (EU) No 1007/2011，纺织纤维名称及纤维成分标签与标记，现行合并版本链接于 `https://eur-lex.europa.eu/eli/reg/2011/1007/oj/eng`（检索于 2026-08-11） | 纤维成分证据、取样与定量分析要求及公差披露 |
| `mass-balance-identity` | method_factor | 将质量守恒恒等式用于匹配期间的纱线、织物、化学品、水、废物和库存记录 | 物料与水量平衡计算及 QA 闭合 |
