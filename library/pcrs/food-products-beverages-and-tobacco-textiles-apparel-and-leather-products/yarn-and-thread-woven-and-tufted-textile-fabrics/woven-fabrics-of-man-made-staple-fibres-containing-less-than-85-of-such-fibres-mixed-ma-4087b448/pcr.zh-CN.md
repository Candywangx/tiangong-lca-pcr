---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-4087b448
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含人造短纤维低于85%、主要或仅与棉混纺的机织织物

## 1. 范围与适用性

本 PCR 适用于人造短纤维质量分数低于 85%、其余混纺组分主要或仅为棉的机织织物前景生产。边界从接收纱线或明确声明的同类别中间织物开始，延伸至制造厂门口的可销售机织织物。数据生产者应区分合成短纤维与人造纤维素短纤维，并识别混纺中的每一种纤维。

常见路线包括纱线接收与准备、适用时的经纱准备和上浆、织造、检验以及形成可销售织物。退浆、煮练、漂白、丝光、染色、印花、水洗、热定形、涂层和其他机械或化学整理，仅在为所声明产品实际实施时纳入。服务于前景作业的现场公用工程和现场废水处理应纳入；外购公用工程与场外处理保留为所链接的产品流或废物处理数据集。

本 PCR 不包括人造短纤维含量达到或超过 85% 的织物；主要与羊毛或动物细毛混纺的织物；主要由人造长丝纱织成的织物；当绒头、绳绒、毛巾、窄幅、涂层、浸渍、针织、簇绒、非织造或其他特种织物构成所销售产品类别时的这些织物；以纱线为参考产品的生产；以及服装或制成品生产。制造厂门之后的分销、产品使用、使用阶段洗涤和寿命终结处于该中间产品前景边界之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-4087b448` |
| classification_refs | CPC 3.0 `26760`（精确范围背景；映射接受在本 PCR 之外管理） |
| covered_products | 人造短纤维质量分数低于 85%、主要或仅与棉混纺的机织织物；坯布、漂白、染色、印花或其他整理状态在声明销售状态时均可覆盖 |
| excluded_products | 人造短纤维含量不低于 85% 的织物；主要与羊毛或动物细毛混纺的织物；长丝纱、绒头、绳绒、毛巾、窄幅、涂层、浸渍、针织、簇绒、非织造和其他特种织物；纱线；服装及制成品 |
| representative_product | 人造短纤维含量低于 85%、由人造短纤维纱和棉纱制成的可销售机织织物 |
| production_route | 接收纱线准备；适用时经纱准备与上浆；织造；条件性湿法前处理、着色、印花与整理；检验和成批 |
| market_state | 制造厂门口的成品；必须声明具体为坯布、漂白、染色、印花、涂层或其他整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 人造短纤维质量分数低于 85%、主要或仅与棉混纺的机织织物 |
| How much | 1 kg 净织物质量，不含包装 |
| How well | 符合所声明的纤维组成、人造短纤维类型、织物组织、单位面积质量、幅宽、颜色与整理状态、质量等级和含湿基准 |
| How long or cycle | 一个在制造厂门口交付的生产批次；织物是中间产品，不表示使用期限 |
| reference_flow_link | 参考流为 `finishing_inspection_and_packaging` 的合格可销售织物输出，归一化为 1 kg 净织物 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 含人造短纤维重量少于85%的、主要或仅仅与棉绒混纺的人造短纤维机织织物 `139eadcb-ee5a-4a0c-8194-64a890e77433` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造短纤维类型及质量分数；棉质量分数；其他纤维及质量分数；确认人造短纤维低于 85% 且棉为唯一或占主导的混纺组分；织物组织；单位面积质量（g/m2）；可用幅宽；坯布/漂白/染色/印花/整理状态；颜色与功能性整理；质量等级；含湿或调湿基准；生产地域；技术和批次期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单量归一化至声明含湿或调湿基准下 1 kg 合格净织物；参考数量不包括卷芯、包裹物、托盘和其他包装。 |
| `fibre_composition_mass_fraction` | 参考产品和接收纱线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和质量百分数 | 在一致含湿基准下确定纤维分数。报告的纤维分数之和应为 100%；人造短纤维分数应低于 85%，棉应为唯一或占主导的非人造纤维混纺组分。 |
| `area_mass_conversion` | 按长度或面积计量的织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 由长度、可用幅宽和单位面积质量计算质量时，使用 `mass_kg = length_m × usable_width_m × basis_mass_g_per_m2 / 1000`，并与批次称重结果核对。 |
| `moisture_basis_consistency` | 纱线、中间织物、废物和参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录每个纺织物质量的调湿或含湿基准；将质量平衡各项换算到参考产品基准，并披露换算因子和测试方法。 |
| `utility_unit_conversion` | 电力和热能记录 | Energy | kWh | 保留实测公用工程单位和换算因子。采用 1 MWh = 1,000 kWh，并在汇总前分别报告热能与电力。 |
| `water_volume_conversion` | 工艺水和废水 | Volume | m3 | 有条件时使用计量体积。采用 1 m3 = 1,000 L，并保留每个工序特定用水指标的处理织物质量分母。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_yarn_start` | 前景起始状态 | 从接收已识别的人造短纤维纱和棉纱开始，或从接收明确声明的同类别中间织物开始；被排除的纤维形成与纺纱应链接上游数据集。 | `ec-pef-method-2021` |
| `boundary_cpc_26760_scope` | 参考产品身份 | 要求机织物的人造短纤维质量分数低于 85%，且主要或仅与棉混纺；相邻 CPC 机织物子类不属于本 PCR。 | `unsd-cpc-v3-2025` |
| `boundary_foreground_operations` | 前景制造 | 纳入为形成所声明销售状态而实施的全部现场或直接控制的准备、上浆、织造、湿法处理、热/机械整理、检验、返工、废物管理和现场处理作业。 | `eu-jrc-textiles-bref-2023` |
| `boundary_intermediate_product_end` | 中间产品厂门 | 在合格检验和成批后的制造厂门结束。该中间产品前景数据集不包括下游分销、使用和寿命终结。 | `ec-pef-method-2021` |
| `boundary_direct_flow_completeness` | 前景输入与输出 | 量化所有已识别的前景材料、水、能源、产品、废物、废水和直接基本流；已识别但未计量的流应保留为明确数据缺口，不得静默赋零。 | `ec-pef-method-2021`; `eu-jrc-textiles-bref-2023` |
| `boundary_subcontracted_operations` | 外包准备或整理 | 将外包作业表示为所链接的上游服务或中间产品数据集，并披露转移质量、路线和所含处理步骤；不得将其声称为现场直接测量活动。 | `ec-pef-method-2021` |
| `boundary_same_category_input` | 同类别织物投入 | 当接收的同类别坯布或部分整理织物为起始投入时，仅将其记录一次为可见产品投入，要求有截止于该起始状态的上游数据集，不在整理过程中递归重建其生产。 | `ec-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的人造短纤维纱和棉纱，具有供应商身份、纤维分数、纱支、含湿/调湿基准和质量；或者具有全部参考限定信息的同类别坯布或部分整理织物 |
| starting_condition_role | 外购纺织材料生产与直接控制的织物制造前景系统之间的上游截点 |
| product_classification_scope | 人造短纤维质量分数低于 85%、主要或仅与棉混纺的机织织物；具体纤维类型和市场整理状态仍为强制产品限定信息 |
| recursive_input_rule | 外购同类别织物仅记录一次为产品投入，并链接至截止于其声明接收状态的上游数据集；不在前景过程中再次展开其上游制造 |
| upstream_dataset_requirement | 要求每种接收纱线或同类别织物、外购电力和燃料、工艺水、上浆剂、染料和助剂、包装、研究中纳入的进厂运输以及场外废物或废水处理均有代表性上游数据集 |
| disclosure | 声明起始投入形态、所有权/控制边界、纳入和外包步骤、织机及湿法处理技术、纤维组成、市场整理状态、场址/地域、分配基准、返工处理，以及每个排除或未解决的流 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_receipt_and_preparation` | 纱线接收与准备 | `required` | 以纱线为声明起始状态时始终要求；以同类别织物为投入时，将本过程记录为不适用并从接收织物开始 | 前景材料识别、混纺确认、络筒与准备 | 投入生产的已识别纱线 kg |
| `warp_preparation_and_sizing` | 经纱准备与上浆 | `conditional` | 现场准备经轴时纳入整经；施用上浆剂时纳入上浆；否则披露外购经轴或不上浆路线 | 前景经纱准备 | 交付织造的准备经纱 kg |
| `weaving` | 织造 | `required` | 纱线起始数据集始终要求；织物起始的整理数据集在所链接的上游织物数据集中表示织造 | 前景织物形成 | 坯机织物 kg |
| `wet_pretreatment_and_coloration` | 湿法前处理与着色 | `conditional` | 纳入声明产品所需且实际实施的每项退浆、煮练、漂白、丝光、水洗、染色、印花或湿法整理步骤 | 前景湿法处理 | 各独立湿法工序处理的织物 kg |
| `finishing_inspection_and_packaging` | 整理、检验与包装 | `required` | 所有产品均纳入检验和成批；仅在实际实施时纳入热定形、干燥、轧光、起绒、涂层或其他整理 | 最终合格判定与参考产品形成 | 1 kg 合格净织物输出 |
| `onsite_wastewater_treatment` | 现场废水处理 | `conditional` | 前景作业产生的废水由报告设施控制处理时纳入 | 前景产生废水的处理 | 处理废水 m3 以及去除或排放的污染物负荷 |

### 过程：纱线接收与准备（`yarn_receipt_and_preparation`）

#### 输入

##### 产品流

###### 人造短纤维/棉混纺纱（`incoming_blend_yarn`）

按供应商、纤维组成、纱支、批次、质量和调湿基准分别记录每种纱线。仅在确认所得织物符合类别组成规则后汇总。

- 选定流：人造短纤维/棉混纺纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入前景系统的各纱线批次实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净机织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_receipt_preparation`

###### 络筒与准备用电（`preparation_electricity`）

记录络筒、清纱、可归属于准备的加湿和相关搬运设备的计量用电，或记录来自设施电表的有依据分配量。

- 选定流：低压消费组合交流电
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或由设备功率与运行时间计算的分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_yarn_receipt_preparation`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已识别的准备纱线（`prepared_yarn_output`）

记录转移到经纱准备和织造的质量，并保留纱线层面的纤维分数和含湿基准。

- 选定流：已准备的人造短纤维/棉混纺纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至下一过程的准备纱线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_receipt_preparation`

##### 废物流

###### 纸和纸板纱线包装废物（`preparation_paper_packaging_waste`）

按去向分别记录纸板、塑料、筒管、污染纱线和可回收纱线废料；不得从接收纱线中冲减回收材料。

- 选定流：纸和纸板包装废弃物 `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按废物类型和处理去向测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_receipt_preparation`

##### 基本流

### 过程：经纱准备与上浆（`warp_preparation_and_sizing`）

#### 输入

##### 产品流

###### 准备经纱（`warp_yarn_input`）

记录进入整经、卷绕和可选上浆的准备经纱；绕过本过程的纬纱仍作为织造投入。

- 选定流：准备经纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入过程的经纱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`

###### 淀粉上浆剂（`starch_sizing_agent`）

按配方产品质量记录各种浆料聚合物、润滑剂、防腐剂和助剂；当其与后续退浆和废水处理相关时识别有害成分。

- 选定流：淀粉上浆剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按配方和批次记录领用质量减去有凭证的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`
- 来源：`eu-jrc-textiles-bref-2023`

###### 上浆新鲜工艺水（`sizing_process_water`）

本卡仅记录上浆新鲜水。电力、蒸汽和各燃料在适用时应作为单独原子交换记录；干法或外购经纱路线仅可在有路线证据时报告零值。

- 选定流：纺织上浆新鲜工艺水
- 流属性/单位：Volume / m3
- 数量规则：直接计量或批次配方的新鲜水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 准备经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备经轴（`prepared_warp_output`）

记录交付织造的纱线加保留浆料的质量，并保留单独计算的上浆增重。

- 选定流：准备或上浆经轴
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测输出质量；由配方或前后质量差计算保留浆料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 准备经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_warp_sizing`

##### 废物流

###### 上浆废水（`sizing_wastewater`）

记录送往处理的废弃浆液和上浆清洗水。纱线废物、包装及其他固体残余应在所生成数据集中作为单独原子交换记录。

- 选定流：送处理的上浆废水
- 流属性/单位：Volume / m3
- 数量规则：按批次或报告期测量废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备经纱输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warp_sizing`

##### 基本流

### 过程：织造（`weaving`）

#### 输入

##### 产品流

###### 已准备混纺经纱（`weaving_warp_yarn`）

分别记录经纱与纬纱并保留各自纤维组成，从而可计算最终混纺比例，而非仅依赖商品标签。

- 选定流：已准备的人造短纤维/棉混纺经纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向织机发放的纱线质量减去有凭证的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`

###### 织造用压缩空气（`weaving_compressed_air`）

本卡仅记录交付织造的压缩空气。织机电力应作为单独原子交换记录；压缩空气计量共享时采用有依据的分配。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：交付织机的计量压缩空气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯机织物（`greige_fabric_output`）

记录任何湿法或最终整理之前的坯布称重质量以及实测长度、幅宽和单位面积质量。

- 选定流：人造短纤维/棉混纺坯机织物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至整理的验收坯布实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`

##### 废物流

###### 切除布边废物（`weaving_selvedge_waste`）

分别测量回丝、织机废料、切边和不合格织物，并记录各流为内部再用、外部回收或废物处理。

- 选定流：人造短纤维/棉机织物切除布边
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按废物类型和去向称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`

##### 基本流

###### 织造与准备直接粉尘（`weaving_dust_emissions`）

记录任何减排后直接排入空气的物质特定粉尘；送处理的收集粉尘仍为废物流而非基本排放。

- 选定流：排放至未指定空气区室的小于 2.5 微米颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实测出口质量流量对运行时间积分，或有依据且技术具有代表性的排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_weaving`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：湿法前处理与着色（`wet_pretreatment_and_coloration`）

#### 输入

##### 产品流

###### 湿法处理用坯布（`wet_process_greige_fabric_input`）

在每个独立退浆、煮练、漂白、丝光、水洗、染色、印花或湿法整理工序之前，记录织物投入质量和状态。

- 选定流：人造短纤维/棉混纺坯机织物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入各独立湿法工序的调湿织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 该工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`

###### 工艺水（`wet_process_water`）

按单元工序分别记录新鲜水、回用水和循环水。内部回用水不得再次计为新的环境取水。

- 选定流：纺织湿法处理新鲜工艺水
- 流属性/单位：Volume / m3
- 数量规则：供给各独立工序的计量水量或批次配方水量，单独识别内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 各独立湿法工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：官方工序特定用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.150
  - 单位：m3/kg 处理织物
  - 基准：各连续或批次漂白、煮练、退浆、水洗或染色工序的年度平均指示水平；多个工序的总量可高于该区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-textiles-2022`

###### 湿法处理用氢氧化钠（`wet_process_sodium_hydroxide`）

按配方产品分别记录染料、颜料、盐、碱、酸、氧化剂、还原剂、表面活性剂、载体、黏合剂和整理助剂。保留排水和空气排放评估所需的组成及危害信息。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按配方和批次记录领用质量，或用实测密度换算体积，并减去有凭证的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 适用工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

###### 50% 过氧化氢水溶液（`wet_process_hydrogen_peroxide_50`）

仅当声明的漂白或氧化配方使用 50% 过氧化氢水溶液时记录该投入。

- 选定流：过氧化氢溶液，50%（水溶液） `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量适用配方发放的原液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 适用工序处理织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

###### 活性染料配方（`wet_process_reactive_dye`）

当棉或人造纤维素组分采用活性染料时，记录一种已声明的活性染料配方；每种不同配方须形成独立原子数据行。

- 选定流：用于纤维素纺织品着色的活性染料配方
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用颜色配方发放质量减去有记录的退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 使用该配方染色的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法处理用外购蒸汽（`wet_process_steam`）

本卡仅记录交付蒸汽质量。电力、各直接燃料和回收热量应按单元工序作为单独原子交换记录；避免重复计算现场蒸汽生产与交付蒸汽。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量消耗量，或由燃料、蒸汽、设备和运行记录形成的有依据计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 适用工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法处理织物（`wet_processed_fabric_output`）

记录各湿法处理阶段之后的输出质量、整理状态、颜色、相关时保留化学品增重以及含湿基准。

- 选定流：湿法处理的人造短纤维/棉混纺机织物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至下一阶段的调湿输出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿法处理织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing`

##### 废物流

###### 湿法处理废水（`wet_process_wastewater`）

按废水流和去向记录排放体积，并关联配方、pH、温度和相关污染物浓度；在任何分配之前计算污染物负荷。

- 选定流：去向特定的纺织废水废物流
- 流属性/单位：Volume / m3
- 数量规则：计量排放体积；与水投入、产品含水、蒸发、回用及其他实测损失核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 适用湿法工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法处理化学污泥（`wet_process_chemical_sludge`）

分别记录全部工艺残余、收集固体、未用浆料、作为废物的废浴和不合格化学品，包括处理去向。

- 选定流：纺织湿法处理化学污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按废物类型和去向实测或计算数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 适用工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing`

##### 基本流

###### 排放至空气的甲醛（`wet_process_formaldehyde_air`）

仅记录从前景过程直接跨越到空气、水或土壤的排放。送处理的污染物保留在相应废水或废物流中。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测质量负荷，或由浓度 × 标准化气/水流量 × 运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 相关工序处理的织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：整理、检验与包装（`finishing_inspection_and_packaging`）

#### 输入

##### 产品流

###### 最终整理用湿法处理织物（`finishing_wet_fabric_input`）

记录干式整理、热定形、检验、分级和成批之前的投入织物状态与质量。

- 选定流：湿法处理的人造短纤维/棉混纺机织物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入最终整理和检验的调湿质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inspection`

###### 整理用外购热能（`finishing_purchased_heat`）

将干燥、热定形、固化或其他热整理使用的外购热能与电力、蒸汽质量和直接燃料分别记录。

- 选定流：纺织整理用外购热能
- 流属性/单位：能量 / kWh
- 数量规则：可归属于热处理织物的计量交付热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inspection`
- 来源：`eu-jrc-textiles-bref-2023`；`eu-bat-textiles-2022`
- 数量范围：BAT 热处理能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：4.4
  - 单位：kWh/kg 热处理织物
  - 基准：热处理年度平均指示性比能耗
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-bat-textiles-2022`

###### 聚乙烯包装膜（`finishing_polyethylene_film`）

将用于包裹合格织物的聚乙烯膜与纸板芯及其他包装分别记录。

- 选定流：聚乙烯包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向合格织物发放的实测膜质量减去有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inspection`

###### 织物纸板芯（`finishing_paperboard_core`）

将纸板卷芯或纸管作为独立包装投入记录，并从参考数量中排除其质量。

- 选定流：卷装纺织织物用纸板芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向合格织物发放的实测纸板芯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inspection`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考机织物（`reference_fabric_output`）

该输出实现功能单位。其应包含全部必需限定信息，并排除包装质量。

- 选定流：含人造短纤维重量少于85%的、主要或仅仅与棉绒混纺的人造短纤维机织织物 `139eadcb-ee5a-4a0c-8194-64a890e77433`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测合格输出质量归一化后的固定参考量 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_finishing_inspection`

##### 废物流

###### 整理织物边角料（`finishing_offcut_waste`）

按再用、回收、作为共产品出售或处理去向，分别记录织物边角料、样品、未作为参考产品出售的降级产品和最终不合格品。

- 选定流：人造短纤维/棉机织物边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按类别和去向称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净织物输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inspection`

##### 基本流

###### 热整理直接空气排放（`finishing_air_emissions`）

对于热定形、涂层、干燥、烧毛或其他相关热处理，记录减排后的物质特定直接排放，并报告相应气布比或运行基准。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测浓度 × 标准化废气体积，并在代表性运行期间积分；仅在没有测量且证明适用性时使用有依据的排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热整理织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_inspection`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：现场废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用氢氧化钠（`wastewater_treatment_sodium_hydroxide`）

将用于 pH 控制的氢氧化钠作为独立处理化学品交换记录，并声明溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量投加的活性物质量或原液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 kg 参考织物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`

##### 废物流

###### 未处理纺织废水（`untreated_wastewater_input`）

转移湿法处理废物输出中相同的体积和污染物负荷；保留流身份，并避免建立第二个废水产生事件。

- 选定流：送现场处理的纺织湿法处理废水
- 流属性/单位：体积 / m3
- 数量规则：实测进口体积和计算的物质特定负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理量及每 kg 参考织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-textiles-bref-2023`

##### 基本流

#### 输出

##### 产品流

###### 回收工艺水（`recovered_process_water`）

仅在回收水或材料满足声明规格并转移再用时记录为产品；否则保留为废物或基本排放。

- 选定流：回收纺织工艺水
- 流属性/单位：体积 / m3
- 数量规则：达到声明再用规格的实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`

##### 废物流

###### 废水处理污泥（`treatment_sludge`）

记录湿质量、干质量、干固体含量、危险分类和处理去向；除非应用并披露分配规则，否则不计入回收信用。

- 选定流：纺织废水处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测湿质量和干固体分数；将干质量作为计算的伴随值报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 kg 参考织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`

##### 基本流

###### 排入水体的化学需氧量（`treated_effluent_cod`）

记录现场处理后最终排放体积，并将各相关物质作为排向接收环境区室的基本流；送场外处理的水仍为废物流。

- 选定流：化学需氧量 `e57fc631-2c77-457a-aa30-be79e357792b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最终废水流量，加上每种相关污染物的实测浓度 × 排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 kg 参考织物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-textiles-bref-2023`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有多功能前景过程 | 首先通过分别计量批次、生产线、配方、处理流以及可直接归属的公用工程和废物来避免分配；可行时采用过程细分或扩展的多功能结果。 | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_physical` | 不可避免的共享输入与输出 | 若过程细分或系统扩展不可行，则使用反映共享作业的、有依据的因果物理关系分配，例如机器时间、计量能源、处理质量、浴比体积或污染物负荷。 | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_other_relationship` | 不存在可辩护的物理关系 | 仅在记录为何过程细分、系统扩展和物理分配均不可辩护后，才使用包括经济分配在内的其他关系；使用产出出现阶段的价值，并披露敏感性检查。 | `ec-pef-method-2021` |
| `allocation_rework` | 返工与重复处理 | 产品规格要求的计划重复处理归属于产品；由不合格引起的可避免返工归属于受影响生产批次并予披露，不得扩大正常活动分母。 | `eu-jrc-textiles-bref-2023` |
| `allocation_waste_and_recovery` | 纺织废物、回收浆料、回收水、污泥和回收能源 | 废物处理负担随产生系统保留，直至到达接收产品或废物处理边界。分别记录回收输出；仅在下游生命周期模型中应用替代或回收信用，并披露方法和质量关系。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_receipt_preparation` | `yarn_receipt_and_preparation` | 接收纱线、准备用电、准备纱线和准备废物 | 收货、供应商、计量和生产记录 | 供应商；批次；纱线标识；纤维类型和分数；纱支；毛/净质量；含湿基准；验收/拒收质量；电表读数；运行时间；废物类型和去向 | 校准衡器、由进料检验核实的供应商证书、电表或有依据的设备分配以及废物称重单 | kg, %, kWh | 每批次和每计量间隔；按月汇总 | 有代表性的连续 12 个月，或有理由的完整较短生产期 | 服务参考产品的全部收货与准备作业 | 按纱线类型和批次求和；按计量用量或运行时间分配共享电力；归一化至验收准备纱线和最终参考质量 | 校准记录、供应商证书、实验室组成检查、计量记录和废物收据 |
| `cp_warp_sizing` | `warp_preparation_and_sizing` | 经纱、上浆配方、水、公用工程、准备经纱和上浆废物 | 批次配方、领用/退回、计量和生产记录 | 经纱批次；输入/输出质量；浆料产品和数量；配方体积；水；电力；蒸汽/燃料；保留增重；废水体积；固体废物和去向 | 校准衡器、加料记录、配方控制器、公用工程计量和废物测量 | kg, m3, kWh | 每批次或经轴；按月汇总 | 有代表性的连续 12 个月或完整生产期 | 每条纳入的整经、卷绕和上浆生产线 | 扣除有凭证的材料退回；计算保留浆料，并将全部输入/输出归一化至准备经纱和参考织物 | 衡器/计量校准、批次单、化学品清单和质量平衡复核 |
| `cp_weaving` | `weaving` | 经/纬纱、能源、坯布、纺织废物和直接粉尘 | 织机、计量、生产、质量、废物和排放记录 | 织机标识；技术；纱线发放/退回；运行时间；电力；压缩空气；坯布长度/幅宽/单位面积质量/净质量；不合格质量；废物去向；粉尘浓度/流量或因子 | 织机计数器、校准衡器、电力/空气计量、质检、废物称重单和代表性排放测量 | kg, m, m2, g/m2, kWh, kg 污染物 | 每批次和每计量间隔；在代表性运行状态测排放 | 有代表性的连续 12 个月或完整生产期 | 服务参考产品的每台织机和共享准备系统 | 核对纱线投入与坯布输出及废物；按计量用量或织机运行时间分配共享公用工程 | 计量/衡器校准、织机日志、质检报告、废物收据和排放方法记录 |
| `cp_wet_processing` | `wet_pretreatment_and_coloration` | 织物、水、化学品、公用工程、输出、废水、残余和直接排放 | 批次/连续配方、流量计、加料、计量、实验室、废物和排放记录 | 工序/配方；织物输入/输出质量；重复次数和原因；新鲜/回用水；化学品身份/数量/密度；电力；蒸汽/燃料；废水流量/pH/温度/电导率；污染物浓度；废物；废气浓度/流量 | 自动配方控制器、校准流量/能源计量、领用/退回记录、实验室分析和符合要求的排放监测 | kg, m3, kWh, 浓度和 kg 污染物 | 每工序和计量间隔；按风险要求频率开展环境监测；按月和年度汇总 | 有代表性的连续 12 个月或完整生产期 | 每条纳入的湿法生产线及相关排放点 | 保留独立工序和重复处理；由浓度与流量计算质量负荷；内部回用水不计为新取水 | 校准、样品监管链、实验室 QA/QC、配方记录和排水/排放报告 |
| `cp_finishing_inspection` | `finishing_inspection_and_packaging` | 整理公用工程、包装、合格织物、不合格品和空气排放 | 计量、生产、包装、质检、废物和排放记录 | 整理路线；设备；输入/输出质量；长度；幅宽；单位面积质量；含湿；温度；运行时间；能源；包装材料/质量；质量等级；不合格原因/质量；排放浓度/流量 | 校准衡器和计量、生产线控制器、实验室/质检、包装领用记录、废物收据和代表性排放测量 | kg, m, g/m2, kWh, kg 污染物 | 每批次和计量间隔；按月汇总 | 有代表性的连续 12 个月或完整生产期 | 每条纳入的整理、检验和包装线 | 区分净织物与包装；仅归一化至合格输出；按计量或运行时间分配共享公用工程 | 校准、质量规格和结果、批次放行、包装记录和排放方法记录 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 未处理废水、处理投入、回收输出、污泥和最终排水 | 流量计、加料、计量、实验室、污泥、回收和排水记录 | 进/出口流量；pH；温度；电导率；相关污染物浓度；化学品投加；电力；污泥湿/干质量；回收量/规格；排放去向 | 校准流量/能源计量、加料日志、认可或受控实验室分析、污泥称重单和排放监测 | m3, kg, kWh, 浓度 | 连续或批次流量；按风险频率监测污染物；按月和年度汇总 | 有代表性的连续 12 个月或完整生产期 | 接收前景废水的完整现场处理系统 | 计算进/出口污染物负荷；核对水平衡；按因果体积和污染物负荷分配共享处理 | 校准、空白/平行样、样品监管链、实验室 QA/QC、处置收据和许可证报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | `normalized_quantity = attributable_period_quantity / conforming_net_fabric_mass`；使用一致含湿基准，并从分母排除包装 | 可归属期间数量；合格净织物质量；含湿换算 | 每 kg 参考织物数量 | `ec-pef-method-2021` |
| `calc_fibre_composition` | 参考产品 | 含湿基准对齐后，`fibre_share_i = sum(yarn_mass_j × certified_share_i,j) / sum(all_fibre_mass)`；全部分数之和为 100% | 纱线质量；供应商组成；实验室验证；含湿基准 | 各纤维质量分数和类别符合性决定 |  |
| `calc_area_mass` | 织物质量交叉检查 | `mass_kg = length_m × usable_width_m × basis_mass_g_per_m2 / 1000`；与校准衡器质量比较并调查实质差异 | 长度；可用幅宽；g/m2；衡器质量 | 计算质量和核对差异 |  |
| `calc_textile_mass_balance` | 各纺织过程和报告期 | `textile_input = conforming_output + transferred_intermediate + textile_waste + inventory_change + documented_mass_change`；量化并解释残差 | 调湿输入/输出质量；废物；库存变化；保留浆料/整理剂；含湿换算 | 各过程和前景系统的质量平衡残差 | `eu-jrc-textiles-bref-2023` |
| `calc_shared_utility_allocation` | 共享电力、蒸汽、燃料、水和压缩空气 | 优先分表计量；否则按设备运行时间 × 额定需求 × 实测负载因子或其他有依据的因果驱动分配，并保留设施总量核对 | 总表；分表；设备功率；运行时间；负载因子；产量 | 各过程和产品的可归属公用工程 | `ec-pef-method-2021` |
| `calc_water_balance` | 湿法处理和废水处理 | `fresh_withdrawal + transferred_water = effluent + evaporation + retained_water + recovered_export + inventory_change`；跟踪内部回用但不计为新取水 | 流量计和配方水量；产品含湿；排水与回收体积 | 水平衡残差和新鲜水强度 | `eu-jrc-textiles-bref-2023` |
| `calc_pollutant_load` | 废水和空气排放 | `load_kg = concentration × standardized_flow_or_volume × operating_time × unit_conversion`；使用时间匹配的采样和流量，并一致报告低于检出限的值 | 浓度；流量/体积；时长；检出限；标准状态 | 每 kg 参考织物的物质特定排放 kg | `eu-jrc-textiles-bref-2023` |
| `calc_treatment_removal` | 现场废水处理 | `removal = inlet_load - outlet_load - recovered_load - retained_inventory_change`；出现负去除量或超过投入的去除量时必须调查 | 进/出口污染物负荷；回收输出；库存变化 | 去除负荷、最终排放和核对残差 | `eu-jrc-textiles-bref-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | 参考产品和纺织投入 | 保留供应商/批次追溯、纤维类型和分数、纱支、织物组织、g/m2、幅宽、整理状态、质量等级和含湿基准；归一化前验证人造短纤维低于 85% 且棉占主导的范围。 | 供应商声明、材料清单、实验室纤维分析、批次卡和质检放行 |
| `dqr_measurement` | 质量、水、能源、化学品和排放 | 使用校准或核实的测量系统；记录单位、换算因子、检出限、密度换算、计量覆盖和估算数据方法。 | 校准证书、计量图、实验室 QA/QC 和计算记录 |
| `dqr_temporal` | 前景报告期 | 优先使用覆盖产品与季节波动的有代表性连续 12 个月；仅在披露日期、覆盖和代表性限制时允许较短的完整生产期。 | 生产日历、计量间隔覆盖和代表性声明 |
| `dqr_site_and_technology` | 前景过程覆盖 | 纳入所有实质服务于声明产品的场址、生产线、织机技术、湿法路线和受控分包商，或记录按产量加权的抽样及其排除项。 | 场址/生产线清单、生产分数、抽样计划和分包记录 |
| `dqr_completeness` | 前景清单 | 将纺织质量、水和能源总量与场址或生产线控制总量核对，并保持所有已识别直接排放和废物可见；未解决的流保留为明确数据缺口。 | 签署的质量/水/能源平衡、控制总量、废物登记和缺口日志 |
| `dqr_allocation` | 共享和多功能作业 | 保留所选层级步骤、因果驱动、总量、分配因子和敏感性结果；分配后的过程总量应等于未分配控制总量。 | 计量总量、驱动记录、分配工作表和敏感性结果 |
| `dqr_upstream_links` | 外购纱线、公用工程、化学品、运输和处理 | 使用在地域、技术和时间上具有代表性的链接数据集；记录数据集身份、在本 PCR 之外管理的版本、参考数量和任何代理局限。 | 与 `ec-pef-method-2021` 一致的数据集引用和数据质量评估 |
| `dqr_blended_textile_uncertainty` | 混纺织物清单 | 不得从通用棉/聚酯混纺文献推断缺失的前景数量；应采集路线特定记录，并披露组成、过程、时间和技术不确定性。 | 前景记录、不确定性声明和 `valtere-et-al-2024` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | 参考产品 | 确认参考流 UUID 和 Mass 属性、全部必需限定信息、人造短纤维低于 85%、棉为唯一或占主导的混纺组分，并排除范围外织物类型。 |  |
| `validate_reference_quantity` | 归一化前景数据集 | 确认恰好 1 kg 合格净织物输出、参考数量不含包装质量，并在纺织质量平衡中使用一个声明的含湿/调湿基准。 | `ec-pef-method-2021` |
| `validate_process_coverage` | 过程图和清单 | 确认每个必需过程均存在、每个适用的条件过程均纳入、重复处理和外包作业均披露，且排除作业有明确理由。 | `eu-jrc-textiles-bref-2023` |
| `validate_mass_water_energy_balances` | 前景记录 | 确认纺织质量、水和能源平衡在生产者记录的测量不确定度内与控制总量一致；调查并披露每个超出容差的残差。 | `eu-jrc-textiles-bref-2023` |
| `validate_flow_destinations` | 产品、废物和基本输出 | 确认每个输出恰有一个建模角色和去向；区分直接基本排放、送处理废物、内部再用材料和可销售共产品，不得重复计算。 | `ec-pef-method-2021` |
| `validate_allocation` | 共享或多功能过程 | 确认遵循分配层级、分配总量等于未分配总量、优先采用因果物理驱动，并且任何其他关系均具有理由和敏感性披露。 | `ec-pef-method-2021` |
| `validate_monitoring_and_loads` | 湿法处理、热整理和废水处理 | 确认水、能源、材料、废物、废水和相关排放监测覆盖声明期间，并且污染物负荷使用时间匹配的浓度、流量、时长和单位。 | `eu-jrc-textiles-bref-2023` |
| `validate_source_and_range_status` | 证据和范围 | 确认每个保留的定量范围均可追溯到列出的外部来源或前景数据集；拒绝 AI 编写或其他无依据的数值范围。 | `valtere-et-al-2024` |
| `validate_upstream_and_downstream_boundary` | 数据集画像 | 确认外购投入和场外处理具有链接的上游数据集，且分销、使用和寿命终结未被静默纳入中间产品前景结果。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有过程级记录和归一化可销售机织物输出的前景织物制造数据包 |
| downstream_use | `secondary_dataset`；可汇总或链接为服装、制成纺织品和其他下游产品系统的 `background_dataset` |
| allowed_use | 构建场址和路线特定的单元过程；在链接代表性上游数据集时形成从摇篮到厂门的织物结果；构建与声明织物限定信息和边界一致的 lifecyclemodel 投影 |
| excluded_use | 直接表示组成或结构范围外的织物；在没有额外下游 PCR 规则和数据时表示服装、消费者使用、洗涤、耐久性、回收或寿命终结 |
| required_metadata | PCR id；产品流 UUID；纤维类型和质量分数；纱线与织物组织规格；g/m2；可用幅宽；整理和颜色；质量等级；含湿基准；场址/地域；技术路线；纳入和外包过程；报告期；分配；来源 id；数据缺口 |
| required_quality_disclosure | 测量和计量覆盖；质量/水/能源平衡残差；时间/场址/技术代表性；抽样；分配敏感性；排放和废水监测；上游数据集质量；有来源的范围和未解决身份 |
| update_trigger | 纤维组成或产品范围、纱线或织机技术、上浆/染色/印花/整理配方、市场整理状态、场址或能源/供水、处理路线、分配驱动、排放控制、参考 UUID/属性/单位、官方方法或证据范围发生变化，或实质数据质量缺口被关闭 |

## 11. 数据源

| 来源编号 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | 标准（`standard`） | 联合国统计司，*Central Product Classification (CPC) Version 3.0, Explanatory Notes*，子类 26760，2025，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-12） | CPC 26760 官方产品身份和相邻子类排除项 |
| `eu-jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，*Best Available Techniques (BAT) Reference Document for the Textiles Industry*，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索日期 2026-08-12） | 机织物准备、前处理、染色、印花、整理、输入/输出清单、监测、水与能源管理、空气排放、废水及处理要求 |
| `eu-bat-textiles-2022` | 标准（`standard`） | 欧盟委员会实施决定 (EU) 2022/2508（纺织工业 BAT 结论），2022，https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng（检索日期 2026-08-12） | 年度过程级监测；工序特定用水范围；0.5–4.4 MWh/t 热处理能耗范围；化学品、废物、废水和排放控制 |
| `iso-14040-2006` | 标准（`standard`） | ISO 14040:2006，*Environmental management — Life cycle assessment — Principles and framework*，https://www.iso.org/standard/37456.html（检索日期 2026-08-12） | LCA 目标与范围、清单、解释、报告和关键评审框架 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，https://www.iso.org/standard/38498.html（检索日期 2026-08-12） | LCI 要求、系统边界、分配层级、数据质量、报告和评审 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279，Annex I，Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 功能单位维度；中间产品边界；前景/上游链接；流完整性；分配层级；企业特定数据与数据质量要求 |
| `kalliala-nousiainen-1999` | 文献（`literature`） | E. M. Kalliala 和 P. Nousiainen，“Environmental profile of cotton and polyester-cotton fabrics”，*AUTEX Research Journal* 1(1)，8–20，1999，https://doi.org/10.1515/aut-1999-010102 | 同行评审全文证据：棉/聚酯棉织物路线需要保留组成、加工和服务假设 |
| `valtere-et-al-2024` | 文献（`literature`） | M. Valtere、T. Bezrucko、M. Poberznik、I. Vamza 和 D. Blumberga，“Uncertainty of Life Cycle Assessment Studies for Blended Textiles”，*Environmental and Climate Technologies* 28(1)，794–811，2024，https://doi.org/10.2478/rtuect-2024-0061 | 开放获取的同行评审全文证据：通用棉/聚酯混纺清单具有显著不确定性，不应替代路线特定前景记录 |
